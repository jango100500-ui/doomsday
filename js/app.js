/* ═══════════════════════════════════════════════════
   MCU TRACKER — app.js
   ═══════════════════════════════════════════════════ */

// ─── DATA ────────────────────────────────────────────
const FILMS = [
  { id:1,  title:"Iron Man",                                    year:2008, runtime:"2h 6m",  poster:"https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBP8i1t0PY.jpg" },
  { id:2,  title:"The Incredible Hulk",                         year:2008, runtime:"1h 52m", poster:"https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg" },
  { id:3,  title:"Iron Man 2",                                  year:2010, runtime:"2h 4m",  poster:"https://image.tmdb.org/t/p/w500/6WBeq4tQ8L0L8oyR3gEMOHbTuaR.jpg" },
  { id:4,  title:"Thor",                                        year:2011, runtime:"1h 55m", poster:"https://image.tmdb.org/t/p/w500/prSfAi1xXrhoom3538CRncZIXsX.jpg" },
  { id:5,  title:"Captain America: The First Avenger",          year:2011, runtime:"2h 4m",  poster:"https://image.tmdb.org/t/p/w500/vSNxB3B7uRnSdSPvqFNLqOmzjSl.jpg" },
  { id:6,  title:"The Avengers",                                year:2012, runtime:"2h 23m", poster:"https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" },
  { id:7,  title:"Iron Man 3",                                  year:2013, runtime:"2h 10m", poster:"https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg" },
  { id:8,  title:"Thor: The Dark World",                        year:2013, runtime:"1h 52m", poster:"https://image.tmdb.org/t/p/w500/bnX5PpBFRBxhJhRInGRoVbQlBHL.jpg" },
  { id:9,  title:"Captain America: The Winter Soldier",         year:2014, runtime:"2h 16m", poster:"https://image.tmdb.org/t/p/w500/5TQ6YDmymBpnF005OyoB7ohZps9.jpg" },
  { id:10, title:"Guardians of the Galaxy",                     year:2014, runtime:"2h 1m",  poster:"https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" },
  { id:11, title:"Avengers: Age of Ultron",                     year:2015, runtime:"2h 21m", poster:"https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg" },
  { id:12, title:"Ant-Man",                                     year:2015, runtime:"1h 57m", poster:"https://image.tmdb.org/t/p/w500/MgBQCQKGNjDqSoNJMXhTOZKoQG.jpg" },
  { id:13, title:"Captain America: Civil War",                  year:2016, runtime:"2h 27m", poster:"https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDd3MKvOvJ4FbYA.jpg" },
  { id:14, title:"Doctor Strange",                              year:2016, runtime:"1h 55m", poster:"https://image.tmdb.org/t/p/w500/uGnMhsSBNPCJDt58IUFnm8SXPyL.jpg" },
  { id:15, title:"Guardians of the Galaxy Vol. 2",              year:2017, runtime:"2h 16m", poster:"https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4B61I8bA.jpg" },
  { id:16, title:"Spider-Man: Homecoming",                      year:2017, runtime:"2h 13m", poster:"https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" },
  { id:17, title:"Thor: Ragnarok",                              year:2017, runtime:"2h 10m", poster:"https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg" },
  { id:18, title:"Black Panther",                               year:2018, runtime:"2h 14m", poster:"https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
  { id:19, title:"Avengers: Infinity War",                      year:2018, runtime:"2h 29m", poster:"https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
  { id:20, title:"Ant-Man and the Wasp",                        year:2018, runtime:"1h 58m", poster:"https://image.tmdb.org/t/p/w500/SZ4TMcwsGuGzgijKHyFtDGgioS.jpg" },
  { id:21, title:"Captain Marvel",                              year:2019, runtime:"2h 4m",  poster:"https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg" },
  { id:22, title:"Avengers: Endgame",                           year:2019, runtime:"3h 1m",  poster:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { id:23, title:"Spider-Man: Far From Home",                   year:2019, runtime:"2h 9m",  poster:"https://image.tmdb.org/t/p/w500/rjbNpRMoVvqHmhmksbokcyHFoeZ.jpg" },
  { id:24, title:"Black Widow",                                 year:2021, runtime:"2h 14m", poster:"https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg" },
  { id:25, title:"Shang-Chi and the Legend of the Ten Rings",   year:2021, runtime:"2h 12m", poster:"https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg" },
  { id:26, title:"Eternals",                                    year:2021, runtime:"2h 37m", poster:"https://image.tmdb.org/t/p/w500/6AdXwFQBoKfMQrCXKe2MhEELECe.jpg" },
  { id:27, title:"Spider-Man: No Way Home",                     year:2021, runtime:"2h 28m", poster:"https://image.tmdb.org/t/p/w500/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg" },
  { id:28, title:"Doctor Strange in the Multiverse of Madness", year:2022, runtime:"2h 6m",  poster:"https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" },
  { id:29, title:"Thor: Love and Thunder",                      year:2022, runtime:"1h 59m", poster:"https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" },
  { id:30, title:"Black Panther: Wakanda Forever",              year:2022, runtime:"2h 41m", poster:"https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg" },
  { id:31, title:"Ant-Man and the Wasp: Quantumania",           year:2023, runtime:"2h 5m",  poster:"https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg" },
  { id:32, title:"Guardians of the Galaxy Vol. 3",              year:2023, runtime:"2h 30m", poster:"https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg" },
  { id:33, title:"The Marvels",                                 year:2023, runtime:"1h 45m", poster:"https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bqMMRmPs.jpg" },
  { id:34, title:"Deadpool & Wolverine",                        year:2024, runtime:"2h 7m",  poster:"https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" },
  { id:35, title:"Captain America: Brave New World",            year:2025, runtime:"1h 58m", poster:"https://image.tmdb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg" },
  { id:36, title:"Thunderbolts*",                               year:2025, runtime:"2h 7m",  poster:"https://image.tmdb.org/t/p/w500/m9EtP1Yrzv6v7dMaC9mTfXpMJfd.jpg" },
  { id:37, title:"The Fantastic Four: First Steps",             year:2025, runtime:"TBA",    poster:"https://image.tmdb.org/t/p/w500/9HWRmBFAMLFNVRf4AlHxpSp5fEb.jpg" },
  { id:38, title:"Avengers: Doomsday",                          year:2026, runtime:"TBA",    poster:"https://image.tmdb.org/t/p/w500/placeholder.jpg" },
];

// ─── i18n ────────────────────────────────────────────
const I18N = {
  en: {
    saga: "SAGA", next_up: "Next up:", your_rating: "Your Rating",
    notes: "Notes", save: "Save", watched_on: "Watched on",
    mark_watched: "✓  Mark as watched", unmark: "✕  Remove from watched",
    write_note: "Write a note…", films: "films", theme_light: "☀️", theme_dark: "🌙",
    lang_btn: "🌐", watched_label: "Watched", of: "of",
    detail_btn_watched: "✓  Mark as watched",
    detail_btn_unwatched: "✕  Unmark",
  },
  de: {
    saga: "SAGA", next_up: "Als Nächstes:", your_rating: "Deine Bewertung",
    notes: "Notizen", save: "Speichern", watched_on: "Gesehen am",
    mark_watched: "✓  Als gesehen markieren", unmark: "✕  Markierung entfernen",
    write_note: "Notiz schreiben…", films: "Filme", theme_light: "☀️", theme_dark: "🌙",
    lang_btn: "🌐", watched_label: "Gesehen", of: "von",
    detail_btn_watched: "✓  Als gesehen markieren",
    detail_btn_unwatched: "✕  Als ungesehen markieren",
  },
  ru: {
    saga: "САГА", next_up: "Следующий:", your_rating: "Ваша оценка",
    notes: "Заметки", save: "Сохранить", watched_on: "Просмотрено",
    mark_watched: "✓  Отметить как просмотрено", unmark: "✕  Убрать отметку",
    write_note: "Написать заметку…", films: "фильмов", theme_light: "☀️", theme_dark: "🌙",
    lang_btn: "🌐", watched_label: "Просмотрено", of: "из",
    detail_btn_watched: "✓  Отметить просмотренным",
    detail_btn_unwatched: "✕  Убрать отметку",
  }
};

// ─── STATE ───────────────────────────────────────────
let state = {
  watched: {},   // { filmId: { date, rating, note } }
  lang: 'en',
  theme: 'auto', // 'auto' | 'light' | 'dark'
};

let activeFilmId = null;
let langPickerOpen = false;

// ─── STORAGE ─────────────────────────────────────────
function loadState() {
  try {
    const raw = localStorage.getItem('mcu-state');
    if (raw) state = { ...state, ...JSON.parse(raw) };
  } catch(e) {}
}

function saveState() {
  localStorage.setItem('mcu-state', JSON.stringify(state));
}

// ─── THEME ───────────────────────────────────────────
function applyTheme() {
  const root = document.documentElement;
  if (state.theme === 'auto') {
    root.removeAttribute('data-theme');
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.getElementById('theme-btn').textContent = isDark ? '☀️' : '🌙';
  } else {
    root.setAttribute('data-theme', state.theme);
    document.getElementById('theme-btn').textContent = state.theme === 'dark' ? '☀️' : '🌙';
  }
}

function cycleTheme() {
  const order = ['auto', 'dark', 'light'];
  const idx = order.indexOf(state.theme);
  state.theme = order[(idx + 1) % order.length];
  saveState();
  applyTheme();
}

// ─── i18n ─────────────────────────────────────────────
function t(key) {
  return (I18N[state.lang] || I18N.en)[key] || key;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.getElementById('lang-btn').textContent = '🌐';
  updateSagaBar();
  if (activeFilmId) renderPanel(activeFilmId);
}

// ─── PROGRESS ─────────────────────────────────────────
function watchedCount() {
  return Object.keys(state.watched).length;
}

function updateSagaBar() {
  const count = watchedCount();
  const total = FILMS.length;
  document.getElementById('progress-text').textContent = `${count} ${t('of')} ${total}`;
  document.getElementById('progress-fill').style.width = `${(count / total) * 100}%`;

  // Next to watch
  const next = FILMS.find(f => !state.watched[f.id]);
  document.getElementById('next-title').textContent = next ? `${next.id}. ${next.title}` : '🎉';
}

// ─── TIMELINE ─────────────────────────────────────────
const ROW_SIZE = 8; // films per row

function buildTimeline() {
  const container = document.getElementById('timeline');
  container.innerHTML = '';

  const rows = [];
  for (let i = 0; i < FILMS.length; i += ROW_SIZE) {
    rows.push(FILMS.slice(i, i + ROW_SIZE));
  }

  rows.forEach((row, rowIdx) => {
    // Alternate direction: even rows LTR, odd rows RTL
    const reversed = rowIdx % 2 === 1;
    const displayRow = reversed ? [...row].reverse() : row;

    const rowEl = document.createElement('div');
    rowEl.className = 'tl-row';
    if (reversed) rowEl.classList.add('reversed');

    displayRow.forEach(film => {
      const item = document.createElement('div');
      item.className = 'tl-item';
      item.dataset.id = film.id;

      const isWatched = !!state.watched[film.id];
      // "Current" = first unwatched
      const nextFilm = FILMS.find(f => !state.watched[f.id]);
      const isCurrent = nextFilm && nextFilm.id === film.id;

      const nodeClass = isWatched ? 'watched' : isCurrent ? 'current' : '';

      item.innerHTML = `
        <div class="tl-node ${nodeClass}">
          <span class="node-num">${film.id}</span>
        </div>
        <div class="tl-label">
          <div class="tl-name">${film.title}</div>
          <div class="tl-year">${film.year}</div>
        </div>
      `;

      item.addEventListener('click', () => openPanel(film.id));
      rowEl.appendChild(item);
    });

    container.appendChild(rowEl);

    // Add U-turn connector between rows (except last)
    if (rowIdx < rows.length - 1) {
      const connector = document.createElement('div');
      connector.className = 'row-connector';
      container.appendChild(connector);
    }
  });
}

function refreshNode(filmId) {
  const item = document.querySelector(`.tl-item[data-id="${filmId}"]`);
  if (!item) return;
  const node = item.querySelector('.tl-node');
  const isWatched = !!state.watched[filmId];
  const nextFilm = FILMS.find(f => !state.watched[f.id]);
  const isCurrent = nextFilm && nextFilm.id === filmId;

  node.className = 'tl-node ' + (isWatched ? 'watched' : isCurrent ? 'current' : '');
  node.classList.add('pop-anim');
  node.addEventListener('animationend', () => node.classList.remove('pop-anim'), { once: true });
}

function refreshAllNodes() {
  FILMS.forEach(f => refreshNode(f.id));
}

// ─── PANEL ────────────────────────────────────────────
function openPanel(filmId) {
  activeFilmId = filmId;
  renderPanel(filmId);
  document.getElementById('detail-panel').classList.remove('hidden');
  document.getElementById('panel-overlay').classList.remove('hidden');
  document.getElementById('detail-panel').classList.add('slide-up');
}

function closePanel() {
  document.getElementById('detail-panel').classList.add('hidden');
  document.getElementById('panel-overlay').classList.add('hidden');
  activeFilmId = null;
}

function renderPanel(filmId) {
  const film = FILMS.find(f => f.id === filmId);
  if (!film) return;

  const data = state.watched[filmId];
  const isWatched = !!data;

  document.getElementById('panel-num').textContent = `#${film.id}`;
  document.getElementById('panel-title').textContent = film.title;
  document.getElementById('panel-meta').textContent = `${film.year} · ${film.runtime}`;
  document.getElementById('panel-poster').src = film.poster;
  document.getElementById('panel-poster').alt = film.title;

  // Watch button
  const btn = document.getElementById('btn-watched');
  btn.textContent = isWatched ? t('detail_btn_unwatched') : t('detail_btn_watched');
  btn.className = 'btn-primary' + (isWatched ? ' is-watched' : '');

  // Stars
  renderStars(data?.rating || 0);

  // Notes
  document.getElementById('notes-input').value = data?.note || '';
  document.getElementById('notes-input').placeholder = t('write_note');
  document.getElementById('btn-save-note').textContent = t('save');

  // Watch date
  const dateWrap = document.getElementById('date-wrap');
  if (isWatched && data?.date) {
    dateWrap.classList.remove('hidden');
    const d = new Date(data.date);
    document.getElementById('watch-date-display').textContent =
      d.toLocaleDateString(state.lang === 'ru' ? 'ru-RU' : state.lang === 'de' ? 'de-DE' : 'en-US', {
        day: 'numeric', month: 'long', year: 'numeric'
      });
  } else {
    dateWrap.classList.add('hidden');
  }

  // Section labels
  document.querySelector('#rating-wrap .section-label').textContent = t('your_rating');
  document.querySelector('#notes-wrap .section-label').textContent = t('notes');
  if (document.querySelector('#date-wrap .section-label'))
    document.querySelector('#date-wrap .section-label').textContent = t('watched_on');
}

function renderStars(rating) {
  const container = document.getElementById('stars');
  container.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.className = 'star' + (i <= rating ? ' active' : '');
    star.textContent = '★';
    star.addEventListener('click', () => setRating(i));
    container.appendChild(star);
  }
}

function setRating(rating) {
  if (!activeFilmId) return;
  if (!state.watched[activeFilmId]) {
    // Auto-mark as watched when rating
    markWatched(activeFilmId);
  }
  const current = state.watched[activeFilmId]?.rating;
  const newRating = current === rating ? 0 : rating; // toggle off if same
  state.watched[activeFilmId] = { ...state.watched[activeFilmId], rating: newRating };
  saveState();
  renderStars(newRating);
}

function markWatched(filmId) {
  if (state.watched[filmId]) {
    delete state.watched[filmId];
  } else {
    state.watched[filmId] = { date: new Date().toISOString(), rating: 0, note: '' };
  }
  saveState();
}

// ─── EVENTS ──────────────────────────────────────────
function bindEvents() {
  // Theme
  document.getElementById('theme-btn').addEventListener('click', () => {
    cycleTheme();
  });

  // Lang picker
  document.getElementById('lang-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    langPickerOpen = !langPickerOpen;
    document.getElementById('lang-picker').classList.toggle('hidden', !langPickerOpen);
  });

  document.querySelectorAll('#lang-picker button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      state.lang = e.currentTarget.dataset.lang;
      saveState();
      langPickerOpen = false;
      document.getElementById('lang-picker').classList.add('hidden');
      applyI18n();
    });
  });

  document.addEventListener('click', (e) => {
    if (langPickerOpen && !e.target.closest('#lang-picker') && !e.target.closest('#lang-btn')) {
      langPickerOpen = false;
      document.getElementById('lang-picker').classList.add('hidden');
    }
  });

  // Panel close
  document.getElementById('panel-close').addEventListener('click', closePanel);
  document.getElementById('panel-overlay').addEventListener('click', closePanel);

  // Watch button
  document.getElementById('btn-watched').addEventListener('click', () => {
    if (!activeFilmId) return;
    markWatched(activeFilmId);
    refreshAllNodes();
    updateSagaBar();
    renderPanel(activeFilmId);

    // Haptic (iOS)
    if (window.navigator.vibrate) navigator.vibrate(10);
  });

  // Save note
  document.getElementById('btn-save-note').addEventListener('click', () => {
    if (!activeFilmId) return;
    const note = document.getElementById('notes-input').value.trim();
    if (!state.watched[activeFilmId]) {
      markWatched(activeFilmId);
      refreshAllNodes();
      updateSagaBar();
    }
    state.watched[activeFilmId] = { ...state.watched[activeFilmId], note };
    saveState();
    // Visual feedback
    const btn = document.getElementById('btn-save-note');
    const orig = btn.textContent;
    btn.textContent = '✓';
    setTimeout(() => btn.textContent = orig, 1200);
  });

  // System theme change
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (state.theme === 'auto') applyTheme();
  });

  // Swipe down to close panel
  let touchStartY = 0;
  const panel = document.getElementById('detail-panel');
  panel.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
  panel.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].clientY - touchStartY;
    if (delta > 80) closePanel();
  }, { passive: true });
}

// ─── PWA SERVICE WORKER ──────────────────────────────
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
}

// ─── INIT ─────────────────────────────────────────────
function init() {
  loadState();
  applyTheme();
  applyI18n();
  buildTimeline();
  updateSagaBar();
  bindEvents();
  registerSW();
}

document.addEventListener('DOMContentLoaded', init);
