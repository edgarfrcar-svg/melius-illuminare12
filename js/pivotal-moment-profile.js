(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function params() {
    var q = new URLSearchParams(window.location.search);
    return { id: q.get("id") || "" };
  }

  function refHref(r) {
    var verse = "";
    if (r.verses) {
      var m = String(r.verses).match(/(\d+)/);
      if (m) verse = "." + m[1];
    }
    // bible.html supports BOOK.chapter.verse (optional translation tail)
    return "bible.html#" + encodeURIComponent(r.book) + "." + r.chapter + verse;
  }

  function refLabel(r) {
    var s = r.book + " " + r.chapter;
    if (r.verses) s += ":" + r.verses;
    return s;
  }

  function essayHtml(text) {
    if (!text) return "";
    return text
      .split(/\n\n+/)
      .filter(Boolean)
      .map(function (para) {
        return "<p>" + esc(para.trim()) + "</p>";
      })
      .join("");
  }

  function render(m) {
    var cat = (window.PIVOTAL_CATEGORY_LABELS || {})[m.category] || m.category;
    document.title = m.title + " — Pivotal Moment — Melius Illuminare";

    var refs = (m.refs || [])
      .map(function (r) {
        var cls = r.primary ? " is-primary" : "";
        return (
          '<a class="' +
          cls.trim() +
          '" href="' +
          refHref(r) +
          '">' +
          esc(refLabel(r)) +
          "</a>"
        );
      })
      .join("");

    var concepts = (m.relatedConcepts || [])
      .map(function (id) {
        return (
          '<a href="../concept.html?id=' +
          encodeURIComponent(id) +
          '">' +
          esc(id.replace(/-/g, " ")) +
          "</a>"
        );
      })
      .join("");

    var related = (m.relatedMoments || [])
      .map(function (id) {
        var o =
          typeof window.getPivotalMoment === "function"
            ? window.getPivotalMoment(id)
            : null;
        if (!o) return "";
        return (
          '<a href="pivotal-moment.html?id=' +
          encodeURIComponent(id) +
          '">' +
          '<span class="rel-title">' +
          esc(o.title) +
          "</span>" +
          '<span class="rel-sub">' +
          esc(o.epithet || "") +
          "</span>" +
          "</a>"
        );
      })
      .join("");

    var faqHtml = (m.faq || [])
      .map(function (item) {
        return (
          '<div class="pivot-faq-item">' +
          "<h3>" +
          esc(item.q) +
          "</h3>" +
          "<p>" +
          esc(item.a) +
          "</p>" +
          "</div>"
        );
      })
      .join("");

    var root = document.getElementById("pivot-profile-root");
    root.innerHTML =
      '<a class="pivot-back" href="bible.html">← Back to Sacred Texts</a>' +
      '<header class="pivot-hero">' +
      '<span class="pivot-cat">' +
      esc(cat) +
      "</span>" +
      "<h1>" +
      esc(m.title) +
      "</h1>" +
      (m.epithet ? '<p class="epithet">' + esc(m.epithet) + "</p>" : "") +
      '<div class="pivot-hero-refs">' +
      refs +
      "</div>" +
      "</header>" +
      '<article class="pivot-essay">' +
      essayHtml(m.essay) +
      "</article>" +
      (faqHtml
        ? '<section class="pivot-section pivot-faq">' +
          '<span class="pivot-kicker">FAQ</span>' +
          "<h2>Questions</h2>" +
          faqHtml +
          "</section>"
        : "") +
      (concepts
        ? '<section class="pivot-section">' +
          '<span class="pivot-kicker">Encyclopedia</span>' +
          "<h2>Related concepts</h2>" +
          '<div class="pivot-chips">' +
          concepts +
          "</div></section>"
        : "") +
      (related
        ? '<section class="pivot-section">' +
          '<span class="pivot-kicker">Thread</span>' +
          "<h2>Related pivotal moments</h2>" +
          '<div class="pivot-related">' +
          related +
          "</div></section>"
        : "") +
      (m.sources && m.sources.length
        ? '<section class="pivot-section">' +
          '<span class="pivot-kicker">Sources</span>' +
          "<h2>Drawn from</h2>" +
          "<p>" +
          esc(m.sources.join(" · ")) +
          "</p></section>"
        : "");
  }

  function main() {
    var id = params().id;
    var m =
      typeof window.getPivotalMoment === "function"
        ? window.getPivotalMoment(id)
        : null;
    var root = document.getElementById("pivot-profile-root");
    if (!m) {
      root.innerHTML =
        '<div class="pivot-not-found"><p>Pivotal moment not found.</p>' +
        '<p><a class="pivot-back" href="bible.html">← Sacred Texts</a></p></div>';
      return;
    }
    render(m);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
  } else {
    main();
  }
})();
