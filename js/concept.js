(function () {
  "use strict";

  const concepts = window.CONCEPTS || [];
  const id = new URLSearchParams(window.location.search).get("id") || "grace";
  const concept = concepts.find(function (item) {
    return item.id === id;
  }) || concepts[0];
  if (!concept) return;

  const entry = document.getElementById("concept-entry");
  if (!entry) return;

  if (
    window.ConceptExhibit &&
    typeof window.ConceptExhibit.hasExhibit === "function" &&
    window.ConceptExhibit.hasExhibit(id)
  ) {
    var fallbackHero = document.getElementById("concept-hero-fallback");
    if (fallbackHero) fallbackHero.hidden = true;
    window.ConceptExhibit.mount(id, entry);
    return;
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
    });
  }

  document.title = concept.name + " — Concepts — Melius Illuminare";
  var titleEl = document.getElementById("concept-title");
  var shortEl = document.getElementById("concept-short");
  if (titleEl) titleEl.textContent = concept.name;
  if (shortEl) shortEl.textContent = concept.short;

  let html =
    '<div class="concept-entry-inner">' +
    '<a class="concept-back" href="concepts.html">&larr; All Concepts</a>' +
    '<span class="concept-detail-kicker">' +
    escapeHtml(concept.latin) +
    "</span>" +
    "<h2>What is " +
    escapeHtml(concept.name) +
    "?</h2>" +
    '<p class="concept-definition">' +
    escapeHtml(concept.definition) +
    "</p>" +
    '<p class="concept-scope-full"><span class="concept-entry-label">Historical scope</span>' +
    escapeHtml(concept.scope) +
    "</p>";

  if (concept.videos && concept.videos.length) {
    html += '<h3 class="concept-section-title">Videos</h3><ul class="mi-video-links">';
    concept.videos.forEach(function (v) {
      var href = v.url || "";
      if (href) html += '<li><a href="' + escapeHtml(href) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(v.title || "Watch") + "</a></li>";
    });
    html += "</ul>";
  }


  if (concept.traditions) {
    html += '<h3 class="concept-section-title">Catholic Teaching</h3>';
    html += '<div class="concept-traditions concept-traditions-full">';
    ["catholic"].forEach(function (key) {
      const t = concept.traditions[key];
      if (!t) return;
      const label = "Catholic Teaching";
      html +=
        '<section class="concept-tradition-card trad-' +
        key +
        '">' +
        "<header><span class=\"trad-badge\">" +
        label +
        "</span></header>" +
        '<p class="trad-thesis">' +
        escapeHtml(t.thesis) +
        "</p>" +
        "<p>" +
        escapeHtml(t.summary) +
        "</p>";
      if (t.sources && t.sources.length) {
        html += '<ul class="trad-sources">';
        t.sources.forEach(function (s) {
          html +=
            "<li><a href=\"" +
            escapeHtml(s.url) +
            "\" target=\"_blank\" rel=\"noopener\">" +
            escapeHtml(s.title) +
            "</a>" +
            (s.note ? ' <span class="src-note">— ' + escapeHtml(s.note) + "</span>" : "") +
            "</li>";
        });
        html += "</ul>";
      }
      html += "</section>";
    });
    html += "</div>";
  }

  if (concept.clash && concept.clash.length) {
    html +=
      '<div class="concept-clash concept-clash-full">' +
      "<h3>Where the traditions clash</h3>" +
      '<p class="clash-intro">These are the points at which the accounts refuse to collapse into one another.</p>' +
      "<ul>" +
      concept.clash
        .map(function (c) {
          return "<li>" + escapeHtml(c) + "</li>";
        })
        .join("") +
      "</ul></div>";
  }

  html +=
    '<div class="concept-entry-columns">' +
    "<section><span class=\"concept-entry-label\">Further reading</span>" +
    (concept.sourceUrl
      ? "<p><a href=\"" +
        escapeHtml(concept.sourceUrl) +
        "\" target=\"_blank\" rel=\"noopener\">" +
        escapeHtml(concept.source || "Source") +
        "</a></p>"
      : "") +
    '<p class="src-note">Public-domain and free reference sources. Links open in a new tab.</p>' +
    "</section>" +
    "<section><span class=\"concept-entry-label\">Explore further</span>" +
    "<p>Compare figures and lineages on the Theological Tree, or read primary texts in the Sacred Texts library.</p>" +
    "</section>" +
    "</div>" +
    '<div class="concept-detail-actions">' +
    '<a class="btn btn-primary" href="' +
    escapeHtml(concept.treeUrl || "theological-tree.html") +
    '">Explore in Theological Tree</a>' +
    '<a class="concept-source" href="concepts.html">Browse all concepts</a>' +
    "</div>" +
    "</div>";

  entry.innerHTML = html;
})();
