/* eslint-disable */
// @ts-nocheck
/**
 * Interaction script for the LAP page, ported from the design prototype in source-html/new.
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

  // ---------- Calculator ----------
  const FOIR = 0.66;
  let ltvCap = 0.65;
  const cMV = $('#c-mv'),
    cInc = $('#c-inc'),
    cObl = $('#c-obl'),
    cRate = $('#c-rate'),
    cTen = $('#c-ten');
  const mvVal = () => {
    const v = 2e6 * Math.pow(100, cMV.value / 1000);
    return Math.round(v / 1e5) * 1e5;
  };
  const incVal = () => {
    const v = 25000 * Math.pow(200, cInc.value / 1000);
    return v < 1e5 ? Math.round(v / 1000) * 1000 : Math.round(v / 5000) * 5000;
  };
  const oblVal = () =>
    +cObl.value === 0 ? 0 : Math.round((1000 * Math.pow(500, (cObl.value - 1) / 999)) / 1000) * 1000;
  function segGroup(id, cb) {
    const bs = $$('#' + id + ' button');
    bs.forEach((b) =>
      b.addEventListener('click', () => {
        bs.forEach((x) => x.setAttribute('aria-pressed', x === b));
        cb && cb(b);
      }),
    );
    return bs;
  }
  segGroup('seg-prof', () => updCalc());
  const propBtns = segGroup('seg-prop', (b) => {
    ltvCap = +b.dataset.ltv;
    updCalc();
  });
  const calcState = { mv: 0, loan: 0, cap: 0.65, inc: 0, obl: 0, emi: 0 };
  function updCalc() {
    [cMV, cInc, cObl, cRate, cTen].forEach(setFill);
    const mv = mvVal(),
      inc = incVal(),
      obl = oblVal(),
      rate = +cRate.value,
      n = +cTen.value,
      r = rate / 1200;
    const factor = (1 - Math.pow(1 + r, -n)) / r;
    const emiCap = Math.max(0, FOIR * inc - obl);
    const byInc = emiCap * factor,
      byProp = mv * ltvCap;
    const loan = Math.floor(Math.min(byInc, byProp)),
      emi = loan / factor;
    $('#c-mv-o').textContent = inr(mv);
    $('#c-inc-o').textContent = inr(inc);
    $('#c-obl-o').textContent = inr(obl);
    $('#c-rate-o').textContent = rate.toFixed(2) + '%';
    $('#c-ten-o').textContent = n + ' months';
    tween($('#l-inc'), byInc, inr);
    tween($('#l-prop'), byProp, inr);
    $('#lim-inc').classList.toggle('on', byInc <= byProp);
    $('#lim-prop').classList.toggle('on', byProp < byInc);
    tween($('#r-loan'), loan, inr);
    tween($('#r-emi'), emi, inr);
    $('#r-by').textContent = loan <= 0 ? 'Existing obligations' : byInc <= byProp ? 'Your income' : 'Property value';
    $('#min-warn').textContent =
      loan < 2e6 ? 'Below the ₹20 lakh minimum. Try a longer tenure or lower obligations.' : '';
    Object.assign(calcState, { mv, loan, cap: ltvCap, inc, obl, emi });
    if (window.__lap3d) window.__lap3d.update(calcState);
  }
  [cMV, cInc, cObl, cRate, cTen].forEach((x) => x.addEventListener('input', updCalc));
  updCalc();
  $('#try-ex').addEventListener('click', () => {
    cMV.value = 500;
    cInc.value = 392;
    cObl.value = 548;
    cRate.value = 11;
    cTen.value = 180;
    $$('#seg-prof button').forEach((b, i) => b.setAttribute('aria-pressed', i === 0));
    propBtns.forEach((b, i) => b.setAttribute('aria-pressed', i === 0));
    ltvCap = 0.65;
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
          tween(exTotal, 8974158, inr, 1600);
          ob.disconnect();
        }
      }),
    { threshold: 0.6 },
  ).observe(exTotal);

  // ---------- Property story (pinned) ----------
  const story = $('#property'),
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

  // ---------- Eligibility tabs ----------
  const COMMON = [
    'Application form with a recent photograph',
    'Proof of identity: passport, voter ID, driving licence or PAN card',
    'Address proof: utility bill, rental agreement, passport, bank statement or driving licence',
    'Age proof: PAN card, passport or another statutory certificate',
    'Processing fee cheque',
    'Property documents for the collateral',
  ];
  const PROFILES = [
    {
      crit: [
        'Employed with an MNC, a public or large private company, or a state or central government or PSU body',
        'At least 24 months of total work experience, including 6 months in the current job',
        'Age 25 to 70 at loan maturity, or retirement age if earlier',
      ],
      docs: ['Salary slips for the last 6 months', 'Bank statements for the last 6 months', 'Form 16'].concat(COMMON),
      flag: false,
    },
    {
      crit: [
        'Business in operation for at least [X] years',
        'Income tax returns filed for the last [X] years',
        'Age 25 to 70 at loan maturity',
      ],
      docs: [
        'Income tax returns with income computation for the last [3] years',
        'Audited financial statements for the last [3] years',
        'Bank statements for the last [6] months',
        'Proof of business, such as GST registration or shop and establishment licence',
      ].concat(COMMON),
      flag: true,
    },
    {
      crit: [
        'Practising professional, such as a doctor, chartered accountant or architect',
        'At least [X] years in practice',
        'Age 25 to 70 at loan maturity',
      ],
      docs: [
        'Professional qualification and registration certificate',
        'Income tax returns with income computation for the last [3] years',
        'Bank statements for the last [6] months',
      ].concat(COMMON),
      flag: true,
    },
  ];
  const tick =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>';
  const tabs = $$('#doc-tabs button'),
    page = $('#doc-page'),
    list = $('#doc-list'),
    elist = $('#elig-list');
  const checked = PROFILES.map((p) => p.docs.map(() => false));
  let curTab = 0;
  function readyUpd() {
    const c = checked[curTab].filter(Boolean).length,
      t = PROFILES[curTab].docs.length;
    $('#ready-txt').textContent = c + ' of ' + t + ' ready';
    $('#ready-bar').style.width = (c / t) * 100 + '%';
  }
  function showTab(i, focus) {
    curTab = i;
    const p = PROFILES[i];
    tabs.forEach((b, j) => {
      b.setAttribute('aria-selected', j === i);
      b.tabIndex = j === i ? 0 : -1;
    });
    if (focus) tabs[i].focus();
    page.setAttribute('aria-labelledby', 'dt' + i);
    elist.innerHTML = p.crit.map((c) => '<li>' + tick + '<span>' + c + '</span></li>').join('');
    list.innerHTML =
      p.docs
        .map(
          (d, k) =>
            '<li><label><input type="checkbox" data-k="' +
            k +
            '"' +
            (checked[i][k] ? ' checked' : '') +
            '><span>' +
            d +
            '</span></label></li>',
        )
        .join('') +
      (p.flag ? '<li class="flag">Criteria and documents for this profile to be confirmed by Infina.</li>' : '');
    page.classList.remove('turn');
    void page.offsetWidth;
    if (!reduce) page.classList.add('turn');
    readyUpd();
  }
  list.addEventListener('change', (e) => {
    checked[curTab][+e.target.dataset.k] = e.target.checked;
    readyUpd();
  });
  tabs.forEach((b, i) => {
    b.addEventListener('click', () => showTab(i));
    b.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        showTab((i + 1) % tabs.length, true);
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showTab((i - 1 + tabs.length) % tabs.length, true);
      }
    });
  });
  showTab(0);

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

  // ---------- 3D calculator: house + income column ----------
  (function lap3d() {
    const host = $('#lap-stage'),
      cv = $('#lap3d');
    const r2 = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
    r2.setPixelRatio(Math.min(devicePixelRatio, 2));
    const sc = new THREE.Scene(),
      cam = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    sc.add(new THREE.HemisphereLight(0xffffff, 0xb9c6e6, 0.95));
    const d1 = new THREE.DirectionalLight(0xffffff, 0.8);
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
    const glassMat = () =>
      new THREE.MeshStandardMaterial({
        color: 0xc9d6f5,
        transparent: true,
        opacity: 0.26,
        roughness: 0.15,
        metalness: 0.1,
        depthWrite: false,
      });
    const lineMat = (c) => new THREE.LineBasicMaterial({ color: c, transparent: true, opacity: 0.45 });
    const shadow = (s) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(s, s), shMat);
      m.rotation.x = -Math.PI / 2;
      m.position.y = 0.002;
      return m;
    };
    // House
    const house = new THREE.Group();
    house.position.set(-1.6, 0, 0);
    sc.add(house);
    const hGlass = new THREE.Mesh(unit, glassMat()),
      hEdges = new THREE.LineSegments(eg, lineMat(0x0c2459));
    const roofGeo = new THREE.ConeGeometry(1, 1, 4, 1);
    roofGeo.rotateY(Math.PI / 4);
    roofGeo.translate(0, 0.5, 0);
    const roof = new THREE.Mesh(roofGeo, glassMat()),
      roofEdges = new THREE.LineSegments(new THREE.EdgesGeometry(roofGeo), lineMat(0x0c2459));
    const hFill = new THREE.Mesh(
      unit,
      new THREE.MeshStandardMaterial({ color: 0x0c2459, roughness: 0.35, metalness: 0.25 }),
    );
    const capGeo = new THREE.PlaneGeometry(1, 1);
    capGeo.rotateX(-Math.PI / 2);
    const cap = new THREE.Mesh(
      capGeo,
      new THREE.MeshBasicMaterial({
        color: 0xd3241d,
        transparent: true,
        opacity: 0.16,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    const capEdge = new THREE.LineSegments(
      new THREE.EdgesGeometry(capGeo),
      new THREE.LineBasicMaterial({ color: 0xd3241d }),
    );
    const door = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.9, 0.02).translate(0, 0.45, 0),
      new THREE.MeshStandardMaterial({ color: 0xd3241d, roughness: 0.5 }),
    );
    house.add(shadow(4.6), hFill, hGlass, hEdges, roof, roofEdges, cap, capEdge, door);
    // Income column
    const col = new THREE.Group();
    col.position.set(2.5, 0, 0);
    sc.add(col);
    const oblM = new THREE.Mesh(unit, new THREE.MeshStandardMaterial({ color: 0xb8c4dc, roughness: 0.5 }));
    const emiM = new THREE.Mesh(
      unit,
      new THREE.MeshStandardMaterial({ color: 0xd3241d, roughness: 0.4, metalness: 0.15 }),
    );
    const freeM = new THREE.Mesh(unit, glassMat()),
      colEdges = new THREE.LineSegments(eg, lineMat(0x0c2459));
    col.add(shadow(2.8), oblM, emiM, freeM, colEdges);
    const W = 3,
      D = 2.6,
      CW = 1.3;
    const st = { hB: 0.1, tB: 0.1, fill: 0, tFill: 0, cap: 0.5, tCap: 0.5, hI: 0.1, tI: 0.1, o: 0, tO: 0, e: 0, tE: 0 };
    let S = {};
    function hB(mv) {
      return 1.0 + 3.0 * clamp((Math.log10(Math.max(mv, 1)) - 6.3) / 2, 0, 1);
    }
    function hI(inc) {
      return 0.6 + 3.4 * clamp((Math.log10(Math.max(inc, 1)) - 4.4) / 2.3, 0, 1);
    }
    window.__lap3d = {
      update(s) {
        S = Object.assign({}, s);
        st.tB = hB(s.mv);
        st.tFill = clamp(s.loan / s.mv, 0, 1);
        st.tCap = s.cap;
        st.tI = hI(s.inc);
        st.tO = clamp(s.obl / s.inc, 0, 1);
        st.tE = clamp(s.emi / s.inc, 0, 1 - st.tO);
      },
    };
    window.__lap3d.update(calcState);
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
      tagH = $('#tg-house'),
      tagI = $('#tg-inc');
    function place(tag, obj, y, html) {
      v3.set(0, y, 0);
      obj.localToWorld(v3);
      v3.project(cam);
      tag.style.transform =
        'translate(' +
        (v3.x * 0.5 + 0.5) * host.clientWidth +
        'px,' +
        (-v3.y * 0.5 + 0.5) * host.clientHeight +
        'px) translate(-50%,-100%)';
      if (tag._h !== html) {
        tag.innerHTML = html;
        tag._h = html;
      }
    }
    function loop(now) {
      requestAnimationFrame(loop);
      if (!visible) return;
      const dt = Math.min(0.05, (now - t0) / 1000);
      t0 = now;
      const rr = host.getBoundingClientRect(),
        p = clamp((innerHeight - rr.top) / (innerHeight * 0.9), 0, 1);
      if (p > 0.35) grow = Math.min(1, grow + dt * (reduce ? 99 : 0.8));
      if (down === null) {
        dragV *= 0.94;
        drag += dragV;
      }
      const e = reduce ? 1 : ease(p),
        elev = 1.15 - 0.78 * e,
        az = 0.55 + drag + (reduce ? 0 : Math.sin(now / 4200) * 0.12),
        dist = 16 - 3.5 * e;
      cam.position.set(
        Math.sin(az) * Math.cos(elev) * dist,
        Math.sin(elev) * dist + 1.5,
        Math.cos(az) * Math.cos(elev) * dist,
      );
      cam.lookAt(0.3, 2, 0);
      const k = Math.min(1, dt * (reduce ? 99 : 5));
      ['hB', 'fill', 'cap', 'hI', 'o', 'e'].forEach((key) => {
        const tk = 't' + key.charAt(0).toUpperCase() + key.slice(1);
        st[key] += (st[key === 'hB' ? 'tB' : key === 'hI' ? 'tI' : tk] - st[key]) * k;
      });
      const g1 = easeOut(grow),
        g2 = easeOut(clamp(grow * 1.4 - 0.3, 0, 1));
      const hb = st.hB;
      hGlass.scale.set(W, hb, D);
      hEdges.scale.set(W, hb, D);
      roof.scale.set(2.3, 1.3, 2.0);
      roof.position.y = hb;
      roofEdges.scale.copy(roof.scale);
      roofEdges.position.y = hb;
      hFill.scale.set(W - 0.3, Math.max(0.001, hb * st.fill * g1), D - 0.3);
      cap.scale.set(W + 0.6, 1, D + 0.6);
      cap.position.y = hb * st.cap;
      capEdge.scale.copy(cap.scale);
      capEdge.position.y = cap.position.y;
      door.position.set(0, 0, D / 2 + 0.02);
      const hi = st.hI,
        ho = hi * st.o * g2,
        he = hi * st.e * g2;
      colEdges.scale.set(CW, hi, CW);
      oblM.scale.set(CW - 0.1, Math.max(0.001, ho), CW - 0.1);
      oblM.position.y = 0;
      emiM.scale.set(CW - 0.1, Math.max(0.001, he), CW - 0.1);
      emiM.position.y = ho;
      freeM.scale.set(CW, Math.max(0.001, hi - ho - he), CW);
      freeM.position.y = ho + he;
      if (S.mv) {
        place(
          tagH,
          house,
          hb + 1.5,
          'Property ' +
            shortInr(S.mv) +
            '<strong>Loan ' +
            inr(S.loan) +
            '</strong><em>' +
            Math.round((S.loan / S.mv) * 100) +
            '% of value</em>',
        );
        place(
          tagI,
          col,
          hi + 0.35,
          'Income ' +
            inr(S.inc) +
            '/month<strong>EMI ' +
            inr(S.emi) +
            '</strong><em>Obligations ' +
            inr(S.obl) +
            '</em>',
        );
      }
      r2.render(sc, cam);
    }
    requestAnimationFrame(loop);
  })();

  // ---------- Background particles: wave → house → office → factory ----------
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
  // House
  {
    const a = new Float32Array(N * 3),
      body = Math.floor(N * 0.56),
      roofN = Math.floor(N * 0.3),
      chim = Math.floor(N * 0.05);
    boxPoints(a, 0, body, 0, -2.6, 0, 4.2, 2.6, 3.0, 0.6);
    for (let k = 0; k < roofN; k++) {
      const u = rnd(),
        side = rnd() < 0.5 ? -1 : 1,
        edge = rnd() < 0.35;
      setP(a, body + k, side * 2.4 * (1 - u), 0 + 1.7 * u, edge ? (rnd() < 0.5 ? -1.7 : 1.7) : (rnd() - 0.5) * 3.4);
    }
    boxPoints(a, body + roofN, chim, 1.2, 0.5, -0.6, 0.45, 1.3, 0.45, 0.7);
    for (let k = body + roofN + chim; k < N; k++) {
      const u = rnd(); // door + windows on front face
      if (u < 0.4) setP(a, k, -0.3 + rnd() * 0.6 * (rnd() < 0.5 ? 0 : 1), -2.6 + rnd() * 1.3, 1.5);
      else if (u < 0.55) setP(a, k, -0.3 + rnd() * 0.6, -1.3, 1.5);
      else {
        const wx = rnd() < 0.5 ? -1.4 : 1.4,
          edge = rnd();
        const t = rnd();
        setP(
          a,
          k,
          edge < 0.5 ? wx - 0.35 + t * 0.7 : wx + (rnd() < 0.5 ? -0.35 : 0.35),
          edge < 0.5 ? (rnd() < 0.5 ? -1.6 : -0.9) : -1.6 + t * 0.7,
          1.5,
        );
      }
    }
    shapes.push(a);
  }
  // Office towers
  {
    const a = new Float32Array(N * 3),
      t1 = Math.floor(N * 0.42),
      t2 = Math.floor(N * 0.26),
      fl = Math.floor(N * 0.27);
    boxPoints(a, 0, t1, -0.7, -3, 0, 1.9, 5.8, 1.9, 0.55);
    boxPoints(a, t1, t2, 1.4, -3, 0.3, 2.2, 3.2, 1.8, 0.55);
    for (let k = 0; k < fl; k++) {
      const big = rnd() < 0.65,
        b = big ? [-0.7, 0, 1.9, 1.9, 5.8] : [1.4, 0.3, 2.2, 1.8, 3.2];
      const lv = Math.floor(rnd() * Math.floor(b[4] / 0.45)) * 0.45 + 0.45;
      const per = rnd() * 4,
        s = per % 1,
        side = Math.floor(per);
      let x, z;
      if (side === 0) {
        x = b[0] - b[2] / 2 + s * b[2];
        z = b[1] + b[3] / 2;
      } else if (side === 1) {
        x = b[0] + b[2] / 2;
        z = b[1] + b[3] / 2 - s * b[3];
      } else if (side === 2) {
        x = b[0] + b[2] / 2 - s * b[2];
        z = b[1] - b[3] / 2;
      } else {
        x = b[0] - b[2] / 2;
        z = b[1] - b[3] / 2 + s * b[3];
      }
      setP(a, t1 + t2 + k, x, -3 + Math.min(lv, b[4]), z);
    }
    for (let k = t1 + t2 + fl; k < N; k++) setP(a, k, -0.7, 2.8 + rnd() * 1.0, 0);
    shapes.push(a);
  }
  // Factory
  {
    const a = new Float32Array(N * 3),
      hall = Math.floor(N * 0.45),
      teeth = Math.floor(N * 0.25),
      ch = Math.floor(N * 0.18);
    boxPoints(a, 0, hall, 0.4, -3, 0, 5.4, 1.8, 2.8, 0.55);
    const tw = 5.4 / 3,
      x0 = 0.4 - 2.7;
    for (let k = 0; k < teeth; k++) {
      const j = Math.floor(rnd() * 3),
        u = rnd(),
        z = (rnd() - 0.5) * 2.8,
        vert = rnd() < 0.35;
      setP(
        a,
        hall + k,
        vert ? x0 + (j + 1) * tw : x0 + j * tw + u * tw,
        vert ? -1.2 + u * 1.0 : -1.2 + u * 1.0,
        rnd() < 0.3 ? (rnd() < 0.5 ? -1.4 : 1.4) : z,
      );
    }
    for (let k = 0; k < ch; k++) {
      const c = rnd() < 0.5 ? -1.9 : -1.0,
        t = rnd() * Math.PI * 2;
      setP(a, hall + teeth + k, c + Math.cos(t) * 0.24, -1.2 + rnd() * 3.0, -0.7 + Math.sin(t) * 0.24);
    }
    for (let k = hall + teeth + ch; k < N; k++) {
      const c = rnd() < 0.5 ? -1.9 : -1.0,
        h = rnd(),
        sp = 0.2 + h * 0.9,
        t = rnd() * Math.PI * 2,
        rr = sp * Math.sqrt(rnd());
      setP(a, k, c + h * 1.2 + Math.cos(t) * rr, 1.9 + h * 1.8, -0.7 + Math.sin(t) * rr);
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
