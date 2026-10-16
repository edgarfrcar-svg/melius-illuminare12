/**
 * Profile rendering + routing engine for figures/profile.html
 *
 * URL contract (the "contextual navigation" architecture):
 *   figures/profile.html?id=<figureId>            → full profile, no foregrounding
 *   figures/profile.html?id=<figureId>&topic=<key> → profile with that opinion
 *                                                     foregrounded (moved first,
 *                                                     highlighted, scrolled to,
 *                                                     with a "you arrived from…"
 *                                                     banner)
 *
 * A permalink to one specific position also works without JS-driven context,
 * via the plain anchor: figures/profile.html?id=augustine#on-grace
 *
 * Any page in the site can link into a figure's specific position — e.g. a
 * doctrine page for "Free Will" links to
 * figures/profile.html?id=augustine&topic=free-will — without either page
 * needing to know about the other's internals. That decoupling is what lets
 * this scale to many figures and many linking pages.
 */
(function () {
  const DATA = window.PROFILE_DATA || {};
  const TRADITIONS = window.TRADITION_COLORS || {};
  const VISUAL_PRESETS = window.PROFILE_VISUAL_PRESETS || {};
  const raf = window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (fn) { setTimeout(fn, 0); };

  function qs(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /** Detect "quote" — Source paragraphs and style like Concepts (golden cite). */
  function formatEssayParagraph(raw, escapeHtml) {
    var t = String(raw || "").trim();
    if (!t) return "";
    // Match: "text" — source   or  "text" - source  (curly or straight quotes)
    var m = t.match(/^[\u201c\u201d"'](.+?)[\u201c\u201d"']\s*[\u2014\u2013\-—–]\s*(.+)$/s);
    if (m) {
      return (
        '<blockquote class="exhibit-quote"><p>' +
        escapeHtml(m[1].trim()) +
        '</p><cite class="exhibit-cite">' +
        escapeHtml(m[2].trim()) +
        "</cite></blockquote>"
      );
    }
    // Also: whole line is a quote ending with — Source without leading quote on source part only
    var m2 = t.match(/^[\u201c"](.+)[\u201d"]\s*$/s);
    if (m2 && /[\u2014\u2013—–]/.test(m2[1])) {
      var parts = m2[1].split(/\s*[\u2014\u2013—–]\s*/);
      if (parts.length >= 2) {
        var src = parts.pop().trim();
        var body = parts.join(" — ").trim();
        return (
          '<blockquote class="exhibit-quote"><p>' +
          escapeHtml(body) +
          '</p><cite class="exhibit-cite">' +
          escapeHtml(src) +
          "</cite></blockquote>"
        );
      }
    }
    return null;
  }



  function paras(list) {
    return (list || []).map(function (p) { return '<p>' + escapeHtml(p) + '</p>'; }).join('');
  }

  function slugify(str) {
    return String(str || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function monogram(name) {
    const parts = String(name || '?').replace(/of\s|the\s/gi, '').split(' ').filter(Boolean);
    return (parts[0] ? parts[0][0] : '?') + (parts[1] ? parts[1][0] : '');
  }

  // A "relation card" links to another figure's profile when we have data for
  // them (figureId present in PROFILE_DATA), preserving topic context where
  // it makes sense; otherwise it renders as an inert card with just the note.
  function relCard(rel, opts) {
    opts = opts || {};
    const hasProfile = rel.figureId && DATA[rel.figureId];
    const name = escapeHtml(rel.name);
    const note = rel.note ? '<span class="fp-rel-note">' + escapeHtml(rel.note) + '</span>' : '';
    if (hasProfile) {
      let href = 'profile.html?id=' + encodeURIComponent(rel.figureId);
      if (opts.topicKey) href += '&topic=' + encodeURIComponent(opts.topicKey);
      return '<a class="fp-rel-card" href="' + href + '">' +
        '<span class="fp-rel-name">' + name + ' →</span>' + note + '</a>';
    }
    return '<div class="fp-rel-card fp-rel-inert"><span class="fp-rel-name">' + name + '</span>' + note + '</div>';
  }

  function traditionMeta(key) {
    return TRADITIONS[key] || { name: key || 'Unclassified', color: '#a39a86', glow: 'transparent' };
  }


  function resolveVisualIdentity(figure) {
    const base = {
      preset: 'default',
      mood: 'quiet scholarly atmosphere',
      motif: 'subtle illumination',
      texture: 'none',
      motion: 'slow-breath',
      typography: 'meditative',
      palette: {}
    };
    const preset = figure && figure.visual && figure.visual.preset && VISUAL_PRESETS[figure.visual.preset]
      ? VISUAL_PRESETS[figure.visual.preset]
      : {};
    return Object.assign(base, preset, figure && figure.visual ? figure.visual : {});
  }

  function applyVisualIdentity(figure) {
    const shell = document.querySelector('.fp-shell');
    if (!shell) return;
    const identity = resolveVisualIdentity(figure);
    const palette = identity.palette || {};

    shell.setAttribute('data-identity', identity.preset || 'default');
    shell.style.setProperty('--fp-hero-bg', palette.hero || 'radial-gradient(circle at 50% 10%, rgba(201,162,39,0.12), transparent 34%), linear-gradient(180deg, rgba(13,16,20,0.95), rgba(8,9,12,0.98))');
    shell.style.setProperty('--fp-surface-top', palette.surfaceTop || '#12141d');
    shell.style.setProperty('--fp-surface-bottom', palette.surfaceBottom || '#0a0d12');
    shell.style.setProperty('--fp-panel', palette.panel || '#12141d');
    shell.style.setProperty('--fp-accent', palette.accent || '#c9a227');
    shell.style.setProperty('--fp-accent-soft', palette.accentSoft || 'rgba(201,162,39,0.18)');
    shell.style.setProperty('--fp-glow', palette.glow || 'rgba(201,162,39,0.18)');
    shell.style.setProperty('--fp-border', palette.border || 'rgba(236,229,212,0.12)');
    shell.style.setProperty('--fp-hero-ink', palette.heroInk || '#ece5d4');
    shell.style.setProperty('--fp-display-font', identity.typography === 'ordered' ? '"Cinzel", serif' : '"Cinzel", serif');
    shell.dataset.motif = identity.motif || 'subtle-illumination';
    shell.dataset.texture = identity.texture || 'none';
    shell.dataset.motion = identity.motion || 'slow-breath';
  }

  function buildEssay(figure) {
    // Prefer an explicit long-form essay when present.
    if (figure.essay && String(figure.essay).trim()) {
      return String(figure.essay).trim();
    }

    var chunks = [];
    var name = figure.name || 'This figure';

    // Opening: identity and central question
    var open = name;
    if (figure.dates) open += ' (' + figure.dates + ')';
    if (figure.period) open += ' belongs to the ' + figure.period;
    else open += ' stands in the theological tradition of the Church';
    open += '.';
    if (figure.roles && figure.roles.length) {
      open += ' Remembered as ' + figure.roles.slice(0, 4).join(', ') + '.';
      open += ' This teaching still shapes Catholic reading of Scripture and the spiritual life.';
    }
    chunks.push(open);

    if (figure.centralQuestion) {
      chunks.push(
        (figure.centralQuestionLabel ? figure.centralQuestionLabel.replace(/:$/, '') + ': ' : 'The question that organizes this life: ') +
        '"' + figure.centralQuestion + '"' +
        ' What follows is not a list of opinions, but the path of a mind and heart trying to answer it before God.'
      );
    }

    // Intellectual portrait — the spine of the essay
    var ip = figure.intellectualPortrait;
    if (ip && ip.paragraphs && ip.paragraphs.length) {
      if (ip.question) {
        chunks.push(ip.question);
      }
      ip.paragraphs.forEach(function (p) {
        if (!p) return;
        if (typeof p === 'string') {
          chunks.push(p);
        } else if (p.text) {
          var block = p.text;
          if (p.label) {
            block = p.label.replace(/:$/, '') + '. ' + block;
          }
          chunks.push(block);
        }
      });
    }

    // Biography woven as narrative continuum
    if (figure.bio && figure.bio.length) {
      figure.bio.forEach(function (p) {
        if (p && String(p).trim()) chunks.push(String(p).trim());
      });
    }

    // Major positions — woven as continuous prose, not cards
    if (figure.opinions && figure.opinions.length) {
      chunks.push(
        'Among the positions for which ' + name + ' is remembered, several remain living questions in the Church.'
      );
      figure.opinions.forEach(function (op) {
        if (!op) return;
        var piece = '';
        if (op.title) piece += op.title.replace(/^On /, 'On ') + '. ';
        if (op.thesis) piece += op.thesis + ' ';
        if (op.paragraphs && op.paragraphs.length) {
          piece += op.paragraphs.filter(Boolean).join(' ');
        }
        if (piece.trim()) chunks.push(piece.trim());
      });
    }

    // Controversies as narrative
    if (figure.controversies && figure.controversies.length) {
      var ctext = 'This life was not lived apart from conflict. ';
      figure.controversies.forEach(function (c) {
        if (!c) return;
        ctext += (c.name ? c.name + ': ' : '') + (c.summary || '') + ' ';
      });
      chunks.push(ctext.trim());
    }

    // Closing
    if (figure.concepts && figure.concepts.length) {
      chunks.push(
        'Themes that return throughout this teaching include ' +
        figure.concepts.slice(0, 8).join(', ') +
        '. They are not slogans; they are the load-bearing words of a mind formed by Scripture and the life of the Church.'
      );
    }

    chunks.push(
      'What remains is not a museum of ideas but a path: to read with this teacher is to be drawn into the same questions before the same God. The Church keeps such voices not for curiosity alone, but so that faith may think, and thought may pray.'
    );

    return chunks.filter(Boolean).join('\n\n');
  }


  /** Key works from FIGURES list, profile.works, or primarySources. */
  function getFigureWorks(figure) {
    if (figure.works && figure.works.length) return figure.works;
    var fid = figure.id;
    if (typeof FIGURES !== "undefined" && Array.isArray(FIGURES)) {
      var hit = FIGURES.find(function (f) { return f.id === fid; });
      if (hit && hit.works && hit.works.length) return hit.works;
    }
    if (figure.primarySources && figure.primarySources.length) {
      return figure.primarySources.map(function (s) {
        return { title: s.title || s.name || "", note: s.note || s.cite || "", url: s.url || "" };
      });
    }
    return [];
  }

  function buildFaq(figure) {
    if (figure.faq && figure.faq.length) return figure.faq;
    var faq = [];
    var name = figure.name || 'This figure';

    if (figure.centralQuestion) {
      faq.push({
        q: 'What is the central question of ' + name + '?',
        a: figure.centralQuestion + (figure.intellectualPortrait && figure.intellectualPortrait.question
          ? ' Relatedly: ' + figure.intellectualPortrait.question
          : '')
      });
    }

    if (figure.tradition || figure.period) {
      faq.push({
        q: 'Where does ' + name + ' stand in the Church\'s history?',
        a: [figure.period, figure.dates, (figure.roles || []).slice(0, 3).join(', ')].filter(Boolean).join(' · ')
      });
    }

    if (figure.concepts && figure.concepts.length) {
      faq.push({
        q: 'What themes mark this teaching?',
        a: figure.concepts.join('; ') + '.'
      });
    }

    if (figure.primarySources && figure.primarySources.length) {
      faq.push({
        q: 'Where should a reader begin in the sources?',
        a: figure.primarySources.slice(0, 5).map(function (s) {
          return s.title + (s.note ? ' (' + s.note + ')' : '');
        }).join('; ') + '.'
      });
    }

    if (figure.opinions && figure.opinions.length) {
      faq.push({
        q: 'What positions is ' + name + ' most associated with?',
        a: figure.opinions.slice(0, 6).map(function (o) {
          return (o.title || '') + (o.thesis ? ' — ' + o.thesis : '');
        }).join(' ')
      });
    }

    faq.push({
      q: 'How should this profile be read?',
      a: 'As a single essay: not a catalogue of fragments, but a continuous attempt to show how this life and mind answer God. Follow the primary sources next; let the teacher speak in full.'
    });

    return faq;
  }

  function render(figure, topicKey) {
    var worksList = getFigureWorks(figure);
    const main = document.getElementById('fp-main');
    const nav = document.getElementById('fp-nav');
    const banner = document.getElementById('fp-context-banner');
    const t = traditionMeta(figure.tradition);
    applyVisualIdentity(figure);

    document.title = figure.name + ' — Melius Illuminare';

    // Context banner only when arriving via a topic link
    const opinions = figure.opinions || [];
    let matchedOpinion = null;
    if (topicKey) {
      matchedOpinion = opinions.find(function (o) { return o.id === topicKey; }) || null;
    }
    if (matchedOpinion) {
      banner.classList.add('is-visible');
      banner.innerHTML =
        '<span>Arrived via <strong>' + escapeHtml(topicLabel(topicKey)) + '</strong> — ' +
        '<strong>' + escapeHtml(matchedOpinion.title) + '</strong>.</span>' +
        '<a class="fp-banner-exhibit" href="opinion.html?id=' + encodeURIComponent(figure.id) +
        '&topic=' + encodeURIComponent(matchedOpinion.id) + '">Open intellectual exhibit →</a>' +
        '<button type="button" id="fp-clear-context">View full profile</button>';
      const clearBtn = document.getElementById('fp-clear-context');
      if (clearBtn) {
        clearBtn.addEventListener('click', function () {
          const url = new URL(window.location.href);
          url.searchParams.delete('topic');
          window.location.href = url.pathname + (url.search || '');
        });
      }
    } else {
      banner.classList.remove('is-visible');
      banner.innerHTML = '';
    }

    function mediaUrl(src) {
      if (!src) return '';
      if (/^https?:\/\//i.test(src) || src.indexOf('../') === 0 || src.charAt(0) === '/') return src;
      if (src.indexOf('img/') === 0) return '../' + src;
      return src;
    }
    const portraitSrc = mediaUrl(figure.portrait);
    const portraitInner = portraitSrc
      ? '<img src="' + escapeHtml(portraitSrc) + '" alt="" />'
      : '<span class="fp-monogram">' + escapeHtml(monogram(figure.name)) + '</span>';

    const rolesHtml = (figure.roles || []).map(function (r) {
      return '<span class="fp-role-pill">' + escapeHtml(r) + '</span>';
    }).join('');

    // ---- Hero (restored structure) ----
    let html = '';
    html += '<div class="fp-hero">';
    html += '<span class="fp-ornament fp-ornament-a" aria-hidden="true"></span>';
    html += '<span class="fp-ornament fp-ornament-b" aria-hidden="true"></span>';
    html += '<div class="fp-hero-grid">';
    html += '<div class="fp-hero-copy">';
    html += '<p class="fp-eyebrow">' + escapeHtml(figure.period || t.name || '') + '</p>';
    html += '<h1>' + escapeHtml(figure.name) + '</h1>';
    if (figure.centralQuestion) {
      html += '<div class="fp-central-question">';
      html += '<span class="fp-cq-label">' + escapeHtml(figure.centralQuestionLabel || 'Central question') + '</span>';
      html += '<p class="fp-cq-text">' + escapeHtml(figure.centralQuestion) + '</p>';
      html += '</div>';
    }
    if (figure.epithet) html += '<p class="fp-epithet">' + escapeHtml(figure.epithet) + '</p>';
    html += '<div class="fp-dates">' + escapeHtml(figure.dates || '') + '</div>';
    if (rolesHtml) html += '<div class="fp-roles">' + rolesHtml + '</div>';
    if (t && t.name) {
      html += '<span class="tag-pill" style="border-color:' + t.color + '; color:' + t.color + '">' + escapeHtml(t.name) + '</span>';
    }
    html += '</div>'; // copy
    html += '<div class="fp-portrait-wrap">';
    html += '<div class="fp-portrait-glow" aria-hidden="true"></div>';
    html += '<div class="fp-portrait">' + portraitInner + '</div>';
    html += '</div>';
    html += '</div>'; // grid
    html += '</div>'; // hero

    // ---- Essay (scholastic-narrative standard) ----
    const essay = buildEssay(figure);
    html += '<article class="fp-essay fp-section" id="essay">';
    html += '<header class="fp-essay-head">';
    html += '<span class="fp-essay-kicker">Encyclopedia article</span>';
    html += '<h2>Life and teaching</h2>';
    if (figure.centralQuestion) {
      html += '<p class="fp-essay-lemma"><span>Lemma.</span> ' + escapeHtml(figure.centralQuestion) + '</p>';
    }
    html += '</header>';
    html += '<div class="fp-essay-body">';
    var paras = essay.split(/\n\n+/).filter(function (p) { return p.trim(); });
    paras.forEach(function (para, i) {
      var t = para.trim();
      var asQuote = formatEssayParagraph(t, escapeHtml);
      if (asQuote) {
        html += asQuote;
      } else if (i === 0) {
        html += '<p class="fp-essay-status">' + escapeHtml(t) + '</p>';
      } else {
        html += '<p>' + escapeHtml(t) + '</p>';
      }
    });
    html += '</div>';
    html += '<footer class="fp-essay-foot"><p>In the manner of a Catholic encyclopedia article — history, doctrine, sources, and place in the Church.</p></footer>';
    html += '</article>';



    // ---- Greatest Ideas ----
    var ideas = figure.greatestIdeas || [];
    if (ideas.length) {
      html += '<section class="fp-section fp-greatest-ideas" id="greatest-ideas">';
      html += '<header class="fp-gi-head">';
      html += '<span class="fp-gi-kicker">Intellectual doors</span>';
      html += '<h2>Greatest Ideas</h2>';
      html += '<p class="fp-gi-intro">Short enough to intrigue; deep enough to follow into the sources.</p>';
      html += '</header>';
      html += '<div class="fp-gi-grid">';
      ideas.forEach(function (item, i) {
        var idea = typeof item === "string" ? item : (item.idea || item.title || "");
        var source = typeof item === "object" ? (item.source || "") : "";
        var num = String(i + 1).length < 2 ? "0" + (i + 1) : String(i + 1);
        var href = "idea.html?id=" + encodeURIComponent(figure.id || "") + "&i=" + i;
        html += '<a class="fp-gi-card fp-gi-card-link" href="' + href + '">';
        html += '<span class="fp-gi-ornament" aria-hidden="true">✦</span>';
        html += '<span class="fp-gi-num">' + num + "</span>";
        html += '<p class="fp-gi-idea">' + escapeHtml(idea) + "</p>";
        if (source) {
          html += '<cite class="fp-gi-source">' + escapeHtml(source) + "</cite>";
        }
        html += '<span class="fp-gi-open">Read the article →</span>';
        html += "</a>";
      });
      html += "</div></section>";
    }

    // ---- Key works ----
    worksList = getFigureWorks(figure);
    if (worksList.length) {
      html += '<section class="fp-section fp-works" id="works">';
      html += '<h2>Key works</h2>';
      html += '<ul class="fp-works-list">';
      worksList.forEach(function (w) {
        var title = w.title || w.name || "";
        var note = w.note || "";
        var url = w.url || "";
        if (url && url.indexOf("texts/") === 0) url = "../" + url;
        if (url) {
          html +=
            '<li class="fp-work-item"><a class="fp-work-link" href="' +
            escapeHtml(url) +
            '"><span class="fp-work-title">' +
            escapeHtml(title) +
            '</span>' +
            (note ? '<span class="fp-work-note">' + escapeHtml(note) + '</span>' : '') +
            '</a></li>';
        } else {
          html +=
            '<li class="fp-work-item"><span class="fp-work-title">' +
            escapeHtml(title) +
            '</span>' +
            (note ? '<span class="fp-work-note">' + escapeHtml(note) + '</span>' : '') +
            '</li>';
        }
      });
      html += '</ul></section>';
    }

    // ---- Themes ----
    if (figure.concepts && figure.concepts.length) {
      html += '<section class="fp-section" id="concepts"><h2>Theological notes</h2>';
      html += '<div class="fp-concept-chips">' + figure.concepts.map(function (c) {
        return '<span class="fp-concept-chip">' + escapeHtml(c) + '</span>';
      }).join('') + '</div></section>';
    }

    // ---- Sources ----
    if (figure.primarySources && figure.primarySources.length) {
      const WORKS = window.WORKS || {};
      html += '<section class="fp-section" id="sources"><h2>Primary sources</h2>';
      html += '<ul class="fp-sources-list">';
      figure.primarySources.forEach(function (s) {
        const title = escapeHtml(s.title);
        const note = s.note ? ' — ' + escapeHtml(s.note) : '';
        const workKey = s.workKey || null;
        if (workKey && WORKS[workKey]) {
          html += '<li><a href="../texts/work.html?id=' + encodeURIComponent(workKey) + '">' + title + '</a>' + note + '</li>';
        } else if (s.href) {
          html += '<li><a href="' + escapeHtml(s.href) + '">' + title + '</a>' + note + '</li>';
        } else {
          html += '<li>' + title + note + '</li>';
        }
      });
      html += '</ul></section>';
    }

    // ---- Relations ----
    function relLine(list, label) {
      if (!list || !list.length) return '';
      var bits = list.map(function (rel) {
        if (rel.figureId && DATA[rel.figureId]) {
          return '<a href="profile.html?id=' + encodeURIComponent(rel.figureId) + '">' +
            escapeHtml(rel.name || rel.figureId) + '</a>';
        }
        return escapeHtml(rel.name || '');
      }).filter(Boolean);
      if (!bits.length) return '';
      return '<p class="fp-rel-line"><strong>' + escapeHtml(label) + ':</strong> ' + bits.join(' · ') + '</p>';
    }
    var relBlock = relLine(figure.influences, 'Influences') +
      relLine(figure.influenced, 'Influenced') +
      relLine(figure.opponents, 'Opponents');
    if (relBlock) {
      html += '<section class="fp-section" id="relations"><h2>In the tradition</h2>' + relBlock + '</section>';
    }

    if (matchedOpinion) {
      html += '<p class="fp-topic-jump"><a href="opinion.html?id=' + encodeURIComponent(figure.id) +
        '&topic=' + encodeURIComponent(matchedOpinion.id) + '">Open the exhibit on ' +
        escapeHtml(matchedOpinion.title) + ' →</a></p>';
    }

    // ---- Videos (end of profile) — title above gold link ----
    var videos = figure.videos || [];
    if (videos.length) {
      html += '<section class="fp-section fp-videos" id="videos">';
      html += '<h2>Videos</h2>';
      html += '<ul class="fp-video-link-list">';
      videos.forEach(function (v) {
        var href = v.url || '';
        if (!href && (v.provider || 'youtube') === 'youtube' && v.id) {
          href = 'https://www.youtube.com/watch?v=' + encodeURIComponent(v.id);
          if (v.list) href += '&list=' + encodeURIComponent(v.list);
        }
        var label = v.title || 'Video';
        html += '<li class="fp-video-link-item">';
        html += '<div class="fp-video-title">' + escapeHtml(label) + '</div>';
        if (href) {
          var linkLabel = (href.indexOf('ewtn.com') >= 0) ? 'Watch on EWTN' : ((href.indexOf('youtube.com') >= 0 || href.indexOf('youtu.be') >= 0) ? 'Watch on YouTube' : 'Watch');
          html += '<a class="fp-video-link" href="' + escapeHtml(href) + '" target="_blank" rel="noopener noreferrer">' + linkLabel + '</a>';
        }
        html += '</li>';
      });
      html += '</ul></section>';
    }



    if (typeof worksList === "undefined") { var worksList = getFigureWorks(figure); }
    main.innerHTML = html;

    // Side nav — proper list structure matching original CSS
    if (nav) {
      var links = [
        { href: '#essay', label: 'Essay' },
        (figure.greatestIdeas && figure.greatestIdeas.length) ? { href: '#greatest-ideas', label: 'Greatest Ideas' } : null,
        worksList.length ? { href: '#works', label: 'Key works' } : null,
        (figure.concepts && figure.concepts.length) ? { href: '#concepts', label: 'Themes' } : null,
        (figure.primarySources && figure.primarySources.length) ? { href: '#sources', label: 'Sources' } : null,
        relBlock ? { href: '#relations', label: 'Relations' } : null,
        videos.length ? { href: '#videos', label: 'Videos' } : null
      ].filter(Boolean);
      nav.innerHTML =
        '<div class="fp-nav-group">' +
        '<div class="fp-nav-label">On this page</div>' +
        '<ul class="fp-nav-list">' +
        links.map(function (l) {
          return '<li><a href="' + l.href + '">' + l.label + '</a></li>';
        }).join('') +
        '</ul></div>';
    }
  }

  function renderNotFound(id) {
    const main = document.getElementById('fp-main');
    const nav = document.getElementById('fp-nav');
    nav.innerHTML = '';
    document.title = 'Figure not found — Melius Illuminare';
    main.innerHTML =
      '<div class="fp-not-found">' +
      '<h1>No profile found for “' + escapeHtml(id || '') + '”</h1>' +
      '<p>This figure may not yet be populated in the profile architecture. ' +
      '<a href="../figures.html">Browse all figures →</a></p>' +
      '</div>';
  }

  function init() {
    const id = qs('id');
    const topic = qs('topic');
    const figure = id ? DATA[id] : null;
    if (!figure) {
      renderNotFound(id);
      return;
    }
    render(figure, topic);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
