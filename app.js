(() => {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Any */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const projectsCount = $('.projects-count');
  if (projectsCount) projectsCount.textContent = document.querySelectorAll('.work-card').length;

  /* ---------- Header ---------- */
  const header = $('#header');
  const pageScrim = $('#pageScrim');
  const headerSections = Array.from(document.querySelectorAll('main > section, footer'));
  const darkSection = (el) => el.matches('.services, .showcase, .contact');

  const updateHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
    const probe = 44;
    let dark = false;
    for (const section of headerSections) {
      const r = section.getBoundingClientRect();
      if (r.top <= probe && r.bottom > probe) {
        dark = darkSection(section);
        break;
      }
    }
    header.classList.toggle('on-dark', dark);
    if (pageScrim) pageScrim.classList.toggle('on', dark);
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader);
  updateHeader();

  /* ---------- Hero slider ---------- */
  const heroSlides = $$('.hero-slide');
  const heroDots = $$('.hero-dots i');
  const heroEl = $('.hero');
  if (heroSlides.length > 1 && !reduced) {
    let heroIndex = 0;
    let heroVisible = true;
    if ('IntersectionObserver' in window && heroEl) {
      const hio = new IntersectionObserver((entries) => {
        heroVisible = entries[0].isIntersecting;
      }, { threshold: 0.15 });
      hio.observe(heroEl);
    }
    const goTo = (i) => {
      heroSlides[heroIndex].classList.remove('on');
      if (heroDots[heroIndex]) heroDots[heroIndex].classList.remove('on');
      heroIndex = i;
      heroSlides[heroIndex].classList.add('on');
      if (heroDots[heroIndex]) heroDots[heroIndex].classList.add('on');
    };
    setInterval(() => {
      if (document.hidden || !heroVisible) return;
      goTo((heroIndex + 1) % heroSlides.length);
    }, 5200);
  }

  /* ---------- Hero title: ajustar a l'amplada exacta ---------- */
  const heroTitle = $('.hero-title');
  const fitHeroTitle = () => {
    if (!heroTitle) return;
    const head = heroTitle.parentElement;
    heroTitle.style.fontSize = '100px';
    heroTitle.style.display = 'inline-block';
    const textW = heroTitle.getBoundingClientRect().width;
    heroTitle.style.display = '';
    if (!textW) return;
    heroTitle.style.fontSize = ((head.clientWidth / textW) * 100) + 'px';
  };
  fitHeroTitle();
  window.addEventListener('resize', fitHeroTitle);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitHeroTitle);

  /* ---------- Mobile menu ---------- */
  const menuToggle = $('#menuToggle');
  const mobileMenu = $('#mobileMenu');
  const setMenu = (open) => {
    mobileMenu.classList.toggle('open', open);
    header.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.documentElement.classList.toggle('lock', open);
  };
  menuToggle.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
  $$('a', mobileMenu).forEach((a) => a.addEventListener('click', () => setMenu(false)));

  /* ---------- Reveal on scroll ---------- */
  const revealEls = $$('.reveal, .statement-text');
  if ('IntersectionObserver' in window) {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => ro.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- Services hover ---------- */
  const svcButtons = $$('.svc');
  const svcBgs = $$('.svc-bg');
  const setSvc = (i) => {
    svcButtons.forEach((b, idx) => b.classList.toggle('on', idx === i));
    svcBgs.forEach((b, idx) => b.classList.toggle('on', idx === i));
  };
  svcButtons.forEach((b, i) => {
    b.addEventListener('mouseenter', () => setSvc(i));
    b.addEventListener('focus', () => setSvc(i));
    b.addEventListener('click', () => setSvc(i));
  });

  /* ---------- Showcase · carrusel corbat ---------- */
  const arc = $('#arc');
  const arcTrack = $('#arcTrack');
  if (arc && arcTrack) {
    const ARC_IMAGES = [
      'assets/case-pepitu.webp',
      'assets/case-cafes-serra.webp',
      'assets/case-sikkema-cover.webp',
      'assets/case-althaia-2.webp',
      'assets/case-parc-sanitari.webp',
      'assets/case-clinica-dental.webp',
      'assets/case-dduueett.webp',
      'assets/case-pdepages.webp',
      'assets/case-pepitu-2.webp',
      'assets/case-cafes-serra-detail.webp',
      'assets/svc-web-dduueett.webp',
    ];

    const buildSet = () => {
      const frag = document.createDocumentFragment();
      ARC_IMAGES.forEach((src) => {
        const card = document.createElement('div');
        card.className = 'arc-card';
        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.loading = 'eager';
        img.decoding = 'async';
        card.appendChild(img);
        frag.appendChild(card);
      });
      return frag;
    };

    arcTrack.appendChild(buildSet());
    arcTrack.appendChild(buildSet());

    const arcCards = Array.from(arcTrack.children);
    const setSize = ARC_IMAGES.length;
    let arcW = arc.clientWidth;
    let setWidth = 0;
    let offset = 0;
    let arcVisible = true;
    let cardCenters = [];

    const measure = () => {
      arcW = arc.clientWidth;
      cardCenters = arcCards.map((c) => c.offsetLeft + c.offsetWidth / 2);
      setWidth = arcCards[setSize]
        ? arcCards[setSize].offsetLeft - arcCards[0].offsetLeft
        : 0;
    };

    const applyArc = () => {
      const half = arcW / 2 || 1;
      const amp = Math.min(72, arcW * 0.055);
      for (let i = 0; i < arcCards.length; i++) {
        const cx = (cardCenters[i] || 0) + offset;
        let d = (cx - half) / half;
        d = Math.max(-1.7, Math.min(1.7, d));
        const dy = amp * d * d;
        const rot = 7 * d;
        const sc = 1 - 0.07 * Math.min(Math.abs(d), 1);
        arcCards[i].style.transform =
          'translateY(' + dy.toFixed(1) + 'px) rotate(' + rot.toFixed(2) + 'deg) scale(' + sc.toFixed(3) + ')';
      }
    };

    measure();
    applyArc();

    if ('IntersectionObserver' in window) {
      const aio = new IntersectionObserver((entries) => {
        arcVisible = entries[0].isIntersecting;
      }, { threshold: 0.05 });
      aio.observe(arc);
    }

    window.addEventListener('resize', () => {
      measure();
      applyArc();
    });

    if (!reduced) {
      let last = performance.now();
      const speed = 26;
      const tick = (now) => {
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        if (arcVisible && !document.hidden && setWidth > 0) {
          offset -= speed * dt;
          if (offset <= -setWidth) offset += setWidth;
          arcTrack.style.transform = 'translate3d(' + offset + 'px,0,0)';
          applyArc();
        }
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }

  /* ---------- Project data ---------- */
  const PROJECTS = {
    'pepitu': {
      name: 'Pepitu', sector: 'Hostaleria', line: "Del nom a l'interiorisme.",
      images: ['assets/case-pepitu.webp', 'assets/case-pepitu-2.webp', 'assets/case-pepitu-3.webp', 'assets/hero-pepitu.webp'],
    },
    'cafes-serra': {
      name: 'Cafès Serra', sector: 'Cafè', line: "Del nom a l'envàs i la web.",
      images: ['assets/case-cafes-serra.webp', 'assets/case-cafes-serra-2.webp', 'assets/case-cafes-serra-3.webp', 'assets/case-cafes-serra-detail.webp'],
    },
    'sikkema': {
      name: 'Sikkema', sector: 'Moda', line: 'Una identitat que no caduca.',
      images: ['assets/case-sikkema-cover.webp', 'assets/case-sikkema-folder.webp', 'assets/case-sikkema-kk.webp'],
    },
    'althaia': {
      name: 'Althaia', sector: 'Salut · Vídeo', line: 'Una gràfica per a cada vídeo.',
      video: 'assets/althaia.mp4', poster: 'assets/case-althaia.webp',
      images: ['assets/case-althaia.webp', 'assets/case-althaia-2.webp', 'assets/case-althaia-3.webp'],
    },
    'parc-sanitari': {
      name: 'Parc Sanitari SJD', sector: 'Salut', line: 'Comunicació que apropa.',
      images: ['assets/case-parc-sanitari.webp', 'assets/case-parc-sanitari-2.webp', 'assets/case-parc-sanitari-3.webp'],
    },
    'clinica-dental': {
      name: 'Clínica Dental Basterretxea', sector: 'Salut', line: 'Un logotip serè.',
      images: ['assets/case-clinica-dental.webp', 'assets/case-clinica-dental-2.webp', 'assets/case-clinica-dental-3.webp'],
    },
    'dduueett': {
      name: 'Dduueett', sector: 'Salut', line: 'Una web que ho ordena tot.',
      images: ['assets/case-dduueett.webp', 'assets/case-dduueett-2.webp', 'assets/case-dduueett-3.webp', 'assets/case-dduueett-card.webp'],
    },
    'pdepages': {
      name: 'PdePagès', sector: 'Alimentació', line: 'Del camp a la taula.',
      images: ['assets/case-pdepages.webp', 'assets/case-pdepages-2.webp', 'assets/case-pdepages-3.webp', 'assets/case-pdepages-card.webp'],
    },
  };
  const order = Object.keys(PROJECTS);

  /* ---------- Overlay ---------- */
  const overlay = $('#overlay');
  const overlaySector = $('#overlaySector');
  const overlayName = $('#overlayName');
  const overlayLine = $('#overlayLine');
  const overlayHero = $('#overlayHero');
  const overlayGallery = $('#overlayGallery');
  const overlayClose = $('#overlayClose');
  const overlayNext = $('#overlayNext');
  let current = null;

  const renderProject = (id) => {
    const p = PROJECTS[id];
    if (!p) return;
    current = id;

    overlaySector.textContent = p.sector;
    overlayName.textContent = p.name;
    overlayLine.textContent = p.line;

    overlayHero.innerHTML = '';
    if (p.video) {
      const v = document.createElement('video');
      v.src = p.video;
      if (p.poster) v.poster = p.poster;
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.autoplay = true;
      overlayHero.appendChild(v);
      v.play().catch(() => {});
    } else {
      const img = document.createElement('img');
      img.src = p.images[0];
      img.alt = p.name;
      overlayHero.appendChild(img);
    }

    overlayGallery.innerHTML = '';
    const rest = p.video ? p.images : p.images.slice(1);
    rest.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = p.name;
      img.loading = 'lazy';
      img.decoding = 'async';
      overlayGallery.appendChild(img);
    });

    overlay.scrollTop = 0;
  };

  const openOverlay = (id) => {
    renderProject(id);
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('lock');
    overlayClose.focus({ preventScroll: true });
  };

  const closeOverlay = () => {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('lock');
    overlayHero.innerHTML = '';
    overlayGallery.innerHTML = '';
  };

  $$('.work-card').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openOverlay(el.dataset.project);
    });
  });

  overlayClose.addEventListener('click', closeOverlay);
  overlayNext.addEventListener('click', () => {
    const i = order.indexOf(current);
    renderProject(order[(i + 1) % order.length]);
    overlay.scrollTop = 0;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeOverlay();
  });
})();
