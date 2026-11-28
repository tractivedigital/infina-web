/* eslint-disable */
// @ts-nocheck
/**
 * Interaction script for the CRE page, ported from the design prototype in source-html/new.
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
  $$('#sol .tilt').forEach((el, i) => {
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

  // ---------- Funding stack (what it pays for) ----------
  const NEED_COLORS = [0x0c2459, 0x3d6be0, 0x8faaf0, 0x1e4bb8, 0x5a7fd8, 0x7a8fb8, 0xd3241d];
  const needBtns = $$('#needs button'),
    sugIn = $('#suggest-in');
  let needOrder = [0, 1, 2],
    lastSug = '';
  function suggest() {
    const n = needOrder.length,
      debt = needOrder.includes(6),
      gwc = needOrder.includes(5);
    let t, d;
    if (!n) {
      t = 'Pick what your project needs';
      d = 'Select one or more needs to build your funding stack.';
    } else if (n === 1 && debt) {
      t = 'Balance transfer';
      d = 'Move costly existing loans to Infina and realign your debt.';
    } else if (n === 1 && gwc) {
      t = 'Group working capital';
      d = 'Working capital for your group projects, funded as part of a structured loan.';
    } else if (debt || gwc || n >= 5) {
      t = 'Structured finance';
      d =
        'Several needs, such as construction, group working capital and takeover finance, packaged as one flexible loan.';
    } else {
      t = 'Construction finance';
      d = 'Funding for materials, labour and overheads while you build.';
    }
    if (t !== lastSug) {
      sugIn.innerHTML =
        '<small>' +
        (n ? 'A likely fit, to be confirmed by our team' : 'Your funding stack') +
        '</small><strong>' +
        t +
        '</strong><p>' +
        d +
        '</p>';
      sugIn.classList.remove('swap');
      void sugIn.offsetWidth;
      if (!reduce) sugIn.classList.add('swap');
      lastSug = t;
    }
    if (window.__stack) window.__stack.update(needOrder);
  }
  needBtns.forEach((b, i) =>
    b.addEventListener('click', () => {
      const on = b.getAttribute('aria-pressed') !== 'true';
      b.setAttribute('aria-pressed', on);
      needOrder = needOrder.filter((x) => x !== i);
      if (on) needOrder.push(i);
      suggest();
    }),
  );
  suggest();

  // ---------- Which product fits ----------
  const FIT = [
    [
      'Construction finance',
      'Development finance to fund all project-related expenses, such as materials, labour and project overheads.',
    ],
    [
      'Last mile financing',
      'Strategic finance needed towards the end of the project lifecycle to complete development.',
    ],
    ['Inventory financing', 'A loan against ready inventory in large or mid-sized projects.'],
    [
      'Structured finance',
      'Customised solutions for multi-faceted needs, such as construction finance, group working capital and takeover finance, packaged as one flexible loan.',
    ],
    ['Balance transfer', 'Takeover of a developer’s existing loans, to realign their debt requirements.'],
  ];
  const fitBtns = $$('#fit-rows button'),
    fitCard = $('#fit-card');
  function showFit(i) {
    fitBtns.forEach((b, j) => b.setAttribute('aria-pressed', j === i));
    fitCard.innerHTML = '<h4>' + FIT[i][0] + '</h4><p>' + FIT[i][1] + '</p>';
    fitCard.classList.remove('turn');
    void fitCard.offsetWidth;
    if (!reduce) fitCard.classList.add('turn');
  }
  fitBtns.forEach((b, i) => b.addEventListener('click', () => showFit(i)));
  showFit(0);

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
        ? 'Tick the ones your company meets.'
        : c === t
          ? 'You meet every listed criterion. Share your project details to start.'
          : c >= 4
            ? 'A strong start. Our team can review the rest with you.'
            : 'Talk to our team about the criteria you don’t meet yet.';
  }
  critBoxes.forEach((x) => x.addEventListener('change', gauge));
  gauge();

  // ---------- Lifecycle story (pinned) ----------
  const story = $('#lifecycle'),
    chapters = $$('.chapter'),
    railBtns = $$('#steps-rail button');
  let storyP = 0,
    enterP = 0,
    curCh = 0,
    stageOn = true;
  railBtns.forEach((b, i) =>
    b.addEventListener('click', () =>
      scrollTo({
        top: story.offsetTop + ((story.offsetHeight - innerHeight) * (i + 0.5)) / 4,
        behavior: reduce ? 'auto' : 'smooth',
      }),
    ),
  );
  function storyScroll() {
    const vh = innerHeight,
      r = story.getBoundingClientRect();
    enterP = clamp(1 - r.top / vh, 0, 1);
    storyP = clamp(-r.top / (story.offsetHeight - vh), 0, 1);
    const ch = Math.min(3, Math.floor(storyP * 4));
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

  // ---------- 3D funding stack ----------
  (function stack3d() {
    const host = $('#stack-stage'),
      cv = $('#stack3d');
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
    const grid = new THREE.GridHelper(14, 14, 0xc5d0e6, 0xdce3f0);
    grid.material.transparent = true;
    grid.material.opacity = 0.7;
    sc.add(grid);
    const sh = document.createElement('canvas');
    sh.width = sh.height = 128;
    const g2 = sh.getContext('2d');
    const gr = g2.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(12,36,89,.28)');
    gr.addColorStop(1, 'rgba(12,36,89,0)');
    g2.fillStyle = gr;
    g2.fillRect(0, 0, 128, 128);
    const shP = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 6),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sh), transparent: true, depthWrite: false }),
    );
    shP.rotation.x = -Math.PI / 2;
    shP.position.y = 0.002;
    sc.add(shP);
    const slabG = new THREE.BoxGeometry(4.2, 0.18, 3.4);
    slabG.translate(0, 0.09, 0);
    const slab = new THREE.Mesh(slabG, new THREE.MeshStandardMaterial({ color: 0xe4eaf6, roughness: 0.8 }));
    sc.add(slab);
    slab.add(
      new THREE.LineSegments(
        new THREE.EdgesGeometry(slabG),
        new THREE.LineBasicMaterial({ color: 0x0c2459, transparent: true, opacity: 0.3 }),
      ),
    );
    const bg = new THREE.BoxGeometry(2.8, 0.5, 2.2);
    bg.translate(0, 0.25, 0);
    const be = new THREE.EdgesGeometry(bg);
    const blocks = NEED_COLORS.map((c, i) => {
      const m = new THREE.Mesh(bg, new THREE.MeshStandardMaterial({ color: c, roughness: 0.35, metalness: 0.2 }));
      m.add(
        new THREE.LineSegments(be, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 })),
      );
      m.visible = false;
      sc.add(m);
      return { m, y: 8, ty: 0, s: 0, ts: 0, rot: (i % 2 ? 1 : -1) * 0.04 * (1 + (i % 3)), delay: 0 };
    });
    let order = [],
      started = false,
      pending = needOrder.slice();
    function apply(o) {
      const now = performance.now();
      blocks.forEach((b, i) => {
        const p = o.indexOf(i);
        if (p >= 0) {
          const ty = 0.18 + p * 0.56;
          if (b.ts === 0) {
            b.y = ty + 5 + p * 0.35;
            b.delay = now + (started ? 0 : p * 140);
          }
          b.ty = ty;
          b.ts = 1;
        } else b.ts = 0;
      });
      order = o.slice();
    }
    window.__stack = {
      update(o) {
        pending = o.slice();
        if (started) apply(pending);
      },
    };
    let drag = 0,
      dragV = 0,
      down = null,
      visible = false,
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
    new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          visible = e.isIntersecting;
          if (visible && !started) {
            apply(pending);
            started = true;
          }
        }),
      { threshold: 0.25 },
    ).observe(host);
    const v3 = new THREE.Vector3(),
      tag = $('#tg-stack');
    function loop(now) {
      requestAnimationFrame(loop);
      if (!visible) return;
      const dt = Math.min(0.05, (now - t0) / 1000);
      t0 = now;
      const rr = host.getBoundingClientRect(),
        p = clamp((innerHeight - rr.top) / (innerHeight * 0.9), 0, 1);
      if (down === null) {
        dragV *= 0.94;
        drag += dragV;
      }
      const e = reduce ? 1 : ease(p),
        elev = 1.1 - 0.72 * e,
        az = 0.6 + drag + (reduce ? 0 : Math.sin(now / 4200) * 0.15),
        dist = 15 - 3 * e;
      const topY = 0.18 + order.length * 0.56;
      cam.position.set(
        Math.sin(az) * Math.cos(elev) * dist,
        Math.sin(elev) * dist + 1.2,
        Math.cos(az) * Math.cos(elev) * dist,
      );
      cam.lookAt(0, Math.max(1.2, topY * 0.5), 0);
      blocks.forEach((b) => {
        if (now >= b.delay) {
          b.y += (b.ty - b.y) * Math.min(1, dt * (reduce ? 99 : 7));
          b.s += (b.ts - b.s) * Math.min(1, dt * (reduce ? 99 : 9));
        }
        b.m.visible = b.s > 0.01;
        const s = Math.max(0.001, b.s);
        b.m.scale.set(s, s, s);
        b.m.position.y = b.y;
        b.m.rotation.y = b.rot + (reduce ? 0 : Math.sin(now / 1600 + b.rot * 40) * 0.015);
      });
      v3.set(0, topY + 0.6, 0);
      v3.project(cam);
      tag.style.transform =
        'translate(' +
        (v3.x * 0.5 + 0.5) * host.clientWidth +
        'px,' +
        (-v3.y * 0.5 + 0.5) * host.clientHeight +
        'px) translate(-50%,-100%)';
      const n = order.length,
        html = n
          ? '<strong>' + n + (n === 1 ? ' need' : ' needs') + '</strong>covered by one loan'
          : 'Pick a need<strong>to start building</strong>';
      if (tag._h !== html) {
        tag.innerHTML = html;
        tag._h = html;
      }
      r2.render(sc, cam);
    }
    requestAnimationFrame(loop);
  })();

  // ---------- Background particles: wave → site → frame → tower → skyline ----------
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
  function lineP(a, i, x1, y1, z1, x2, y2, z2) {
    const t = rnd();
    setP(a, i, x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, z1 + (z2 - z1) * t);
  }
  function crane(a, start, count, mx, top, jl, jr) {
    for (let k = 0; k < count; k++) {
      const u = rnd(),
        i = start + k;
      if (u < 0.42) {
        const c = Math.floor(rnd() * 4),
          cx = mx + (c % 2 ? 0.16 : -0.16),
          cz = -1 + (c < 2 ? 0.16 : -0.16);
        lineP(a, i, cx, -3, cz, cx, top, cz);
      } else if (u < 0.52) {
        const y = -3 + rnd() * (top + 3);
        setP(a, i, mx + (rnd() - 0.5) * 0.32, y, -1 + (rnd() - 0.5) * 0.32);
      } else if (u < 0.82) {
        const hi = rnd() < 0.5;
        lineP(a, i, jl, top + (hi ? 0.32 : 0), -1, jr, top + (hi ? 0.32 : 0), -1);
      } else if (u < 0.92) {
        const cx = jl + 1.0;
        lineP(a, i, cx, top, -1, cx, top - 2.2, -1);
      } else setP(a, i, jl + 1.0 + (rnd() - 0.5) * 0.35, top - 2.35 + (rnd() - 0.5) * 0.3, -1 + (rnd() - 0.5) * 0.35);
    }
  }
  function gridPlane(a, i, x0, x1, z0, z1, y, step) {
    if (rnd() < 0.5) setP(a, i, x0 + Math.round((rnd() * (x1 - x0)) / step) * step, y, z0 + rnd() * (z1 - z0));
    else setP(a, i, x0 + rnd() * (x1 - x0), y, z0 + Math.round((rnd() * (z1 - z0)) / step) * step);
  }
  // 1: construction site — foundation, columns, first slab, crane
  {
    const a = new Float32Array(N * 3),
      n1 = Math.floor(N * 0.28),
      n2 = Math.floor(N * 0.2),
      n3 = Math.floor(N * 0.14);
    for (let k = 0; k < n1; k++) gridPlane(a, k, -2.8, 2.2, -1.8, 1.8, -3, 0.5);
    for (let k = 0; k < n2; k++) {
      const cx = -2.6 + (k % 3) * 2.3,
        cz = -1.6 + (Math.floor(k / 3) % 3) * 1.6;
      lineP(a, n1 + k, cx, -3, cz, cx, -1.4, cz);
    }
    for (let k = 0; k < n3; k++) gridPlane(a, n1 + n2 + k, -2.8, 0, -1.8, 1.8, -1.4, 0.5);
    crane(a, n1 + n2 + n3, N - n1 - n2 - n3, 2.4, 2.4, -1.6, 3.4);
    shapes.push(a);
  }
  // 2: frame rising — floors and columns, crane higher
  {
    const a = new Float32Array(N * 3),
      nf = Math.floor(N * 0.7);
    const W = 3.2,
      D = 2.4,
      x0 = -0.6;
    for (let k = 0; k < nf; k++) {
      if (rnd() < 0.55) {
        const f = Math.floor(rnd() * 10),
          y = -3 + f * 0.5,
          s = rnd() * 4,
          side = Math.floor(s),
          t = s - side;
        let x, z;
        if (side === 0) {
          x = x0 - W / 2 + t * W;
          z = D / 2;
        } else if (side === 1) {
          x = x0 + W / 2;
          z = D / 2 - t * D;
        } else if (side === 2) {
          x = x0 + W / 2 - t * W;
          z = -D / 2;
        } else {
          x = x0 - W / 2;
          z = -D / 2 + t * D;
        }
        setP(a, k, x, y, z);
      } else {
        const c = Math.floor(rnd() * 8),
          pts = [
            [-1, -1],
            [0, -1],
            [1, -1],
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
          ][c];
        const x = x0 + (pts[0] * W) / 2,
          z = (pts[1] * D) / 2;
        lineP(a, k, x, -3, z, x, 1.5, z);
      }
    }
    crane(a, nf, N - nf, 2.6, 3.4, -1.6, 3.6);
    shapes.push(a);
  }
  // 3: completed tower with a window grid
  {
    const a = new Float32Array(N * 3),
      W = 3.2,
      D = 2.6,
      x0 = -0.3,
      nw = Math.floor(N * 0.72);
    for (let k = 0; k < nw; k++) {
      const f = Math.floor(rnd() * 4),
        row = Math.floor(rnd() * 15),
        y = -3 + 0.2 + row * 0.42 + rnd() * 0.22;
      if (f < 2) {
        const col = Math.floor(rnd() * 8),
          x = x0 - W / 2 + 0.2 + col * 0.4 + rnd() * 0.2;
        setP(a, k, x, y, f === 0 ? D / 2 : -D / 2);
      } else {
        const col = Math.floor(rnd() * 6),
          z = -D / 2 + 0.2 + col * 0.4 + rnd() * 0.2;
        setP(a, k, f === 2 ? x0 + W / 2 : x0 - W / 2, y, z);
      }
    }
    boxPoints(a, nw, N - nw, x0, -3, 0, W, 6.4, D, 1.0);
    shapes.push(a);
  }
  // 4: skyline — several projects
  {
    const a = new Float32Array(N * 3),
      T = [
        [-3.2, -0.4, 1.0, 2.4],
        [-2.0, 0.6, 1.0, 4.2],
        [-0.8, -0.2, 1.1, 3.2],
        [0.5, 0.4, 1.2, 5.4],
        [1.8, -0.5, 1.0, 3.6],
        [3.0, 0.3, 1.0, 2.8],
        [-1.4, -1.4, 0.9, 1.8],
        [1.2, -1.5, 0.9, 2.2],
      ],
      per = Math.floor(N / T.length);
    T.forEach((t, j) =>
      boxPoints(a, per * j, j === T.length - 1 ? N - per * j : per, t[0], -2.8, t[1], t[2], t[3], t[2], 0.62),
    );
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
      const q = storyP * 4,
        i = Math.min(3, Math.floor(q)),
        f = q - i;
      tgt = i === 0 ? 1 : i + clamp(f / 0.35, 0, 1);
    } else if (enterP > 0) tgt = enterP;
    if (Math.abs(tgt - sm) > 1.2) sm = tgt; // jump cleanly when re-entering from far away
    sm += (tgt - sm) * (reduce ? 1 : Math.min(1, dt * 3.2));
    const k = clamp(sm, 0, 4),
      i0 = Math.min(3, Math.floor(k)),
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
    group.position.x = wide ? 3.0 * pk : 0;
    group.position.y = wide ? 0.2 * pk : 1.7 * pk;
    group.scale.setScalar(wide ? 1 : 1 - 0.3 * pk);
    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);
}
