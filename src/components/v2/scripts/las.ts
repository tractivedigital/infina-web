/* eslint-disable */
// @ts-nocheck
/**
 * Interaction script for the LAS page, ported from the design prototype in source-html/new.
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
  }
  addEventListener('scroll', chrome, { passive: true });
  chrome();

  // ---------- Heading mask reveal + reveal ----------
  const mio = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          mio.unobserve(e.target);
        }
      }),
    { threshold: 0.35 },
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
  const ct = $('#charge-table');
  $$('#charge-table tbody tr').forEach((tr, i) => (tr.style.transitionDelay = i * 0.08 + 's'));
  mio.observe(ct);

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
        cur.classList.toggle('hot', !!e.target.closest('a,button,input,summary,label,.tilt,.scard,.tw-stage,.cmp-col'));
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
  const segBtns = $$('.lead .seg button');
  segBtns.forEach((b) =>
    b.addEventListener('click', () => segBtns.forEach((x) => x.setAttribute('aria-pressed', x === b))),
  );
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

  // ---------- Story (pinned) ----------
  const story = $('#overview'),
    chapters = $$('.chapter'),
    railBtns = $$('#steps-rail button');
  let storyP = 0,
    heroP = 0,
    curCh = 0;
  railBtns.forEach((b, i) =>
    b.addEventListener('click', () =>
      scrollTo({
        top: story.offsetTop + ((story.offsetHeight - innerHeight) * (i + 0.5)) / 3,
        behavior: reduce ? 'auto' : 'smooth',
      }),
    ),
  );
  function storyScroll() {
    heroP = clamp(scrollY / innerHeight, 0, 1);
    const r = story.getBoundingClientRect();
    storyP = clamp(-r.top / (story.offsetHeight - innerHeight), 0, 1);
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
    const st = $('#stage');
    if (st) st.style.opacity = clamp(r.bottom / (innerHeight * 0.7), 0, 1);
  }
  addEventListener('scroll', storyScroll, { passive: true });
  storyScroll();

  // ---------- Estimator values ----------
  const H = [$('#h-sh'), $('#h-eq'), $('#h-dt')],
    LTV = [0.5, 0.5, 0.8];
  const hv = (r) => (+r.value === 0 ? 0 : Math.round((1e5 * Math.pow(500, (r.value - 1) / 999)) / 1e4) * 1e4);
  const lA = $('#l-amt'),
    lT = $('#l-ten'),
    lR = $('#l-rate');
  let holdings = [0, 0, 0],
    limitV = 0;
  function updEst() {
    [...H, lA, lT, lR].forEach(setFill);
    holdings = H.map(hv);
    limitV = holdings.reduce((s, v, i) => s + v * LTV[i], 0);
    H.forEach((r, i) => ($('#' + r.id + '-o').textContent = inr(holdings[i])));
    tween($('#limit'), limitV, inr);
    const P = Math.round((limitV * lA.value) / 1000 / 1e4) * 1e4,
      n = +lT.value,
      rate = +lR.value;
    const m = (P * rate) / 1200,
      I = m * n;
    $('#l-amt-o').textContent = inr(P) + ' of ' + inr(limitV);
    $('#l-ten-o').textContent = n + (n === 1 ? ' month' : ' months');
    $('#l-rate-o').textContent = rate.toFixed(2) + '% p.a.';
    tween($('#r-m'), m, inr);
    tween($('#r-p'), P, inr);
    tween($('#r-i'), I, inr);
    tween($('#r-t'), P + I, inr);
    if (window.__towers) window.__towers.update(holdings);
  }
  [...H, lA, lT, lR].forEach((r) => r.addEventListener('input', updEst));
  updEst();

  // ---------- Securities coverflow ----------
  const secs = $('#securities'),
    strack = $('#strack'),
    scards = $$('.scard');
  let sCur = 0;
  function renderSecs() {
    if (innerWidth <= 900) {
      strack.style.transform = '';
      scards.forEach((c) => {
        c.firstElementChild.style.transform = '';
        c.style.opacity = '';
      });
      return;
    }
    const r = secs.getBoundingClientRect();
    if (r.bottom < -50 || r.top > innerHeight + 50) return;
    const p = clamp(-r.top / (secs.offsetHeight - innerHeight), 0, 1);
    sCur += (p - sCur) * (reduce ? 1 : 0.1);
    const maxX = Math.max(0, strack.scrollWidth - innerWidth);
    strack.style.transform = 'translate3d(' + -sCur * maxX + 'px,0,0)';
    const vw = innerWidth;
    scards.forEach((c) => {
      const b = c.getBoundingClientRect(),
        d = (b.left + b.width / 2 - vw / 2) / vw;
      c.firstElementChild.style.transform =
        'rotateY(' + clamp(-d * 42, -42, 42) + 'deg) translateZ(' + -Math.abs(d) * 240 + 'px)';
      c.style.opacity = clamp(1.25 - Math.abs(d) * 1.1, 0.3, 1);
    });
  }

  // ---------- Compare: fan-in + row highlight ----------
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
      cols.forEach((c) => (c.style.transform = ''));
      return;
    }
    cols.forEach((c, i) => {
      const e = easeOut(clamp(cmpC * 1.4 - i * 0.15, 0, 1)),
        side = i - 1;
      const lift = i === 0 ? 30 * e : 0;
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

  // ---------- Eligibility: tabs, flip, checklist ----------
  const DOCS = [
    [
      'Identity and address proof',
      'Income tax returns for the last 3 years, with income computation',
      'Net worth statement certified by a chartered accountant',
    ],
    [
      'Certificate of incorporation, MOA and AOA',
      'Board resolution authorising the borrowing and pledge',
      'PAN and address proof of the company',
      'KYC of directors and authorised signatories',
      'Audited financial statements for the last 3 years',
    ],
    [
      'Trust deed',
      'Resolution of trustees authorising the borrowing and pledge',
      'PAN and address proof of the trust',
      'KYC of trustees',
      'Financial statements for the last 3 years',
    ],
    [
      'Partnership deed or LLP agreement',
      'Authority letter from partners for the borrowing and pledge',
      'PAN and address proof of the firm',
      'KYC of partners',
      'Financial statements for the last 3 years',
    ],
    ['HUF declaration and PAN of the HUF', 'KYC of the Karta', 'Income tax returns of the HUF for the last 3 years'],
    [
      'Share certificates or demat holding statement',
      'Latest valuation report of the company',
      'Financial statements of the company',
      'Shareholding pattern of the company',
    ],
  ];
  const tabs = $$('#doc-tabs button'),
    page = $('#doc-page'),
    list = $('#doc-list'),
    whoBtns = $$('#who button');
  const checked = DOCS.map((d) => d.map(() => false));
  let curTab = 0;
  function readyUpd() {
    const c = checked[curTab].filter(Boolean).length,
      t = DOCS[curTab].length;
    $('#ready-txt').textContent = c + ' of ' + t + ' ready';
    $('#ready-bar').style.width = (c / t) * 100 + '%';
  }
  function showTab(i, focus) {
    curTab = i;
    tabs.forEach((b, j) => {
      b.setAttribute('aria-selected', j === i);
      b.tabIndex = j === i ? 0 : -1;
    });
    if (focus) tabs[i].focus();
    page.setAttribute('aria-labelledby', 'dt' + i);
    list.innerHTML =
      DOCS[i]
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
        .join('') + (i > 0 ? '<li class="flag">List to be confirmed by Infina for this borrower type.</li>' : '');
    page.classList.remove('turn');
    void page.offsetWidth;
    if (!reduce) page.classList.add('turn');
    readyUpd();
  }
  list.addEventListener('change', (e) => {
    const k = +e.target.dataset.k;
    checked[curTab][k] = e.target.checked;
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
  whoBtns.forEach((b) =>
    b.addEventListener('click', () => {
      whoBtns.forEach((x) => x.setAttribute('aria-pressed', x === b));
      showTab(+b.dataset.tab);
    }),
  );
  showTab(0);

  // ---------- FAQ: search, counts, smooth ----------
  const groups = $$('.faq-group'),
    q = $('#faq-q');
  groups.forEach((g) => {
    const c = g.querySelectorAll('details').length;
    $('[data-c="' + g.dataset.g + '"]').textContent = c;
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
  }
  addEventListener('scroll', scrollAll, { passive: true });
  scrollAll();
  cmpC = cmpT;
  (function loop() {
    renderSecs();
    const cr = cmp.getBoundingClientRect();
    if (cr.bottom > 0 && cr.top < innerHeight) {
      cmpC += (cmpT - cmpC) * (reduce ? 1 : 0.08);
      renderCmp();
    }
    const fr = finalSec.getBoundingClientRect();
    if (fr.bottom > 0 && fr.top < innerHeight) {
      gx += (gtx - gx) * 0.05;
      gy += (gty - gy) * 0.05;
      gyro.style.setProperty('--gx', gx + 'deg');
      gyro.style.setProperty('--gy', gy + 'deg');
    }
    requestAnimationFrame(loop);
  })();
  renderCmp();
  addEventListener('resize', () => {
    renderCmp();
    renderSecs();
  });

  if (!hasGL) {
    const s = $('#stage');
    if (s) s.remove();
    return;
  }

  // ---------- 3D towers for the estimator ----------
  (function towers() {
    const host = $('#tw-stage'),
      cv = $('#towers');
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
    const defs = [
      { x: -2.7, c: 0x0c2459, name: 'Listed shares' },
      { x: 0, c: 0x3d6be0, name: 'Equity funds' },
      { x: 2.7, c: 0x8faaf0, name: 'Debt funds' },
    ];
    const T = defs.map((d, i) => {
      const g = new THREE.Group();
      g.position.x = d.x;
      const glass = new THREE.Mesh(
        unit,
        new THREE.MeshStandardMaterial({
          color: 0xc9d6f5,
          transparent: true,
          opacity: 0.28,
          roughness: 0.15,
          metalness: 0.1,
          depthWrite: false,
        }),
      );
      const edges = new THREE.LineSegments(
        eg,
        new THREE.LineBasicMaterial({ color: 0x0c2459, transparent: true, opacity: 0.4 }),
      );
      const fill = new THREE.Mesh(
        unit,
        new THREE.MeshStandardMaterial({ color: d.c, roughness: 0.35, metalness: 0.25 }),
      );
      const s = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 3.4), shMat);
      s.rotation.x = -Math.PI / 2;
      s.position.y = 0.002;
      g.add(s, fill, glass, edges);
      sc.add(g);
      return { g, glass, edges, fill, ltv: LTV[i], h: 0.05, th: 0.05, f: 0, val: 0, tag: $('#tg' + i), name: d.name };
    });
    function hOf(v) {
      return v > 0 ? 0.25 + 4.4 * Math.sqrt(v / 5e7) : 0.05;
    }
    window.__towers = {
      update(vals) {
        vals.forEach((v, i) => {
          T[i].th = hOf(v);
          T[i].val = v;
        });
      },
    };
    window.__towers.update(holdings);
    let drag = 0,
      dragV = 0,
      down = null,
      prog = 0,
      visible = false,
      filled = 0,
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
    const v3 = new THREE.Vector3();
    function loop(now) {
      requestAnimationFrame(loop);
      if (!visible) return;
      const dt = Math.min(0.05, (now - t0) / 1000);
      t0 = now;
      const r = host.getBoundingClientRect();
      prog = clamp((innerHeight - r.top) / (innerHeight * 0.9), 0, 1);
      if (prog > 0.35) filled = Math.min(1, filled + dt * (reduce ? 99 : 0.8));
      if (down === null) {
        dragV *= 0.94;
        drag += dragV;
      }
      const e = reduce ? 1 : ease(prog),
        elev = 1.2 - 0.82 * e,
        az = 0.6 + drag + (reduce ? 0 : Math.sin(now / 4200) * 0.12),
        dist = 16 - 3.5 * e;
      cam.position.set(
        Math.sin(az) * Math.cos(elev) * dist,
        Math.sin(elev) * dist + 1.5,
        Math.cos(az) * Math.cos(elev) * dist,
      );
      cam.lookAt(0, 2, 0);
      const W = host.clientWidth,
        Hh = host.clientHeight;
      T.forEach((t, i) => {
        t.h += (t.th - t.h) * Math.min(1, dt * (reduce ? 99 : 5));
        t.glass.scale.set(1.7, t.h, 1.7);
        t.edges.scale.set(1.7, t.h, 1.7);
        const fe = easeOut(clamp(filled * 1.3 - i * 0.15, 0, 1));
        t.fill.scale.set(1.42, Math.max(0.001, t.h * t.ltv * fe), 1.42);
        v3.set(0, t.h + 0.35, 0);
        t.g.localToWorld(v3);
        v3.project(cam);
        t.tag.style.transform =
          'translate(' + (v3.x * 0.5 + 0.5) * W + 'px,' + (-v3.y * 0.5 + 0.5) * Hh + 'px) translate(-50%,-100%)';
        const html = t.name + '<strong>' + inr(t.val) + '</strong><em>Borrow ' + inr(t.val * t.ltv) + '</em>';
        if (t.tag._h !== html) {
          t.tag.innerHTML = html;
          t.tag._h = html;
        }
      });
      r2.render(sc, cam);
    }
    requestAnimationFrame(loop);
  })();

  // ---------- Background particles: market → pledge lock → coins ----------
  const stage = $('#stage');
  const renderer = new THREE.WebGLRenderer({ canvas: stage, antialias: false, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 11);
  const mobile = matchMedia('(max-width: 900px)').matches,
    N = mobile ? 3000 : 6000;
  let seed = 11;
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
  // 0: rising market ribbon (hero)
  {
    const a = new Float32Array(N * 3),
      cols = Math.round(Math.sqrt(N * 2.6)),
      rows = Math.ceil(N / cols);
    for (let i = 0; i < N; i++) {
      const c = i % cols,
        r = Math.floor(i / cols),
        x = (c / cols - 0.5) * 18,
        z = (r / rows - 0.5) * 6;
      a[i * 3] = x;
      a[i * 3 + 1] = 0.25 * x + Math.sin(x * 0.6 + z * 0.9) * 0.5 - 1.4;
      a[i * 3 + 2] = z;
    }
    shapes.push(a);
  }
  // 1: candlestick portfolio
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
  // 2: padlock (pledge)
  {
    const a = new Float32Array(N * 3),
      body = Math.floor(N * 0.58),
      shack = Math.floor(N * 0.32);
    boxPoints(a, 0, body, 0, -2.6, 0, 3.6, 2.8, 1.3, 0.5);
    for (let k = 0; k < shack; k++) {
      const u = rnd();
      let px, py;
      if (u < 0.22) {
        px = -1.2;
        py = 0.2 + rnd() * 0.8;
      } else if (u < 0.44) {
        px = 1.2;
        py = 0.2 + rnd() * 0.8;
      } else {
        const t = rnd() * Math.PI;
        px = Math.cos(t) * 1.2;
        py = 1.0 + Math.sin(t) * 1.35;
      }
      const ang = rnd() * Math.PI * 2,
        rr = 0.2 * Math.sqrt(rnd()),
        i3 = (body + k) * 3;
      a[i3] = px + Math.cos(ang) * rr * 0.6;
      a[i3 + 1] = py + Math.sin(ang) * rr * 0.3;
      a[i3 + 2] = Math.sin(ang) * rr;
    }
    for (let k = body + shack; k < N; k++) {
      const i3 = k * 3,
        t = rnd();
      if (t < 0.6) {
        const ang = rnd() * Math.PI * 2,
          rr = 0.32;
        a[i3] = Math.cos(ang) * rr;
        a[i3 + 1] = -1.0 + Math.sin(ang) * rr;
      } else {
        a[i3] = (rnd() - 0.5) * 0.14;
        a[i3 + 1] = -1.25 - rnd() * 0.7;
      }
      a[i3 + 2] = 0.67;
    }
    shapes.push(a);
  }
  // 3: coins (liquidity)
  {
    const a = new Float32Array(N * 3),
      coins = [
        [0, -2.6, 0, 0],
        [0.12, -2.15, 0.05, 0],
        [-0.1, -1.7, -0.04, 0],
        [0.08, -1.25, 0.02, 0],
        [0.3, 1.0, 0, 1.0],
      ];
    const per = Math.floor(N / coins.length),
      R = 1.9,
      Th = 0.36;
    coins.forEach((c, j) => {
      const cnt = j === coins.length - 1 ? N - per * j : per,
        cos = Math.cos(c[3]),
        sin = Math.sin(c[3]);
      for (let k = 0; k < cnt; k++) {
        let x, y, z;
        const u = rnd();
        if (u < 0.45) {
          const t = rnd() * Math.PI * 2;
          x = Math.cos(t) * R;
          z = Math.sin(t) * R;
          y = (rnd() - 0.5) * Th;
        } else {
          const t = rnd() * Math.PI * 2,
            ring = rnd() < 0.35 ? R * 0.72 : R * Math.sqrt(rnd());
          x = Math.cos(t) * ring;
          z = Math.sin(t) * ring;
          y = Th / 2;
        }
        const yy = y * cos - z * sin,
          zz = y * sin + z * cos,
          i3 = (per * j + k) * 3;
        a[i3] = c[0] + x;
        a[i3 + 1] = c[1] + yy;
        a[i3 + 2] = c[2] + zz;
      }
    });
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
    if (story.getBoundingClientRect().bottom < 0) return;
    if (intro < 1) intro = Math.min(1, intro + dt / 2.4);
    let tgt;
    if (storyP > 0) {
      const q = storyP * 3,
        i = Math.min(2, Math.floor(q)),
        f = q - i;
      tgt = i === 0 ? 1 : i + clamp(f / 0.35, 0, 1);
    } else tgt = heroP;
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
    spin += dt * (reduce ? 0 : 0.03 + 0.2 * pk);
    group.rotation.y = Math.sin(spin) * 0.6 * pk + mouse.x * 0.35;
    group.rotation.x = -0.32 * (1 - pk) + 0.1 * pk + mouse.y * 0.18;
    const wide = innerWidth > 900;
    group.position.x = wide ? 3.2 * pk : 0;
    group.position.y = wide ? 0 : 1.7 * pk;
    group.scale.setScalar(wide ? 1 : 1 - 0.3 * pk);
    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);
}
