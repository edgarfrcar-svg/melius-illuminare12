/**
 * Pivotal Moments — interactive verse layer for the Bible reader.
 * Verses in a pivotal span glow; click opens the full moment profile.
 */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function profileUrl(id) {
    return "pivotal-moment.html?id=" + encodeURIComponent(id);
  }

  function parseVerseSpec(spec) {
    var out = [];
    if (!spec) return out;
    String(spec).split(",").forEach(function (part) {
      part = part.trim();
      if (!part) return;
      var range = part.split("-");
      var start = parseInt(range[0], 10);
      var end = range.length > 1 ? parseInt(range[1], 10) : start;
      if (isNaN(start)) return;
      if (isNaN(end)) end = start;
      for (var v = start; v <= end; v++) out.push(v);
    });
    return out;
  }

  function momentsForCurrent(bookId, chapter) {
    var fn = window.pivotalMomentsForChapter;
    return typeof fn === "function" ? fn(bookId, chapter) : [];
  }

  function ensureStrip() {
    var el = document.getElementById("pivot-chapter-strip");
    if (el) return el;
    el = document.createElement("div");
    el.id = "pivot-chapter-strip";
    el.className = "pivot-chapter-strip";
    el.hidden = true;
    var title = document.getElementById("passage-title");
    if (title && title.parentNode) {
      // insert after toolbar block's title area — prefer after passage-trans
      var trans = document.getElementById("passage-trans");
      var anchor = trans || title;
      anchor.parentNode.insertBefore(el, anchor.nextSibling);
    }
    return el;
  }

  function renderStrip(moments) {
    var strip = ensureStrip();
    if (!strip) return;
    if (!moments.length) {
      strip.hidden = true;
      strip.innerHTML = "";
      return;
    }
    strip.hidden = false;
    strip.innerHTML =
      '<div class="pivot-strip-inner">' +
      '<span class="pivot-strip-label">Pivotal Moments</span>' +
      '<div class="pivot-strip-links">' +
      moments
        .map(function (m) {
          return (
            '<a class="pivot-strip-chip" href="' +
            profileUrl(m.id) +
            '">' +
            esc(m.title) +
            "</a>"
          );
        })
        .join("") +
      "</div>" +
      "</div>";
  }

  function clearGlow() {
    var body = document.getElementById("passage-body");
    if (!body) return;
    body.querySelectorAll(".verse-block.is-pivot").forEach(function (el) {
      el.classList.remove("is-pivot");
      el.removeAttribute("data-pivot-id");
      el.removeAttribute("data-pivot-title");
      el.removeAttribute("tabindex");
      el.removeAttribute("role");
      el.removeAttribute("title");
      el.onclick = null;
      el.onkeydown = null;
    });
  }

  function applyGlow(bookId, chapter, moments) {
    var body = document.getElementById("passage-body");
    if (!body) return;
    clearGlow();

    moments.forEach(function (m) {
      (m.refs || []).forEach(function (r) {
        if (r.book !== bookId || Number(r.chapter) !== Number(chapter)) return;
        var verses = parseVerseSpec(r.verses);
        // If no verse range, mark whole chapter as entry via strip only
        if (!verses.length) return;
        var first = true;
        body.querySelectorAll(".verse-block").forEach(function (block) {
          var numEl = block.querySelector(".vnum");
          if (!numEl) return;
          var v = parseInt(numEl.textContent, 10);
          if (verses.indexOf(v) === -1) return;
          block.classList.add("is-pivot");
          block.setAttribute("data-pivot-id", m.id);
          block.setAttribute("data-pivot-title", m.title);
          block.setAttribute("tabindex", "0");
          block.setAttribute("role", "link");
          block.setAttribute(
            "title",
            "Open pivotal moment: " + m.title
          );
          block.onclick = function (ev) {
            ev.preventDefault();
            window.location.href = profileUrl(m.id);
          };
          block.onkeydown = function (ev) {
            if (ev.key === "Enter" || ev.key === " ") {
              ev.preventDefault();
              window.location.href = profileUrl(m.id);
            }
          };
        });
      });
    });
  }

  /** Hide old compact panel if present */
  function hideLegacyPanel() {
    var panel = document.getElementById("pivotal-moments");
    if (panel) {
      panel.hidden = true;
      panel.innerHTML = "";
    }
  }

  function updatePivotalMoments(bookId, chapter) {
    hideLegacyPanel();
    var moments = momentsForCurrent(bookId, chapter);
    renderStrip(moments);
    applyGlow(bookId, chapter, moments);
    // verses may load async — re-apply glow shortly
    setTimeout(function () {
      applyGlow(bookId, chapter, moments);
    }, 350);
    setTimeout(function () {
      applyGlow(bookId, chapter, moments);
    }, 900);
  }

  window.updatePivotalMoments = updatePivotalMoments;
})();
