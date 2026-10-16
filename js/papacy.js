/**
 * Papacy page — essay, concept-style Q&A, Master-Teachers-style popes.
 */
(function () {
  "use strict";

  // Safe image fallback for pope portraits (avoids nested-quote syntax errors)
  window.__popeImgErr = function (img) {
    try {
      var p = img.parentElement;
      if (!p) return;
      p.classList.add("is-broken");
      var s = document.createElement("span");
      s.className = "spir-teacher-initials";
      var alt = img.alt || "?";
      s.textContent = alt
        .replace(/^(St\.|Bl\.|Pope)\s+/i, "")
        .split(/\s+/)
        .map(function (w) { return w.charAt(0); })
        .slice(0, 2)
        .join("")
        .toUpperCase();
      p.appendChild(s);
      img.remove();
    } catch (e) {}
  };


  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function render() {
    var data = window.PAPACY;
    if (!data) return;
    var root = document.getElementById("papacy-root");
    if (!root) return;
    var html = "";

    // Hero
    html +=
      '<section class="page-hero concepts-hero" id="papacy-hero">' +
      '<div class="hero-inner">' +
      '<span class="hero-eyebrow">Office of Unity</span>' +
      "<h1>" + esc(data.title) + "</h1>" +
      (data.latin ? '<p class="hero-latin">' + esc(data.latin) + "</p>" : "") +
      '<p class="hero-lede">' + esc(data.definition) + "</p>" +
      "</div></section>";

    // Essay
    html +=
      '<section class="exhibit-section papacy-section" id="essay">' +
      '<span class="section-kicker">Encyclopedia article</span>' +
      "<h2>What the Church means by the papacy</h2>" +
      '<div class="fp-essay-body papacy-essay">';
    (data.essay || []).forEach(function (p) {
      var t = String(p || "").trim();
      if (!t) return;
      var m = t.match(/^[\u201c\u201d"'](.+?)[\u201c\u201d"']\s*[\u2014\u2013\-—–]\s*(.+)$/s);
      if (m) {
        html +=
          '<blockquote class="exhibit-quote"><p>' +
          esc(m[1].trim()) +
          '</p><cite class="exhibit-cite">' +
          esc(m[2].trim()) +
          "</cite></blockquote>";
      } else if (t.charAt(0) === '"' || t.charAt(0) === "\u201c") {
        // quote without clear source separator
        html +=
          '<blockquote class="exhibit-quote"><p>' +
          esc(t.replace(/^["\u201c]|["\u201d]$/g, "")) +
          "</p></blockquote>";
      } else {
        html += "<p>" + esc(t) + "</p>";
      }
    });
    html += "</div></section>";

    // Scripture
    if (data.scriptural && data.scriptural.length) {
      html +=
        '<section class="exhibit-section papacy-section" id="scripture">' +
        '<span class="section-kicker">Sacred Scripture</span>' +
        "<h2>The Petrine texts</h2>" +
        '<div class="papacy-scripture-grid">';
      data.scriptural.forEach(function (s) {
        html +=
          '<blockquote class="papacy-quote"><p>' +
          esc(s.text) +
          "</p><cite>" +
          esc(s.cite) +
          "</cite></blockquote>";
      });
      html += "</div></section>";
    }

    // Q&A
    
    if (data.videos && data.videos.length) {
      html +=
        '<section class="exhibit-section papacy-section" id="videos">' +
        '<span class="section-kicker">Videos</span>' +
        "<h2>Videos</h2>" +
        '<ul class="mi-video-links">';
      data.videos.forEach(function (v) {
        html += '<li><span class="mi-video-title">' + esc(v.title || 'Video') + '</span>' +
          '<a href="' + esc(v.url) + '" target="_blank" rel="noopener noreferrer">Watch on YouTube</a></li>';
      });
      html += "</ul></section>";
    }

    html +=
      '<section class="exhibit-section papacy-section" id="questions">' +
      '<span class="section-kicker">Themes</span>' +
      "<h2>Questions that structure the doctrine</h2>" +
      '<p class="exhibit-section-intro">Each question opens its own page — Scripture, Fathers, Vatican I and II — in the same manner as the Concepts encyclopedia.</p>' +
      '<ol class="exhibit-q-grid">';
    (data.questions || []).forEach(function (q, i) {
      var num = String(i + 1).length < 2 ? "0" + (i + 1) : String(i + 1);
      html +=
        '<li class="exhibit-q-card-item">' +
        '<a class="exhibit-q-card" href="papacy-question.html?q=' +
        encodeURIComponent(q.id) +
        '">' +
        '<span class="exhibit-q-num">' + num + "</span>" +
        '<h3 class="exhibit-q-text">' + esc(q.q) + "</h3>" +
        (q.short ? '<p class="exhibit-q-short">' + esc(q.short) + "</p>" : "") +
        "</a></li>";
    });
    html += "</ol></section>";

    // Notable popes — identical structure to Master Teachers
    html +=
      '<section class="exhibit-section papacy-section spir-section" id="notable-popes">' +
      '<span class="section-kicker spir-kicker">Notable popes</span>' +
      "<h2>In chronological order</h2>" +
      '<p class="exhibit-section-intro">A representative spine of the Petrine office — presented as profiles, in the same manner as the Master Teachers of the spiritual schools.</p>';

    var popes = data.popes || [];
    var founders = popes.filter(function (p) { return !!p.founder; });
    var others = popes.filter(function (p) { return !p.founder; });

    function popeCard(p) {
      var isFounder = !!p.founder;
      var classes = "spir-teacher" + (isFounder ? " is-founder" : "");
      var portrait = "";
      if (p.img) {
        portrait =
          '<span class="spir-teacher-portrait' +
          (isFounder ? " is-founder-portrait" : "") +
          '">' +
          (isFounder ? '<span class="spir-founder-ornament" aria-hidden="true"></span>' : "") +
          '<img src="' + esc(p.img) + '" alt="' + esc(p.name) + '" loading="lazy" decoding="async" onerror="window.__popeImgErr(this)" />' +
          "</span>";
      } else {
        var initials = (p.name || "?")
          .replace(/^(St\.|Bl\.|Pope)\s+/i, "")
          .split(/\s+/)
          .map(function (w) { return w.charAt(0); })
          .slice(0, 2)
          .join("")
          .toUpperCase();
        portrait =
          '<span class="spir-teacher-portrait spir-teacher-mono' +
          (isFounder ? " is-founder-portrait" : "") +
          '">' +
          (isFounder ? '<span class="spir-founder-ornament" aria-hidden="true"></span>' : "") +
          '<span class="spir-teacher-initials">' +
          esc(initials) +
          "</span></span>";
      }
      var roleLine = (p.years ? p.years : "") + (p.role ? (p.years ? " · " : "") + p.role : "");
      var label =
        (isFounder ? '<span class="spir-founder-badge">First of the line</span>' : "") +
        '<span class="spir-teacher-name">' + esc(p.name) + "</span>" +
        '<span class="spir-teacher-role">' + esc(roleLine) + "</span>";
      var inner = portrait + '<span class="spir-teacher-text">' + label + "</span>";
      if (p.figureId) {
        return (
          '<a class="' +
          classes +
          '" id="pope-' +
          esc(p.id) +
          '" href="figures/profile.html?id=' +
          encodeURIComponent(p.figureId) +
          '" title="' +
          esc(p.note || "") +
          '">' +
          inner +
          "</a>"
        );
      }
      return (
        '<div class="' +
        classes +
        '" id="pope-' +
        esc(p.id) +
        '" title="' +
        esc(p.note || "") +
        '">' +
        inner +
        "</div>"
      );
    }

    html += '<div class="spir-teachers">';
    if (founders.length) {
      html +=
        '<div class="spir-teachers-founder">' +
        founders.map(popeCard).join("") +
        "</div>";
    }
    if (others.length) {
      html +=
        '<div class="spir-teachers-grid">' +
        others.map(popeCard).join("") +
        "</div>";
    }
    html += "</div></section>";

    // Key documents — LAST
    if (data.documents && data.documents.length) {
      html +=
        '<section class="exhibit-section papacy-section" id="documents">' +
        '<span class="section-kicker">Magisterial texts</span>' +
        "<h2>Key documents</h2>" +
        '<ul class="papacy-doc-list">' ;
      data.documents.forEach(function (d) {
        html +=
          "<li><strong>" +
          esc(d.name) +
          "</strong> — " +
          esc(d.note) +
          "</li>";
      });
      html +=
        '</ul><p class="papacy-link-note">For papal acts by century, see the <a href="magisterium.html">Magisterium</a> spine.</p></section>';
    }

    root.innerHTML = html;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
