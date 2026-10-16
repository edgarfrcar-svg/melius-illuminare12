/**
 * The Theological Tree — Renderer & Interaction
 * ----------------------------------------------------------------------------
 * An illuminated, hierarchical genealogy of ideas — NOT a network graph.
 *
 *   • Default view  → clean curved branches, no labels.
 *   • Hover a line  → tooltip with the relationship type + direction.
 *   • Click a line   → side panel with the relationship detail.
 *   • Click a node   → focus (dim/hide others, reveal its relationships) + panel.
 *   • Detail levels → Overview / Development / Detailed (progressive reveal).
 *   • Filters        → toggle relationship categories; Secondary off by default.
 *   • Detail levels  → Overview / Development / Detailed (no pan/zoom).
 *
 * Data lives in tree-data.js (nodes, branches, edges, relationshipTypes).
 */
(function () {
  "use strict";

  const data = (typeof TREE_DATA !== "undefined") ? TREE_DATA : window.TREE_DATA;
  if (!data) return;

  const categoryMap = data.categories || null;
  const requestedCategory = new URLSearchParams(window.location.search).get("category");
  let activeCategoryId = (requestedCategory && data.categories && data.categories[requestedCategory])
    ? requestedCategory
    : ((data.meta && data.meta.activeCategory) || "grace");
  const nodeById = {};

  function getCurrentCategory() {
    if (categoryMap && categoryMap[activeCategoryId]) {
      return categoryMap[activeCategoryId];
    }

    return {
      nodes: data.nodes || [],
      branches: data.branches || [],
      edges: data.edges || [],
    };
  }

  function refreshNodeLookup() {
    Object.keys(nodeById).forEach((key) => delete nodeById[key]);
    (data.nodes || []).forEach((node) => {
      nodeById[node.id] = node;
    });
  }

  function syncCategoryButtons() {
    document.querySelectorAll(".category-btn").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.category === activeCategoryId);
    });
  }

  function applyCategory(categoryId) {
    activeCategoryId = categoryId;
    const category = categoryMap && categoryMap[categoryId];
    if (category) {
      data.nodes = category.nodes || [];
      data.branches = category.branches || [];
      data.edges = category.edges || [];
    }

    refreshNodeLookup();
    render();
    fitView();
    syncCategoryButtons();
  }

  /* ── Canvas / layout constants ──────────────────────────────────── */
  const CANVAS_W = 1280;
  const CANVAS_H = 2400;

  /* ── Tradition color table (defensive: main.js may not define it) ── */
  const TRADITION_COLORS = (function () {
    const base = {
      core:     { color: "#c9a227", glow: "#ffd98e", label: "Core" },
      early:    { color: "#a97142", glow: "#e0b483", label: "Early Church" },
      catholic: { color: "#c9a227", glow: "#ffd98e", label: "Catholic" },
      orthodox: { color: "#6b3a76", glow: "#c79bd6", label: "Orthodox" },
      protestant:{ color: "#3a6ea5", glow: "#9ecbff", label: "Protestant" },
    };
    if (typeof TRADITION_COLORS_GLOBAL !== "undefined") {
      try {
        for (const k in TRADITION_COLORS_GLOBAL) {
          const v = TRADITION_COLORS_GLOBAL[k];
          if (v && (v.color || v.glow)) base[k] = Object.assign({}, base[k], v);
        }
      } catch (_) {}
    }
    return base;
  })();

  /* ── Edge / category styling ─────────────────────────────────────── */
  const CATEGORY_STYLE = {
    lineage:  { stroke: "var(--gold)",   dash: "none", width: 1.6 },
    conflict: { stroke: "#b04a3a",        dash: "5 5", width: 1.6 },
    judgment: { stroke: "var(--bronze)", dash: "2 4", width: 1.5 },
    typology: { stroke: "#5b8a7a",        dash: "none", width: 2.0 },
  };

  /* ── State ──────────────────────────────────────────────────────── */
  const state = {
    detail: 99,                      // detail levels removed — show all
    filters: {
      development: true,
      opposition: true,
      controversy: true,
      influence: true,
      secondary: false,              // long-range / minor links
    },
    focusNode: null,
    focusMode: false,                // strong: hide non-neighbors
    scale: 1,
    tx: 0,
    ty: 0,
  };

  refreshNodeLookup();

  function nodeTypeLabel(t) {
    return { concept: "Concept", figure: "Figure", tradition: "Tradition",
             movement: "Movement", event: "Controversy" }[t] || t;
  }

  function trad(n) {
    return TRADITION_COLORS[n.tradition] || TRADITION_COLORS.core;
  }

  function relType(t) {
    return data.relationshipTypes[t] || { label: t, category: "lineage", group: "development" };
  }

  /* edges that coincide with a branch (so we don't double-draw) */
  const branchPairs = new Set();
  data.branches.forEach((b) => {
    branchPairs.add(b.parent + "##" + b.child);
    branchPairs.add(b.child + "##" + b.parent);
  });

  /* ── Visibility rules ───────────────────────────────────────────── */
  function nodeVisible(n) {
    return true; // all nodes visible (detail levels removed)
  }

  function isNeighbor(nodeId, focus) {
    if (!focus) return true;
    if (nodeId === focus) return true;
    // neighbor if any visible edge links it to focus
    for (const e of data.edges) {
      if (!edgeVisible(e, focus)) continue;
      if ((e.source === focus && e.target === nodeId) ||
          (e.target === focus && e.source === nodeId)) return true;
    }
    // also branch-neighbors
    for (const b of data.branches) {
      if ((b.parent === focus && b.child === nodeId) ||
          (b.child === focus && b.parent === nodeId)) {
        if (nodeVisible(nodeById[nodeId])) return true;
      }
    }
    return false;
  }

  function edgeVisible(edge, focus) {
    const a = nodeById[edge.source], b = nodeById[edge.target];
    if (!a || !b) return false;
    if (!nodeVisible(a) || !nodeVisible(b)) return false;
    const group = relType(edge.type).group;
    if (!state.filters[group]) return false;
    if (focus && (edge.source === focus || edge.target === focus)) return true;
    if (edge.prominence === "primary") return true;
    if (edge.prominence === "secondary" && state.filters.secondary) return true;
    return false;
  }

  /* ── DOM roots ───────────────────────────────────────────────────── */
  const svg = document.getElementById("tree-svg");
  const nodesLayer = document.getElementById("tree-nodes");
  const viewport = document.getElementById("tree-viewport");
  const scrollEl = document.getElementById("tree-scroll");
  const sidePanel = document.getElementById("tree-sidepanel");
  const tooltip = document.getElementById("tree-tooltip");

  /* ── Helpers ───────────────────────────────────────────────────── */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function pt(obj) {
    return { x: Number(obj.x), y: Number(obj.y) };
  }

  // smooth vertical-leaning organic curve between parent (upper) and child
  function branchPath(a, b) {
    const a1 = pt(a), b1 = pt(b);
    // Smooth vertical curve between node centers (same coordinate space as HTML nodes)
    const dy = b1.y - a1.y;
    const c1x = a1.x;
    const c1y = a1.y + dy * 0.45;
    const c2x = b1.x;
    const c2y = a1.y + dy * 0.55;
    return "M " + a1.x + " " + a1.y + " C " + c1x + " " + c1y + ", " + c2x + " " + c2y + ", " + b1.x + " " + b1.y;
  }

  function overlayPath(a, b, c1, c2) {
    const a1 = pt(a), b1 = pt(b);
    const mid = { x: (a1.x + b1.x) / 2, y: (a1.y + b1.y) / 2 };
    const p1 = c1 ? pt(c1) : mid;
    const p2 = c2 ? pt(c2) : mid;
    return `M ${a1.x} ${a1.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${b1.x} ${b1.y}`;
  }

  /* ── SVG namespace helper ───────────────────────────────────────── */
  const SVGNS = "http://www.w3.org/2000/svg";
  function svgEl(tag, attrs) {
    const el = document.createElementNS(SVGNS, tag);
    if (attrs) for (const k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }

  /* ── Node markup ────────────────────────────────────────────────── */
  function nodeInner(n) {
    const t = trad(n);
    switch (n.type) {
      case "concept":
        return (
          '<span class="tn-kicker">Concept</span>' +
          '<h3 class="tn-title">' + esc(n.title) + "</h3>" +
          (n.subtitle ? '<span class="tn-subtitle">' + esc(n.subtitle) + "</span>" : "")
        );
      case "figure":
        return (
          '<span class="tn-kicker">Figure</span>' +
          '<div class="tn-portrait" aria-hidden="true"><span>' +
            esc(String(n.title).charAt(0)) + "</span></div>" +
          '<h3 class="tn-title">' + esc(n.title) + "</h3>" +
          (n.dates ? '<span class="tn-dates">' + esc(n.dates) + "</span>" : "")
        );
      case "tradition":
        return (
          '<span class="tn-kicker">Tradition</span>' +
          '<h3 class="tn-title">' + esc(n.title) + "</h3>" +
          (n.dates ? '<span class="tn-dates">' + esc(n.dates) + "</span>" : "")
        );
      case "movement":
        return (
          '<span class="tn-kicker">Movement</span>' +
          '<h3 class="tn-title">' + esc(n.title) + "</h3>" +
          (n.dates ? '<span class="tn-dates">' + esc(n.dates) + "</span>" : "")
        );
      case "event":
        return (
          '<span class="tn-kicker">Controversy</span>' +
          '<h3 class="tn-title">' + esc(n.title) + "</h3>" +
          (n.dates ? '<span class="tn-dates">' + esc(n.dates) + "</span>" : "")
        );
      default:
        return '<h3 class="tn-title">' + esc(n.title) + "</h3>";
    }
  }

  function buildNode(n) {
    const el = document.createElement("div");
    el.className = "tree-node node-" + n.type;
    el.style.left = n.x + "px";
    el.style.top = n.y + "px";
    el.dataset.id = n.id;
    const t = trad(n);
    if (n.type === "figure") {
      el.style.setProperty("--ring-color", t.color);
      el.style.setProperty("--ring-glow", t.glow);
    } else if (n.type === "tradition" || n.type === "movement") {
      el.style.setProperty("--accent", t.color);
      el.style.setProperty("--accent-glow", t.glow);
    }
    el.innerHTML = nodeInner(n);
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", n.title + " — " + nodeTypeLabel(n.type));
    return el;
  }

  /* ── Render ─────────────────────────────────────────────────────── */
  function applyTransform() {
    viewport.style.transform =
      "translate(" + state.tx + "px," + state.ty + "px) scale(" + state.scale + ")";
  }

  /* Fit the visible nodes into the canvas window (overview glance),
     centered in the canvas window. */
  function fitView() {
    const vis = data.nodes.filter(nodeVisible);
    if (!vis.length) return;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    vis.forEach((n) => {
      minX = Math.min(minX, n.x); minY = Math.min(minY, n.y);
      maxX = Math.max(maxX, n.x); maxY = Math.max(maxY, n.y);
    });

    // Fixed coordinate system matching node x/y data (never rescale SVG viewBox away from 1:1)
    const coordW = 1280;
    const padY = 280;
    const coordH = Math.max(1800, Math.ceil(maxY + padY));

    // Keep SVG + HTML node layer in exact lockstep (1 CSS px = 1 data unit)
    const nodesLayer = document.getElementById("tree-nodes");
    viewport.style.width = coordW + "px";
    viewport.style.height = coordH + "px";
    if (nodesLayer) {
      nodesLayer.style.width = coordW + "px";
      nodesLayer.style.height = coordH + "px";
    }
    if (svg) {
      svg.setAttribute("viewBox", "0 0 " + coordW + " " + coordH);
      svg.setAttribute("width", String(coordW));
      svg.setAttribute("height", String(coordH));
      svg.style.width = coordW + "px";
      svg.style.height = coordH + "px";
      svg.removeAttribute("preserveAspectRatio"); // 1:1, no stretch
    }

    // Use full window width for centering (canvas is full-bleed)
    const pageW = Math.max(
      scrollEl.clientWidth || 0,
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (!pageW) return;

    const bw = (maxX - minX) + 240;
    // Scale so the tree's bounding box fits comfortably in the page width
    const scaleW = (pageW * 0.88) / Math.max(bw, 600);
    state.scale = Math.max(0.35, Math.min(scaleW, 1.0));

    // Center the geometric midpoint of visible nodes in the page
    const cx = (minX + maxX) / 2;
    state.tx = pageW / 2 - cx * state.scale;
    // Top padding so the first nodes sit below the sticky header + toolbar
    state.ty = 48 - minY * state.scale;
    applyTransform();

    // Canvas height = scaled tree + padding (page is the only scrollbar)
    const scaledH = Math.ceil(Math.max(coordH * state.scale + state.ty + 200, 640));
    scrollEl.style.height = scaledH + "px";
    scrollEl.style.width = "100%";
    if (scrollEl) {
      scrollEl.scrollTop = 0;
      scrollEl.scrollLeft = 0;
    }
  }

  function render() {
    svg.innerHTML = "";
    nodesLayer.innerHTML = "";

    const focus = state.focusNode;
    const neighbors = new Set();
    if (focus) {
      neighbors.add(focus);
      data.nodes.forEach((n) => { if (isNeighbor(n.id, focus)) neighbors.add(n.id); });
    }

    // ── Branches (clean default tree) ──
    data.branches.forEach((b) => {
      const a = nodeById[b.parent], c = nodeById[b.child];
      if (!a || !c) return;
      if (!nodeVisible(a) || !nodeVisible(c)) return;

      const dimmed = focus && !state.focusMode && !(neighbors.has(a.id) && neighbors.has(c.id));
      const hidden = focus && state.focusMode && !(neighbors.has(a.id) && neighbors.has(c.id));

      // visible curve — color by relationship category (e.g. foreshadowed / typology)
      const bsty = CATEGORY_STYLE[relType(b.type).category] || CATEGORY_STYLE.lineage;
      const vis = svgEl("path", {
        d: branchPath(a, c),
        class: "branch-line" + (dimmed ? " is-dim" : "") + (hidden ? " is-hidden" : ""),
      });
      vis.setAttribute("fill", "none");
      vis.style.stroke = bsty.stroke || "rgba(201,162,39,0.85)";
      vis.style.strokeWidth = "2.4";
      vis.style.strokeLinecap = "round";
      vis.style.strokeLinejoin = "round";
      vis.removeAttribute("stroke-dasharray");
      svg.appendChild(vis);
      // wide invisible hit area
      const hit = svgEl("path", {
        d: branchPath(a, c),
        class: "branch-hit" + (hidden ? " is-hidden" : ""),
      });
      svg.appendChild(hit);

      const payload = { kind: "branch", branch: b, a: a, c: c };
      attachLineEvents(hit, payload);
    });

    // ── Overlay edges (typed relationships) ──
    data.edges.forEach((e) => {
      const a = nodeById[e.source], b = nodeById[e.target];
      if (!a || !b) return;
      // skip if a branch already connects this pair (branch carries it)
      if (branchPairs.has(e.source + "##" + e.target)) return;
      if (!edgeVisible(e, focus)) return;

      const sty = CATEGORY_STYLE[relType(e.type).category] || CATEGORY_STYLE.lineage;
      const dimmed = focus && !state.focusMode && !(neighbors.has(e.source) && neighbors.has(e.target));
      const hidden = focus && state.focusMode && !(neighbors.has(e.source) && neighbors.has(e.target));

      const d = overlayPath(a, b, e.c1, e.c2);
      const vis = svgEl("path", {
        d: d,
        class: "edge-line cat-" + relType(e.type).category +
               (e.prominence === "secondary" ? " is-secondary" : "") +
               (dimmed ? " is-dim" : "") + (hidden ? " is-hidden" : ""),
      });
      vis.style.stroke = sty.stroke;
      if (sty.dash !== "none") vis.setAttribute("stroke-dasharray", sty.dash);
      svg.appendChild(vis);

      const hit = svgEl("path", { d: d, class: "edge-hit" + (hidden ? " is-hidden" : "") });
      svg.appendChild(hit);

      attachLineEvents(hit, { kind: "edge", edge: e, a: a, b: b });
    });

    // ── Nodes ──
    data.nodes.forEach((n) => {
      if (!nodeVisible(n)) return;
      const el = buildNode(n);
      const isFocus = focus === n.id;
      const dimmed = focus && !state.focusMode && !neighbors.has(n.id);
      const hidden = focus && state.focusMode && !neighbors.has(n.id);
      if (isFocus) el.classList.add("is-focused");
      else if (dimmed) el.classList.add("is-dim");
      else if (hidden) el.classList.add("is-hidden");
      el.addEventListener("click", () => onNodeClick(n));
      el.addEventListener("keydown", (ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); onNodeClick(n); } });
      nodesLayer.appendChild(el);
    });

    applyTransform();
  }

  /* ── Line interaction (tooltip + click) ─────────────────────────── */
  function attachLineEvents(hit, payload) {
    hit.addEventListener("mouseenter", (ev) => showLineTooltip(ev, payload));
    hit.addEventListener("mousemove", (ev) => moveTooltip(ev));
    hit.addEventListener("mouseleave", hideTooltip);
    hit.addEventListener("click", () => onLineClick(payload));
  }

  /* Resolve the real theological edge a branch represents, so the tooltip
     reports the stored source→target direction (never the visual parent→child). */
  function matchingEdgeForBranch(b) {
    return data.edges.find((e) =>
      ((e.source === b.parent && e.target === b.child) ||
       (e.source === b.child && e.target === b.parent)) &&
      (!b.type || e.type === b.type));
  }

  function showLineTooltip(ev, payload) {
    let label, dir;
    if (payload.kind === "edge") {
      const e = payload.edge;
      label = relType(e.type).label.toUpperCase();
      dir = payload.a.title + " → " + payload.b.title;
    } else {
      const b = payload.branch;
      const me = matchingEdgeForBranch(b);
      if (me) {
        label = relType(me.type).label.toUpperCase();
        dir = nodeById[me.source].title + " → " + nodeById[me.target].title;
      } else {
        label = "HISTORICAL DEVELOPMENT";
        dir = payload.a.title + " → " + payload.c.title;
      }
    }
    tooltip.innerHTML =
      '<span class="tt-type">' + esc(label) + "</span>" +
      '<span class="tt-dir">' + esc(dir) + "</span>";
    tooltip.classList.add("is-visible");
    moveTooltip(ev);
  }

  function moveTooltip(ev) {
    const r = scrollEl.getBoundingClientRect();
    tooltip.style.left = (ev.clientX - r.left + scrollEl.scrollLeft + 18) + "px";
    tooltip.style.top = (ev.clientY - r.top + scrollEl.scrollTop - 6) + "px";
  }

  function hideTooltip() {
    tooltip.classList.remove("is-visible");
  }

  /* ── Side panel ─────────────────────────────────────────────────── */
  function openPanel(html) {
    sidePanel.innerHTML = html;
    sidePanel.classList.add("is-open");
  }

  function closePanel() {
    sidePanel.classList.remove("is-open");
    sidePanel.innerHTML = "";
  }

  function onNodeClick(n) {
    state.focusNode = n.id;
    render();
    const t = trad(n);
    const rels = data.edges
      .filter((e) => e.source === n.id || e.target === n.id)
      .map((e) => {
        const other = e.source === n.id ? e.target : e.source;
        const o = nodeById[other];
        const arrow = e.source === n.id ? "→" : "←";
        return '<li class="rel" data-edge="' +
          data.edges.indexOf(e) + '">' +
          '<span class="rel-type">' + esc(relType(e.type).label) + "</span>" +
          '<span class="rel-dir">' + arrow + " " + esc(o ? o.title : other) + "</span>" +
          "</li>";
      }).join("");
    var exploreItems = "";
    if (n.figureId) {
      exploreItems +=
        '<li><a href="figures/profile.html?id=' +
        encodeURIComponent(n.figureId) +
        '">Open full profile</a></li>';
      exploreItems +=
        '<li><a href="figures.html?id=' +
        encodeURIComponent(n.figureId) +
        '">View in figures directory</a></li>';
    }
    if (n.controversyId) {
      var contUrl =
        "magisterium-controversy.html?id=" +
        encodeURIComponent(n.controversyId);
      if (n.controversyCentury) {
        contUrl +=
          "&century=" + encodeURIComponent(n.controversyCentury);
      }
      exploreItems +=
        '<li><a href="' + contUrl + '">Read controversy essay</a></li>';
    }
    if (n.type === "concept") {
      exploreItems +=
        '<li><a href="concept.html?id=' +
        encodeURIComponent(n.id) +
        '">Read full concept</a></li>';
    }
    if (!exploreItems) {
      exploreItems =
        '<li><span class="sp-muted">No linked profile or controversy essay yet.</span></li>';
    }
    openPanel(
      '<div class="sp-head">' +
        '<span class="sp-kicker">' + esc(nodeTypeLabel(n.type)) + "</span>" +
        '<h3 class="sp-title">' + esc(n.title) + "</h3>" +
        (n.dates ? '<span class="sp-dates">' + esc(n.dates) + "</span>" : "") +
      "</div>" +
      (n.summary ? '<p class="sp-summary">' + esc(n.summary) + "</p>" : "") +
      (rels ? '<div class="sp-section"><span class="sp-label">Relationships</span><ul class="sp-rels">' + rels + "</ul></div>" : "") +
      '<div class="sp-section"><span class="sp-label">Explore</span>' +
        '<ul class="sp-explore">' + exploreItems + "</ul></div>" +
      '<button class="sp-close" aria-label="Close panel">Close</button>'
    );
    sidePanel.querySelector(".sp-close").addEventListener("click", () => { clearFocus(); closePanel(); });
    sidePanel.querySelectorAll(".rel").forEach((li) => {
      li.addEventListener("click", () => {
        const idx = parseInt(li.dataset.edge, 10);
        const e = data.edges[idx];
        if (e) onLineClick({ kind: "edge", edge: e, a: nodeById[e.source], b: nodeById[e.target] });
      });
    });
  }

  function onLineClick(payload) {
    if (payload.kind === "edge") {
      const e = payload.edge;
      openPanel(
        '<div class="sp-head">' +
          '<span class="sp-kicker">Relationship</span>' +
          '<h3 class="sp-title">' + esc(relType(e.type).label) + "</h3>" +
        "</div>" +
        '<p class="sp-dir">' + esc(payload.a.title) + " → " + esc(payload.b.title) + "</p>" +
        '<p class="sp-summary">' + esc(relType(e.type).label) +
          " — a " + esc(relType(e.type).category) + " relationship in the theological record.</p>" +
        '<button class="sp-close" aria-label="Close panel">Close</button>'
      );
    } else {
      const b = payload.branch;
      const me = matchingEdgeForBranch(b);
      const label = me ? relType(me.type).label : "Historical Development";
      const dir = me
        ? nodeById[me.source].title + " → " + nodeById[me.target].title
        : payload.a.title + " → " + payload.c.title;
      openPanel(
        '<div class="sp-head">' +
          '<span class="sp-kicker">' + (me ? "Relationship" : "Structural link") + "</span>" +
          '<h3 class="sp-title">' + esc(label) + "</h3>" +
        "</div>" +
        '<p class="sp-dir">' + esc(dir) + "</p>" +
        '<p class="sp-summary">' + esc(payload.a.title) + " develops toward " + esc(payload.c.title) + " within the genealogy of ideas.</p>" +
        '<button class="sp-close" aria-label="Close panel">Close</button>'
      );
    }
    sidePanel.querySelector(".sp-close").addEventListener("click", closePanel);
  }

  function clearFocus() {
    state.focusNode = null;
    render();
  }

  /* ── Pan & zoom disabled (static tree view) ──────────────────────── */
  // Drag-to-pan and wheel-zoom removed per design: the tree stays fixed.
  // fitView() still centers content once on load / detail change.

  /* ── Controls ───────────────────────────────────────────────────── */
  function setDetail(level) {
    state.detail = level;
    // Detailed reveals secondary / long-range relationships automatically
    if (level >= 3 && !state.filters.secondary) {
      state.filters.secondary = true;
      syncFilterUI();
    }
    document.querySelectorAll(".zoom-btn").forEach((b) => {
      b.classList.toggle("is-active", parseInt(b.dataset.level, 10) === level);
    });
    render();
    fitView();
  }

  document.querySelectorAll(".zoom-btn").forEach((b) => {
    b.addEventListener("click", () => setDetail(parseInt(b.dataset.level, 10)));
  });

  document.querySelectorAll(".category-btn").forEach((b) => {
    b.addEventListener("click", () => applyCategory(b.dataset.category));
  });

  const focusBtn = document.getElementById("focus-toggle");
  focusBtn.addEventListener("click", () => {
    state.focusMode = !state.focusMode;
    focusBtn.classList.toggle("is-active", state.focusMode);
    focusBtn.textContent = state.focusMode ? "Focus Mode: Strong" : "Focus Mode";
    if (state.focusNode) render();
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    state.focusNode = null; state.focusMode = false;
    focusBtn.classList.remove("is-active");
    focusBtn.textContent = "Focus Mode";
    state.filters = { development: true, opposition: true, controversy: true,
                      influence: true, secondary: false };
    syncFilterUI();
    setDetail(1);
    closePanel();
  });

  function syncFilterUI() {
    document.querySelectorAll(".filter-chk").forEach((c) => {
      c.checked = !!state.filters[c.dataset.group];
    });
  }
  document.querySelectorAll(".filter-chk").forEach((c) => {
    c.addEventListener("change", () => {
      state.filters[c.dataset.group] = c.checked;
      render();
    });
  });

  /* ── Init ───────────────────────────────────────────────────────── */
  syncCategoryButtons();
  setDetail(1);
  syncFilterUI();
  render();
  fitView();
})();
