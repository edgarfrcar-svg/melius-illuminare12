/**
 * Encyclopedia-style concept exhibit renderer.
 * Data lives in CONCEPT_EXHIBITS (concept-exhibits-data.js) plus GRACE below.
 */
(function (global) {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function figLink(id, name) {
    if (!id) return "<span>" + esc(name) + "</span>";
    return '<a href="figures/profile.html?id=' + encodeURIComponent(id) + '">' + esc(name) + "</a>";
  }

  function defaultSections(data) {
    var s = [
      { id: "the-question", label: "The Question" },
      { id: "at-a-glance", label: "At a Glance" }
    ];
    (data.traditions || []).forEach(function (t) {
      var short = String(t.name || "").split("/")[0].trim();
      s.push({ id: t.id, label: short });
    });
    s.push({ id: "where-agree", label: "Agreement" });
    s.push({ id: "where-clash", label: "Controversies" });
    s.push({ id: "history", label: "History" });
    s.push({ id: "sources", label: "Sources" });
    s.push({ id: "thread", label: "Thread" });
    return s;
  }

  function renderVideoLinks(videos) {
    if (!videos || !videos.length) return "";
    var html = '<section class="exhibit-section" id="videos">' +
      '<span class="exhibit-kicker">Videos</span>' +
      "<h2>Videos</h2>" +
      '<ul class="mi-video-links">';
    videos.forEach(function (v) {
      var href = v.url || "";
      var label = v.title || "Watch on YouTube";
      if (href) {
        html += '<li><span class="mi-video-title">' + esc(label) + '</span>' +
        '<a href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">Watch on YouTube</a></li>';
      }
    });
    html += "</ul></section>";
    return html;
  }

  function renderGlance(data) {
    var cols = data.glance.columns;
    var html = '<div class="glance-wrap"><table class="glance-table"><thead><tr><th class="row-label">Theme</th>';
    cols.forEach(function (c) {
      html +=
        '<th class="th-' +
        c.key +
        '">' +
        esc(c.label) +
        "</th>";
    });
    html += "</tr></thead><tbody>";
    data.glance.rows.forEach(function (row) {
      html += '<tr><th class="row-label" scope="row">' + esc(row.label) + "</th>";
      cols.forEach(function (c) {
        html +=
          "<td><p class=\"glance-cell-text\">" +
          esc(row.cells[c.key]) +
          '</p><a class="glance-link" href="#' +
          esc(c.anchor) +
          '">Read the teaching →</a></td>';
      });
      html += "</tr>";
    });
    html += "</tbody></table></div>";
    return html;
  }

  function renderTradition(t) {
    var account = (t.account || [])
      .map(function (p) {
        return "<p>" + esc(p) + "</p>";
      })
      .join("");
    var figs = (t.figures || [])
      .map(function (f) {
        return figLink(f.id, f.name);
      })
      .join("");
    return (
      '<section class="tradition-block trad-' +
      t.key +
      '" id="' +
      esc(t.id) +
      '">' +
      '<header class="tradition-block-header">' +
      '<p class="trad-name">' +
      esc(t.name) +
      "</p>" +
      "<h2>" +
      esc(t.subtitle) +
      "</h2>" +
      "</header>" +
      '<div class="tradition-grid">' +
      '<div class="tradition-main">' +
      '<div class="tradition-sub"><h3>The ' +
      esc(t.name) +
      " account</h3>" +
      account +
      "</div>" +
      '<div class="tradition-sub" style="margin-top:1.5rem"><h3>The argument</h3><p>' +
      esc(t.argument) +
      "</p></div>" +
      "</div>" +
      '<div class="tradition-side">' +
      '<div class="tradition-panel"><h3>The strongest objection</h3><p>' +
      esc(t.objection) +
      "</p></div>" +
      '<div class="tradition-panel"><h3>The response</h3><p>' +
      esc(t.response) +
      "</p></div>" +
      '<div class="tradition-panel"><h3>Key figures</h3><div class="key-figures">' +
      figs +
      "</div></div>" +
      "</div></div></section>"
    );
  }


  function defaultSectionsV2(data) {
    var s = [
      { id: "definition", label: "Definition" },
      { id: "questions", label: "Questions" }
    ];
    if (data.answers && data.answers.length) {
      s.push({ id: "answers", label: "Answers" });
    }
    s.push({ id: "schools", label: "Catholic Schools" });
    s.push({ id: "sources", label: "Sources" });
    if (data.recommendedReading && data.recommendedReading.length) {
      s.push({ id: "recommended-reading", label: "Reading" });
    }
    if (data.videos && data.videos.length) {
      s.push({ id: "videos", label: "Videos" });
    }
    return s;
  }

  
  function renderRecommendedReading(data) {
    var list = data.recommendedReading || [];
    if (!list.length) return "";
    var html =
      '<section class="exhibit-section" id="recommended-reading">' +
      '<span class="exhibit-kicker">Recommended reading</span>' +
      "<h2>Classic sources for further study</h2>" +
      '<p class="exhibit-section-intro">Weighted toward the Fathers, the Scholastics, Trent-era theology, and the manualist tradition. Modern works are kept to a minimum.</p>' +
      '<ol class="exhibit-reading-list">';
    list.forEach(function (item, i) {
      var author = typeof item === "string" ? "" : (item.author || "");
      var work = typeof item === "string" ? item : (item.work || item.title || "");
      var num = String(i + 1).length < 2 ? "0" + (i + 1) : String(i + 1);
      html +=
        '<li class="exhibit-reading-item">' +
        '<span class="exhibit-reading-num">' + num + "</span>" +
        '<div class="exhibit-reading-body">' +
        (author ? '<span class="exhibit-reading-author">' + esc(author) + "</span>" : "") +
        '<span class="exhibit-reading-work">' + esc(work) + "</span>" +
        "</div></li>";
    });
    html += "</ol></section>";

    html += renderVideoLinks(data.videos);
    return html;
  }


  

  function renderCatholicV2(data) {
    var html = "";
    var art = global.CONCEPT_ART && global.CONCEPT_ART[data.id];
    var artUrl = "";
    if (art) {
      if (String(art[0]).indexOf("LOCAL:") === 0) artUrl = String(art[0]).slice(6);
      else artUrl = "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(art[0]) + "?width=1600";
    }
    var heroStyle = artUrl
      ? ' style="--concept-hero-image:url(\'' + artUrl.replace(/'/g, "%27") + "');--concept-hero-position:" + esc(art[1] || "center center") + ';"'
      : "";

    // 1. Hero + Definition
    html +=
      '<header class="exhibit-hero' + (artUrl ? ' has-art' : '') + '" id="exhibit-top"' + heroStyle + ">" +
      '<div class="exhibit-hero-inner">' +
      '<a class="exhibit-back" href="concepts.html">← All Concepts</a>' +
      '<span class="exhibit-eyebrow">' + esc(data.domain || "Doctrine") + "</span>" +
      "<h1>" + esc(data.title) + "</h1>" +
      (data.latin ? '<p class="exhibit-latin">' + esc(data.latin) + "</p>" : "") +
      "</div></header>";

    html +=
      '<section class="exhibit-section" id="definition">' +
      '<span class="exhibit-kicker">Catholic definition</span>' +
      "<h2>What the Church means by " + esc(data.title) + "</h2>" +
      '<div class="exhibit-definition-block">' +
      '<p class="exhibit-definition-lead">' + esc(data.definition) + "</p>" +
      "</div></section>";

    // 2. Questions list
    html +=
      '<section class="exhibit-section" id="questions">' +
      '<span class="exhibit-kicker">Themes</span>' +
      "<h2>Questions that structure the doctrine</h2>" +
      '<p class="exhibit-section-intro">Each question opens its own page — a chapter of the teaching, drawn from Scripture, the Fathers, St. Thomas, and Trent. This is the heart of the entry.</p>' +
      '<ol class="exhibit-q-grid">';
    (data.questions || []).forEach(function (q, i) {
      var qText = typeof q === "string" ? q : (q.q || q.question || "");
      var qId = typeof q === "object" && q.id ? q.id : null;
      var qShort = (typeof q === "object" && q.short) || "";
      var href = qId
        ? "concept-question.html?concept=" + encodeURIComponent(data.id) + "&q=" + encodeURIComponent(qId)
        : "#answer-" + i;
      var num = String(i + 1).length < 2 ? "0" + (i + 1) : String(i + 1);
      html +=
        '<li class="exhibit-q-card-item">' +
        '<a class="exhibit-q-card" href="' + href + '">' +
        '<span class="exhibit-q-num">' + num + "</span>" +
        '<h3 class="exhibit-q-card-title">' + esc(qText) + "</h3>" +
        (qShort ? '<p class="exhibit-q-card-blurb">' + esc(qShort) + "</p>" : "") +
        '<span class="exhibit-q-card-cta">Read <span aria-hidden="true">&rarr;</span></span>' +
        "</a></li>";
    });
    html += "</ol></section>";

    // 3. Answers (inline only if present; otherwise dedicated pages already linked above)
    if (data.answers && data.answers.length) {
    html +=
      '<section class="exhibit-section" id="answers">' +
      '<span class="exhibit-kicker">Teaching</span>' +
      "<h2>Answers from the tradition</h2>" +
      '<p class="exhibit-section-intro">Each answer is drawn from Scripture, the Fathers, the Doctors, and the Councils — not as a private opinion, but as the Church’s public teaching.</p>';

    (data.answers || []).forEach(function (a, i) {
      html +=
        '<article class="exhibit-answer" id="answer-' + i + '">' +
        "<h3>" + esc(a.question) + "</h3>" +
        '<div class="exhibit-answer-body">';
      (a.paragraphs || []).forEach(function (p) {
        html += "<p>" + esc(p) + "</p>";
      });
      html += "</div>";
      if (a.sources && a.sources.length) {
        html += '<ul class="exhibit-answer-sources">';
        a.sources.forEach(function (s) {
          html +=
            "<li><span class=\"src-cite\">" + esc(s.cite) + "</span>" +
            (s.ref ? ' <span class="src-note">— ' + esc(s.ref) + "</span>" : "") +
            "</li>";
        });
        html += "</ul>";
      }
      html += "</article>";
    });
    html += "</section>";
    }

    // 4. Schools within Catholicism
    html +=
      '<section class="exhibit-section" id="schools">' +
      '<span class="exhibit-kicker">Within the Church</span>' +
      "<h2>Catholic schools on " + esc(data.title) + "</h2>" +
      '<p class="exhibit-section-intro">The dogmatic core is shared. Legitimate theological schools differ in emphasis and method. Where the Church has not defined one school against the others, several Catholic approaches may be presented side by side.</p>' +
      '<div class="schools-grid">';

    (data.schools || []).forEach(function (sch, si) {
      var sid = sch.id || ("school-" + si);
      html +=
        '<article class="school-card" id="school-' + esc(sid) + '">' +
        '<header class="school-header">' +
        (sch.latin ? '<span class="school-latin">' + esc(sch.latin) + "</span>" : "") +
        "<h3>" + esc(sch.name) + "</h3>" +
        '<p class="school-thesis">' + esc(sch.thesis) + "</p>" +
        "</header>" +
        '<div class="school-body">';
      (sch.account || []).forEach(function (p) {
        html += "<p>" + esc(p) + "</p>";
      });
      if (sch.points && sch.points.length) {
        html += "<ul>";
        sch.points.forEach(function (pt) {
          html += "<li>" + esc(pt) + "</li>";
        });
        html += "</ul>";
      }
      html += "</div>";
      if (sch.figures && sch.figures.length) {
        html += '<div class="school-figures"><span class="school-label">Key voices</span><div class="key-figures">';
        sch.figures.forEach(function (f) {
          if (typeof f === "string") {
            html += "<span>" + esc(f) + "</span>";
          } else {
            html += figLink(f.id, f.name);
          }
        });
        html += "</div></div>";
      }
      if (sch.sources && sch.sources.length) {
        html += '<ul class="exhibit-answer-sources">';
        sch.sources.forEach(function (s) {
          html +=
            "<li><span class=\"src-cite\">" + esc(s.cite) + "</span>" +
            (s.ref ? ' <span class="src-note">— ' + esc(s.ref) + "</span>" : "") +
            "</li>";
        });
        html += "</ul>";
      }
      html += "</article>";
    });
    html += "</div></section>";

    // Sources
    if (data.sources && data.sources.length) {
      html +=
        '<section class="exhibit-section" id="sources">' +
        '<span class="exhibit-kicker">Primary sources</span>' +
        "<h2>Read further</h2>" +
        '<ul class="exhibit-source-list">';
      data.sources.forEach(function (s) {
        var title = s.title || s.cite || "";
        var url = s.url || "";
        if (url) {
          html +=
            '<li><a href="' + esc(url) + '" target="_blank" rel="noopener">' +
            esc(title) + "</a>" +
            (s.note ? ' <span class="src-note">— ' + esc(s.note) + "</span>" : "") +
            "</li>";
        } else {
          html +=
            "<li>" + esc(title) +
            (s.note ? ' <span class="src-note">— ' + esc(s.note) + "</span>" : "") +
            "</li>";
        }
      });
      html += "</ul></section>";
    }

    // Related
    if (data.related && data.related.length) {
      html +=
        '<section class="exhibit-section" id="related">' +
        '<span class="exhibit-kicker">Continue</span>' +
        "<h2>Related concepts</h2>" +
        '<div class="related-chips">';
      data.related.forEach(function (r) {
        if (r.id) {
          html +=
            '<a href="concept.html?id=' + encodeURIComponent(r.id) + '">' + esc(r.name) + "</a>";
        }
      });
      html += "</div></section>";
    }

    html += renderVideoLinks(data.videos);

    html +=
      '<p class="exhibit-footnote">Melius Illuminare presents Catholic doctrine for study, grounded in Scripture, the Fathers, the Doctors, and the Councils. Controversies with other Christian traditions are treated in a separate section of the archive.</p>';

    return html;
  }


  function renderExhibit(data) {
    var html = "";
    var art = global.CONCEPT_ART && global.CONCEPT_ART[data.id];
    var artUrl = "";
    if (art) {
      if (String(art[0]).indexOf("LOCAL:") === 0) artUrl = String(art[0]).slice(6);
      else artUrl = "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(art[0]) + "?width=1600";
    }
    var heroStyle = artUrl
      ? ' style="--concept-hero-image:url(\'' + artUrl.replace(/'/g, "%27") + "\');--concept-hero-position:" + esc(art[1] || "center center") + ';"'
      : "";
    html +=
      '<header class="exhibit-hero' + (artUrl ? ' has-art' : '') + '" id="exhibit-top"' + heroStyle + '>' +
      '<div class="exhibit-hero-inner">' +
      '<a class="exhibit-back" href="concepts.html">← All Concepts</a>' +
      '<span class="exhibit-eyebrow">' +
      esc(data.domain) +
      "</span>" +
      "<h1>" +
      esc(data.title) +
      "</h1>" +
      '<p class="exhibit-question">' +
      esc(data.centralQuestion) +
      "</p>" +
      '<p class="exhibit-definition">' +
      esc(data.definition) +
      "</p>" +
      '<p class="exhibit-lead">' +
      esc(data.lead) +
      "</p>" +
      "</div></header>";

    html +=
      '<section class="exhibit-section" id="the-question">' +
      '<span class="exhibit-kicker">Orientation</span>' +
      "<h2>The Question</h2>" +
      '<div class="exhibit-question-block">' +
      '<p class="exhibit-question-quote">' +
      esc(data.questionQuote || data.centralQuestion) +
      "</p>" +
      '<p class="exhibit-question-note">' +
      esc(data.questionNote || "") +
      "</p>" +
      '<ul class="exhibit-q-list">' +
      (data.deeperQuestions || [])
        .map(function (q) {
          return "<li>" + esc(q) + "</li>";
        })
        .join("") +
      "</ul></div></section>";

    html +=
      '<section class="exhibit-section" id="at-a-glance">' +
      '<span class="exhibit-kicker">Comparison</span>' +
      "<h2>" +
      esc(data.glanceTitle || data.title + " at a Glance") +
      "</h2>" +
      renderGlance(data) +
      "</section>";

    data.traditions.forEach(function (t) {
      html += renderTradition(t);
    });

    html +=
      '<section class="exhibit-section" id="where-agree">' +
      '<span class="exhibit-kicker">Common ground</span>' +
      "<h2>Where the Traditions Agree</h2>" +
      '<div class="agree-grid">' +
      (data.agreements || [])
        .map(function (a) {
          return (
            '<div class="agree-item"><span class="agree-mark" aria-hidden="true"></span><p>' +
            esc(a) +
            "</p></div>"
          );
        })
        .join("") +
      "</div></section>";

    html +=
      '<section class="exhibit-section" id="where-clash">' +
      '<span class="exhibit-kicker">Disagreement</span>' +
      "<h2>Where the Traditions Clash</h2>";
    (data.clashes || []).forEach(function (c) {
      html +=
        '<div class="clash-item"><h3>' +
        esc(c.title) +
        '</h3><div class="clash-grid">' +
        (c.cells || [])
          .map(function (cell) {
            return (
              '<div class="clash-cell"><span class="c-label">' +
              esc(cell.label) +
              "</span><p>" +
              esc(cell.text) +
              "</p></div>"
            );
          })
          .join("") +
        "</div>";
      if (c.flow) {
        html += '<p class="clash-flow">' + esc(c.flow) + "</p>";
      }
      html += "</div>";
    });
    html += "</section>";

    html +=
      '<section class="exhibit-section" id="history">' +
      '<span class="exhibit-kicker">Development</span>' +
      "<h2>The History of the Debate</h2>" +
      '<div class="timeline">';
    (data.timeline || []).forEach(function (n) {
      var titleHtml = n.figureId
        ? '<a href="figures/profile.html?id=' + encodeURIComponent(n.figureId) + '">' + esc(n.title) + "</a>"
        : esc(n.title);
      html +=
        '<div class="timeline-node">' +
        '<div class="timeline-date">' +
        esc(n.date) +
        "</div>" +
        '<div class="timeline-title">' +
        titleHtml +
        "</div>" +
        '<p class="timeline-sig">' +
        esc(n.significance) +
        "</p>" +
        "<details><summary>Read more</summary><p class=\"timeline-extra\">" +
        esc(n.extra) +
        "</p></details></div>";
    });
    html += "</div></section>";

    html +=
      '<section class="exhibit-section" id="sources">' +
      '<span class="exhibit-kicker">Primary texts</span>' +
      "<h2>Read the Sources</h2>" +
      "<p class=\"exhibit-lead\" style=\"margin-top:0;margin-bottom:1.5rem\">Prefer public-domain editions: New Advent, CCEL, the Book of Concord, and this archive’s Summa reader.</p>" +
      '<div class="source-grid">';
    (data.sources || []).forEach(function (s) {
      var external = /^https?:/i.test(s.href);
      html +=
        '<a class="source-card" href="' +
        esc(s.href) +
        '"' +
        (external ? ' target="_blank" rel="noopener"' : "") +
        ">" +
        '<span class="src-author">' +
        esc(s.author) +
        "</span>" +
        '<span class="src-title">' +
        esc(s.title) +
        "</span>" +
        '<span class="src-meta"><span>' +
        esc(s.note) +
        "</span>" +
        (external ? '<span class="src-ext">External source</span>' : "<span></span>") +
        "</span></a>";
    });
    html += "</div></section>";

    html +=
      '<section class="exhibit-section" id="thread">' +
      '<span class="exhibit-kicker">Connections</span>' +
      "<h2>Follow the Thread</h2>" +
      '<div class="thread">';
    (data.thread || []).forEach(function (n, i) {
      if (i) html += '<span class="arrow" aria-hidden="true">→</span>';
      if (n.current) {
        html += '<span class="node is-current">' + esc(n.name) + "</span>";
      } else if (n.id) {
        html +=
          '<a href="concept.html?id=' + encodeURIComponent(n.id) + '">' + esc(n.name) + "</a>";
      } else {
        html += "<span class=\"node\">" + esc(n.name) + "</span>";
      }
    });
    html +=
      '</div><p class="exhibit-kicker" style="margin-top:1.25rem">Related concepts</p><div class="related-chips">';
    (data.related || []).forEach(function (r) {
      if (r.id) {
        html +=
          '<a href="concept.html?id=' + encodeURIComponent(r.id) + '">' + esc(r.name) + "</a>";
      } else {
        html +=
          "<span class=\"node\" style=\"padding:0.4rem 0.75rem;border:1px solid var(--hairline);border-radius:999px;color:var(--ink-dim);font-size:0.9rem\">" +
          esc(r.name) +
          "</span>";
      }
    });
    html +=
      '</div></section><p class="exhibit-footnote">Melius Illuminare presents the Catholic teaching for study, grounded in the Fathers, the Doctors, the Councils, and the public-domain sources of the tradition. Continue on the Theological Tree and in the primary sources.</p>';

    return html;
  }

  function setupProgress(sections) {
    var nav = document.getElementById("exhibit-progress");
    var inner = document.getElementById("exhibit-progress-inner");
    if (!nav || !inner) return;
    inner.innerHTML = sections
      .map(function (s) {
        return '<a href="#' + esc(s.id) + '" data-section="' + esc(s.id) + '">' + esc(s.label) + "</a>";
      })
      .join("");
    nav.hidden = false;

    var links = inner.querySelectorAll("a");
    var map = {};
    sections.forEach(function (s) {
      map[s.id] = document.getElementById(s.id);
    });

    function onScroll() {
      var active = sections[0] && sections[0].id;
      var y = window.scrollY + 140;
      sections.forEach(function (s) {
        var el = map[s.id];
        if (el && el.offsetTop <= y) active = s.id;
      });
      links.forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("data-section") === active);
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function getExhibit(id) {
    var pack = global.CONCEPT_EXHIBITS || {};
    if (pack[id]) return pack[id];
    return null;
  }

  function mount(id, root) {
    if (!root) return false;
    var data = getExhibit(id);
    var qa = global.CONCEPT_QA && global.CONCEPT_QA[id];
    // Allow CONCEPT_QA-only concepts (e.g. Mariology, Purgatory) to mount
    if (!data && qa) {
      data = {
        id: id,
        schema: "catholic-v2",
        title: qa.title || id,
        latin: qa.latin || "",
        domain: qa.domain || "Doctrine",
        definition: qa.definition || (qa.questions && qa.questions[0] && qa.questions[0].short) || "",
        questions: qa.questions || [],
        answers: null,
        schools: qa.schools || [],
        sources: qa.sources || [],
        recommendedReading: qa.recommendedReading || [],
        videos: qa.videos || []
      };
    }
    if (!data) return false;
    // Prefer full CONCEPT_QA pack when present (17-question encyclopedia)
    if (qa) {
      data = Object.assign({}, data, {
        id: data.id || id,
        schema: "catholic-v2",
        definition: qa.definition || data.definition,
        questions: qa.questions || data.questions,
        answers: null, // answers live on dedicated pages
        schools: qa.schools || data.schools,
        sources: qa.sources || data.sources,
        recommendedReading: qa.recommendedReading || data.recommendedReading || [],
        videos: qa.videos || data.videos || [],
        title: qa.title || data.title,
        latin: qa.latin || data.latin,
        domain: qa.domain || data.domain
      });
    }
    var isV2 = data.schema === "catholic-v2" || (data.questions && data.schools);
    if (!data.sections) {
      data.sections = isV2 ? defaultSectionsV2(data) : defaultSections(data);
    }
    document.body.classList.add("has-exhibit");
    document.title = data.title + " — Concepts — Melius Illuminare";
    root.innerHTML = isV2 ? renderCatholicV2(data) : renderExhibit(data);
    setupProgress(data.sections);
    return true;
  }

  global.ConceptExhibit = {
    mount: mount,
    mountGrace: function (root) {
      return mount("grace", root);
    },
    hasExhibit: function (id) {
      return !!(getExhibit(id) || (global.CONCEPT_QA && global.CONCEPT_QA[id]));
    },
    list: function () {
      return Object.keys(global.CONCEPT_EXHIBITS || {});
    }
  };
})(window);
