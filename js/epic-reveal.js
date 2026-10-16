/**
 * Soft scroll-reveal for major sections — epic entrance without noise.
 */
(function () {
  "use strict";
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function mark() {
    var sels = [
      ".section-head",
      ".tradition-card",
      ".exhibit-section",
      ".store-genre-card",
      ".fp-section",
      ".mass-part-card",
      ".concept-card",
      ".figure-card",
      ".store-link-row",
      ".rosary-app",
    ];
    sels.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (!el.classList.contains("epic-reveal")) el.classList.add("epic-reveal");
      });
    });
  }

  function observe() {
    mark();
    var nodes = document.querySelectorAll(".epic-reveal");
    if (!nodes.length || !("IntersectionObserver" in window)) {
      nodes.forEach(function (n) {
        n.classList.add("is-in");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    nodes.forEach(function (n) {
      io.observe(n);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(observe, 60);
    });
  } else {
    setTimeout(observe, 60);
  }
  // SPA-ish late content
  setTimeout(observe, 800);
})();
