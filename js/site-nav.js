/**
 * Mobile nav toggle + active link highlight.
 */
(function () {
  "use strict";
  function pathFile() {
    var p = window.location.pathname || "";
    var parts = p.split("/");
    return (parts[parts.length - 1] || "index.html").split("?")[0];
  }

  function enhance() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var nav = header.querySelector("nav");
    if (!nav) return;

    // Active link
    var file = pathFile();
    nav.querySelectorAll("a[href]").forEach(function (a) {
      var href = (a.getAttribute("href") || "").split("/").pop().split("?")[0];
      if (!href) return;
      if (href === file || (file === "" && href === "index.html")) {
        a.classList.add("active");
      }
      // section roots
      if (file.indexOf("prayer") === 0 && href === "prayer.html") a.classList.add("active");
      if (file.indexOf("mass") === 0 && href === "mass.html") a.classList.add("active");
      if (file.indexOf("magisterium") === 0 && href === "magisterium.html") a.classList.add("active");
      if (file.indexOf("store") === 0 && href === "store.html") a.classList.add("active");
      if (file.indexOf("spiritualit") === 0 && href === "spiritualities.html") a.classList.add("active");
      if ((file === "profile.html" || file === "idea.html") && href === "figures.html")
        a.classList.add("active");
    });

    if (header.querySelector(".nav-toggle")) return;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-toggle";
    btn.setAttribute("aria-label", "Open menu");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = "☰";
    // Keep wordmark left, menu button right (mobile-friendly)
    header.appendChild(btn);

    function close() {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      btn.setAttribute("aria-expanded", "false");
      btn.innerHTML = "☰";
      btn.setAttribute("aria-label", "Open menu");
    }
    function open() {
      nav.classList.add("is-open");
      document.body.classList.add("nav-open");
      btn.setAttribute("aria-expanded", "true");
      btn.innerHTML = "✕";
      btn.setAttribute("aria-label", "Close menu");
    }

    btn.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) close();
      else open();
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  function seasonSkin() {
    var header = document.querySelector(".site-header");
    if (!header || header.querySelector(".season-toggle")) return;
    if (window.matchMedia && window.matchMedia("(max-width: 900px)").matches) return;
    var wrap = document.createElement("div");
    wrap.className = "season-toggle";
    wrap.setAttribute("title", "Optional seasonal tint");
    var seasons = [
      { id: "", label: "—", cls: "" },
      { id: "advent", label: "Adv", cls: "season-advent" },
      { id: "lent", label: "Lent", cls: "season-lent" },
      { id: "easter", label: "East", cls: "season-easter" },
    ];
    var saved = "";
    try { saved = localStorage.getItem("mi-season") || ""; } catch (e) {}
    function apply(id) {
      document.body.classList.remove("season-advent", "season-lent", "season-easter");
      seasons.forEach(function (s) {
        if (s.id && s.id === id) document.body.classList.add(s.cls);
      });
      wrap.querySelectorAll("button").forEach(function (b) {
        b.classList.toggle("is-on", b.getAttribute("data-season") === id);
      });
      try { localStorage.setItem("mi-season", id); } catch (e) {}
    }
    seasons.forEach(function (s) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = s.label;
      b.setAttribute("data-season", s.id);
      b.addEventListener("click", function () { apply(s.id); });
      wrap.appendChild(b);
    });
    header.appendChild(wrap);
    apply(saved);
  }

  function boot() {
    enhance();
    seasonSkin();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
