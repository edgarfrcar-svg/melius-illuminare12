(function () {
  "use strict";

  var list = window.SPIRITUALITIES || [];
  var practiceMeta = window.SPIRITUALITY_PRACTICES || [];
  var grid = document.getElementById("spir-grid");
  var countEl = document.getElementById("spir-count");
  var tradRow = document.getElementById("spir-filter-tradition");
  var pracRow = document.getElementById("spir-filter-practice");

  if (!grid) return;

  var state = { tradition: "all", practice: "all" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }

  function buildFilters() {
    if (tradRow) {
      var tradHtml =
        '<span class="spir-filter-label">Tradition</span>' +
        '<button type="button" class="spir-chip active" data-tradition="all">All</button>';
      list.forEach(function (s) {
        tradHtml +=
          '<button type="button" class="spir-chip" data-tradition="' +
          esc(s.id) +
          '">' +
          esc(s.name) +
          "</button>";
      });
      tradRow.innerHTML = tradHtml;
      tradRow.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-tradition]");
        if (!btn) return;
        state.tradition = btn.getAttribute("data-tradition");
        tradRow.querySelectorAll(".spir-chip").forEach(function (c) {
          c.classList.toggle("active", c === btn);
        });
        render();
      });
    }

    if (pracRow) {
      var pracHtml = '<span class="spir-filter-label">Practice</span>';
      practiceMeta.forEach(function (p) {
        pracHtml +=
          '<button type="button" class="spir-chip' +
          (p.id === "all" ? " active" : "") +
          '" data-practice="' +
          esc(p.id) +
          '">' +
          esc(p.label) +
          "</button>";
      });
      pracRow.innerHTML = pracHtml;
      pracRow.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-practice]");
        if (!btn) return;
        state.practice = btn.getAttribute("data-practice");
        pracRow.querySelectorAll(".spir-chip").forEach(function (c) {
          c.classList.toggle("active", c === btn);
        });
        render();
      });
    }
  }

  function filtered() {
    return list.filter(function (s) {
      if (state.tradition !== "all" && s.id !== state.tradition) return false;
      if (state.practice !== "all") {
        var tags = s.practices || [];
        if (tags.indexOf(state.practice) === -1) return false;
      }
      return true;
    });
  }

  function render() {
    var items = filtered();
    if (countEl) {
      countEl.textContent =
        items.length === list.length
          ? items.length + " schools of formation"
          : items.length + " of " + list.length + " schools";
    }
    if (!items.length) {
      grid.innerHTML = '<p class="spir-empty">No spiritualities match these filters.</p>';
      return;
    }
    grid.innerHTML = items
      .map(function (s) {
        var pills = (s.practices || [])
          .slice(0, 4)
          .map(function (p) {
            return '<span class="spir-pill">' + esc(p.replace(/-/g, " ")) + "</span>";
          })
          .join("");
        var thumb = s.thumb || s.hero || "";
        var cardStyle =
          "--spir-accent:" +
          esc(s.accent || "#c9a227") +
          (thumb
            ? ";--spir-thumb:url('" + esc(thumb).replace(/'/g, "%27") + "')"
            : "");
        return (
          '<a class="spir-card' +
          (thumb ? " has-art" : "") +
          '" href="spirituality.html?id=' +
          encodeURIComponent(s.id) +
          '" style="' +
          cardStyle +
          '">' +
          (thumb
            ? '<span class="spir-card-art" aria-hidden="true" style="background-image:url(\'' +
              esc(thumb).replace(/'/g, "%27") +
              '\')"></span>'
            : "") +
          '<span class="spir-card-body">' +
          '<span class="spir-card-kicker">' +
          esc(s.era || "Spiritual school") +
          "</span>" +
          '<h3 class="spir-card-title">' +
          esc(s.name) +
          "</h3>" +
          '<p class="spir-card-latin">' +
          esc(s.latin || "") +
          "</p>" +
          '<p class="spir-card-tagline">' +
          esc(s.tagline || "") +
          "</p>" +
          '<div class="spir-card-meta">' +
          pills +
          "</div>" +
          "</span></a>"
        );
      })
      .join("");
  }

  buildFilters();
  render();
})();
