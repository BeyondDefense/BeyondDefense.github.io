/* Beyond Defense Lab — site.js */

/* ── 1. Dark mode ─────────────────────────────── */
(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem('bdl-theme');
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = stored || (systemDark ? 'dark' : 'light');
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

/* ── 2. Publication filter ────────────────────── */
(function () {
  var filterBtns = document.querySelectorAll('[data-filter]');
  if (!filterBtns.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var group = this.getAttribute('data-group');
      document.querySelectorAll('[data-group="' + group + '"]').forEach(function (b) {
        b.classList.remove('active');
      });
      this.classList.add('active');
      applyFilters();
    });
  });

  function applyFilters() {
    var yearBtn  = document.querySelector('[data-group="year"].active');
    var topicBtn = document.querySelector('[data-group="topic"].active');
    var yearVal  = yearBtn  ? yearBtn.getAttribute('data-filter')  : 'all';
    var topicVal = topicBtn ? topicBtn.getAttribute('data-filter') : 'all';

    document.querySelectorAll('.pub-item').forEach(function (card) {
      var year   = card.getAttribute('data-year') || '';
      var topics = (card.getAttribute('data-topics') || '').split(',');
      var show   = (yearVal === 'all' || year === yearVal) &&
                   (topicVal === 'all' || topics.indexOf(topicVal) !== -1);
      card.style.display = show ? '' : 'none';
    });

    /* hide rows that have no visible children */
    document.querySelectorAll('.pub-row').forEach(function (row) {
      var vis = row.querySelectorAll('.pub-item:not([style*="none"])').length;
      row.style.display = vis ? '' : 'none';
    });

    /* show empty-state message */
    var none = document.getElementById('pubNoResults');
    if (none) {
      var total = document.querySelectorAll('.pub-item:not([style*="none"])').length;
      none.style.display = total ? 'none' : '';
    }
  }
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

/* ── 5. Copy BibTeX ───────────────────────────── */
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
