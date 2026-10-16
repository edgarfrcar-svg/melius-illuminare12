// ---------- Tradition color tokens ----------
const TRADITION_COLORS = {
  early:      { name: 'Early Church (pre-1054)', color: '#a97142', glow: '#e6b988' },
  catholic:   { name: 'Catholic',                 color: '#c9a227', glow: '#ffd98e' },
  orthodox:   { name: 'Eastern Orthodox',         color: '#6b3a76', glow: '#c79bd6' },
  protestant: { name: 'Protestant',               color: '#3a6ea5', glow: '#9ecbff' },
};

// ---------- Seed data: 15 notable figures ----------
// NOTE: portraits use `img: null` where a verified public-domain image URL has not
// yet been sourced -- these render as tradition-colored monogram avatars instead of
// a photo, and should be replaced with a real Wikimedia Commons / Web Gallery of Art
// image before launch (see README "Adding real portraits").
const FIGURES = [
  { id: 'augustine', name: 'St. Augustine of Hippo', dates: '354\u2013430', tradition: 'early',
    epithet: 'Bishop of Hippo, Doctor of Grace',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Antonio%20Rodr%C3%ADguez%20-%20Saint%20Augustine%20-%20Google%20Art%20Project.jpg',
    slug: 'figures/profile.html?id=augustine' },
  { id: 'athanasius', name: 'St. Athanasius of Alexandria', dates: '296\u2013373', tradition: 'early',
    epithet: 'Defender of the Nicene faith against Arianism', img: null, slug: null },
  { id: 'chrysostom', name: 'St. John Chrysostom', dates: '347\u2013407', tradition: 'early',
    epithet: 'Archbishop of Constantinople, "Golden-Mouthed"', img: null, slug: null },

  { id: 'aquinas', name: 'St. Thomas Aquinas', dates: '1225\u20131274', tradition: 'catholic',
    epithet: 'Doctor Angelicus, author of the Summa Theologiae',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/St-thomas-aquinas.jpg',
    slug: 'figures/profile.html?id=aquinas' },
  { id: 'anselm', name: 'St. Anselm of Canterbury', dates: '1033\u20131109', tradition: 'catholic',
    epithet: 'Father of Scholasticism, the ontological argument', img: null, slug: null },
  { id: 'teresa', name: 'Teresa of \u00c1vila', dates: '1515\u20131582', tradition: 'catholic',
    epithet: 'Carmelite mystic, Doctor of the Church', img: null, slug: null },
  { id: 'newman', name: 'St. John Henry Newman', dates: '1801\u20131890', tradition: 'catholic',
    epithet: 'Cardinal, theorist of the development of doctrine', img: null, slug: null },

  { id: 'palamas', name: 'St. Gregory Palamas', dates: '1296\u20131359', tradition: 'orthodox',
    epithet: 'Archbishop of Thessaloniki, essence\u2013energies distinction', img: null, slug: null },
  { id: 'maximus', name: 'St. Maximus the Confessor', dates: '580\u2013662', tradition: 'orthodox',
    epithet: 'Monk and theologian of the dyothelite controversy', img: null, slug: null },
  { id: 'damascene', name: 'St. John of Damascus', dates: '675\u2013749', tradition: 'orthodox',
    epithet: 'Last of the Greek Church Fathers, hymnographer', img: null, slug: null },
  { id: 'schmemann', name: 'Alexander Schmemann', dates: '1921\u20131983', tradition: 'orthodox',
    epithet: 'Liturgical theologian, dean of St Vladimir\u2019s Seminary', img: null, slug: null },

  { id: 'luther', name: 'Martin Luther', dates: '1483\u20131546', tradition: 'protestant',
    epithet: 'Augustinian friar, catalyst of the Reformation',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Martin-Luther-1526.jpg',
    slug: 'figures/profile.html?id=luther' },
  { id: 'calvin', name: 'John Calvin', dates: '1509\u20131564', tradition: 'protestant',
    epithet: 'Reformer of Geneva, author of the Institutes', img: null, slug: null },
  { id: 'edwards', name: 'Jonathan Edwards', dates: '1703\u20131758', tradition: 'protestant',
    epithet: 'Puritan theologian of the Great Awakening', img: null, slug: null },
  { id: 'spurgeon', name: 'Charles Spurgeon', dates: '1834\u20131892', tradition: 'protestant',
    epithet: 'The "Prince of Preachers," Baptist pastor', img: null, slug: null },
];

function monogram(name) {
  const parts = name.replace(/of\s|the\s/gi, '').split(' ').filter(Boolean);
  return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
}

function portraitInner(fig) {
  const t = TRADITION_COLORS[fig.tradition];
  if (fig.img) {
    return `<img src="${fig.img}" alt="Portrait of ${fig.name}" loading="lazy">`;
  }
  return `<span class="monogram" style="color:${t.color}">${monogram(fig.name)}</span>`;
}

// ---------- Timeline rendering ----------
function initTimeline() {
  const track = document.getElementById('timeline-track');
  const chipsWrap = document.getElementById('filter-chips');
  if (!track) return;

  let activeFilters = new Set(Object.keys(TRADITION_COLORS));

  function render() {
    track.innerHTML = '';
    FIGURES
      .filter(f => activeFilters.has(f.tradition))
      .sort((a, b) => parseInt(a.dates) - parseInt(b.dates))
      .forEach(fig => {
        const t = TRADITION_COLORS[fig.tradition];
        const btn = document.createElement('button');
        btn.className = 'figure-node';
        btn.style.setProperty('--ring-color', t.color);
        btn.style.setProperty('--ring-glow', t.glow);
        btn.innerHTML = `
          <div class="portrait-ring">${portraitInner(fig)}</div>
          <div class="fname">${fig.name}</div>
          <div class="fdates">${fig.dates}</div>
        `;
        btn.addEventListener('click', () => openFigurePanel(fig));
        track.appendChild(btn);
      });
  }

  Object.entries(TRADITION_COLORS).forEach(([key, t]) => {
    const chip = document.createElement('button');
    chip.className = 'filter-chip active';
    chip.innerHTML = `<span class="dot" style="background:${t.color}"></span>${t.name}`;
    chip.addEventListener('click', () => {
      if (activeFilters.has(key)) {
        activeFilters.delete(key);
        chip.classList.remove('active');
      } else {
        activeFilters.add(key);
        chip.classList.add('active');
      }
      render();
    });
    chipsWrap.appendChild(chip);
  });

  render();
}

function openFigurePanel(fig) {
  const backdrop = document.getElementById('figure-panel-backdrop');
  const panel = document.getElementById('figure-panel');
  const t = TRADITION_COLORS[fig.tradition];
  panel.style.setProperty('--ring-color', t.color);
  panel.style.setProperty('--ring-glow', t.glow);

  const readMore = fig.slug
    ? `<a class="btn btn-primary" href="${fig.slug}">Open full profile</a>`
    : `<p style="color:var(--ink-dim); font-size:0.9rem;">Full profile coming soon \u2014 this figure is seeded in the timeline as part of the first build milestone.</p>`;

  panel.innerHTML = `
    <button class="close-btn" aria-label="Close" onclick="closeFigurePanel()">&times;</button>
    <div class="panel-head">
      <div class="panel-portrait" style="border-color:${t.color}">${portraitInner(fig)}</div>
      <div>
        <span class="tag-pill" style="border-color:${t.color}; color:${t.color}">${t.name}</span>
        <h3>${fig.name}</h3>
        <div style="color:var(--ink-dim); font-size:0.9rem;">${fig.dates}</div>
      </div>
    </div>
    <div class="panel-body">
      <p>${fig.epithet}.</p>
    </div>
    <div class="panel-cta">${readMore}</div>
  `;
  backdrop.classList.add('open');
}

function closeFigurePanel() {
  document.getElementById('figure-panel-backdrop').classList.remove('open');
}

// ---------- Ambient dust motes for hero ----------
function initMotes() {
  const wrap = document.querySelector('.motes');
  if (!wrap) return;
  const count = 40;
  for (let i = 0; i < count; i++) {
    const m = document.createElement('div');
    m.className = 'mote';
    m.style.left = Math.random() * 100 + '%';
    m.style.bottom = -10 + 'px';
    const size = 2 + Math.random() * 4;
    m.style.width = size + 'px';
    m.style.height = size + 'px';
    m.style.animationDuration = (10 + Math.random() * 16) + 's';
    m.style.animationDelay = (Math.random() * 14) + 's';
    wrap.appendChild(m);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initMotes();
  initTimeline();
  const backdrop = document.getElementById('figure-panel-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeFigurePanel();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeFigurePanel();
    });
  }
});
