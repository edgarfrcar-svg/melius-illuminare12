(function () {
  "use strict";

  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      if (c === "&") return "&" + "amp;";
      if (c === "<") return "&" + "lt;";
      if (c === ">") return "&" + "gt;";
      if (c === '"') return "&" + "quot;";
      return "&#" + "39;";
    });
  }

  function qs(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function paras(list) {
    return (list || [])
      .map(function (p) {
        return "<p>" + esc(p) + "</p>";
      })
      .join("");
  }

  var figureId = qs("id") || "";
  var topic = qs("topic") || "";
  var DATA = window.PROFILE_DATA || {};
  var EXHIBITS = window.OPINION_EXHIBITS || {};
  var figure = DATA[figureId];
  var opinion =
    figure && figure.opinions
      ? figure.opinions.find(function (o) {
          return o.id === topic;
        })
      : null;
  var key = figureId + ":" + topic;
  var exhibit = EXHIBITS[key] || null;

  var main = document.getElementById("op-main");
  var side = document.getElementById("op-side");
  if (!main) return;

  if (!figure || !opinion) {
    main.innerHTML =
      '<div class="op-missing"><p>Opinion not found.</p><p><a href="../figures.html">Back to Figures</a></p></div>';
    return;
  }

  // Fallback exhibit from base opinion data if no deep exhibit yet
  if (!exhibit) {
    exhibit = {
      question: opinion.thesis
        ? "How should we understand: " + opinion.thesis
        : "What is " + figure.name + "'s position here?",
      answer: opinion.paragraphs || [],
      argument: opinion.thesis
        ? [
            "The governing claim is: " +
              opinion.thesis +
              " The paragraphs above unfold that claim from within " +
              figure.name +
              "'s own conceptual world."
          ]
        : [],
      primarySource: null,
      doesNotMean: [
        "This exhibit is a working summary drawn from the profile archive. It should not be read as if every nuance of the primary texts were already settled here."
      ],
      laterInterpretation: [],
      relatedFigures: (opinion.contrasts || []).map(function (c) {
        return {
          id: c.figureId,
          name: c.label || c.figureId,
          note: c.topicKey ? "On " + c.topicKey : ""
        };
      })
    };
  }

  var title = figure.name + " — " + opinion.title;
  document.title = title + " — Melius Illuminare";
  var profileHref = "profile.html?id=" + encodeURIComponent(figureId);
  var profileTopicHref = profileHref; // stay on profile root; exhibit is the deep page

  // Side nav
  var sideHtml = "";
  sideHtml +=
    '<a class="back" href="' +
    profileHref +
    '">← ' +
    esc(figure.name) +
    "</a>";
  sideHtml += '<p class="label">Exhibit</p>';
  sideHtml += '<a href="#op-question">The question</a>';
  sideHtml += '<a href="#op-answer">The answer</a>';
  if (exhibit.argument && exhibit.argument.length)
    sideHtml += '<a href="#op-argument">The argument</a>';
  if (exhibit.primarySource) sideHtml += '<a href="#op-source">Primary source</a>';
  if (exhibit.doesNotMean && exhibit.doesNotMean.length)
    sideHtml += '<a href="#op-not">What this does not mean</a>';
  if (exhibit.laterInterpretation && exhibit.laterInterpretation.length)
    sideHtml += '<a href="#op-later">Later interpretation</a>';
  if (exhibit.relatedFigures && exhibit.relatedFigures.length)
    sideHtml += '<a href="#op-related">Related figures</a>';
  sideHtml += '<p class="label">Navigate</p>';
  sideHtml += '<a href="' + profileHref + '">Full profile</a>';
  sideHtml += '<a href="../figures.html">All figures</a>';
  if (side) side.innerHTML = sideHtml;

  var html = "";
  html += '<div class="op-toolbar">';
  html += '<a href="' + profileHref + '">← Profile</a>';
  html += '<button type="button" id="op-menu-btn">Sections</button>';
  html += "</div>";

  html += '<header class="op-meta">';
  html += '<span class="eyebrow">Intellectual exhibit</span>';
  html += "<h1>" + esc(opinion.title) + "</h1>";
  html +=
    '<p class="sub"><a href="' +
    profileHref +
    '">' +
    esc(figure.name) +
    "</a>";
  if (opinion.tags && opinion.tags.length) {
    html += " · " + esc(opinion.tags.join(" · "));
  }
  html += "</p></header>";

  html +=
    '<div class="op-block op-question" id="op-question"><h2>The question</h2><p>' +
    esc(exhibit.question || opinion.thesis || "") +
    "</p></div>";

  html +=
    '<div class="op-block" id="op-answer"><h2>' +
    esc(figure.name.split(" ")[0]) +
    "'s answer</h2>" +
    paras(exhibit.answer) +
    "</div>";

  if (exhibit.argument && exhibit.argument.length) {
    html +=
      '<div class="op-block" id="op-argument"><h2>The argument</h2>' +
      paras(exhibit.argument) +
      "</div>";
  }

  if (exhibit.primarySource && exhibit.primarySource.text) {
    html +=
      '<div class="op-block" id="op-source"><h2>Primary source</h2><div class="op-quote"><p>' +
      esc(exhibit.primarySource.text) +
      "</p>";
    if (exhibit.primarySource.cite) {
      html += "<cite>" + esc(exhibit.primarySource.cite) + "</cite>";
    }
    html += "</div></div>";
  }

  if (exhibit.doesNotMean && exhibit.doesNotMean.length) {
    html +=
      '<div class="op-block" id="op-not"><h2>What this does not mean</h2>' +
      paras(exhibit.doesNotMean) +
      "</div>";
  }

  if (exhibit.laterInterpretation && exhibit.laterInterpretation.length) {
    html +=
      '<div class="op-block" id="op-later"><h2>Later interpretation</h2>' +
      paras(exhibit.laterInterpretation) +
      "</div>";
  }

  if (exhibit.relatedFigures && exhibit.relatedFigures.length) {
    html += '<div class="op-block" id="op-related"><h2>Related figures</h2><div class="op-related">';
    exhibit.relatedFigures.forEach(function (r) {
      if (!r.id || !DATA[r.id]) {
        html +=
          "<span style=\"display:inline-block;padding:0.45rem 0.75rem;border:1px solid var(--hairline);border-radius:4px;font-size:0.9rem\">" +
          esc(r.name || r.id || "") +
          (r.note ? '<span class="note">' + esc(r.note) + "</span>" : "") +
          "</span>";
        return;
      }
      html +=
        '<a href="profile.html?id=' +
        encodeURIComponent(r.id) +
        '">' +
        esc(r.name || DATA[r.id].name) +
        (r.note ? '<span class="note">' + esc(r.note) + "</span>" : "") +
        "</a>";
    });
    html += "</div></div>";
  }

  main.innerHTML = html;

  var menuBtn = document.getElementById("op-menu-btn");
  if (menuBtn && side) {
    menuBtn.addEventListener("click", function () {
      side.classList.toggle("is-open");
    });
    side.addEventListener("click", function (e) {
      if (e.target.closest("a")) side.classList.remove("is-open");
    });
  }

  var links = side
    ? Array.prototype.slice.call(side.querySelectorAll('a[href^="#"]'))
    : [];
  function onScroll() {
    var fromTop = window.scrollY + 150;
    var current = null;
    links.forEach(function (a) {
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) !== "#") return;
      var el = document.getElementById(href.slice(1));
      if (el && el.offsetTop <= fromTop) current = a;
    });
    links.forEach(function (a) {
      a.classList.toggle("is-active", a === current);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
