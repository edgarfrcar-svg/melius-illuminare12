/**
 * Soft gold dust motes across the whole site.
 */
(function () {
  "use strict";
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (document.getElementById("motes-global")) return;

  function spawn() {
    var wrap = document.createElement("div");
    wrap.id = "motes-global";
    wrap.className = "motes-global";
    wrap.setAttribute("aria-hidden", "true");
    var count = window.innerWidth < 700 ? 18 : 32;
    for (var i = 0; i < count; i++) {
      var m = document.createElement("div");
      m.className = "mote" + (i % 5 === 0 ? " is-bright" : "");
      var size = 2 + Math.random() * 3.5;
      m.style.width = size + "px";
      m.style.height = size + "px";
      m.style.left = Math.random() * 100 + "%";
      m.style.bottom = -20 - Math.random() * 40 + "px";
      m.style.setProperty("--mx", (Math.random() * 80 - 40).toFixed(1) + "px");
      m.style.animationDuration = 12 + Math.random() * 18 + "s";
      m.style.animationDelay = Math.random() * 16 + "s";
      wrap.appendChild(m);
    }
    document.body.appendChild(wrap);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", spawn);
  } else {
    spawn();
  }
})();
