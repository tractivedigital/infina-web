/* eslint-disable */
// @ts-nocheck
/**
 * Interaction script for the ESOP page, ported from the design prototype in source-html/new.
 * It runs inside the sandbox in ../sandbox.ts: every global it uses (document, window, timers, observers, THREE) is a
 * parameter, so listeners are removed and frames stop when the visitor leaves the page.
 * Forms call __submitLead, which posts to /api/leads.
 */
export default function run(
  THREE,
  window,
  document,
  requestAnimationFrame,
  cancelAnimationFrame,
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  addEventListener,
  removeEventListener,
  IntersectionObserver,
  ResizeObserver,
  __submitLead,
) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s) => document.querySelector(s),
    $$ = (s) => Array.from(document.querySelectorAll(s));
  const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
  const shortInr = (n) => (n >= 1e7 ? '₹' + (n / 1e7).toFixed(2) + ' Cr' : '₹' + (n / 1e5).toFixed(1) + ' L');
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const hasGL =
    !!window.THREE &&
    (() => {
      try {
        const c = document.createElement('canvas');
        return !!(c.getContext('webgl') || c.getContext('experimental-webgl'));
      } catch (e) {
        return false;
      }
    })();
  if (!hasGL) document.documentElement.classList.add('no-webgl');
  requestAnimationFrame(() => setTimeout(() => document.body.classList.add('is-loaded'), 120));

  function tween(el, to, fmt, dur = 650) {
    if (reduce) {
      el.textContent = fmt(to);
      el._v = to;
      return;
    }
    const from = el._v ?? to,
      t0 = performance.now();
    cancelAnimationFrame(el._raf);
    const step = (t) => {
      const k = clamp((t - t0) / dur, 0, 1),
        e = 1 - Math.pow(1 - k, 3),
        v = from + (to - from) * e;
      el.textContent = fmt(v);
      el._v = v;
      if (k < 1) el._raf = requestAnimationFrame(step);
    };
    el._raf = requestAnimationFrame(step);
  }
  const setFill = (r) => r.style.setProperty('--fill', ((r.value - r.min) / (r.max - r.min)) * 100 + '%');

  // ---------- Nav, progress, dock ----------
  const nav = $('#nav'),
    prog = $('#progress'),
    dock = $('#dock'),
    dockLinks = $$('#dock a');
  const dockTargets = dockLinks.map((a) => $(a.getAttribute('href')));
  function chrome() {
    nav.classList.toggle('is-solid', scrollY > 40);
    prog.style.setProperty('--sp', clamp(scrollY / (document.documentElement.scrollHeight - innerHeight), 0, 1));
    const foot = $('.footer').getBoundingClientRect().top;
    dock.classList.toggle('show', scrollY > innerHeight * 0.7 && foot > innerHeight * 0.9);
    let cur = -1;
    dockTargets.forEach((t, i) => {
      if (t.getBoundingClientRect().top < innerHeight * 0.45) cur = i;
    });
    dockLinks.forEach((a, i) => a.setAttribute('aria-current', i === cur));
    const act = dock.querySelector('[aria-current="true"]');
    if (act && dock.classList.contains('show') && dock.scrollWidth > dock.clientWidth)
      dock.scrollTo({ left: act.offsetLeft - dock.clientWidth / 2 + act.offsetWidth / 2 });
  }
  addEventListener('scroll', chrome, { passive: true });
  chrome();

  // ---------- Reveals ----------
  const mio = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          mio.unobserve(e.target);
        }
      }),
    { threshold: 0.3 },
  );
  $$('main h2').forEach((h) => {
    if (h.closest('.lead')) return;
    h.classList.add('mk');
    h.innerHTML = '<span class="mk-in">' + h.innerHTML + '</span>';
    mio.observe(h);
  });
  $$('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 0.08 + 's';
    mio.observe(el);
  });
  $$('#why-grid .tilt').forEach((el, i) => {
    el.style.transitionDelay = i * 0.09 + 's';
    mio.observe(el);
  });
  mio.observe($('#fees'));

  // ---------- Cursor, magnetic, tilt ----------
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (!reduce && fine) {
    const cur = $('#cursor');
    let cx = -100,
      cy = -100,
      tx = -100,
      ty = -100;
    addEventListener(
      'pointermove',
      (e) => {
        tx = e.clientX;
        ty = e.clientY;
        cur.classList.add('on');
        cur.classList.toggle(
          'hot',
          !!e.target.closest('a,button,input,select,summary,label,.tilt,.tw-stage,.cmp-col,.fee,.factors li'),
        );
      },
      { passive: true },
    );
    document.documentElement.addEventListener('pointerleave', () => cur.classList.remove('on'));
    (function cl() {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      cur.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
      requestAnimationFrame(cl);
    })();
    $$('.btn-red').forEach((b) => {
      if (b.classList.contains('journey-cta')) return;
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform =
          'translate(' +
          (e.clientX - r.left - r.width / 2) * 0.18 +
          'px,' +
          (e.clientY - r.top - r.height / 2) * 0.3 +
          'px)';
      });
      b.addEventListener('pointerleave', () => (b.style.transform = ''));
    });
    $$('.tilt').forEach((t) => {
      const inn = t.firstElementChild;
      t.addEventListener('pointermove', (e) => {
        const r = t.getBoundingClientRect(),
          x = (e.clientX - r.left) / r.width - 0.5,
          y = (e.clientY - r.top) / r.height - 0.5;
        inn.style.transform = 'rotateY(' + x * 12 + 'deg) rotateX(' + -y * 12 + 'deg) translateZ(10px)';
        inn.style.setProperty('--sx', x * 60 + '%');
        inn.style.setProperty('--sy', y * 60 + '%');
      });
      t.addEventListener('pointerleave', () => (inn.style.transform = ''));
    });
    const ex = $('#example');
    ex.addEventListener('pointermove', (e) => {
      const r = ex.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width - 0.5,
        y = (e.clientY - r.top) / r.height - 0.5;
      ex.style.transform = 'rotateY(' + x * 10 + 'deg) rotateX(' + -y * 10 + 'deg)';
    });
    ex.addEventListener('pointerleave', () => (ex.style.transform = ''));
  }

  // ---------- Lead form ----------
  $('#f-mob').addEventListener('input', (e) => (e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10)));
  $('#apply-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = $('#lead-msg');
    msg.classList.add('err');
    if (!$('#f-name').value.trim()) {
      msg.textContent = 'Enter your name.';
      $('#f-name').focus();
      return;
    }
    if ($('#f-mob').value.length !== 10) {
      msg.textContent = 'Enter a 10-digit mobile number.';
      $('#f-mob').focus();
      return;
    }
    if (!$('#f-ok').checked) {
      msg.textContent = 'Tick the box to let Infina contact you about this enquiry.';
      return;
    }
    msg.classList.remove('err');
    msg.textContent = 'Sending…';
    const sel = $('#apply-form select'),
      pressed = $('#apply-form .seg [aria-pressed="true"]');
    let interest = '';
    if (sel) {
      const l = sel.closest('label'),
        t = l && l.querySelector('span');
      interest = (t ? t.textContent.trim() + ': ' : '') + sel.value;
    } else if (pressed) {
      const l = $('#borrow-lbl');
      interest = (l ? l.textContent.trim() + ': ' : '') + pressed.textContent.trim();
    }
    __submitLead({
      name: $('#f-name').value.trim(),
      mobile: $('#f-mob').value,
      interest,
      website: ($('#apply-form [name="website"]') || {}).value || '',
    }).then((r) => {
      if (r.ok) {
        msg.textContent = 'Thank you. We will get back to you soon.';
      } else {
        msg.classList.add('err');
        msg.textContent = r.error;
      }
    });
  });

  // ---------- ESOP calculator ----------
  const SLABS = [
    [30, 8.5],
    [90, 9],
    [180, 9.5],
    [365, 10],
  ];
  const rateFor = (d) => SLABS.find((s) => d <= s[0])[1];
  function esop(cmp, ep, q, tax, days) {
    const A = ep * q,
      perq = Math.max(0, (cmp - ep) * q),
      B = (perq * tax) / 100,
      C = A + B,
      MV = cmp * q;
    const D = Math.min(MV * 0.5, C),
      E = C - D,
      rate = rateFor(days);
    const interest = (((D * rate) / 100) * days) / 365,
      fees = D * 0.0025 * 1.18 + 999 * 1.18;
    return { A, B, C, MV, D, E, rate, interest, fees, cost: interest + fees, days, perq, cmp, ep };
  }
  const eCMP = $('#e-cmp'),
    eEP = $('#e-ep'),
    eQ = $('#e-q'),
    eTax = $('#e-tax'),
    eTen = $('#e-ten');
  const nice = (v) => (v < 100 ? Math.round(v) : v < 1000 ? Math.round(v / 5) * 5 : Math.round(v / 10) * 10);
  const niceQ = (v) =>
    v < 1000 ? Math.round(v / 10) * 10 : v < 10000 ? Math.round(v / 50) * 50 : Math.round(v / 500) * 500;
  const cmpV = () => nice(10 * Math.pow(1000, eCMP.value / 1000));
  const epV = () => nice(Math.pow(10000, eEP.value / 1000));
  const qV = () => niceQ(100 * Math.pow(1000, eQ.value / 1000));
  const num = (n) => Math.round(n).toLocaleString('en-IN');
  const slabRows = $$('#slab-rows tr');
  let calcRes = esop(200, 100, 1000, 30, 180);
  function updCalc() {
    [eCMP, eEP, eQ, eTax, eTen].forEach(setFill);
    const cmp = cmpV(),
      ep = epV(),
      q = qV(),
      tax = +eTax.value,
      days = +eTen.value,
      r = esop(cmp, ep, q, tax, days);
    $('#e-cmp-o').textContent = inr(cmp);
    $('#e-ep-o').textContent = inr(ep);
    $('#e-q-o').textContent = num(q);
    $('#e-tax-o').textContent = tax + '%';
    $('#e-ten-o').textContent = days + (days === 1 ? ' day' : ' days') + ' at ' + r.rate.toFixed(2) + '% p.a.';
    tween($('#o-a'), r.A, inr);
    tween($('#o-b'), r.B, inr);
    tween($('#r-d'), r.D, inr);
    tween($('#r-c'), r.C, inr);
    tween($('#r-e'), r.E, inr);
    tween($('#r-cost'), r.cost, inr);
    $('#min-warn').textContent =
      ep >= cmp
        ? 'The exercise price is at or above the market price, so there’s no perquisite tax.'
        : r.D < 1e5
          ? 'Loans start from ₹1 lakh.'
          : '';
    slabRows.forEach((tr, i) => tr.classList.toggle('cur', SLABS[i][1] === r.rate));
    calcRes = r;
    if (window.__esop3d) window.__esop3d.update(r);
  }
  [eCMP, eEP, eQ, eTax, eTen].forEach((x) => x.addEventListener('input', updCalc));
  updCalc();
  // worked example uses the same formula
  const ex = esop(200, 100, 1000, 30, 180);
  $('#ex-c').textContent = inr(ex.C);
  $('#ex-e').textContent = inr(ex.E);
  $('#ex-cost').textContent = inr(ex.cost);
  $('#try-ex').addEventListener('click', () => {
    eCMP.value = 434;
    eEP.value = 500;
    eQ.value = 333;
    eTax.value = 30;
    eTen.value = 180;
    updCalc();
    $('#calculator').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  });

  // ---------- What decides: link factors to example rows ----------
  const exRows = $$('#example [data-k]');
  $$('#factors li').forEach((li) => {
    li.addEventListener('pointerenter', () => {
      exRows.forEach((r) => r.classList.toggle('hl', r.dataset.k === li.dataset.k));
      li.classList.add('hl');
    });
    li.addEventListener('pointerleave', () => {
      exRows.forEach((r) => r.classList.remove('hl'));
      li.classList.remove('hl');
    });
  });
  const exTotal = $('#ex-total');
  exTotal._v = 0;
  new IntersectionObserver(
    (es, ob) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          tween(exTotal, ex.D, inr, 1600);
          ob.disconnect();
        }
      }),
    { threshold: 0.6 },
  ).observe(exTotal);

  // ---------- Readiness gauge ----------
  const critBoxes = $$('#crit-list input'),
    gfg = $('#gauge-fg'),
    CIRC = 2 * Math.PI * 34;
  function gauge() {
    const c = critBoxes.filter((x) => x.checked).length,
      t = critBoxes.length;
    gfg.setAttribute('stroke-dasharray', ((c / t) * CIRC).toFixed(1) + ' ' + CIRC.toFixed(1));
    $('#gauge-n').textContent = c + ' of ' + t + ' criteria';
    $('#gauge-msg').textContent =
      c === 0
        ? 'Tick the ones you meet.'
        : c === t
          ? 'You meet every listed criterion. Check your eligibility to start.'
          : 'Talk to our team about the criteria you don’t meet yet.';
  }
  critBoxes.forEach((x) => x.addEventListener('change', gauge));
  gauge();

  // ---------- Who we fund (pinned) ----------
  const story = $('#fund'),
    chapters = $$('.chapter'),
    railBtns = $$('#steps-rail button');
  let storyP = 0,
    enterP = 0,
    curCh = 0,
    stageOn = true;
  railBtns.forEach((b, i) =>
    b.addEventListener('click', () =>
      scrollTo({
        top: story.offsetTop + ((story.offsetHeight - innerHeight) * (i + 0.5)) / 3,
        behavior: reduce ? 'auto' : 'smooth',
      }),
    ),
  );
  function storyScroll() {
    const vh = innerHeight,
      r = story.getBoundingClientRect();
    enterP = clamp(1 - r.top / vh, 0, 1);
    storyP = clamp(-r.top / (story.offsetHeight - vh), 0, 1);
    const ch = Math.min(2, Math.floor(storyP * 3));
    if (ch !== curCh) {
      chapters[curCh].classList.remove('is-active');
      chapters[ch].classList.add('is-active');
      curCh = ch;
    }
    railBtns.forEach((b, i) => {
      b.setAttribute('aria-current', i === ch);
      b.classList.toggle('done', i < ch);
    });
    const heroVis = clamp(1 - scrollY / (vh * 0.9), 0, 1),
      storyVis = clamp(Math.min(enterP * 1.4, r.bottom / (vh * 0.7)), 0, 1);
    const op = Math.max(heroVis, storyVis);
    stageOn = op > 0.001;
    const st = $('#stage');
    if (st) st.style.opacity = op;
  }
  addEventListener('scroll', storyScroll, { passive: true });
  storyScroll();

  // ---------- Journey ----------
  const journey = $('#process'),
    jsteps = $$('.jstep'),
    jl = $$('#jlabels li'),
    tfloor = $('#tfloor'),
    jcta = $('#journey-cta');
  let jT = 0,
    jC = 0;
  function jScroll() {
    const r = journey.getBoundingClientRect();
    jT = clamp(-r.top / (journey.offsetHeight - innerHeight), 0, 1);
  }
  function renderJ() {
    const D = innerWidth < 700 ? 760 : 1000,
      travel = clamp((jC - 0.05) / 0.88, 0, 1) * 3 * D;
    const off = innerWidth < 700 ? 0 : Math.min(280, innerWidth * 0.18);
    jsteps.forEach((st, i) => {
      const z = -i * D + travel,
        side = (i % 2 ? 1 : -1) * off,
        k = clamp(-z / D, -1.2, 1.6);
      const op = z > 0 ? clamp(1 - z / 320, 0, 1) : clamp(1 + z / (D * 1.7), 0, 1);
      const bl = reduce ? 0 : z > 0 ? Math.min(10, z / 40) : Math.min(5, (-z / D) * 3);
      st.style.transform =
        'translate3d(' + side * k + 'px,0,' + z + 'px) rotateY(' + -k * (i % 2 ? 1 : -1) * 14 + 'deg)';
      st.style.opacity = op;
      st.style.filter = bl > 0.2 ? 'blur(' + bl.toFixed(1) + 'px)' : 'none';
      st.style.visibility = op <= 0.01 ? 'hidden' : 'visible';
    });
    tfloor.style.setProperty('--fy', travel * 0.45 + 'px');
    const a = Math.round(travel / D);
    jl.forEach((l, i) => l.classList.toggle('on', i <= a));
    jcta.classList.toggle('show', a >= 3);
  }

  // ---------- Fees focus ----------
  const fees = $('#fees'),
    fcols = $$('.fcol'),
    sbtns = $$('#stagebar button');
  sbtns.forEach((b, i) =>
    b.addEventListener('click', () => {
      const on = b.getAttribute('aria-pressed') !== 'true';
      sbtns.forEach((x) => x.setAttribute('aria-pressed', on && x === b));
      fees.classList.toggle('focus', on);
      fcols.forEach((c, j) => c.classList.toggle('on', on && j === i));
    }),
  );
  fcols.forEach((c, i) => (c.style.transitionDelay = i * 0.12 + 's'));

  // ---------- Compare ----------
  const cmp = $('#cmp'),
    cols = $$('.cmp-col');
  let cmpT = 0,
    cmpC = 0;
  function cmpScroll() {
    const r = cmp.getBoundingClientRect();
    cmpT = reduce ? 1 : clamp((innerHeight - r.top) / (innerHeight * 0.75), 0, 1);
  }
  function renderCmp() {
    if (innerWidth <= 980) {
      cols.forEach((c) => {
        c.style.transform = '';
        c.style.opacity = '';
      });
      return;
    }
    cols.forEach((c, i) => {
      const e = easeOut(clamp(cmpC * 1.4 - i * 0.15, 0, 1)),
        side = i - 1,
        lift = i === 0 ? 30 * e : 0;
      c.style.transform =
        'translate3d(' +
        (1 - e) * side * 120 +
        'px,' +
        (1 - e) * 80 +
        'px,' +
        ((1 - e) * -320 + lift) +
        'px) rotateY(' +
        (1 - e) * side * -38 +
        'deg) rotateX(' +
        (1 - e) * 18 +
        'deg)';
      c.style.opacity = 0.2 + 0.8 * e;
    });
  }
  $$('#cmp [data-row]').forEach((el) => {
    el.addEventListener('pointerenter', () =>
      $$('#cmp [data-row="' + el.dataset.row + '"]').forEach((x) => x.classList.add('hl')),
    );
    el.addEventListener('pointerleave', () => $$('#cmp .hl').forEach((x) => x.classList.remove('hl')));
  });

  // ---------- FAQ ----------
  const groups = $$('.faq-group'),
    q = $('#faq-q');
  groups.forEach((g) => {
    $('[data-c="' + g.dataset.g + '"]').textContent = g.querySelectorAll('details').length;
  });
  $$('.faq details').forEach((d) => {
    const sm = d.querySelector('summary');
    d._q = sm.firstChild.textContent;
    d._a = d.querySelector('.ans').textContent;
    sm.addEventListener('click', (e) => {
      if (reduce) return;
      e.preventDefault();
      const ez = 'cubic-bezier(.2,.8,.1,1)',
        start = d.offsetHeight;
      if (d.open) {
        const an = d.animate([{ height: start + 'px' }, { height: sm.offsetHeight + 1 + 'px' }], {
          duration: 380,
          easing: ez,
        });
        an.onfinish = () => (d.open = false);
      } else {
        d.open = true;
        const endH = d.offsetHeight;
        d.animate([{ height: start + 'px' }, { height: endH + 'px' }], { duration: 480, easing: ez });
      }
    });
  });
  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  q.addEventListener('input', () => {
    const term = q.value.trim().toLowerCase();
    let any = false;
    groups.forEach((g) => {
      let vis = 0;
      g.querySelectorAll('details').forEach((d) => {
        const hit = !term || (d._q + ' ' + d._a).toLowerCase().includes(term);
        d.hidden = !hit;
        if (hit) vis++;
        const sm = d.querySelector('summary');
        sm.firstChild.nodeValue = d._q;
        const old = sm.querySelector('.q');
        if (old) old.remove();
        if (term && hit && d._q.toLowerCase().includes(term)) {
          sm.firstChild.nodeValue = '';
          const sp = document.createElement('span');
          sp.className = 'q';
          sp.innerHTML = d._q.replace(new RegExp('(' + esc(term) + ')', 'ig'), '<mark>$1</mark>');
          sm.insertBefore(sp, sm.firstChild.nextSibling);
        }
      });
      g.hidden = vis === 0;
      if (vis) any = true;
    });
    $('#faq-empty').classList.toggle('show', !any);
  });

  // ---------- Gyro ----------
  const gyro = $('#gyro'),
    finalSec = $('#apply');
  let gx = 0,
    gy = 0,
    gtx = 0,
    gty = 0;
  finalSec.addEventListener('pointermove', (e) => {
    const r = finalSec.getBoundingClientRect();
    gtx = ((e.clientX - r.left) / r.width - 0.5) * 30;
    gty = -((e.clientY - r.top) / r.height - 0.5) * 24;
  });
  finalSec.addEventListener('pointerleave', () => {
    gtx = 0;
    gty = 0;
  });

  // ---------- Shared loop ----------
  function scrollAll() {
    cmpScroll();
    jScroll();
  }
  addEventListener('scroll', scrollAll, { passive: true });
  scrollAll();
  cmpC = cmpT;
  jC = jT;
  const inView = (el) => {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < innerHeight;
  };
  (function loop() {
    if (inView(cmp)) {
      cmpC += (cmpT - cmpC) * (reduce ? 1 : 0.08);
      renderCmp();
    }
    if (inView(journey)) {
      jC += (jT - jC) * (reduce ? 1 : 0.1);
      renderJ();
    }
    if (inView(finalSec)) {
      gx += (gtx - gx) * 0.05;
      gy += (gty - gy) * 0.05;
      gyro.style.setProperty('--gx', gx + 'deg');
      gyro.style.setProperty('--gy', gy + 'deg');
    }
    requestAnimationFrame(loop);
  })();
  renderCmp();
  renderJ();
  addEventListener('resize', () => {
    renderCmp();
    renderJ();
  });

  if (!hasGL) {
    const s = $('#stage');
    if (s) s.remove();
    return;
  }

  // ---------- 3D calculator: what you owe and how it's paid ----------
  (function esop3d() {
    const host = $('#esop-stage'),
      cv = $('#esop3d');
    const r2 = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
    r2.setPixelRatio(Math.min(devicePixelRatio, 2));
    const sc = new THREE.Scene(),
      cam = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    sc.add(new THREE.HemisphereLight(0xffffff, 0xb9c6e6, 0.95));
    const d1 = new THREE.DirectionalLight(0xffffff, 0.85);
    d1.position.set(5, 10, 7);
    sc.add(d1);
    const d2 = new THREE.DirectionalLight(0xa9c0ff, 0.45);
    d2.position.set(-6, 4, -5);
    sc.add(d2);
    const grid = new THREE.GridHelper(16, 16, 0xc5d0e6, 0xdce3f0);
    grid.material.transparent = true;
    grid.material.opacity = 0.7;
    sc.add(grid);
    const sh = document.createElement('canvas');
    sh.width = sh.height = 128;
    const g2 = sh.getContext('2d');
    const gr = g2.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(12,36,89,.25)');
    gr.addColorStop(1, 'rgba(12,36,89,0)');
    g2.fillStyle = gr;
    g2.fillRect(0, 0, 128, 128);
    const shMat = new THREE.MeshBasicMaterial({
      map: new THREE.CanvasTexture(sh),
      transparent: true,
      depthWrite: false,
    });
    const unit = new THREE.BoxGeometry(1, 1, 1);
    unit.translate(0, 0.5, 0);
    const eg = new THREE.EdgesGeometry(unit);
    const solid = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.35, metalness: 0.2 });
    const glass = () =>
      new THREE.MeshStandardMaterial({
        color: 0xc9d6f5,
        transparent: true,
        opacity: 0.26,
        roughness: 0.15,
        metalness: 0.1,
        depthWrite: false,
      });
    const lines = () =>
      new THREE.LineSegments(eg, new THREE.LineBasicMaterial({ color: 0x0c2459, transparent: true, opacity: 0.4 }));
    const X = [-3.2, -1.07, 1.07, 3.2],
      CW = 1.35;
    const groups = X.map((x) => {
      const g = new THREE.Group();
      g.position.x = x;
      const s = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.6), shMat);
      s.rotation.x = -Math.PI / 2;
      s.position.y = 0.002;
      g.add(s);
      sc.add(g);
      return g;
    });
    // 0: market value (glass) with 50% cap plane
    const mvG = new THREE.Mesh(unit, glass()),
      mvE = lines();
    const capGeo = new THREE.PlaneGeometry(1, 1);
    capGeo.rotateX(-Math.PI / 2);
    const cap = new THREE.Mesh(
      capGeo,
      new THREE.MeshBasicMaterial({
        color: 0x0c2459,
        transparent: true,
        opacity: 0.16,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    const capE = new THREE.LineSegments(
      new THREE.EdgesGeometry(capGeo),
      new THREE.LineBasicMaterial({ color: 0x0c2459 }),
    );
    groups[0].add(mvG, mvE, cap, capE);
    // 1: owed = exercise + tax
    const exM = new THREE.Mesh(unit, solid(0x3d6be0)),
      taxM = new THREE.Mesh(unit, solid(0x8faaf0)),
      owE = lines();
    groups[1].add(exM, taxM, owE);
    // 2: paid = Infina + you
    const fM = new THREE.Mesh(unit, solid(0x0c2459)),
      yM = new THREE.Mesh(unit, solid(0xd3241d)),
      pE = lines();
    groups[2].add(fM, yM, pE);
    // 3: cost of funding
    const cM = new THREE.Mesh(unit, solid(0x7a8fb8)),
      cE = lines();
    groups[3].add(cM, cE);
    const H = { mv: 0.1, a: 0.1, b: 0, d: 0.1, e: 0, c: 0.05 },
      T = Object.assign({}, H);
    let R = null;
    window.__esop3d = {
      update(r) {
        R = r;
        const S = 4.4 / Math.max(r.MV, r.C, 1);
        T.mv = Math.max(0.05, r.MV * S);
        T.a = r.A * S;
        T.b = r.B * S;
        T.d = r.D * S;
        T.e = r.E * S;
        T.c = Math.max(0.06, r.cost * S * 6);
      },
    };
    window.__esop3d.update(calcRes);
    let drag = 0,
      dragV = 0,
      down = null,
      visible = false,
      grow = 0,
      t0 = performance.now();
    host.addEventListener('pointerdown', (e) => {
      down = e.clientX;
      host.setPointerCapture(e.pointerId);
    });
    host.addEventListener('pointermove', (e) => {
      if (down === null) return;
      dragV = (e.clientX - down) * 0.008;
      drag += dragV;
      down = e.clientX;
    });
    const up = () => (down = null);
    host.addEventListener('pointerup', up);
    host.addEventListener('pointercancel', up);
    function size() {
      const w = host.clientWidth,
        h = host.clientHeight;
      r2.setSize(w, h, false);
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
    }
    addEventListener('resize', size);
    size();
    new IntersectionObserver((es) => es.forEach((e) => (visible = e.isIntersecting)), { threshold: 0.1 }).observe(host);
    const v3 = new THREE.Vector3(),
      tags = [0, 1, 2, 3].map((i) => $('#tg' + i));
    const sInr = (n) =>
      n >= 1e7 ? '₹' + (n / 1e7).toFixed(2) + ' Cr' : n >= 1e5 ? '₹' + (n / 1e5).toFixed(2) + ' L' : inr(n);
    function place(i, y, html) {
      v3.set(0, y, 0);
      groups[i].localToWorld(v3);
      v3.project(cam);
      tags[i].style.transform =
        'translate(' +
        (v3.x * 0.5 + 0.5) * host.clientWidth +
        'px,' +
        (-v3.y * 0.5 + 0.5) * host.clientHeight +
        'px) translate(-50%,-100%)';
      if (tags[i]._h !== html) {
        tags[i].innerHTML = html;
        tags[i]._h = html;
      }
    }
    function seg(m, y, h, w) {
      m.scale.set(w, Math.max(0.001, h), w);
      m.position.y = y;
      m.visible = h > 0.002;
    }
    function loop(now) {
      requestAnimationFrame(loop);
      if (!visible) return;
      const dt = Math.min(0.05, (now - t0) / 1000);
      t0 = now;
      const rr = host.getBoundingClientRect(),
        p = clamp((innerHeight - rr.top) / (innerHeight * 0.9), 0, 1);
      if (p > 0.35) grow = Math.min(1, grow + dt * (reduce ? 99 : 0.7));
      if (down === null) {
        dragV *= 0.94;
        drag += dragV;
      }
      const e = reduce ? 1 : ease(p),
        elev = 1.1 - 0.78 * e,
        az = 0.5 + drag + (reduce ? 0 : Math.sin(now / 4200) * 0.12),
        dist = 17 - 4 * e;
      cam.position.set(
        Math.sin(az) * Math.cos(elev) * dist,
        Math.sin(elev) * dist + 1.4,
        Math.cos(az) * Math.cos(elev) * dist,
      );
      cam.lookAt(0, 2, 0);
      const k = Math.min(1, dt * (reduce ? 99 : 5));
      for (const key in H) H[key] += (T[key] - H[key]) * k;
      const gs = (i) => easeOut(clamp(grow * 1.6 - i * 0.2, 0, 1));
      const g0 = gs(0),
        g1 = gs(1),
        g2 = gs(2),
        g3 = gs(3);
      seg(mvG, 0, H.mv * g0, CW);
      mvE.scale.set(CW, Math.max(0.001, H.mv * g0), CW);
      cap.scale.set(CW + 0.7, 1, CW + 0.7);
      cap.position.y = H.mv * g0 * 0.5;
      capE.scale.copy(cap.scale);
      capE.position.y = cap.position.y;
      cap.visible = capE.visible = g0 > 0.05;
      seg(exM, 0, H.a * g1, CW - 0.08);
      seg(taxM, H.a * g1, H.b * g1, CW - 0.08);
      owE.scale.set(CW, Math.max(0.001, (H.a + H.b) * g1), CW);
      seg(fM, 0, H.d * g2, CW - 0.08);
      seg(yM, H.d * g2, H.e * g2, CW - 0.08);
      pE.scale.set(CW, Math.max(0.001, (H.d + H.e) * g2), CW);
      seg(cM, 0, H.c * g3, CW - 0.3);
      cE.scale.set(CW - 0.22, Math.max(0.001, H.c * g3), CW - 0.22);
      if (R) {
        place(
          0,
          H.mv * g0 + 0.3,
          'Market value<strong>' + sInr(R.MV) + '</strong><em>50% cap ' + sInr(R.MV / 2) + '</em>',
        );
        place(
          1,
          (H.a + H.b) * g1 + 0.3,
          'You owe your employer<strong>' + sInr(R.C) + '</strong><em>Tax ' + sInr(R.B) + '</em>',
        );
        place(
          2,
          (H.d + H.e) * g2 + 0.3,
          'How it’s paid<strong>Infina ' + sInr(R.D) + '</strong><em>You ' + sInr(R.E) + '</em>',
        );
        place(
          3,
          H.c * g3 + 0.3,
          'Cost of funding<strong>' +
            inr(R.cost) +
            '</strong><em>' +
            R.days +
            ' days at ' +
            R.rate.toFixed(2) +
            '%</em>',
        );
      }
      r2.render(sc, cam);
    }
    requestAnimationFrame(loop);
  })();

  // ---------- Background particles: wave → market → rocket → globe ----------
  const stage = $('#stage');
  const renderer = new THREE.WebGLRenderer({ canvas: stage, antialias: false, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 11);
  const mobile = matchMedia('(max-width: 900px)').matches,
    N = mobile ? 3000 : 6000;
  let seed = 19;
  const rnd = () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const EDGES = [
    [0, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 0, 1],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 1, 1],
    [1, 1, 0, 1, 1, 1],
  ];
  function boxPoints(out, start, count, cx, cy, cz, w, h, d, edgeShare) {
    for (let k = 0; k < count; k++) {
      let x, y, z;
      if (rnd() < edgeShare) {
        const e = EDGES[Math.floor(rnd() * 12)],
          t = rnd();
        x = e[0] + (e[3] - e[0]) * t;
        y = e[1] + (e[4] - e[1]) * t;
        z = e[2] + (e[5] - e[2]) * t;
      } else {
        const f = Math.floor(rnd() * 6);
        x = rnd();
        y = rnd();
        z = rnd();
        if (f === 0) x = 0;
        if (f === 1) x = 1;
        if (f === 2) y = 0;
        if (f === 3) y = 1;
        if (f === 4) z = 0;
        if (f === 5) z = 1;
      }
      const i3 = (start + k) * 3;
      out[i3] = cx - w / 2 + x * w;
      out[i3 + 1] = cy + y * h;
      out[i3 + 2] = cz - d / 2 + z * d;
    }
  }
  function setP(a, i, x, y, z) {
    a[i * 3] = x;
    a[i * 3 + 1] = y;
    a[i * 3 + 2] = z;
  }
  const shapes = [];
  {
    const a = new Float32Array(N * 3),
      cols = Math.round(Math.sqrt(N * 2.6)),
      rows = Math.ceil(N / cols);
    for (let i = 0; i < N; i++) {
      const c = i % cols,
        r = Math.floor(i / cols),
        x = (c / cols - 0.5) * 18,
        z = (r / rows - 0.5) * 6;
      setP(a, i, x, 0.22 * x + Math.sin(x * 0.6 + z * 0.9) * 0.5 - 1.4, z);
    }
    shapes.push(a);
  }
  // 1: candlestick market (listed companies)
  {
    const a = new Float32Array(N * 3),
      B = 12,
      per = Math.floor(N / B);
    for (let b = 0; b < B; b++) {
      const h = Math.max(0.5, 0.9 + b * 0.33 + (rnd() - 0.5) * 1.1),
        x = (b - (B - 1) / 2) * 0.62,
        cnt = b === B - 1 ? N - per * b : per,
        body = Math.floor(cnt * 0.86);
      boxPoints(a, per * b, body, x, -2.6 + b * 0.18, 0, 0.34, h, 0.34, 0.55);
      for (let k = body; k < cnt; k++) setP(a, per * b + k, x, -3.1 + b * 0.18 + rnd() * (h + 1.0), 0);
    }
    shapes.push(a);
  }
  // 2: rocket (startups and unlisted companies)
  {
    const a = new Float32Array(N * 3),
      nb = Math.floor(N * 0.38),
      nn = Math.floor(N * 0.16),
      nf = Math.floor(N * 0.14),
      nw = Math.floor(N * 0.05);
    let i = 0;
    for (let k = 0; k < nb; k++, i++) {
      const t = rnd() * Math.PI * 2,
        y = -1.6 + rnd() * 3.4;
      setP(a, i, Math.cos(t) * 0.78, y, Math.sin(t) * 0.78);
    }
    for (let k = 0; k < nn; k++, i++) {
      const t = rnd() * Math.PI * 2,
        u = Math.sqrt(rnd()),
        r = 0.78 * (1 - u);
      setP(a, i, Math.cos(t) * r, 1.8 + u * 1.5, Math.sin(t) * r);
    }
    for (let k = 0; k < nf; k++, i++) {
      const f = Math.floor(rnd() * 3),
        ang = (f * 2 * Math.PI) / 3 + Math.PI / 2,
        u = rnd(),
        v = rnd() * (1 - u);
      const r = 0.78 + u * 0.85,
        y = -1.6 + v * 1.4 - u * 0.5;
      setP(a, i, Math.cos(ang) * r, y, Math.sin(ang) * r);
    }
    for (let k = 0; k < nw; k++, i++) {
      const t = rnd() * Math.PI * 2;
      setP(a, i, Math.cos(t) * 0.28, 0.9 + Math.sin(t) * 0.28, 0.8);
    }
    for (; i < N; i++) {
      const h = Math.pow(rnd(), 0.7),
        t = rnd() * Math.PI * 2,
        r = (0.25 + h * 0.9) * Math.sqrt(rnd());
      setP(a, i, Math.cos(t) * r, -1.7 - h * 2.4, Math.sin(t) * r);
    }
    shapes.push(a);
  }
  // 3: globe with orbit rings (employees in India, residents and expats)
  {
    const a = new Float32Array(N * 3),
      S = Math.floor(N * 0.62),
      g = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < S; i++) {
      const y = 1 - (i / (S - 1)) * 2,
        rr = Math.sqrt(1 - y * y),
        th = g * i;
      setP(a, i, Math.cos(th) * rr * 2.3, y * 2.3, Math.sin(th) * rr * 2.3);
    }
    for (let i = S; i < N; i++) {
      const t = rnd() * Math.PI * 2,
        ring = i % 2,
        R = ring ? 3.4 : 4.0,
        tilt = ring ? 0.5 : -0.35,
        x = Math.cos(t) * R,
        z = Math.sin(t) * R * 0.35;
      setP(a, i, x, z * Math.sin(tilt) * 2, z * Math.cos(tilt) * 2);
    }
    shapes.push(a);
  }
  const scatter = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const th = rnd() * Math.PI * 2,
      ph = Math.acos(2 * rnd() - 1),
      R = 8 + rnd() * 10;
    setP(scatter, i, R * Math.sin(ph) * Math.cos(th), R * Math.sin(ph) * Math.sin(th), R * Math.cos(ph) - 4);
  }
  const geo = new THREE.BufferGeometry(),
    pos = new Float32Array(scatter);
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const rands = new Float32Array(N);
  for (let i = 0; i < N; i++) rands[i] = rnd();
  geo.setAttribute('aRand', new THREE.BufferAttribute(rands, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uWave: { value: 1 },
      uSize: { value: mobile ? 2.8 : 2.6 },
      uPixel: { value: renderer.getPixelRatio() },
      uA: { value: new THREE.Color('#0C2459') },
      uB: { value: new THREE.Color('#3D6BE0') },
      uC: { value: new THREE.Color('#9AB3F2') },
      uR: { value: new THREE.Color('#D3241D') },
    },
    vertexShader: `attribute float aRand; uniform float uTime,uWave,uSize,uPixel; varying float vR; varying float vD;
      void main(){ vec3 p=position; p.y += sin(p.x*.8+uTime*.7+p.z*.9)*.36*uWave;
        p += .03*vec3(sin(uTime*1.3+aRand*40.),cos(uTime*1.1+aRand*30.),sin(uTime*.9+aRand*20.));
        vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
        gl_PointSize=uSize*uPixel*(.6+aRand*.9)*(10./-mv.z); vR=aRand; vD=-mv.z; }`,
    fragmentShader: `uniform vec3 uA,uB,uC,uR; varying float vR; varying float vD;
      void main(){ vec2 c=gl_PointCoord-.5; float d=length(c); if(d>.5) discard;
        float a=smoothstep(.5,.2,d); vec3 col = vR<.45 ? mix(uA,uB,vR/.45) : mix(uB,uC,(vR-.45)/.48);
        if(vR>.93) col=uR; float f=smoothstep(22.,7.,vD); gl_FragColor=vec4(col,a*.9*f); }`,
  });
  const group = new THREE.Group();
  group.add(new THREE.Points(geo, mat));
  scene.add(group);
  function resize() {
    renderer.setSize(innerWidth, innerHeight, false);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize);
  resize();
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener(
    'pointermove',
    (e) => {
      mouse.tx = e.clientX / innerWidth - 0.5;
      mouse.ty = e.clientY / innerHeight - 0.5;
    },
    { passive: true },
  );
  let intro = reduce ? 1 : 0,
    sm = 0,
    spin = 0,
    last = performance.now();
  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (!stageOn) return;
    if (intro < 1) intro = Math.min(1, intro + dt / 2.4);
    let tgt = 0;
    if (storyP > 0) {
      const q = storyP * 3,
        i = Math.min(2, Math.floor(q)),
        f = q - i;
      tgt = i === 0 ? 1 : i + clamp(f / 0.35, 0, 1);
    } else if (enterP > 0) tgt = enterP;
    if (Math.abs(tgt - sm) > 1.2) sm = tgt; // jump cleanly when re-entering from far away
    sm += (tgt - sm) * (reduce ? 1 : Math.min(1, dt * 3.2));
    const k = clamp(sm, 0, 3),
      i0 = Math.min(2, Math.floor(k)),
      f = ease(k - i0),
      A = shapes[i0],
      B = shapes[i0 + 1],
      ie = ease(intro);
    for (let j = 0; j < N * 3; j++) {
      const v = A[j] + (B[j] - A[j]) * f;
      pos[j] = scatter[j] + (v - scatter[j]) * ie;
    }
    geo.attributes.position.needsUpdate = true;
    mat.uniforms.uTime.value = reduce ? 0 : now / 1000;
    mat.uniforms.uWave.value = clamp(1 - k, 0, 1);
    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;
    const pk = clamp(k, 0, 1);
    spin += dt * (reduce ? 0 : 0.03 + 0.25 * pk);
    group.rotation.y = Math.sin(spin * 0.8) * 0.7 * pk + mouse.x * 0.35;
    group.rotation.x = -0.32 * (1 - pk) + 0.12 * pk + mouse.y * 0.18;
    const wide = innerWidth > 900;
    group.position.x = wide ? 3.2 * pk : 0;
    group.position.y = wide ? 0.2 * pk : 1.7 * pk;
    group.scale.setScalar(wide ? 1 : 1 - 0.3 * pk);
    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);
}
