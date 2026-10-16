(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function artUrl(filename) {
    if (!filename) return "";
    // Local site assets
    if (filename.indexOf("img/") === 0 || filename.indexOf("./") === 0 || filename.indexOf("/") === 0) {
      return filename;
    }
    return "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(filename) + "?width=640";
  }

  const grid = document.getElementById("magisterium-grid");
  const centuries = (window.MAGISTERIUM && window.MAGISTERIUM.centuries) || [];
  if (!grid) return;

  centuries.forEach(function (c, index) {
    const card = document.createElement("a");
    card.href = "magisterium-century.html?id=" + encodeURIComponent(c.id);
    card.className = "concept-card mag-card";
    card.style.setProperty("--card-order", String(index));
    card.setAttribute("aria-label", "Open " + c.name);
    if (c.art && c.art[1]) {
      card.style.setProperty("--concept-image-position", c.art[1]);
    }
    const url = c.art ? artUrl(c.art[0]) : "";
    const councils = (c.councils || []).length;
    const controv = (c.controversies || []).length;
    const papal = (c.papalDocuments || []).length;
    const meta = [
      councils ? councils + " council" + (councils === 1 ? "" : "s") : null,
      controv ? controv + " controvers" + (controv === 1 ? "y" : "ies") : null,
      papal ? papal + " papal" : null
    ].filter(Boolean).join(" · ") || c.short || "";

    var artHtml = "";
    if (url) {
      artHtml =
        '<span class="concept-card-art">' +
        '<img src="' + escapeHtml(url) + '" alt="" loading="lazy" />' +
        "</span>";
    }

    card.innerHTML =
      artHtml +
      '<span class="concept-card-shade"></span>' +
      '<span class="concept-card-number">' +
      escapeHtml(String(c.century).padStart(2, "0")) +
      "</span>" +
      '<span class="concept-card-content">' +
      '<span class="concept-card-latin">' +
      escapeHtml(c.latin || "Saeculum " + c.century) +
      "</span>" +
      '<span class="concept-card-title">' +
      escapeHtml(c.name) +
      "</span>" +
      '<span class="concept-card-summary">' +
      escapeHtml(meta) +
      "</span>" +
      "</span>";

    // Attach onerror without breaking the script string
    var img = card.querySelector("img");
    if (img) {
      img.addEventListener("error", function () {
        var wrap = img.parentElement;
        if (wrap) wrap.classList.add("is-broken");
        img.remove();
      });
    }

    grid.appendChild(card);
  });
})();
