/**
 * Prayer — index cards + click-through essays.
 */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function formatPractice(text) {
    // Turn "(1) ... (2) ..." into a step list when present
    var m = text.match(/\(\d+\)/);
    if (!m) return "<p>" + esc(text) + "</p>";
    var parts = text.split(/(?=\(\d+\))/);
    var intro = "";
    var steps = [];
    parts.forEach(function (part) {
      part = part.trim();
      if (!part) return;
      var sm = part.match(/^\((\d+)\)\s*([\s\S]*)$/);
      if (sm) steps.push({ n: sm[1], body: sm[2].trim() });
      else intro += part + " ";
    });
    var html = "";
    if (intro.trim()) html += "<p>" + esc(intro.trim()) + "</p>";
    if (steps.length) {
      html += '<ol class="prayer-steps">';
      steps.forEach(function (s) {
        html +=
          "<li><span class=\"prayer-step-num\">" +
          esc(s.n) +
          "</span><span class=\"prayer-step-body\">" +
          esc(s.body) +
          "</span></li>";
      });
      html += "</ol>";
    }
    return html || "<p>" + esc(text) + "</p>";
  }

  function paras(arr) {
    var labels = ["", "How to practice", "Example", "Counsel"];
    return (arr || [])
      .map(function (p, i) {
        var label = labels[i] || "";
        var head = label
          ? '<p class="prayer-guide-label">' + esc(label) + "</p>"
          : "";
        if (i === 1) return head + formatPractice(p);
        if (i === 2)
          return (
            head +
            '<blockquote class="prayer-example">' +
            esc(p) +
            "</blockquote>"
          );
        return head + "<p>" + esc(p) + "</p>";
      })
      .join("");
  }

  function getTopic(id) {
    var data = window.PRAYER_SECTION;
    if (!data || !data.topics) return null;
    for (var i = 0; i < data.topics.length; i++) {
      if (data.topics[i].id === id) return data.topics[i];
    }
    return null;
  }

  function topicsBySection(section) {
    return (window.PRAYER_SECTION.topics || []).filter(function (t) {
      return t.section === section;
    });
  }

  function renderIndex() {
    var data = window.PRAYER_SECTION;
    var root = document.getElementById("prayer-root");
    if (!data || !root) return;

    var html = "";
    html +=
      '<header class="exhibit-hero mass-hero prayer-hero">' +
      '<div class="exhibit-hero-inner mass-hero-inner">' +
      '<p class="exhibit-kicker">Christian life</p>' +
      "<h1>" +
      esc(data.title) +
      "</h1>" +
      (data.latin ? '<p class="exhibit-latin">' + esc(data.latin) + "</p>" : "") +
      '<p class="exhibit-definition">' +
      esc(data.definition) +
      "</p>" +
      "</div></header>";

    if (data.essay && data.essay.length) {
      html +=
        '<section class="exhibit-section prayer-intro-section">' +
        '<div class="exhibit-answer-body">' +
        paras(data.essay) +
        "</div></section>";
    }

    html +=
      '<nav class="prayer-jump" aria-label="Prayer sections">' +
      '<a href="#focus">Focus</a>' +
      '<a href="#expressions">Expressions</a>' +
      '<a href="#forms">Forms</a>' +
      '<a href="#devotions">Devotions</a>' +
      (data.videos && data.videos.length ? '<a href="#videos">Videos</a>' : "") +
      "</nav>";

    var order = ["focus", "expressions", "forms", "devotions"];
    var meta = data.sectionMeta || {};
    order.forEach(function (sec) {
      var items = topicsBySection(sec);
      if (!items.length) return;
      var m = meta[sec] || {};
      html +=
        '<section class="exhibit-section" id="' +
        sec +
        '">' +
        '<span class="section-kicker">' +
        esc(m.kicker || sec) +
        "</span>" +
        "<h2>" +
        esc(m.title || sec) +
        "</h2>" +
        (m.intro
          ? '<p class="exhibit-section-intro">' + esc(m.intro) + "</p>"
          : "") +
        '<div class="prayer-card-grid' +
        (sec === "focus" ? " prayer-focus-grid" : "") +
        '">';
      items.forEach(function (item) {
        html +=
          '<a class="prayer-card' +
          (item.featured ? " prayer-card-featured" : "") +
          '" href="prayer-topic.html?id=' +
          encodeURIComponent(item.id) +
          '">' +
          (item.featured
            ? '<span class="prayer-card-badge">Focus</span>'
            : "") +
          "<h3>" +
          esc(item.name) +
          "</h3>" +
          (item.latin
            ? '<p class="prayer-card-latin">' + esc(item.latin) + "</p>"
            : "") +
          '<p class="prayer-card-lead">' +
          esc(item.text) +
          "</p>" +
          '<span class="prayer-card-open">Open the guide →</span>' +
          "</a>";
      });
      html += "</div></section>";
    });

    if (data.videos && data.videos.length) {
      html +=
        '<section class="exhibit-section" id="videos">' +
        '<span class="section-kicker">Videos</span><h2>Videos</h2><ul class="mi-video-links">';
      data.videos.forEach(function (v) {
        html +=
          '<li><span class="mi-video-title">' +
          esc(v.title) +
          '</span><a href="' +
          esc(v.url) +
          '" target="_blank" rel="noopener">Watch on YouTube</a></li>';
      });
      html += "</ul></section>";
    }

    if (data.further && data.further.length) {
      html +=
        '<section class="exhibit-section"><span class="section-kicker">Continue</span><h2>Further reading</h2><ul class="mi-video-links">';
      data.further.forEach(function (f) {
        html +=
          '<li><a href="' + esc(f.href) + '">' + esc(f.label) + "</a></li>";
      });
      html += "</ul></section>";
    }

    root.innerHTML = html;
  }

  function renderTopic() {
    var root = document.getElementById("prayer-topic-root");
    if (!root) return;
    var id = new URLSearchParams(window.location.search).get("id") || "";
    var topic = getTopic(id);
    if (!topic) {
      root.innerHTML =
        '<p class="exhibit-footnote"><a href="prayer.html">← Prayer</a></p><p>Topic not found.</p>';
      return;
    }
    document.title = topic.name + " — Prayer — Melius Illuminare";
    var topics = window.PRAYER_SECTION.topics || [];
    var idx = topics.findIndex(function (t) {
      return t.id === topic.id;
    });
    var prev = idx > 0 ? topics[idx - 1] : null;
    var next = idx < topics.length - 1 ? topics[idx + 1] : null;

    var html =
      '<p class="exhibit-footnote"><a href="prayer.html">← All prayer topics</a></p>' +
      '<header class="exhibit-hero mass-hero">' +
      '<div class="exhibit-hero-inner mass-hero-inner">' +
      '<p class="exhibit-kicker">Prayer</p>' +
      "<h1>" +
      esc(topic.name) +
      "</h1>" +
      (topic.latin
        ? '<p class="exhibit-latin">' + esc(topic.latin) + "</p>"
        : "") +
      '<p class="exhibit-definition">' +
      esc(topic.text) +
      "</p>" +
      "</div></header>" +
      '<section class="exhibit-section prayer-guide-section">' +
      '<span class="section-kicker">Guide & examples</span>' +
      "<h2>Insight and practice</h2>" +
      '<div class="exhibit-answer-body">' +
      paras(topic.essay) +
      "</div></section>";
    if (topic.videos && topic.videos.length) {
      html +=
        '<section class="exhibit-section" id="topic-videos">' +
        '<span class="section-kicker">Videos</span><h2>Videos</h2><ul class="mi-video-links">';
      topic.videos.forEach(function (v) {
        html +=
          '<li><span class="mi-video-title">' +
          esc(v.title) +
          '</span><a href="' +
          esc(v.url) +
          '" target="_blank" rel="noopener">Watch on YouTube</a></li>';
      });
      html += "</ul></section>";
    }
    html +=
      '<nav class="mass-part-nav">';
    if (prev) {
      html +=
        '<a class="mass-part-nav-link" href="prayer-topic.html?id=' +
        encodeURIComponent(prev.id) +
        '">‹ ' +
        esc(prev.name) +
        "</a>";
    } else html += "<span></span>";
    if (next) {
      html +=
        '<a class="mass-part-nav-link" href="prayer-topic.html?id=' +
        encodeURIComponent(next.id) +
        '">' +
        esc(next.name) +
        " ›</a>";
    }
    html += "</nav>";
    root.innerHTML = html;
  }

  if (document.getElementById("prayer-root")) {
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", renderIndex);
    else renderIndex();
  }
  if (document.getElementById("prayer-topic-root")) {
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", renderTopic);
    else renderTopic();
  }
})();
