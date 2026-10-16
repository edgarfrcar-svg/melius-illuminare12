(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function params() {
    var q = {};
    (location.search || "").replace(/^\?/, "").split("&").forEach(function (pair) {
      var p = pair.split("=");
      if (p[0]) q[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || "");
    });
    return q;
  }

  /**
   * Build a continuous New Advent–style essay from the controversy record.
   * Prefer an explicit multi-paragraph essay; otherwise synthesize from the historical fields.
   */
  function buildEssayParagraphs(c) {
    var paras = [];

    if (c.essay) {
      if (Array.isArray(c.essay)) {
        c.essay.forEach(function (p) {
          if (p && String(p).trim()) paras.push(String(p).trim());
        });
      } else if (String(c.essay).trim()) {
        String(c.essay)
          .split(/\n\n+/)
          .forEach(function (p) {
            if (p.trim()) paras.push(p.trim());
          });
      }
    }

    /* If we already have a real multi-paragraph essay, show only that —
       do not stack a second synthetic introduction from the structured fields. */
    if (paras.length >= 2) {
      return paras;
    }

    // Fallback: synthesize a short essay from historical fields when no full essay exists.
    if (c.question) {
      paras.push(
        "The controversy turns on a precise question. " +
          String(c.question).replace(/\?$/, "") +
          "? On the answer hangs not a private opinion but the public faith of the Church."
      );
    }

    if (c.positions && c.positions.length) {
      var posBody = c.positions
        .map(function (p) {
          var s = String(p).trim();
          if (!/[.!?]$/.test(s)) s += ".";
          return s;
        })
        .join(" ");
      paras.push("Competing answers formed with real force. " + posBody);
    }

    if (c.intervention) {
      var inter = String(c.intervention).trim();
      if (!/[.!?]$/.test(inter)) inter += ".";
      paras.push(
        "The Church did not leave the question to private schools alone. " + inter
      );
    }

    if (c.magisterialAct) {
      var act = String(c.magisterialAct).trim();
      if (!/[.!?]$/.test(act)) act += ".";
      paras.push(
        "What followed was a magisterial act — not a mere mood of the age, but a judgment that binds the memory of the faithful. " +
          act
      );
    }

    if (c.result) {
      var res = String(c.result).trim();
      if (!/[.!?]$/.test(res)) res += ".";
      paras.push("The immediate result was this. " + res);
    }

    if (c.laterDevelopment) {
      var later = String(c.laterDevelopment).trim();
      if (!/[.!?]$/.test(later)) later += ".";
      paras.push(
        "Later development did not erase the judgment; it unfolded its consequences. " + later
      );
    }

    var out = [];
    paras.forEach(function (p) {
      if (!out.length || out[out.length - 1] !== p) out.push(p);
    });
    return out;
  }

  var main = document.getElementById("mag-controversy-main");
  var id = params().id;
  var controversy = null;
  var parentCentury = null;
  var centuries = (window.MAGISTERIUM && window.MAGISTERIUM.centuries) || [];
  centuries.forEach(function (c) {
    (c.controversies || []).forEach(function (cont) {
      if (cont.id === id) {
        controversy = cont;
        parentCentury = c;
      }
    });
  });

  if (!main) return;
  if (!controversy) {
    main.innerHTML =
      '<div class="mag-not-found"><p>Controversy not found.</p><p><a href="magisterium.html">← Back to Magisterium</a></p></div>';
    return;
  }

  document.title = controversy.name + " — Magisterium — Melius Illuminare";

  var paragraphs = buildEssayParagraphs(controversy);

  var html = "";
  html += '<section class="mag-controversy-hero">';
  html += '<div class="mag-century-hero-inner">';
  if (parentCentury) {
    html +=
      '<a class="mag-back" href="magisterium-century.html?id=' +
      encodeURIComponent(parentCentury.id) +
      '">← ' +
      escapeHtml(parentCentury.name) +
      "</a>";
  } else {
    html += '<a class="mag-back" href="magisterium.html">← All centuries</a>';
  }
  html += '<span class="hero-eyebrow">Controversy</span>';
  html += "<h1>" + escapeHtml(controversy.name) + "</h1>";
  if (parentCentury) {
    html +=
      '<p class="mag-century-tagline">' +
      escapeHtml(parentCentury.name) +
      (parentCentury.latin ? " · " + escapeHtml(parentCentury.latin) : "") +
      "</p>";
  }
  if (controversy.question) {
    html += '<p class="hero-lede">' + escapeHtml(controversy.question) + "</p>";
  }
  html += "</div></section>";

  html += '<article class="mag-controversy-essay">';
  html += '<span class="section-kicker">Essay</span>';
  html += "<h2>" + escapeHtml(controversy.name) + "</h2>";
  paragraphs.forEach(function (p) {
    html += "<p>" + escapeHtml(p) + "</p>";
  });
  html += "</article>";

  // Compact reference strip — not an arc, just anchors
  var refs = [];
  if (controversy.magisterialAct) {
    refs.push({ label: "Magisterial act", text: controversy.magisterialAct });
  }
  if (controversy.relatedDocuments && controversy.relatedDocuments.length) {
    refs.push({
      label: "Related documents",
      text: controversy.relatedDocuments.join("; ")
    });
  }
  if (refs.length) {
    html += '<aside class="mag-controversy-refs">';
    html += '<span class="section-kicker">Reference</span>';
    refs.forEach(function (r) {
      html +=
        "<div class=\"mag-ref-item\"><h3>" +
        escapeHtml(r.label) +
        "</h3><p>" +
        escapeHtml(r.text) +
        "</p></div>";
    });
    html += "</aside>";
  }

  main.innerHTML = html;
})();
