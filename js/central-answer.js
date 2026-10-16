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

  function slugify(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "section";
  }

  function paras(list) {
    return (list || [])
      .map(function (p) {
        return "<p>" + esc(p) + "</p>";
      })
      .join("");
  }

  var id = qs("id") || "augustine";
  var DATA = window.PROFILE_DATA || {};
  var ANSWERS = window.CENTRAL_ANSWERS || {};
  var figure = DATA[id];
  var ans = ANSWERS[id];
  var main = document.getElementById("ca-main");
  var side = document.getElementById("ca-side");

  if (!main) return;

  if (!figure || !figure.centralQuestion || !ans) {
    main.innerHTML =
      '<div class="ca-missing"><p>No central answer is available for this figure.</p>' +
      '<p><a href="profile.html' +
      (figure ? "?id=" + encodeURIComponent(id) : "") +
      '">Back to profile</a></p></div>';
    if (side) side.innerHTML = "";
    return;
  }

  document.title = figure.name + " — Central Answer — Melius Illuminare";

  var profileHref = "profile.html?id=" + encodeURIComponent(id);
  var sections = ans.sections || [];

  var sideHtml = "";
  sideHtml += '<a class="ca-back" href="' + profileHref + '">← ' + esc(figure.name) + "</a>";
  sideHtml += '<p class="ca-side-label">In this treatise</p>';
  sideHtml += '<a href="#ca-question">The question</a>';
  if (ans.lead) sideHtml += '<a href="#ca-lead">Thesis</a>';
  sections.forEach(function (sec, i) {
    var sid = "ca-sec-" + i + "-" + slugify(sec.heading);
    sideHtml +=
      '<a href="#' +
      sid +
      '">' +
      esc(sec.heading || "Section " + (i + 1)) +
      "</a>";
  });

  if (ans.objections && ans.objections.length) {
    sideHtml += '<p class="ca-side-label">Disputation</p>';
    sideHtml += '<a href="#ca-objections">Objections & replies</a>';
  }
  if (ans.sources && ans.sources.length) {
    sideHtml += '<p class="ca-side-label">Reference</p>';
    sideHtml += '<a href="#ca-sources">Primary sources</a>';
  }
  sideHtml += '<p class="ca-side-label">Navigate</p>';
  sideHtml += '<a href="' + profileHref + '">Full profile</a>';
  sideHtml += '<a href="../figures.html">All figures</a>';
  if (side) side.innerHTML = sideHtml;

  var html = "";
  html += '<div class="ca-toolbar">';
  html +=
    '<a class="btn-quiet" href="' +
    profileHref +
    '">← Profile</a>';
  html +=
    '<button type="button" id="ca-menu-btn" class="ca-menu-btn">Sections</button>';
  html += "</div>";

  html += '<header class="ca-meta">';
  html += '<span class="eyebrow">Central Answer</span>';
  html += "<h1>" + esc(figure.name) + "</h1>";
  html +=
    '<a class="figure-link" href="' +
    profileHref +
    '">Open full profile →</a>';
  html += "</header>";

  html +=
    '<div class="ca-question-block" id="ca-question">' +
    '<span class="q-label">' +
    esc(figure.centralQuestionLabel || "Central Question") +
    "</span>" +
    "<p>" +
    esc(figure.centralQuestion) +
    "</p></div>";

  if (ans.lead) {
    html +=
      '<p class="ca-lead" id="ca-lead">' + esc(ans.lead) + "</p>";
  }

  sections.forEach(function (sec, i) {
    var sid = "ca-sec-" + i + "-" + slugify(sec.heading);
    html += '<article class="ca-section" id="' + sid + '">';
    if (sec.heading) html += "<h2>" + esc(sec.heading) + "</h2>";
    html += paras(sec.paragraphs);
    html += "</article>";
  });

  // Systematic objections and replies
  if (ans.objections && ans.objections.length) {
    html += '<div class="ca-objections" id="ca-objections">';
    html += '<h2 class="ca-objections-title">Objections and replies</h2>';
    ans.objections.forEach(function (ob, i) {
      html += '<article class="ca-objection" id="ca-obj-' + i + '">';
      html += '<h3><span class="ca-obj-num">Objection ' + (i + 1) + '</span></h3>';
      html += '<p class="ca-obj-text">' + esc(ob.objection || "") + '</p>';
      if (ob.reply) {
        html += '<h4 class="ca-reply-label">Reply</h4>';
        if (Array.isArray(ob.reply)) {
          ob.reply.forEach(function (rp) { html += '<p class="ca-reply-text">' + esc(rp) + '</p>'; });
        } else {
          html += '<p class="ca-reply-text">' + esc(ob.reply) + '</p>';
        }
      }
      html += '</article>';
    });
    html += '</div>';
  }

  if (ans.sources && ans.sources.length) {
    html += '<div class="ca-sources" id="ca-sources"><h2>Primary sources</h2><ul>';
    ans.sources.forEach(function (s) {
      html +=
        "<li><span class=\"cite\">" +
        esc(s.cite) +
        "</span>";
      if (s.note) html += " — " + esc(s.note);
      html += "</li>";
    });
    html += "</ul></div>";
  }

  main.innerHTML = html;

  var menuBtn = document.getElementById("ca-menu-btn");
  if (menuBtn && side) {
    menuBtn.addEventListener("click", function () {
      side.classList.toggle("is-open");
    });
    side.addEventListener("click", function (e) {
      if (e.target.closest("a")) side.classList.remove("is-open");
    });
  }

  // Highlight active section link on scroll
  var links = side ? Array.prototype.slice.call(side.querySelectorAll('a[href^="#"]')) : [];
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
