/**
 * Per-question page for PAPACY Q&A.
 * URL: papacy-question.html?q=what-is-papacy
 */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  var params = new URLSearchParams(window.location.search);
  var qId = params.get("q") || "";
  var pack = window.PAPACY;
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
      '<p class="exhibit-footnote"><a href="papacy.html">← Back to the Papacy</a></p><p>Question not found.</p>';
    return;
  }

  document.title = answer.question + " — Papacy — Melius Illuminare";

  var qs = pack.questions || [];
  var idx = qs.findIndex(function (x) { return x.id === qId; });
  var total = qs.length;
  var prev = idx > 0 ? qs[idx - 1] : null;
  var next = idx < total - 1 ? qs[idx + 1] : null;

  var paras = answer.paragraphs || [];
  var quotes = answer.quotes || [];
  var body = "";
  paras.forEach(function (p, i) {
    body += "<p>" + esc(p) + "</p>";
    quotes.forEach(function (qt) {
      if (qt.after === i) {
        body +=
          '<blockquote class="exhibit-quote"><p>' +
          esc(qt.text) +
          '</p><cite class="exhibit-cite">' +
          esc(qt.source) +
          "</cite></blockquote>";
      }
    });
  });

  var allQHtml = '<div class="sidebar-all-q"><span class="sidebar-label">All questions</span><ol class="sidebar-q-list">';
  qs.forEach(function (q, i) {
    var n = String(i + 1).padStart(2, "0");
    var active = q.id === qId ? " is-active" : "";
    allQHtml +=
      '<li class="sidebar-q-item' +
      active +
      '">' +
      (q.id === qId
        ? '<span class="sidebar-q-num">' + n + '</span><span class="sidebar-q-text">' + esc(q.q) + "</span>"
        : '<a href="papacy-question.html?q=' +
          encodeURIComponent(q.id) +
          '"><span class="sidebar-q-num">' +
          n +
          '</span><span class="sidebar-q-text">' +
          esc(q.q) +
          "</span></a>") +
      "</li>";
  });
  allQHtml += "</ol></div>";

  var nav = '<nav class="question-nav" aria-label="Adjacent questions"><div class="question-nav-inner">';
  nav +=
    '<a class="qnav-box qnav-prev" href="papacy.html"><span class="qnav-label">Treatise</span><span class="qnav-text">← Back to the Papacy</span></a>';
  if (next) {
    nav +=
      '<a class="qnav-box qnav-next" href="papacy-question.html?q=' +
      encodeURIComponent(next.id) +
      '"><span class="qnav-label">Next</span><span class="qnav-text">' +
      esc(next.q) +
      " →</span></a>";
  }
  nav += "</div></nav>";

  var lede = qMeta.short
    ? '<p class="exhibit-question-lede">' + esc(qMeta.short) + "</p>"
    : "";

  root.innerHTML =
    '<header class="exhibit-hero" id="exhibit-top">' +
    '<div class="exhibit-hero-inner">' +
    '<a class="exhibit-back" href="papacy.html">← The Papacy</a>' +
    '<span class="exhibit-eyebrow">QUESTION ' +
    String(idx + 1).padStart(2, "0") +
    " OF " +
    total +
    " · CATHEDRA PETRI</span>" +
    "<h1>" +
    esc(answer.question) +
    "</h1>" +
    lede +
    "</div></header>" +
    '<div class="question-layout">' +
    '<article class="question-main">' +
    '<section id="answer"><div class="exhibit-answer-body">' +
    body +
    "</div></section></article>" +
    '<aside class="question-sidebar">' +
    allQHtml +
    "</aside></div>" +
    nav +
    '<p class="exhibit-footnote">Drawn from Scripture, the Fathers, Vatican I and II. Return to the <a href="papacy.html">Papacy encyclopedia</a>.</p>';
})();
