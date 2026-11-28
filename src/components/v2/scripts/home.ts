/* eslint-disable */
// @ts-nocheck
/**
 * Interaction script for the home page, ported from the design prototype in source-html/new.
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
  const short = (n) => (n >= 1e7 ? '₹' + (n / 1e7).toFixed(2) + ' Cr' : '₹' + (n / 1e5).toFixed(2) + ' L');
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const sstep = (a, b, x) => {
    const t = clamp((x - a) / (b - a), 0, 1);
    return t * t * (3 - 2 * t);
  };
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
  const nav = $('#nav');
  const onNav = () => nav.classList.toggle('is-solid', scrollY > 40);
  addEventListener('scroll', onNav, { passive: true });
  onNav();

  function tween(el, to, fmt, dur = 700) {
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

  // ---------- Hero estimator ----------
  $('#unlock').addEventListener('submit', (e) => e.preventDefault());
  let ltv = 0.5;
  const pv = $('#pv'),
    unlockVal = $('#unlock-val');
  const pvValue = () => Math.round((1e5 * Math.pow(10, (pv.value / 1000) * 3)) / 1000) * 1000;
  function updEst() {
    setFill(pv);
    const v = pvValue();
    $('#pv-out').textContent = short(v);
    tween(unlockVal, v * ltv, inr);
  }
  pv.addEventListener('input', updEst);
  $$('.seg button').forEach((b) =>
    b.addEventListener('click', () => {
      $$('.seg button').forEach((x) => x.setAttribute('aria-pressed', x === b));
      ltv = +b.dataset.ltv;
      updEst();
    }),
  );
  unlockVal._v = 2500000;
  updEst();
  $('#est-go').addEventListener('click', () => {
    $('#step2').classList.add('open');
    setTimeout(() => $('#phone').focus(), 300);
  });
  $('#est-send').addEventListener('click', () => {
    const msg = $('#est-msg'),
      name = $('#phone-name').value.trim(),
      p = $('#phone').value.replace(/\D/g, '').slice(-10);
    if (name.length < 2) {
      msg.textContent = 'Enter your name.';
      $('#phone-name').focus();
      return;
    }
    if (p.length !== 10) {
      msg.textContent = 'Enter a 10-digit mobile number.';
      $('#phone').focus();
      return;
    }
    if (!$('#phone-ok').checked) {
      msg.textContent = 'Tick the box to let Infina contact you about this enquiry.';
      return;
    }
    msg.textContent = 'Sending…';
    const held = $('#unlock .seg [aria-pressed="true"]');
    __submitLead({
      name,
      mobile: p,
      interest:
        'Portfolio estimate ' + $('#unlock-val').textContent + (held ? ' (' + held.textContent.trim() + ')' : ''),
      website: ($('#unlock [name="website"]') || {}).value || '',
    }).then((r) => {
      msg.textContent = r.ok ? 'Thank you. We will call you shortly.' : r.error;
    });
  });

  // ---------- Who we serve: 3D ring ----------
  const icons = {
    person: '<path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
    rocket:
      '<path d="M12 15l-3-3c1-4 4-8 10-9-1 6-5 9-9 10z"/><path d="M9 12H5l2-4h4M12 15v4l4-2v-4"/><path d="M6 17c-1 1-1.5 3-1.5 3s2-.5 3-1.5"/>',
    shop: '<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9h16v2a3 3 0 01-5.3 2 3 3 0 01-5.4 0A3 3 0 014 11V9zM5 13v8h14v-8"/><path d="M10 21v-4h4v4"/>',
    crane:
      '<path d="M5 21V5h2v16M3 21h8M7 5l12 3M7 5L5 3M17 8v5"/><rect x="15" y="13" width="4" height="3"/><path d="M14 21v-4h6v4"/>',
    tower: '<path d="M4 21h16M6 21V8l6-4 6 4v13"/><path d="M10 21v-4h4v4M9 10h1M14 10h1M9 13h1M14 13h1"/>',
  };
  const segs = [
    {
      t: 'Individuals',
      i: 'person',
      d: 'Fund education, medical expenses or investments, without selling your assets.',
      p: ['Loan Against Securities', 'Loan Against Property'],
    },
    {
      t: 'Startup founders and employees',
      i: 'rocket',
      d: 'Unlock ESOP value and raise capital for growth, hiring and expansion.',
      p: ['ESOP Financing', 'Loan Against Securities'],
    },
    {
      t: 'Small and medium businesses',
      i: 'shop',
      d: 'Improve cash flow and fund operations, expansion or new opportunities.',
      p: ['Loan Against Property', 'Loan Against Securities'],
    },
    {
      t: 'Real estate developers',
      i: 'crane',
      d: 'Structured financing for construction, inventory and project completion.',
      p: ['Corporate Real Estate', 'Loan Against Property'],
    },
    {
      t: 'Corporate enterprises',
      i: 'tower',
      d: 'Large-scale structured finance for expansion, acquisitions and long-term growth.',
      p: ['Corporate Real Estate', 'Loan Against Securities'],
    },
  ];
  const ring = $('#ring'),
    scene = $('#scene'),
    dots = $('#dots'),
    serve = $('#serve');
  const STEP = 360 / segs.length;
  segs.forEach((s, i) => {
    const c = document.createElement('div');
    c.className = 'acard';
    c.dataset.i = i;
    c.innerHTML =
      '<div class="acard-in"><span class="shine"></span><span class="glyph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      icons[s.i] +
      '</svg></span><h3>' +
      s.t +
      '</h3><p>' +
      s.d +
      '</p><div class="reco">' +
      s.p.map((x) => '<a href="#products">' + x + '</a>').join('') +
      '</div></div>';
    ring.appendChild(c);
    const d = document.createElement('button');
    d.type = 'button';
    d.textContent =
      s.t.split(' ')[0] === 'Startup'
        ? 'Startups'
        : s.t
            .replace('Small and medium businesses', 'SMEs')
            .replace('Real estate developers', 'Developers')
            .replace('Corporate enterprises', 'Corporates');
    d.addEventListener('click', () => goServe(i));
    dots.appendChild(d);
  });
  const cards = $$('.acard'),
    dotBtns = $$('#dots button');
  let R = 400,
    cw = 340,
    chh = 420;
  function layoutRing() {
    const w = innerWidth;
    cw = w < 600 ? Math.min(290, w - 64) : 340;
    chh = w < 600 ? 380 : Math.min(420, scene.clientHeight - 20);
    R = Math.round((cw / 2 / Math.tan(Math.PI / segs.length)) * 1.55);
    ring.style.setProperty('--cw', cw + 'px');
    ring.style.setProperty('--ch', chh + 'px');
    cards.forEach((c, i) => (c.style.transform = 'rotateY(' + i * STEP + 'deg) translateZ(' + R + 'px)'));
  }
  layoutRing();
  function serveSpan() {
    return serve.offsetHeight - innerHeight;
  }
  function goServe(i) {
    i = (i + segs.length) % segs.length;
    scrollTo({
      top: serve.offsetTop + serveSpan() * (i / (segs.length - 1)) + 2,
      behavior: reduce ? 'auto' : 'smooth',
    });
  }
  cards.forEach((c, i) =>
    c.addEventListener('click', (e) => {
      if (!c.classList.contains('is-active')) {
        e.preventDefault();
        goServe(i);
      }
    }),
  );
  $('#prev').addEventListener('click', () => goServe(activeSeg - 1));
  $('#next').addEventListener('click', () => goServe(activeSeg + 1));
  let serveTarget = 0,
    serveCur = 0,
    activeSeg = -1;
  // tilt + light on the active card
  scene.addEventListener('pointermove', (e) => {
    const c = cards[activeSeg];
    if (!c || reduce) return;
    const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    const inn = c.firstChild;
    inn.style.transform = 'rotateY(' + x * 14 + 'deg) rotateX(' + -y * 14 + 'deg) translateZ(30px)';
    inn.style.setProperty('--sx', x * 60 + '%');
    inn.style.setProperty('--sy', y * 60 + '%');
  });
  scene.addEventListener('pointerleave', () => cards.forEach((c) => (c.firstChild.style.transform = '')));
  function renderRing() {
    const rot = serveCur * STEP;
    ring.style.transform = 'translateZ(' + -R + 'px) rotateY(' + -rot + 'deg)';
    const a = Math.round(serveCur);
    cards.forEach((c, i) => {
      const d = Math.abs(((((i - serveCur) % segs.length) + segs.length * 1.5) % segs.length) - segs.length / 2);
      c.style.opacity = clamp(1 - d * 0.42, 0, 1);
      c.style.filter = d > 0.5 && !reduce ? 'blur(' + Math.min(4, d * 2.2) + 'px)' : 'none';
    });
    if (a !== activeSeg) {
      activeSeg = a;
      cards.forEach((c, i) => {
        const on = i === a;
        c.classList.toggle('is-active', on);
        c.inert = !on;
        if (!on) c.firstChild.style.transform = '';
      });
      dotBtns.forEach((b, i) => b.setAttribute('aria-current', i === a));
    }
  }

  // ---------- Calculator ----------
  const cA = $('#c-amt'),
    cT = $('#c-ten'),
    cR = $('#c-rate');
  const amt = () => {
    const v = 5e4 * Math.pow(1e3, cA.value / 1000);
    return v > 1e6 ? Math.round(v / 1e5) * 1e5 : Math.round(v / 1e4) * 1e4;
  };
  let calcState = { P: 2500000, I: 262500 };
  let userTouched = false;
  function updCalc() {
    [cA, cT, cR].forEach(setFill);
    const P = amt(),
      n = +cT.value,
      r = +cR.value,
      m = (P * r) / 1200,
      I = m * n,
      T = P + I;
    $('#c-amt-out').textContent = inr(P);
    $('#c-ten-out').textContent = n + (n === 1 ? ' month' : ' months');
    $('#c-rate-out').textContent = r.toFixed(2) + '% p.a.';
    tween($('#r-month'), m, inr);
    tween($('#r-p'), P, inr);
    tween($('#r-i'), I, inr);
    tween($('#r-t'), T, inr);
    $('#tag-p strong').textContent = inr(P);
    $('#tag-i strong').textContent = inr(I);
    $('#ratio').textContent = ((I / P) * 100).toFixed(1) + '%';
    calcState = { P, I };
    if (userTouched) {
      const rc = $('#recap');
      rc.hidden = false;
      rc.textContent = 'Your estimate: ' + inr(P) + ' for ' + n + ' months at ' + r.toFixed(2) + '%';
    }
    if (window.__col) window.__col.update(P, I, n);
  }
  [cA, cT, cR].forEach((x) =>
    x.addEventListener('input', () => {
      userTouched = true;
      updCalc();
    }),
  );
  updCalc();

  // ---------- Compare ----------
  const flip = $('#flip'),
    tog = $('#toggle');
  $$('#toggle button').forEach((b) =>
    b.addEventListener('click', () => {
      const sell = b.dataset.v === 'sell';
      $$('#toggle button').forEach((x) => x.setAttribute('aria-pressed', x === b));
      flip.classList.toggle('sell', sell);
      tog.classList.toggle('sell', sell);
      flip.querySelector('.front').setAttribute('aria-hidden', sell);
      flip.querySelector('.back').setAttribute('aria-hidden', !sell);
    }),
  );

  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.15 },
  );
  $$('.reveal').forEach((el) => io.observe(el));

  // ---------- Scroll state ----------
  const products = $('#products'),
    chapters = $$('.chapter'),
    railBtns = $$('#rail button');
  const track = $('#track'),
    steps = $$('.step'),
    year = $('#year'),
    stage = $('#stage');
  let prodProgress = 0,
    heroProgress = 0,
    serveEnter = 0,
    serveProg = 0,
    curChapter = 0,
    stageVisible = true,
    calcProg = 0;
  railBtns.forEach((b, i) =>
    b.addEventListener('click', () => {
      scrollTo({
        top: products.offsetTop + ((products.offsetHeight - innerHeight) * (i + 0.5)) / 4,
        behavior: reduce ? 'auto' : 'smooth',
      });
    }),
  );
  function onScroll() {
    const vh = innerHeight;
    heroProgress = clamp(scrollY / vh, 0, 1);
    const pr = products.getBoundingClientRect();
    prodProgress = clamp(-pr.top / (products.offsetHeight - vh), 0, 1);
    const ch = Math.min(3, Math.floor(prodProgress * 4));
    railBtns.forEach((b, i) => {
      b.style.setProperty('--p', clamp(prodProgress * 4 - i, 0, 1));
      b.setAttribute('aria-current', i === ch);
    });
    if (ch !== curChapter) {
      chapters[curChapter].classList.remove('is-active');
      chapters[ch].classList.add('is-active');
      curChapter = ch;
    }
    const sr = serve.getBoundingClientRect();
    serveEnter = clamp(1 - sr.top / vh, 0, 1);
    serveProg = clamp(-sr.top / serveSpan(), 0, 1);
    const f = serveProg * (segs.length - 1),
      i = Math.floor(f),
      fr = f - i;
    serveTarget = Math.min(segs.length - 1, i + sstep(0.3, 0.7, fr));
    if (!reduce) {
      const yr = year.getBoundingClientRect();
      year.style.setProperty('--hx', (yr.top - vh / 2) * 0.25 + 'px');
      year.style.setProperty('--rx', clamp(((yr.top - vh / 2) / vh) * 50, -35, 35) + 'deg');
    }
    const cs = $('#calc-stage').getBoundingClientRect();
    calcProg = clamp((vh - cs.top) / (vh * 0.9), 0, 1);
    stageVisible = sr.bottom > 0;
    stage.style.opacity = clamp(sr.bottom / (vh * 0.7), 0, 1);
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => {
    layoutRing();
    onScroll();
  });
  onScroll();
  serveCur = serveTarget;

  // DOM animation loop for the ring
  (function ringLoop() {
    serveCur += (serveTarget - serveCur) * (reduce ? 1 : 0.09);
    renderRing();
    requestAnimationFrame(ringLoop);
  })();

  // ---------- Smarter partner: stack fans into a grid ----------
  const partner = $('#partner'),
    deck = $('#deck'),
    pcards = $$('.pcard');
  let dd = { pw: 360, ph: 280, g: 20 },
    deckTarget = 0,
    deckCur = 0;
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  function layoutDeck() {
    if (innerWidth <= 900) return;
    const W = deck.clientWidth,
      H = deck.clientHeight,
      g = 20;
    dd = { pw: (W - 2 * g) / 3, ph: (H - g) / 2, g };
    deck.style.setProperty('--pw', dd.pw + 'px');
    deck.style.setProperty('--ph', dd.ph + 'px');
  }
  function deckScroll() {
    const r = partner.getBoundingClientRect(),
      span = partner.offsetHeight - innerHeight;
    deckTarget = reduce ? 1 : clamp((innerHeight * 0.35 - r.top) / (innerHeight * 0.35 + span * 0.6), 0, 1);
  }
  function renderDeck() {
    if (innerWidth <= 900) return;
    pcards.forEach((c, i) => {
      const col = i % 3,
        row = Math.floor(i / 3);
      const e = easeOut(clamp(deckCur * 1.5 - i * 0.1, 0, 1));
      const x = (col - 1) * (dd.pw + dd.g) * e,
        y = (row - 0.5) * (dd.ph + dd.g) * e + (1 - e) * 40;
      const z = (1 - e) * (-i * 36) + Math.sin(e * Math.PI) * 140;
      c.style.transform =
        'translate3d(' +
        x +
        'px,' +
        y +
        'px,' +
        z +
        'px) rotateX(' +
        (1 - e) * 14 +
        'deg) rotateY(' +
        (1 - e) * (col - 1) * -28 +
        'deg) rotateZ(' +
        (1 - e) * (i - 2.5) * 7 +
        'deg)';
      c.style.zIndex = Math.round(20 + e * 10 - i);
    });
  }
  pcards.forEach((c) => {
    const inn = c.firstElementChild;
    c.addEventListener('pointermove', (e) => {
      if (reduce || innerWidth <= 900) return;
      const r = c.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5,
        y = (e.clientY - r.top) / r.height - 0.5;
      inn.style.transform =
        'perspective(900px) rotateY(' + x * 12 + 'deg) rotateX(' + -y * 12 + 'deg) translateZ(14px)';
      inn.style.setProperty('--sx', x * 60 + '%');
      inn.style.setProperty('--sy', y * 60 + '%');
    });
    c.addEventListener('pointerleave', () => (inn.style.transform = ''));
  });

  // ---------- Potential: word reveal (crystal is drawn in the WebGL section) ----------
  const scrub = $('#scrub'),
    potScene = $('#pot-scene'),
    chips = $$('.chip3d');
  scrub.innerHTML = scrub.textContent
    .trim()
    .split(/\s+/)
    .map((w) => '<span class="w">' + w + '</span>')
    .join(' ');
  const wEls = $$('#scrub .w');
  let potVisible = false,
    pm = { x: 0, y: 0, tx: 0, ty: 0 },
    lastLit = -1;
  new IntersectionObserver((es) => es.forEach((e) => (potVisible = e.isIntersecting))).observe(potScene);
  potScene.addEventListener('pointermove', (e) => {
    const r = potScene.getBoundingClientRect();
    pm.tx = (e.clientX - r.left) / r.width - 0.5;
    pm.ty = (e.clientY - r.top) / r.height - 0.5;
  });
  potScene.addEventListener('pointerleave', () => {
    pm.tx = 0;
    pm.ty = 0;
  });
  function potScroll() {
    const r = scrub.getBoundingClientRect();
    const p = reduce ? 1 : clamp((innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35), 0, 1);
    const n = Math.round(p * wEls.length);
    if (n !== lastLit) {
      wEls.forEach((w, i) => w.classList.toggle('on', i < n));
      lastLit = n;
    }
  }
  let renderPot = () => {};

  // ---------- Journey fly-through ----------
  const journey = $('#process'),
    jsteps = $$('.jstep'),
    jl = $$('#jlabels li'),
    tfloor = $('#tfloor');
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
      const x = side * k,
        ry = -k * (i % 2 ? 1 : -1) * 14;
      const op = z > 0 ? clamp(1 - z / 320, 0, 1) : clamp(1 + z / (D * 1.7), 0, 1);
      const bl = reduce ? 0 : z > 0 ? Math.min(10, z / 40) : Math.min(5, (-z / D) * 3);
      st.style.transform = 'translate3d(' + x + 'px,0,' + z + 'px) rotateY(' + ry + 'deg)';
      st.style.opacity = op;
      st.style.filter = bl > 0.2 ? 'blur(' + bl.toFixed(1) + 'px)' : 'none';
      st.style.visibility = op <= 0.01 ? 'hidden' : 'visible';
    });
    tfloor.style.setProperty('--fy', travel * 0.45 + 'px');
    const a = Math.round(travel / D);
    jl.forEach((l, i) => l.classList.toggle('on', i <= a));
  }

  // ---------- Heading mask reveal ----------
  const mio = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          mio.unobserve(e.target);
        }
      }),
    { threshold: 0.4 },
  );
  $$('main h2').forEach((h) => {
    if (h.closest('.chapter') || h.closest('.estimator')) return;
    h.classList.add('mk');
    h.innerHTML = '<span class="mk-in">' + h.innerHTML + '</span>';
    mio.observe(h);
  });

  // ---------- FAQ smooth open/close ----------
  $$('.faq details').forEach((d) => {
    const sm = d.querySelector('summary');
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

  // ---------- Compare card tilt ----------
  const flipIn = $('.flip-inner'),
    flipEl = $('#flip');
  if (!reduce) {
    flipEl.addEventListener('pointermove', (e) => {
      const r = flipEl.getBoundingClientRect();
      flipIn.style.setProperty('--tx', ((e.clientX - r.left) / r.width - 0.5) * 14 + 'deg');
      flipIn.style.setProperty('--ty', -((e.clientY - r.top) / r.height - 0.5) * 10 + 'deg');
    });
    flipEl.addEventListener('pointerleave', () => {
      flipIn.style.setProperty('--tx', '0deg');
      flipIn.style.setProperty('--ty', '0deg');
    });
  }

  // ---------- Final CTA gyroscope follows the pointer ----------
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

  // ---------- Cursor, magnetic buttons, progress ----------
  const cur = $('#cursor');
  if (!reduce && matchMedia('(hover:hover) and (pointer:fine)').matches) {
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
        cur.classList.toggle('hot', !!e.target.closest('a,button,input,summary,.acard,.pcard,.calc-stage,.flip'));
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
  }
  const prog = $('#progress');
  function progressBar() {
    prog.style.setProperty('--sp', clamp(scrollY / (document.documentElement.scrollHeight - innerHeight), 0, 1));
  }

  function extrasScroll() {
    deckScroll();
    potScroll();
    jScroll();
    progressBar();
  }
  addEventListener('scroll', extrasScroll, { passive: true });
  addEventListener('resize', () => {
    layoutDeck();
    extrasScroll();
  });
  layoutDeck();
  extrasScroll();
  deckCur = deckTarget;
  (function extrasLoop(now) {
    const r = partner.getBoundingClientRect();
    if (r.bottom > -100 && r.top < innerHeight + 100) {
      deckCur += (deckTarget - deckCur) * (reduce ? 1 : 0.1);
      renderDeck();
    }
    const jr = journey.getBoundingClientRect();
    if (jr.bottom > 0 && jr.top < innerHeight) {
      jC += (jT - jC) * (reduce ? 1 : 0.1);
      renderJ();
    }
    const fr = finalSec.getBoundingClientRect();
    if (fr.bottom > 0 && fr.top < innerHeight) {
      gx += (gtx - gx) * 0.05;
      gy += (gty - gy) * 0.05;
      gyro.style.setProperty('--gx', gx + 'deg');
      gyro.style.setProperty('--gy', gy + 'deg');
    }
    if (potVisible) renderPot(now || 0);
    requestAnimationFrame(extrasLoop);
  })();
  renderDeck();
  renderPot(0);
  jC = jT;
  renderJ();

  if (!hasGL) {
    stage.remove();
    return;
  }

  // ---------- Background particle stage ----------
  const renderer = new THREE.WebGLRenderer({ canvas: stage, antialias: false, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene3 = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 11);
  const mobile = matchMedia('(max-width: 900px)').matches;
  const N = mobile ? 3200 : 6500;
  let seed = 7;
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
  const shapes = [];
  {
    const a = new Float32Array(N * 3),
      cols = Math.round(Math.sqrt(N * 2.6)),
      rows = Math.ceil(N / cols);
    for (let i = 0; i < N; i++) {
      const c = i % cols,
        r = Math.floor(i / cols),
        x = (c / cols - 0.5) * 18,
        z = (r / rows - 0.5) * 7;
      a[i * 3] = x;
      a[i * 3 + 1] = 0.22 * x + Math.sin(x * 0.5 + z * 0.8) * 0.55 - 1.2;
      a[i * 3 + 2] = z;
    }
    shapes.push(a);
  }
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
      for (let k = body; k < cnt; k++) {
        const i3 = (per * b + k) * 3;
        a[i3] = x;
        a[i3 + 1] = -3.1 + b * 0.18 + rnd() * (h + 1.0);
        a[i3 + 2] = 0;
      }
    }
    shapes.push(a);
  }
  {
    const a = new Float32Array(N * 3),
      S = Math.floor(N * 0.62),
      g = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < S; i++) {
      const y = 1 - (i / (S - 1)) * 2,
        rr = Math.sqrt(1 - y * y),
        th = g * i;
      a[i * 3] = Math.cos(th) * rr * 2.3;
      a[i * 3 + 1] = y * 2.3;
      a[i * 3 + 2] = Math.sin(th) * rr * 2.3;
    }
    for (let i = S; i < N; i++) {
      const t = rnd() * Math.PI * 2,
        ring = i % 2,
        R = ring ? 3.5 : 4.1,
        tilt = ring ? 0.5 : -0.35,
        x = Math.cos(t) * R,
        z = Math.sin(t) * R * 0.35;
      a[i * 3] = x;
      a[i * 3 + 1] = z * Math.sin(tilt) * 2;
      a[i * 3 + 2] = z * Math.cos(tilt) * 2;
    }
    shapes.push(a);
  }
  {
    const a = new Float32Array(N * 3),
      body = Math.floor(N * 0.62);
    boxPoints(a, 0, body, 0, -2.2, 0, 4.0, 2.6, 3.0, 0.6);
    for (let k = body; k < N; k++) {
      const u = rnd(),
        side = rnd() < 0.5 ? -1 : 1,
        edge = rnd() < 0.35,
        z = edge ? (rnd() < 0.5 ? -1.6 : 1.6) : (rnd() - 0.5) * 3.2;
      const i3 = k * 3;
      a[i3] = side * 2.2 * (1 - u);
      a[i3 + 1] = 0.4 + 1.6 * u;
      a[i3 + 2] = z;
    }
    shapes.push(a);
  }
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
  // 5: spiral galaxy disc behind the audience ring
  {
    const a = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 2.4 + Math.pow(rnd(), 0.7) * 5.2,
        arm = i % 3,
        th = (arm * 2 * Math.PI) / 3 + r * 0.75 + (rnd() - 0.5) * 0.55;
      a[i * 3] = Math.cos(th) * r;
      a[i * 3 + 1] = (rnd() - 0.5) * 0.18;
      a[i * 3 + 2] = Math.sin(th) * r;
    }
    shapes.push(a);
  }
  const scatter = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const th = rnd() * Math.PI * 2,
      ph = Math.acos(2 * rnd() - 1),
      R = 8 + rnd() * 10;
    scatter[i * 3] = R * Math.sin(ph) * Math.cos(th);
    scatter[i * 3 + 1] = R * Math.sin(ph) * Math.sin(th);
    scatter[i * 3 + 2] = R * Math.cos(ph) - 4;
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
    blending: THREE.NormalBlending,
    uniforms: {
      uTime: { value: 0 },
      uWave: { value: 1 },
      uAlpha: { value: 1 },
      uSize: { value: mobile ? 2.8 : 2.6 },
      uPixel: { value: renderer.getPixelRatio() },
      uA: { value: new THREE.Color('#0C2459') },
      uB: { value: new THREE.Color('#3D6BE0') },
      uC: { value: new THREE.Color('#9AB3F2') },
      uR: { value: new THREE.Color('#D3241D') },
    },
    vertexShader: `attribute float aRand; uniform float uTime,uWave,uSize,uPixel; varying float vR; varying float vD;
      void main(){ vec3 p=position; p.y += sin(p.x*.8+uTime*.7+p.z*.9)*.38*uWave;
        p += .035*vec3(sin(uTime*1.3+aRand*40.),cos(uTime*1.1+aRand*30.),sin(uTime*.9+aRand*20.));
        vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
        gl_PointSize=uSize*uPixel*(.6+aRand*.9)*(10./-mv.z); vR=aRand; vD=-mv.z; }`,
    fragmentShader: `uniform vec3 uA,uB,uC,uR; uniform float uAlpha; varying float vR; varying float vD;
      void main(){ vec2 c=gl_PointCoord-.5; float d=length(c); if(d>.5) discard;
        float a=smoothstep(.5,.2,d); vec3 col = vR<.45 ? mix(uA,uB,vR/.45) : mix(uB,uC,(vR-.45)/.48);
        if(vR>.93) col=uR; float f=smoothstep(22.,7.,vD);
        gl_FragColor=vec4(col,a*.9*f*uAlpha); }`,
  });
  const group = new THREE.Group();
  group.add(new THREE.Points(geo, mat));
  scene3.add(group);
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
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  // ---------- Calculator: glass loan column with monthly interest bands ----------
  (function column() {
    const cv = $('#coins'),
      host = $('#calc-stage');
    const r2 = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
    r2.setPixelRatio(Math.min(devicePixelRatio, 2));
    const sc = new THREE.Scene(),
      cam = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    sc.add(new THREE.HemisphereLight(0xffffff, 0xb9c6e6, 0.95));
    const d1 = new THREE.DirectionalLight(0xffffff, 0.85);
    d1.position.set(5, 9, 7);
    sc.add(d1);
    const d2 = new THREE.DirectionalLight(0xa9c0ff, 0.5);
    d2.position.set(-6, 3, -5);
    sc.add(d2);
    const sh = document.createElement('canvas');
    sh.width = sh.height = 128;
    const g2 = sh.getContext('2d');
    const gr = g2.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(12,36,89,.26)');
    gr.addColorStop(1, 'rgba(12,36,89,0)');
    g2.fillStyle = gr;
    g2.fillRect(0, 0, 128, 128);
    const shp = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 6),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sh), transparent: true, depthWrite: false }),
    );
    shp.rotation.x = -Math.PI / 2;
    sc.add(shp);
    const circle = (r, seg) => {
      const pts = [];
      for (let i = 0; i <= seg; i++) {
        const t = (i / seg) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(t) * r, 0, Math.sin(t) * r));
      }
      return new THREE.BufferGeometry().setFromPoints(pts);
    };
    const ground = new THREE.Group();
    sc.add(ground);
    [1.9, 2.5, 3.1].forEach((r, i) =>
      ground.add(
        new THREE.Line(
          circle(r, 96),
          new THREE.LineBasicMaterial({ color: 0x0c2459, transparent: true, opacity: 0.12 - i * 0.03 }),
        ),
      ),
    );
    const cyl = new THREE.CylinderGeometry(1, 1, 1, 96);
    cyl.translate(0, 0.5, 0);
    const R = 1.25,
      HP = 3.4,
      MAXM = 36;
    const glass = new THREE.Mesh(
      cyl,
      new THREE.MeshStandardMaterial({
        color: 0xc9d6f5,
        transparent: true,
        opacity: 0.2,
        roughness: 0.08,
        metalness: 0.1,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    const rimTop = new THREE.Line(
      circle(R + 0.14, 96),
      new THREE.LineBasicMaterial({ color: 0x0c2459, transparent: true, opacity: 0.5 }),
    );
    const rimBot = new THREE.Line(
      circle(R + 0.14, 96),
      new THREE.LineBasicMaterial({ color: 0x0c2459, transparent: true, opacity: 0.5 }),
    );
    const core = new THREE.Mesh(
      cyl,
      new THREE.MeshStandardMaterial({ color: 0x0c2459, roughness: 0.28, metalness: 0.35 }),
    );
    sc.add(glass, rimTop, rimBot, core);
    const bands = Array.from({ length: MAXM }, () => {
      const m = new THREE.Mesh(
        cyl,
        new THREE.MeshStandardMaterial({
          color: 0xd3241d,
          roughness: 0.35,
          metalness: 0.15,
          emissive: 0xff4a3d,
          emissiveIntensity: 0,
        }),
      );
      m.visible = false;
      sc.add(m);
      return m;
    });
    const orbit = new THREE.Line(
      circle(R + 0.5, 128),
      new THREE.LineBasicMaterial({ color: 0xd3241d, transparent: true, opacity: 0.55 }),
    );
    sc.add(orbit);
    const marker = new THREE.Mesh(
      new THREE.SphereGeometry(0.07, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xd3241d }),
    );
    sc.add(marker);
    let hI = 0.3,
      tI = 0.3,
      months = 12,
      grow = 0,
      started = false;
    const tagI = $('#tag-i');
    window.__col = {
      update(P, I, n) {
        tI = (HP * I) / P;
        months = n;
        tagI.firstChild.nodeValue = 'Interest over ' + n + (n === 1 ? ' month' : ' months');
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
          if (visible) started = true;
        }),
      { threshold: 0.25 },
    ).observe(host);
    const v3 = new THREE.Vector3(),
      tagP = $('#tag-p');
    function place(tag, x, y, z) {
      v3.set(x, y, z);
      v3.project(cam);
      tag.style.transform =
        'translate(' +
        (v3.x * 0.5 + 0.5) * host.clientWidth +
        'px,' +
        (-v3.y * 0.5 + 0.5) * host.clientHeight +
        'px) translate(-50%,-100%)';
    }
    function loop(now) {
      requestAnimationFrame(loop);
      if (!visible) return;
      const dt = Math.min(0.05, (now - t0) / 1000);
      t0 = now;
      if (started) grow = Math.min(1, grow + dt * (reduce ? 99 : 0.55));
      if (down === null) {
        dragV *= 0.94;
        drag += dragV;
      }
      hI += (tI - hI) * Math.min(1, dt * (reduce ? 99 : 5));
      const gCore = easeOut(clamp(grow * 1.6, 0, 1)),
        hp = HP * gCore,
        total = HP + hI;
      core.scale.set(R, Math.max(0.001, hp), R);
      const seg = hI / months,
        gap = Math.min(seg * 0.28, 0.045),
        shown = clamp((grow - 0.45) / 0.55, 0, 1) * months;
      const sweep = reduce ? -1 : (((now / 1000) * 0.9) % (months + 6)) - 3;
      bands.forEach((b, i) => {
        if (i >= months) {
          b.visible = false;
          return;
        }
        const vis = clamp(shown - i, 0, 1);
        b.visible = vis > 0.01;
        b.scale.set(R * (0.985 + 0.015 * vis), Math.max(0.001, (seg - gap) * vis), R * (0.985 + 0.015 * vis));
        b.position.y = hp + i * seg + gap / 2;
        b.material.emissiveIntensity = Math.max(0, 1 - Math.abs(sweep - i) / 1.6) * 0.9;
      });
      const gh = Math.max(0.2, hp + hI * clamp(shown / months, 0, 1) + 0.22);
      glass.scale.set(R + 0.14, gh, R + 0.14);
      rimTop.position.y = gh;
      rimBot.position.y = 0.002;
      const sy = sweep < 0 ? hp : hp + clamp(sweep + 0.5, 0, months) * seg;
      orbit.position.y = sy;
      const ang = (now / 1000) * 1.4;
      marker.position.set(Math.cos(ang) * (R + 0.5), sy, Math.sin(ang) * (R + 0.5));
      const e = reduce ? 1 : ease(calcProg),
        elev = 1.0 - 0.72 * e,
        az = 0.6 + drag + (reduce ? 0 : Math.sin(now / 4200) * 0.15),
        dist = 15.5 - 3 * e,
        look = total * 0.5;
      cam.position.set(
        Math.sin(az) * Math.cos(elev) * dist,
        look + Math.sin(elev) * dist * 0.85,
        Math.cos(az) * Math.cos(elev) * dist,
      );
      cam.lookAt(0, look, 0);
      r2.render(sc, cam);
      place(tagP, Math.sin(az) * (R + 0.2), hp * 0.55, Math.cos(az) * (R + 0.2));
      place(tagI, 0, hp + hI + 0.45, 0);
    }
    requestAnimationFrame(loop);
  })();

  // ---------- Potential: faceted crystal with orbiting assets ----------
  (function crystal() {
    const cv = $('#crystal'),
      host = potScene;
    const r3 = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
    r3.setPixelRatio(Math.min(devicePixelRatio, 2));
    const sc = new THREE.Scene(),
      cam = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    cam.position.set(0, 0.4, 9.5);
    cam.lookAt(0, 0, 0);
    sc.add(new THREE.HemisphereLight(0xffffff, 0xb9c6e6, 0.9));
    const d1 = new THREE.DirectionalLight(0xffffff, 0.9);
    d1.position.set(4, 6, 6);
    sc.add(d1);
    const d2 = new THREE.DirectionalLight(0xff8c82, 0.35);
    d2.position.set(-5, -2, 3);
    sc.add(d2);
    const world = new THREE.Group();
    sc.add(world);
    const ico = new THREE.IcosahedronGeometry(1.75, 0);
    const shell = new THREE.Mesh(
      ico,
      new THREE.MeshStandardMaterial({
        color: 0xdce5fa,
        transparent: true,
        opacity: 0.32,
        roughness: 0.08,
        metalness: 0.2,
        flatShading: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    const shellE = new THREE.LineSegments(
      new THREE.EdgesGeometry(ico),
      new THREE.LineBasicMaterial({ color: 0x0c2459, transparent: true, opacity: 0.55 }),
    );
    const octG = new THREE.OctahedronGeometry(0.9, 0);
    const core = new THREE.Mesh(
      octG,
      new THREE.MeshStandardMaterial({ color: 0x0c2459, roughness: 0.22, metalness: 0.5, flatShading: true }),
    );
    const coreE = new THREE.LineSegments(
      new THREE.EdgesGeometry(octG),
      new THREE.LineBasicMaterial({ color: 0xa9c0ff, transparent: true, opacity: 0.7 }),
    );
    const spark = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.16, 0),
      new THREE.MeshBasicMaterial({ color: 0xd3241d }),
    );
    const shellG = new THREE.Group();
    shellG.add(shell, shellE);
    const coreG = new THREE.Group();
    coreG.add(core, coreE);
    world.add(shellG, coreG, spark);
    const pts = [];
    for (let i = 0; i <= 128; i++) {
      const t = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(t) * 2.9, 0, Math.sin(t) * 2.9));
    }
    const orbitG = new THREE.Group();
    orbitG.rotation.x = 0.32;
    orbitG.rotation.z = -0.12;
    world.add(orbitG);
    orbitG.add(
      new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: 0x0c2459, transparent: true, opacity: 0.22 }),
      ),
    );
    function size() {
      const w = host.clientWidth,
        h = host.clientHeight;
      r3.setSize(w, h, false);
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
      cam.position.z = w < 520 ? 11.5 : 9.5;
    }
    addEventListener('resize', size);
    size();
    const v3 = new THREE.Vector3();
    renderPot = (now) => {
      pm.x += (pm.tx - pm.x) * 0.06;
      pm.y += (pm.ty - pm.y) * 0.06;
      const t = reduce ? 0.6 : now / 1000;
      world.rotation.y = pm.x * 0.6;
      world.rotation.x = pm.y * 0.4;
      shellG.rotation.set(0.35 + t * 0.12, t * 0.22, 0);
      coreG.rotation.set(-t * 0.3, -t * 0.5, t * 0.1);
      coreG.scale.setScalar(1 + (reduce ? 0 : Math.sin(t * 1.6) * 0.04));
      spark.rotation.set(t, t * 1.3, 0);
      r3.render(sc, cam);
      const W = host.clientWidth,
        H = host.clientHeight;
      chips.forEach((c, i) => {
        const th = t * 0.32 + (i * Math.PI) / 2;
        v3.set(Math.cos(th) * 2.9, 0, Math.sin(th) * 2.9);
        orbitG.localToWorld(v3);
        const depth = v3.z;
        v3.project(cam);
        const front = clamp((depth + 2.9) / 5.8, 0, 1);
        c.style.transform =
          'translate(' +
          (v3.x * 0.5 + 0.5) * W +
          'px,' +
          (-v3.y * 0.5 + 0.5) * H +
          'px) scale(' +
          (0.82 + 0.18 * front) +
          ')';
        c.style.opacity = (0.35 + 0.65 * front).toFixed(2);
        c.style.zIndex = front > 0.5 ? 2 : 0;
      });
    };
    renderPot(0);
  })();

  // ---------- Background loop ----------
  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (!stageVisible) return;
    if (intro < 1) intro = Math.min(1, intro + dt / 2.4);
    let tgt;
    if (serveEnter > 0) tgt = 4 + serveEnter;
    else if (prodProgress > 0) {
      const q = prodProgress * 4,
        i = Math.min(3, Math.floor(q)),
        f = q - i;
      tgt = i === 0 ? 1 : i + clamp(f / 0.35, 0, 1);
    } else tgt = heroProgress;
    sm += (tgt - sm) * (reduce ? 1 : Math.min(1, dt * 3.2));
    const k = clamp(sm, 0, 5),
      i0 = Math.min(4, Math.floor(k)),
      f = ease(k - i0);
    const A = shapes[i0],
      B = shapes[Math.min(5, i0 + 1)],
      ie = ease(intro);
    for (let j = 0; j < N * 3; j++) {
      const v = A[j] + (B[j] - A[j]) * f;
      pos[j] = scatter[j] + (v - scatter[j]) * ie;
    }
    geo.attributes.position.needsUpdate = true;
    mat.uniforms.uTime.value = reduce ? 0 : now / 1000;
    mat.uniforms.uWave.value = clamp(1 - k, 0, 1);
    const pk = clamp(k, 0, 1),
      sk = clamp(k - 4, 0, 1);
    mat.uniforms.uAlpha.value = 1 - 0.5 * sk;
    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;
    spin += dt * (reduce ? 0 : 0.04 + 0.22 * pk);
    const ringRad = serveCur * ((Math.PI * 2) / segs.length);
    group.rotation.y = spin * pk * (1 - sk) + sk * (ringRad + spin * 0.15) + mouse.x * 0.35;
    group.rotation.x = (-0.32 * (1 - pk) + 0.12 * pk) * (1 - sk) + sk * 0.42 + mouse.y * 0.18;
    const wide = innerWidth > 900;
    group.position.x = (wide ? 3.1 * pk : 0) * (1 - sk);
    group.position.y = (wide ? 0 : 1.6 * pk) * (1 - sk) - sk * 0.6;
    const s = wide ? 1 : 0.72;
    group.scale.setScalar((1 + (s - 1) * pk) * (1 - sk) + sk * (wide ? 1.15 : 0.8));
    renderer.render(scene3, camera);
  }
  requestAnimationFrame(frame);
}
