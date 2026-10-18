/* Beyond Defense Lab — site.js */

/* ── 1. Dark mode ─────────────────────────────── */
(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem('bdl-theme');
  /* Light is the default. The OS prefers-color-scheme setting is deliberately
     not consulted — only a visitor's own toggle (stored here) switches it. */
  var theme = stored || 'light';
  root.setAttribute('data-theme', theme);

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('#darkToggle');
    if (!btn) return;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('bdl-theme', next);
    setIcon(next);
  });

  function setIcon(theme) {
    var btn = document.getElementById('darkToggle');
    if (!btn) return;
    btn.innerHTML = theme === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  setIcon(theme);
})();

/* ── 2. Tagline carousel ─────────────────────── */
(function () {
  var slides = document.querySelectorAll('.tagline-slide');
  if (slides.length < 2) return;
  var current = 0;
  var timer;

  function goTo(idx) {
    slides[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(function () { goTo(current + 1); }, 3500);
  }

  var prev = document.getElementById('taglinePrev');
  var next = document.getElementById('tagllineNext');
  if (prev) prev.addEventListener('click', function () { goTo(current - 1); startTimer(); });
  if (next) next.addEventListener('click', function () { goTo(current + 1); startTimer(); });

  startTimer();
})();

/* Publication archive filters. Curated highlights remain independent. */
(function () {
  var archive = document.getElementById('gridid');
  if (!archive || !archive.querySelector('.pub-filters')) return;
  var state = { year: 'all', topic: 'all' };
  var params = new URLSearchParams(window.location.search);
  Object.keys(state).forEach(function (group) {
    var value = params.get(group);
    var valid = Array.from(archive.querySelectorAll('[data-group="' + group + '"]')).some(function (b) { return b.dataset.filter === value; });
    if (valid) state[group] = value;
  });
  function apply(updateUrl) {
    archive.querySelectorAll('[data-filter]').forEach(function (b) {
      var active = b.dataset.filter === state[b.dataset.group];
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    var total = 0;
    archive.querySelectorAll('.pub-item, .full-pub-item').forEach(function (entry) {
      var topics = (entry.dataset.topics || '').split(',').map(function (t) { return t.trim(); });
      var match = (state.year === 'all' || entry.dataset.year === state.year) && (state.topic === 'all' || topics.indexOf(state.topic) !== -1);
      entry.hidden = !match;
      if (match && entry.classList.contains('full-pub-item')) total++;
    });
    archive.querySelectorAll('.pub-row').forEach(function (row) {
      row.hidden = !Array.from(row.querySelectorAll('.pub-item')).some(function (entry) { return !entry.hidden; });
    });
    document.getElementById('pubNoResults').hidden = total !== 0;
    document.getElementById('pubResultCount').textContent = total + (total === 1 ? ' publication' : ' publications');
    if (updateUrl) {
      var url = new URL(window.location.href);
      Object.keys(state).forEach(function (group) { if (state[group] === 'all') url.searchParams.delete(group); else url.searchParams.set(group, state[group]); });
      history.replaceState(null, '', url);
    }
  }
  archive.addEventListener('click', function (event) {
    var filter = event.target.closest('[data-filter]');
    var tag = event.target.closest('[data-topic]');
    if (filter) state[filter.dataset.group] = filter.dataset.filter;
    else if (tag) state.topic = tag.dataset.topic;
    else if (event.target.closest('#pubReset')) state = { year: 'all', topic: 'all' };
    else return;
    apply(true);
    if (tag) archive.querySelector('.pub-filters').scrollIntoView({ behavior: 'auto', block: 'start' });
  });
  apply(false);
  if (state.topic !== 'all' || state.year !== 'all') archive.querySelector('.pub-filters').scrollIntoView({ behavior: 'auto', block: 'start' });
})();

/* ── 3. Team search ───────────────────────────── */
(function () {
  var input = document.getElementById('teamSearch');
  if (!input) return;

  input.addEventListener('input', function () {
    var q = this.value.toLowerCase().trim();

    document.querySelectorAll('#gridid .col-sm-6.clearfix').forEach(function (card) {
      var match = !q || card.textContent.toLowerCase().indexOf(q) !== -1;
      card.style.display = match ? '' : 'none';
    });

    document.querySelectorAll('#gridid .row').forEach(function (row) {
      var vis = row.querySelectorAll('.col-sm-6.clearfix:not([style*="none"])').length;
      row.style.display = vis ? '' : 'none';
    });
  });
})();

/* ── 4. Back to top ───────────────────────────── */
(function () {
  var btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    btn.classList.toggle('btt-visible', window.scrollY > 320);
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* Outreach filters: events and lab-authored research stories. */
(function () {
  var btns = document.querySelectorAll('.outreach-filter-btn');
  if (!btns.length) return;
  var cards = document.querySelectorAll('.outreach-card[data-kind]');
  var empty = document.getElementById('outreachNoResults');

  function apply(val) {
    var shown = 0;
    btns.forEach(function (b) {
      var active = b.getAttribute('data-outreach-filter') === val;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(function (card) {
      var match = val === 'all' || card.getAttribute('data-kind') === val;
      card.style.display = match ? '' : 'none';
      if (match) shown++;
    });
    if (empty) empty.style.display = shown ? 'none' : '';
  }

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(this.getAttribute('data-outreach-filter'));
    });
  });

  apply('all');
  /* Optional type selection from the URL. */
  var want = new URLSearchParams(window.location.search).get('show');
  if (want) {
    var target = document.querySelector('.outreach-filter-btn[data-outreach-filter="' + want + '"]');
    if (target) target.click();
  }
})();

/* ── 5. Card entrance animation (Intersection Observer) ── */
(function () {
  if (!window.IntersectionObserver) return;
  var cards = document.querySelectorAll(
    '#gridid .col-sm-6.clearfix, .pub-item .well, .full-pub-item'
  );
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  cards.forEach(function (card) {
    card.classList.add('card-animate');
    observer.observe(card);
  });
})();

/* ── 6. Copy BibTeX ───────────────────────────── */
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.copy-bibtex');
    if (!btn) return;

    var card    = btn.closest('[data-title]');
    if (!card) return;

    var title   = card.getAttribute('data-title')   || '';
    var authors = card.getAttribute('data-authors') || '';
    var venue   = card.getAttribute('data-venue')   || '';
    var year    = card.getAttribute('data-year')    || '';

    /* citation key = first-author-surname + year */
    var surname = authors.split(',')[0].trim().split(' ').pop().toLowerCase()
                        .replace(/[^a-z]/g, '');
    var key = surname + year;

    /* "In The Foo Conference (2026)" → conference, else article */
    var isConf     = /^in\s/i.test(venue);
    var venueClean = venue.replace(/^in\s+/i, '').replace(/\s*\(\d{4}\)\s*$/, '').trim();

    /* comma-separated → BibTeX "A and B and C" */
    var authBib = authors
      .replace(/,\s*and\s+/g, ' and ')
      .replace(/\s*,\s*/g, ' and ');

    var bib = isConf
      ? '@inproceedings{' + key + ',\n' +
        '  title     = {' + title + '},\n' +
        '  author    = {' + authBib + '},\n' +
        '  booktitle = {' + venueClean + '},\n' +
        '  year      = {' + year + '}\n}'
      : '@article{' + key + ',\n' +
        '  title   = {' + title + '},\n' +
        '  author  = {' + authBib + '},\n' +
        '  journal = {' + (venueClean || 'arXiv preprint') + '},\n' +
        '  year    = {' + year + '}\n}';

    if (navigator.clipboard) {
      navigator.clipboard.writeText(bib).then(function () { flash(btn); });
    } else {
      var ta = document.createElement('textarea');
      ta.value = bib;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      flash(btn);
    }
  });

  function flash(btn) {
    var orig = btn.textContent;
    btn.textContent = 'Copied!';
    btn.classList.add('bibtex-copied');
    setTimeout(function () {
      btn.textContent = orig;
      btn.classList.remove('bibtex-copied');
    }, 2000);
  }
})();

/* Gallery: native modal dialog keeps keyboard focus inside the viewer. */
(function () {
  var viewer = document.getElementById('galleryViewer');
  if (!viewer || !viewer.showModal) return;
  var photos = Array.from(document.querySelectorAll('.gallery-photo'));
  var current = 0;
  var opener;
  function show(index) {
    current = (index + photos.length) % photos.length;
    var photo = photos[current];
    var image = document.getElementById('galleryLargeImage');
    image.src = photo.href;
    image.alt = photo.dataset.galleryCaption;
    document.getElementById('galleryCaption').textContent = photo.dataset.galleryCaption;
    document.getElementById('galleryPosition').textContent = (current + 1) + ' / ' + photos.length;
    document.getElementById('galleryOriginal').href = photo.href;
  }
  photos.forEach(function (photo, index) {
    photo.addEventListener('click', function (event) {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = photo;
      show(index);
      viewer.showModal();
    });
  });
  document.getElementById('galleryPrevious').addEventListener('click', function () { show(current - 1); });
  document.getElementById('galleryNext').addEventListener('click', function () { show(current + 1); });
  document.getElementById('galleryClose').addEventListener('click', function () { viewer.close(); });
  viewer.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
  });
  viewer.addEventListener('close', function () {
    document.getElementById('galleryLargeImage').removeAttribute('src');
    if (opener) opener.focus({ preventScroll: true });
  });
})();
