(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function artUrl(filename) {
    if (!filename) return "";
    if (filename.indexOf("img/") === 0 || filename.indexOf("./") === 0 || filename.indexOf("/") === 0) {
      return filename;
    }
    return "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(filename) + "?width=1200";
  }

  function params() {
    var q = {};
    (location.search || "").replace(/^\?/, "").split("&").forEach(function (pair) {
      var p = pair.split("=");
      if (p[0]) q[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || "");
    });
    return q;
  }

  var AUTHORITY_CLASS = {
    dogmatic: "mag-auth-dogmatic",
    ecumenical: "mag-auth-ecumenical",
    papal: "mag-auth-papal",
    synodal: "mag-auth-synodal",
    apostolic: "mag-auth-apostolic",
    curial: "mag-auth-curial",
    disciplinary: "mag-auth-disciplinary"
  };

  function authorityBadge(item) {
    if (!item) return "";
    var key = item.authority || "";
    var label = item.authorityLabel || key;
    if (!label) return "";
    var cls = AUTHORITY_CLASS[key] || "mag-auth-synodal";
    return '<span class="mag-authority-badge ' + cls + '">' + escapeHtml(label) + "</span>";
  }

  var main = document.getElementById("mag-century-main");
  var id = params().id;
  var data = window.MAGISTERIUM && window.MAGISTERIUM.centuries;
  var century = data && data.find(function (c) { return c.id === id; });

  if (!main) return;
  if (!century) {
    main.innerHTML =
      '<div class="mag-not-found"><p>Century not found.</p><p><a href="magisterium.html">← Back to Magisterium</a></p></div>';
    return;
  }

  document.title = century.name + " — Magisterium — Melius Illuminare";

  function listItems(arr) {
    if (!arr || !arr.length) return "";
    return (
      "<ul class=\"mag-bullet-list\">" +
      arr.map(function (x) {
        return "<li>" + escapeHtml(x) + "</li>";
      }).join("") +
      "</ul>"
    );
  }

  function primaryTextBlock(d) {
    var html = "";
    /* Full texts and essays live only in the reader — never inline on the card. */
    if (d.readerId) {
      var label =
        d.readerKind === "essay" || d.essayOnly
          ? "Read essay →"
          : "Open full text in reader →";
      html +=
        '<p class="mag-item-source mag-reader-link"><a class="mag-open-reader" href="texts/work.html?id=' +
        encodeURIComponent(d.readerId) +
        '">' +
        label +
        "</a></p>";
    } else if (d.sourceUrl) {
      html +=
        '<p class="mag-item-source">Source: <a href="' +
        escapeHtml(d.sourceUrl) +
        '" target="_blank" rel="noopener">' +
        escapeHtml(d.sourceLabel || "Catholic Library") +
        "</a>";
      if (d.sourceNote) html += " — " + escapeHtml(d.sourceNote);
      html += "</p>";
    }
    return html;
  }



  function readerHref(d) {
    if (!d || !d.readerId) return "";
    return "texts/work.html?id=" + encodeURIComponent(d.readerId);
  }

  function titleWithReader(d, name) {
    var href = readerHref(d);
    var safe = escapeHtml(name || "");
    if (href) {
      return (
        '<h3 class="mag-item-title"><a class="mag-item-title-link" href="' +
        href +
        '">' +
        safe +
        ' <span class="mag-read-cue">Read full text →</span></a></h3>'
      );
    }
    return '<h3 class="mag-item-title">' + safe + "</h3>";
  }

  
  function setupReaderClicks(root) {
    if (!root) return;
    root.querySelectorAll("article.mag-item-has-reader[data-reader]").forEach(function (el) {
      el.style.cursor = "pointer";
      el.addEventListener("click", function (e) {
        if (e.target.closest("a")) return;
        var id = el.getAttribute("data-reader");
        if (id) window.location.href = "texts/work.html?id=" + encodeURIComponent(id);
      });
    });
  }

  function councilCard(c) {
    var clickable = c.readerId ? " mag-item-has-reader" : "";
    var html =
      '<article class="mag-item mag-item-rich' +
      clickable +
      '" id="council-' +
      escapeHtml(c.id || "") +
      '"' +
      (c.readerId ? ' data-reader="' + escapeHtml(c.readerId) + '"' : "") +
      ">" +
      '<div class="mag-item-head">' +
      '<div class="mag-item-title-row">' +
      titleWithReader(c, c.name) +
      authorityBadge(c) +
      "</div>" +
      '<p class="mag-item-meta">' +
      escapeHtml([c.year, c.source].filter(Boolean).join(" · ")) +
      "</p></div>";
    if (c.summary) html += '<p class="mag-item-summary">' + escapeHtml(c.summary) + "</p>";
    /* Full council essay only via reader link — not inline on the card. */
    html += primaryTextBlock(c);
    if (c.magisterialAction && c.magisterialAction.length) {
      html +=
        '<div class="mag-item-section"><h4>Magisterial action</h4>' +
        listItems(c.magisterialAction) +
        "</div>";
    }
    if (c.defines && c.defines.length) {
      html +=
        '<div class="mag-item-section"><h4>Defines / settles</h4>' +
        listItems(c.defines) +
        "</div>";
    }
    if (c.controversy) {
      if (c.id === "jerusalem") {
        html +=
          '<p class="mag-item-link">Controversy: <a href="magisterium-controversy.html?id=judaizers&century=' +
          encodeURIComponent(century.id) +
          '">' +
          escapeHtml(c.controversy) +
          "</a></p>";
      } else {
        html +=
          '<p class="mag-item-link">Controversy: <a href="magisterium-controversy.html?id=' +
          encodeURIComponent(
            c.controversy.split("/")[0].trim().toLowerCase().replace(/\s+/g, "-")
          ) +
          "&century=" +
          encodeURIComponent(century.id) +
          '">' +
          escapeHtml(c.controversy) +
          "</a></p>";
      }
    }
    html += "</article>";
    return html;
  }

  function papalCard(d) {
    var clickable = d.readerId ? " mag-item-has-reader" : "";
    var html =
      '<article class="mag-item mag-item-rich' +
      clickable +
      '" id="doc-' +
      escapeHtml(d.id || "") +
      '"' +
      (d.readerId ? ' data-reader="' + escapeHtml(d.readerId) + '"' : "") +
      ">" +
      '<div class="mag-item-head">' +
      '<div class="mag-item-title-row">' +
      titleWithReader(d, d.name) +
      authorityBadge(d) +
      "</div>" +
      '<p class="mag-item-meta">' +
      escapeHtml([d.pope, d.year].filter(Boolean).join(" · ")) +
      "</p></div>";
    if (d.summary) html += '<p class="mag-item-summary">' + escapeHtml(d.summary) + "</p>";
    /* Full essay only in the reader via primaryTextBlock / Read essay link — not inline. */
    html += primaryTextBlock(d);
    if (d.subjects && d.subjects.length) {
      html +=
        '<div class="mag-item-section"><h4>Subjects</h4>' +
        listItems(d.subjects) +
        "</div>";
    }
    html += "</article>";
    return html;
  }

  function otherCard(a) {
    var html =
      '<article class="mag-item mag-item-rich">' +
      '<div class="mag-item-title-row"><h3 class="mag-item-title">' +
      escapeHtml(a.name) +
      "</h3>" +
      authorityBadge(a) +
      "</div>" +
      '<p class="mag-item-meta">' +
      escapeHtml(a.year || "") +
      "</p>" +
      (a.summary ? '<p class="mag-item-summary">' + escapeHtml(a.summary) + "</p>" : "");
    /* Full essay only on detail/reader pages — not on the century card. */
    html += "</article>";
    return html;
  }

  function controversyCard(c) {
    /* Card shows only question + short teaser. Full essay lives on the controversy page. */
    var teaser = "";
    if (c.teaser && String(c.teaser).trim()) {
      teaser = String(c.teaser).trim();
    } else if (c.essay) {
      var raw = Array.isArray(c.essay) ? c.essay[0] : String(c.essay);
      raw = String(raw || "").trim();
      if (raw.length > 220) {
        var cut = raw.slice(0, 220);
        var sp = cut.lastIndexOf(" ");
        teaser = (sp > 120 ? cut.slice(0, sp) : cut).replace(/[,:;\-—\s]+$/, "") + "…";
      } else {
        teaser = raw;
      }
    }
    var html =
      '<article class="mag-item mag-item-rich">' +
      '<div class="mag-item-title-row"><h3 class="mag-item-title">' +
      escapeHtml(c.name) +
      "</h3></div>" +
      '<p class="mag-item-summary"><em>' +
      escapeHtml(c.question || "") +
      "</em></p>";
    if (teaser) {
      html += '<p class="mag-item-summary">' + escapeHtml(teaser) + "</p>";
    }
    html +=
      '<p class="mag-item-link"><a href="magisterium-controversy.html?id=' +
      encodeURIComponent(c.id) +
      "&century=" +
      encodeURIComponent(century.id) +
      '">Read the essay →</a></p></article>';
    return html;
  }

  var heroArt = century.art ? artUrl(century.art[0]) : "";
  var heroPos = century.art && century.art[1] ? century.art[1] : "center center";
  var html = "";

  html += '<section class="mag-century-hero">';
  if (heroArt) {
    html +=
      '<div class="mag-century-hero-bg" style="background-image:url(\'' +
      heroArt +
      "');background-position:" +
      heroPos +
      ';"></div>';
  }
  html += '<div class="mag-century-hero-inner">';
  html += '<a class="mag-back" href="magisterium.html">← All centuries</a>';
  html += '<span class="hero-eyebrow">' + escapeHtml(century.latin || "") + "</span>";
  html += "<h1>" + escapeHtml(century.name) + "</h1>";
  if (century.short) {
    html += '<p class="mag-century-tagline">' + escapeHtml(century.short) + "</p>";
  }
  html += '<p class="hero-lede">' + escapeHtml(century.summary || "") + "</p>";
  html += "</div></section>";

  html += '<div class="mag-century-body">';

  // Essay
  if (century.essay && century.essay.length) {
    html += '<section class="mag-block mag-essay-block">';
    html += '<span class="section-kicker">Overview</span>';
    html += "<h2>Apostolic Magisterium</h2>";
    century.essay.forEach(function (p) {
      html += "<p>" + escapeHtml(p) + "</p>";
    });
    html += "</section>";
  }

  // Councils
  html += '<section class="mag-block">';
  html += '<span class="section-kicker">Councils</span>';
  html += "<h2>Councils</h2>";
  if (century.councils && century.councils.length) {
    html += '<div class="mag-rich-list">' + century.councils.map(councilCard).join("") + "</div>";
  } else {
    html +=
      '<p class="mag-empty">There are no ecumenical councils in this century. That fact itself is part of the timeline.</p>';
  }
  html += "</section>";

  // Controversies
  html += '<section class="mag-block">';
  html += '<span class="section-kicker">Controversies</span>';
  html += "<h2>Controversies</h2>";
  if (century.controversies && century.controversies.length) {
    html +=
      '<div class="mag-rich-list">' + century.controversies.map(controversyCard).join("") + "</div>";
  } else {
    html += '<p class="mag-empty">No major controversies listed for this century yet.</p>';
  }
  html += "</section>";

  // Papal documents
  html += '<section class="mag-block">';
  html += '<span class="section-kicker">Papal documents</span>';
  html += "<h2>Papal documents</h2>";
  if (century.papalDocuments && century.papalDocuments.length) {
    html += '<div class="mag-rich-list">' + century.papalDocuments.map(papalCard).join("") + "</div>";
  } else {
    html += '<p class="mag-empty">No papal documents listed for this century yet.</p>';
  }
  html += "</section>";

  // Other acts
  html += '<section class="mag-block">';
  html += '<span class="section-kicker">Other magisterial acts</span>';
  html += "<h2>Other magisterial acts</h2>";
  if (century.otherActs && century.otherActs.length) {
    html += '<div class="mag-rich-list">' + century.otherActs.map(otherCard).join("") + "</div>";
  } else {
    html += '<p class="mag-empty">No other acts listed for this century yet.</p>';
  }
  html += "</section>";

  html += "</div>";

  main.innerHTML = html;
})();

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      if (typeof setupReaderClicks === "function") setupReaderClicks(document.body);
    }, 100);
  });
