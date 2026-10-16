/**
 * Store — full-width genre cards; category pages list partner links.
 */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function getCat(id) {
    var data = window.STORE_DATA;
    if (!data || !data.categories) return null;
    for (var i = 0; i < data.categories.length; i++) {
      if (data.categories[i].id === id) return data.categories[i];
    }
    return null;
  }

  function renderIndex() {
    var data = window.STORE_DATA;
    var root = document.getElementById("store-root");
    if (!data || !root) return;

    var html =
      '<header class="exhibit-hero mass-hero store-hero">' +
      '<div class="exhibit-hero-inner mass-hero-inner">' +
      '<p class="exhibit-kicker">Curated sources</p>' +
      "<h1>" +
      esc(data.title) +
      "</h1>" +
      (data.latin ? '<p class="exhibit-latin">' + esc(data.latin) + "</p>" : "") +
      '<p class="exhibit-definition">' +
      esc(data.definition) +
      "</p>" +
      "</div></header>" +
      '<section class="store-genres">' +
      '<p class="store-genres-intro">Choose a genre. Each opens a list of trusted shops and publishers with a short guide to what you will find.</p>';

    data.categories.forEach(function (cat) {
      html +=
        '<a class="store-genre-card" href="store-category.html?id=' +
        encodeURIComponent(cat.id) +
        '">' +
        '<div class="store-genre-card-inner">' +
        '<span class="store-genre-latin">' +
        esc(cat.latin || "") +
        "</span>" +
        "<h2>" +
        esc(cat.name) +
        "</h2>" +
        "<p>" +
        esc(cat.blurb) +
        "</p>" +
        '<span class="store-genre-go">Browse sources →</span>' +
        "</div></a>";
    });

    html += "</section>";
    root.innerHTML = html;
  }

  function renderCategory() {
    var root = document.getElementById("store-category-root");
    if (!root) return;
    var id = new URLSearchParams(window.location.search).get("id") || "";
    var cat = getCat(id);
    if (!cat) {
      root.innerHTML =
        '<p class="exhibit-footnote"><a href="store.html">← Store</a></p><p>Category not found.</p>';
      return;
    }
    document.title = cat.name + " — Store — Melius Illuminare";

    var html =
      '<p class="exhibit-footnote store-back"><a href="store.html">← All genres</a></p>' +
      '<header class="exhibit-hero mass-hero">' +
      '<div class="exhibit-hero-inner mass-hero-inner">' +
      '<p class="exhibit-kicker">Store</p>' +
      "<h1>" +
      esc(cat.name) +
      "</h1>" +
      (cat.latin ? '<p class="exhibit-latin">' + esc(cat.latin) + "</p>" : "") +
      '<p class="exhibit-definition">' +
      esc(cat.blurb) +
      "</p>" +
      "</div></header>" +
      '<section class="store-link-list">' +
      "<h2>Where these links lead</h2>";

    (cat.links || []).forEach(function (link, i) {
      html +=
        '<a class="store-link-row" href="' +
        esc(link.url) +
        '" target="_blank" rel="noopener noreferrer">' +
        '<span class="store-link-num">' +
        String(i + 1).padStart(2, "0") +
        "</span>" +
        '<div class="store-link-body">' +
        "<h3>" +
        esc(link.name) +
        "</h3>" +
        "<p>" +
        esc(link.blurb) +
        "</p>" +
        "</div>" +
        '<span class="store-link-go">Visit →</span>' +
        "</a>";
    });

    html += "</section>";
    root.innerHTML = html;
  }

  if (document.getElementById("store-root")) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", renderIndex);
    } else renderIndex();
  }
  if (document.getElementById("store-category-root")) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", renderCategory);
    } else renderCategory();
  }
})();
