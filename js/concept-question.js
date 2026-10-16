/**
 * Per-question encyclopedia page for CONCEPT_QA entries.
 * URL: concept-question.html?concept=grace&q=what-is-grace
 */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /** Only allow on-site relative links (no external http/https). */

  /** Render a quote: full block is the link when an internal url exists (same style for every concept). */
  function renderQuoteBlock(qt) {
    var href = internalHref(qt.url);
    var inner =
      "<p>" + esc(qt.text) + "</p>" +
      '<cite class="exhibit-cite">' + esc(qt.source) +
      (href ? ' <span class="cite-open">Open source →</span>' : "") +
      "</cite>";
    if (href) {
      return (
        '<a class="exhibit-quote exhibit-quote-link" href="' + esc(href) +
        '" title="Open this passage">' + inner + "</a>"
      );
    }
    return '<blockquote class="exhibit-quote">' + inner + "</blockquote>";
  }

  function internalHref(url) {
    if (!url) return "";
    var u = String(url).trim();
    if (/^https?:\/\//i.test(u)) return "";
    if (
      u.charAt(0) === "/" ||
      u.indexOf("texts/") === 0 ||
      u.indexOf("figures/") === 0 ||
      u.indexOf("concept") === 0 ||
      u.indexOf("work.html") === 0 ||
      u.indexOf("bible.html") === 0 ||
      u.indexOf("summa.html") === 0
    )
      return u;
    return "";
  }

  var params = new URLSearchParams(window.location.search);
  var conceptId = params.get("concept") || "grace";
  var qId = params.get("q") || "";

  var pack = (window.CONCEPT_QA && window.CONCEPT_QA[conceptId]) || null;
  var root = document.getElementById("question-entry");
  if (!pack || !root) {
    if (root) root.innerHTML = "<p>Question not found.</p>";
    return;
  }

  var qMeta = (pack.questions || []).find(function (x) {
    return x.id === qId;
  });
  var answer = pack.answers && pack.answers[qId];
  if (!qMeta || !answer) {
    root.innerHTML =
      '<p class="exhibit-footnote"><a href="concept.html?id=' +
      encodeURIComponent(conceptId) +
      '">← Back to ' +
      esc(pack.title) +
      "</a></p><p>Question not found.</p>";
    return;
  }

  document.title = answer.question + " — " + pack.title + " — Melius Illuminare";

  // Build interleaved body: paragraphs + quotes by "after" index
  var paras = answer.paragraphs || [];
  var quotes = answer.quotes || [];
  var body = "";
  for (var i = 0; i < paras.length; i++) {
    body += "<p>" + esc(paras[i]) + "</p>";
    quotes.forEach(function (qt) {
      if (qt.after === i) {
        body += renderQuoteBlock(qt);
      }
    });
  }
  // Quotes without after go at end
  quotes.forEach(function (qt) {
    if (qt.after == null || qt.after === undefined) {
      body += renderQuoteBlock(qt);
    }
  });

  // Prev / next
  var idx = pack.questions.findIndex(function (x) {
    return x.id === qId;
  });
  var total = pack.questions.length;
  var prev = idx > 0 ? pack.questions[idx - 1] : null;
  var next = idx < total - 1 ? pack.questions[idx + 1] : null;

  // Sidebar: primary sources
  var sourcesHtml = "";
  if (answer.sources && answer.sources.length) {
    sourcesHtml =
      '<div class="sidebar-block"><h4 class="sidebar-heading">Primary Sources</h4><ul class="sidebar-source-list">';
    answer.sources.forEach(function (s) {
      var cite = s.cite || s.title || "";
      var sHref = internalHref(s.url);
      var citeEl = sHref
        ? '<a class="sidebar-source-cite" href="' + esc(sHref) + '">' + esc(cite) + "</a>"
        : '<span class="sidebar-source-cite">' + esc(cite) + "</span>";
      sourcesHtml +=
        "<li>" +
        citeEl +
        (s.ref ? '<span class="sidebar-source-ref">' + esc(s.ref) + "</span>" : "") +
        "</li>";
    });
    sourcesHtml += "</ul></div>";
  }

  // Sidebar: all questions
  var allQHtml =
    '<div class="sidebar-block"><h4 class="sidebar-heading">All Questions</h4><ol class="sidebar-q-list">';
  pack.questions.forEach(function (q, i) {
    var n = i + 1 < 10 ? "0" + (i + 1) : String(i + 1);
    var isCurrent = q.id === qId;
    allQHtml +=
      '<li class="' + (isCurrent ? "is-current" : "") + '">' +
      (isCurrent
        ? '<span class="sidebar-q-num">' + n + '</span><span class="sidebar-q-text">' + esc(q.q) + "</span>"
        : '<a href="concept-question.html?concept=' +
          encodeURIComponent(conceptId) +
          "&q=" +
          encodeURIComponent(q.id) +
          '"><span class="sidebar-q-num">' +
          n +
          '</span><span class="sidebar-q-text">' +
          esc(q.q) +
          "</span></a>") +
      "</li>";
  });
  allQHtml += "</ol></div>";

  // Footer prev/next, split boxes
  var nav = '<nav class="question-nav" aria-label="Adjacent questions"><div class="question-nav-inner">';
  nav +=
    '<a class="qnav-box qnav-prev" href="concept.html?id=' +
    encodeURIComponent(conceptId) +
    '"><span class="qnav-label">Treatise</span><span class="qnav-text">← Back to ' +
    esc(pack.title) +
    "</span></a>";
  if (next) {
    nav +=
      '<a class="qnav-box qnav-next" href="concept-question.html?concept=' +
      encodeURIComponent(conceptId) +
      "&q=" +
      encodeURIComponent(next.id) +
      '"><span class="qnav-label">Next</span><span class="qnav-text">' +
      esc(next.q) +
      " →</span></a>";
  } else if (prev) {
    nav +=
      '<a class="qnav-box qnav-next" href="concept-question.html?concept=' +
      encodeURIComponent(conceptId) +
      "&q=" +
      encodeURIComponent(prev.id) +
      '"><span class="qnav-label">Previous</span><span class="qnav-text">← ' +
      esc(prev.q) +
      "</span></a>";
  }
  nav += "</div></nav>";

  var lede = qMeta.short
    ? '<p class="exhibit-question-lede">' + esc(qMeta.short) + "</p>"
    : "";

  root.innerHTML =
    '<header class="exhibit-hero" id="exhibit-top">' +
    '<div class="exhibit-hero-inner">' +
    '<a class="exhibit-back" href="concept.html?id=' +
    encodeURIComponent(conceptId) +
    '">← ' +
    esc(pack.title) +
    "</a>" +
    '<span class="exhibit-eyebrow">QUESTION ' +
    String(idx + 1).padStart(2, "0") +
    " OF " +
    total +
    " · " +
    esc((pack.latin || pack.title).toUpperCase()) +
    "</span>" +
    "<h1>" +
    esc(answer.question) +
    "</h1>" +
    lede +
    "</div></header>" +
    '<div class="question-layout">' +
    '<article class="question-main">' +
    '<section id="answer">' +
    '<div class="exhibit-answer-body">' +
    body +
    "</div></section>" +
    "</article>" +
    '<aside class="question-sidebar">' +
    sourcesHtml +
    allQHtml +
    "</aside>" +
    "</div>" +
    nav +
    '<p class="exhibit-footnote">Answer drawn from Scripture, the Fathers, the Doctors, and the Councils. Return to the <a href="concept.html?id=' +
    encodeURIComponent(conceptId) +
    '">' +
    esc(pack.title) +
    " encyclopedia</a> for the full set of questions and the Catholic schools.</p>";
})();
