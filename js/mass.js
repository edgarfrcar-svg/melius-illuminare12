/**
 * Mass section — Ordinary & Traditional Latin Mass tracks.
 */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function getForms(data) {
    if (data.forms && data.forms.ordinary && data.forms.latin) return data.forms;
    return {
      ordinary: { id: "ordinary", label: "Order of Mass", parts: data.parts || [] },
      latin: { id: "latin", label: "Traditional Latin Mass", parts: [] },
    };
  }

  function activeFormId() {
    var q = new URLSearchParams(window.location.search).get("form");
    if (q === "latin" || q === "ordinary") return q;
    return "ordinary";
  }

  function renderScroll(form, formId) {
    var html =
      '<section class="mass-scroll-section" id="parts">' +
      '<div class="mass-scroll-header">' +
      '<span class="section-kicker">' +
      (formId === "latin" ? "Usus antiquior" : "Ordo Missae") +
      "</span>" +
      "<h2>" +
      esc(form.label || "Parts of the Mass") +
      "</h2>" +
      (form.subtitle
        ? '<p class="mass-scroll-hint">' + esc(form.subtitle) + "</p>"
        : "") +
      (form.note
        ? '<p class="mass-form-note">' + esc(form.note) + "</p>"
        : "") +
      '<p class="mass-scroll-hint">Scroll sideways · click a part for the essay on symbol and reality</p>' +
      "</div>" +
      '<div class="mass-scroll-track" tabindex="0" role="list">';

    (form.parts || []).forEach(function (part, i) {
      var theme = part.theme || "sanctuary";
      var img = part.image || "img/figures/aquinas.jpg";
      html +=
        '<a class="mass-part-card mass-theme-' +
        theme +
        '" role="listitem" href="mass-part.html?form=' +
        encodeURIComponent(formId) +
        "&id=" +
        encodeURIComponent(part.id) +
        '">' +
        '<span class="mass-part-card-bg" aria-hidden="true">' +
        '<img class="mass-part-card-img" src="' +
        esc(img) +
        '" alt="" loading="lazy" />' +
        "</span>" +
        '<span class="mass-part-card-scrim" aria-hidden="true"></span>' +
        '<span class="mass-part-card-body">' +
        '<span class="mass-part-num">' +
        String(i + 1).padStart(2, "0") +
        "</span>" +
        (part.latin
          ? '<p class="mass-part-latin">' + esc(part.latin) + "</p>"
          : "") +
        "<h3>" +
        esc(part.name) +
        "</h3>" +
        '<p class="mass-part-brief">' +
        esc(part.brief) +
        "</p>" +
        '<span class="mass-part-open">Enter this part →</span>' +
        "</span></a>";
    });

    html +=
      "</div>" +
      '<div class="mass-scroll-controls">' +
      '<button type="button" class="mass-scroll-btn" data-dir="-1" aria-label="Scroll left">‹</button>' +
      '<button type="button" class="mass-scroll-btn" data-dir="1" aria-label="Scroll right">›</button>' +
      "</div></section>";
    return html;
  }

  function bindScroll(root) {
    var track = root.querySelector(".mass-scroll-track");
    if (!track) return;
    root.querySelectorAll(".mass-scroll-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var dir = parseInt(btn.getAttribute("data-dir"), 10) || 1;
        track.scrollBy({
          left: dir * Math.min(340, track.clientWidth * 0.85),
          behavior: "smooth",
        });
      });
    });
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        track.scrollBy({ left: 300, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        track.scrollBy({ left: -300, behavior: "smooth" });
      }
    });
  }

  function renderIndex() {
    var data = window.MASS_DATA;
    var root = document.getElementById("mass-root");
    if (!data || !root) return;

    var forms = getForms(data);
    var formId = activeFormId();
    if (!forms[formId]) formId = "ordinary";
    var form = forms[formId];

    var html = "";
    html +=
      '<header class="exhibit-hero mass-hero">' +
      '<div class="exhibit-hero-inner mass-hero-inner">' +
      '<p class="exhibit-kicker">Sacred liturgy</p>' +
      "<h1>" +
      esc(data.title) +
      "</h1>" +
      (data.latin ? '<p class="exhibit-latin">' + esc(data.latin) + "</p>" : "") +
      '<p class="exhibit-definition">' +
      esc(data.definition) +
      "</p>" +
      "</div></header>";

    if (data.intro && data.intro.length) {
      html +=
        '<section class="exhibit-section mass-intro">' +
        '<div class="exhibit-answer-body">';
      data.intro.forEach(function (p) {
        html += "<p>" + esc(p) + "</p>";
      });
      html += "</div></section>";
    }

    // Liturgical calendar (visitor local time)
    if (window.LiturgicalCalendar && window.LiturgicalCalendar.renderCalendarHtml) {
      html += window.LiturgicalCalendar.renderCalendarHtml();
    }

    // Form switcher
    html +=
      '<div class="mass-form-switch" role="tablist" aria-label="Mass form">' +
      '<a role="tab" class="mass-form-tab' +
      (formId === "ordinary" ? " is-active" : "") +
      '" href="mass.html?form=ordinary" aria-selected="' +
      (formId === "ordinary" ? "true" : "false") +
      '">Order of Mass</a>' +
      '<a role="tab" class="mass-form-tab' +
      (formId === "latin" ? " is-active" : "") +
      '" href="mass.html?form=latin" aria-selected="' +
      (formId === "latin" ? "true" : "false") +
      '">Traditional Latin Mass</a>' +
      "</div>";

    html +=
      '<aside class="mass-find-tlm" aria-label="Find a Latin Mass">' +
      '<a class="mass-find-tlm-link" href="https://www.latinmass.com/find-latin-mass" target="_blank" rel="noopener noreferrer">' +
      '<span class="mass-find-tlm-caption">Latin Mass Near You</span>' +
      '<span class="mass-find-tlm-hint">Find a Traditional Latin Mass · latinmass.com</span>' +
      '<span class="mass-find-tlm-arrow" aria-hidden="true">↗</span>' +
      "</a></aside>";

    html += renderScroll(form, formId);

    html +=
      '<section class="exhibit-section">' +
      "<h2>Continue</h2>" +
      '<ul class="mi-video-links">' +
      '<li><a href="concept.html?id=eucharist">Concept: Eucharist</a></li>' +
      '<li><a href="prayer.html">Prayer</a></li>' +
      '<li><a href="texts/work.html?id=trent">Council of Trent on the Sacrifice of the Mass</a></li>' +
      "</ul></section>";

    
    if (data.videos && data.videos.length) {
      html +=
        '<section class="exhibit-section" id="mass-videos">' +
        '<span class="section-kicker">Videos</span><h2>Videos</h2><ul class="mi-video-links">';
      data.videos.forEach(function (v) {
        html +=
          '<li><span class="mi-video-title">' +
          esc(v.title || "Video") +
          '</span><a href="' +
          esc(v.url) +
          '" target="_blank" rel="noopener">Watch on YouTube</a></li>';
      });
      html += "</ul></section>";
    }

    root.innerHTML = html;
    bindScroll(root);
    if (window.LiturgicalCalendar && window.LiturgicalCalendar.mount) {
      window.LiturgicalCalendar.mount(root);
    }
  }

  function findPart(data, formId, id) {
    var forms = getForms(data);
    var form = forms[formId] || forms.ordinary;
    var parts = form.parts || [];
    var idx = parts.findIndex(function (p) {
      return p.id === id;
    });
    return { form: form, formId: formId, parts: parts, part: idx >= 0 ? parts[idx] : null, idx: idx };
  }

  function renderPart() {
    var data = window.MASS_DATA;
    var root = document.getElementById("mass-part-root");
    if (!data || !root) return;

    var params = new URLSearchParams(window.location.search);
    var id = params.get("id") || "";
    var formId = params.get("form") || "ordinary";
    var found = findPart(data, formId, id);

    if (!found.part) {
      root.innerHTML =
        '<p class="exhibit-footnote"><a href="mass.html">← The Mass</a></p><p>Part not found.</p>';
      return;
    }

    var part = found.part;
    var idx = found.idx;
    var parts = found.parts;
    document.title = part.name + " — The Mass — Melius Illuminare";

    var prev = idx > 0 ? parts[idx - 1] : null;
    var next = idx < parts.length - 1 ? parts[idx + 1] : null;

    var html = "";
    html +=
      '<p class="exhibit-footnote"><a href="mass.html?form=' +
      encodeURIComponent(found.formId) +
      '">← ' +
      esc(found.form.label || "The Mass") +
      "</a></p>";
    html +=
      '<header class="exhibit-hero mass-hero">' +
      '<div class="exhibit-hero-inner mass-hero-inner">' +
      '<p class="exhibit-kicker">' +
      esc(found.form.label || "Mass") +
      " · Part " +
      (idx + 1) +
      " of " +
      parts.length +
      "</p>" +
      "<h1>" +
      esc(part.name) +
      "</h1>" +
      (part.latin ? '<p class="exhibit-latin">' + esc(part.latin) + "</p>" : "") +
      '<p class="exhibit-definition">' +
      esc(part.brief) +
      "</p>" +
      "</div></header>";

    html +=
      '<section class="exhibit-section">' +
      '<span class="section-kicker">Symbol &amp; reality</span>' +
      "<h2>What is happening</h2>" +
      '<div class="exhibit-answer-body">';
    (part.essay || []).forEach(function (p) {
      html += "<p>" + esc(p) + "</p>";
    });
    html += "</div></section>";

    html += '<nav class="mass-part-nav">';
    if (prev) {
      html +=
        '<a class="mass-part-nav-link" href="mass-part.html?form=' +
        encodeURIComponent(found.formId) +
        "&id=" +
        encodeURIComponent(prev.id) +
        '">‹ ' +
        esc(prev.name) +
        "</a>";
    } else html += "<span></span>";
    if (next) {
      html +=
        '<a class="mass-part-nav-link" href="mass-part.html?form=' +
        encodeURIComponent(found.formId) +
        "&id=" +
        encodeURIComponent(next.id) +
        '">' +
        esc(next.name) +
        " ›</a>";
    }
    html += "</nav>";

    root.innerHTML = html;
  }

  if (document.getElementById("mass-root")) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", renderIndex);
    } else renderIndex();
  }
  if (document.getElementById("mass-part-root")) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", renderPart);
    } else renderPart();
  }
})();
