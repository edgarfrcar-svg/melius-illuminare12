(function () {
  "use strict";

  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      if (c === "&") return "&amp;";
      if (c === "<") return "&lt;";
      if (c === ">") return "&gt;";
      if (c === '"') return "&quot;";
      return "&#39;";
    });
  }

  function qs(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  var id = qs("id") || "";
  var idx = parseInt(qs("i") || "0", 10);
  if (isNaN(idx) || idx < 0) idx = 0;

  var DATA = window.PROFILE_DATA || {};
  var figure = DATA[id];
  var main = document.getElementById("idea-main");
  var nav = document.getElementById("idea-nav");
  if (!main) return;

  var profileHref = "profile.html?id=" + encodeURIComponent(id);

  if (!figure) {
    main.innerHTML = '<div class="fp-not-found"><p>Figure not found.</p><p><a href="../figures.html">Back to Figures</a></p></div>';
    return;
  }

  var ideas = figure.greatestIdeas || [];
  var item = ideas[idx];
  if (!item) {
    main.innerHTML = '<div class="fp-not-found"><p>Idea not found.</p><p><a href="' + profileHref + '">Back to profile</a></p></div>';
    return;
  }

  var idea = typeof item === "string" ? item : (item.idea || item.title || "");
  var source = typeof item === "object" ? (item.source || "") : "";
  var article = (typeof item === "object" && item.article) ? item.article : (item.paragraphs || []);
  var quotes = (typeof item === "object" && item.quotes) ? item.quotes : [];

  document.title = idea.slice(0, 60) + (idea.length > 60 ? "…" : "") + " — " + (figure.name || id) + " — Melius Illuminare";

  if (nav) {
    var navHtml = "";
    navHtml += '<a class="fp-nav-back" href="' + profileHref + '">← ' + esc(figure.name || "Profile") + "</a>";
    navHtml += '<p class="fp-nav-label">Greatest Ideas</p>';
    ideas.forEach(function (it, i) {
      var label = typeof it === "string" ? it : (it.idea || "Idea " + (i + 1));
      if (label.length > 42) label = label.slice(0, 40) + "…";
      var cls = i === idx ? " is-active" : "";
      navHtml += '<a class="fp-nav-idea' + cls + '" href="idea.html?id=' + encodeURIComponent(id) + "&i=" + i + '">' + esc(label) + "</a>";
    });
    nav.innerHTML = navHtml;
  }

  var num = String(idx + 1).length < 2 ? "0" + (idx + 1) : String(idx + 1);
  var html = "";
  html += '<article class="fp-idea-article">';
  html += '<header class="fp-idea-head">';
  html += '<p class="fp-idea-kicker">Greatest Idea · ' + esc(figure.name || "") + "</p>";
  html += '<p class="fp-idea-num">' + num + " of " + ideas.length + "</p>";
  html += "<h1>" + esc(idea) + "</h1>";
  if (source) html += '<cite class="fp-idea-source">' + esc(source) + "</cite>";
  html += "</header>";
  html += '<div class="fp-idea-body">';
  (article || []).forEach(function (p) {
    html += "<p>" + esc(p) + "</p>";
  });
  if (!article || !article.length) {
    html += "<p><em>Full article for this idea is being prepared.</em></p>";
  }
  quotes.forEach(function (qt) {
    var text = qt.text || qt;
    var src = qt.source || "";
    html += '<blockquote class="fp-gi-quote exhibit-quote"><p>' + esc(text) + "</p>";
    if (src) html += "<cite>" + esc(src) + "</cite>";
    html += "</blockquote>";
  });
  html += "</div>";
  html += '<footer class="fp-idea-foot">';
  html += '<a class="btn btn-primary" href="' + profileHref + '#greatest-ideas">← All ideas of ' + esc(figure.name || "this figure") + "</a>";
  if (idx > 0) {
    html += ' <a class="btn" href="idea.html?id=' + encodeURIComponent(id) + "&i=" + (idx - 1) + '">Previous</a>';
  }
  if (idx < ideas.length - 1) {
    html += ' <a class="btn" href="idea.html?id=' + encodeURIComponent(id) + "&i=" + (idx + 1) + '">Next</a>';
  }
  html += "</footer></article>";
  main.innerHTML = html;
})();
