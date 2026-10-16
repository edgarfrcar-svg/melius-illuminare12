/**
 * Interactive Rosary — sequential prayer, progress, EN/LA, mystery toggle.
 */
(function () {
  "use strict";

  var MYSTERIES = {
    joyful: {
      label: "Joyful Mysteries",
      day: "Monday & Saturday",
      decades: [
        { name: "The Annunciation", fruit: "Humility", med: "The angel Gabriel announces to Mary that she will conceive the Son of God. With her fiat, the Word becomes flesh." },
        { name: "The Visitation", fruit: "Love of neighbor", med: "Mary visits Elizabeth. The unborn John leaps for joy; Mary proclaims the Magnificat." },
        { name: "The Nativity", fruit: "Poverty of spirit", med: "Jesus is born in Bethlehem and laid in a manger. Angels announce peace to the shepherds." },
        { name: "The Presentation", fruit: "Obedience", med: "Mary and Joseph present Jesus in the Temple. Simeon and Anna recognize the Messiah." },
        { name: "The Finding in the Temple", fruit: "Joy in finding Jesus", med: "After three days Mary and Joseph find the boy Jesus among the teachers, about His Father’s business." },
      ],
    },
    sorrowful: {
      label: "Sorrowful Mysteries",
      day: "Tuesday & Friday",
      decades: [
        { name: "The Agony in the Garden", fruit: "Contrition", med: "Jesus prays in Gethsemane: “Not my will, but yours be done.” His sweat becomes like blood." },
        { name: "The Scourging at the Pillar", fruit: "Purity", med: "Pilate has Jesus scourged. By His wounds we are healed." },
        { name: "The Crowning with Thorns", fruit: "Moral courage", med: "Soldiers crown Him with thorns and mock Him as king. He reigns from the Cross." },
        { name: "The Carrying of the Cross", fruit: "Patience", med: "Jesus carries the Cross to Calvary. Simon of Cyrene helps Him; the women of Jerusalem weep." },
        { name: "The Crucifixion", fruit: "Perseverance", med: "Jesus is crucified. He forgives, entrusts Mary to John, and hands over His spirit." },
      ],
    },
    glorious: {
      label: "Glorious Mysteries",
      day: "Wednesday & Sunday",
      decades: [
        { name: "The Resurrection", fruit: "Faith", med: "On the third day Jesus rises from the dead. “He is not here; He has risen.”" },
        { name: "The Ascension", fruit: "Hope", med: "Jesus ascends into heaven and sits at the right hand of the Father. He goes to prepare a place for us." },
        { name: "The Descent of the Holy Spirit", fruit: "Love of God", med: "At Pentecost the Spirit descends on Mary and the apostles. The Church is sent to all nations." },
        { name: "The Assumption", fruit: "Grace of a happy death", med: "Mary is assumed body and soul into heavenly glory." },
        { name: "The Coronation of Mary", fruit: "Trust in Mary’s intercession", med: "Mary is crowned Queen of Heaven and Earth. She intercedes for her children." },
      ],
    },
    luminous: {
      label: "Luminous Mysteries",
      day: "Thursday",
      decades: [
        { name: "The Baptism in the Jordan", fruit: "Openness to the Holy Spirit", med: "Jesus is baptized by John. The Spirit descends; the Father’s voice: “This is my beloved Son.”" },
        { name: "The Wedding at Cana", fruit: "To Jesus through Mary", med: "At Mary’s request Jesus turns water into wine. “Do whatever He tells you.”" },
        { name: "The Proclamation of the Kingdom", fruit: "Repentance and trust", med: "Jesus preaches the Kingdom, calls to conversion, and forgives sins." },
        { name: "The Transfiguration", fruit: "Desire for holiness", med: "On the mountain Jesus is transfigured. Moses and Elijah appear; the disciples hear the Father’s voice." },
        { name: "The Institution of the Eucharist", fruit: "Adoration", med: "At the Last Supper Jesus gives His Body and Blood. “Do this in memory of me.”" },
      ],
    },
  };

  var PRAYERS = {
    en: {
      creed: {
        title: "Apostles’ Creed",
        text: "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
      },
      ourfather: {
        title: "Our Father",
        text: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
      },
      hailmary: {
        title: "Hail Mary",
        text: "Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
      },
      glory: {
        title: "Glory Be",
        text: "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.",
      },
      fatima: {
        title: "Fatima Prayer",
        text: "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those most in need of thy mercy.",
      },
      hailholy: {
        title: "Hail, Holy Queen",
        text: "Hail, Holy Queen, Mother of Mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ.",
      },
    },
    la: {
      creed: {
        title: "Symbolum Apostolorum",
        text: "Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae. Et in Iesum Christum, Filium eius unicum, Dominum nostrum, qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus, et sepultus, descendit ad inferos, tertia die resurrexit a mortuis, ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis, inde venturus est iudicare vivos et mortuos. Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam. Amen.",
      },
      ourfather: {
        title: "Pater Noster",
        text: "Pater noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra. Panem nostrum cotidianum da nobis hodie. Et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. Amen.",
      },
      hailmary: {
        title: "Ave Maria",
        text: "Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.",
      },
      glory: {
        title: "Gloria Patri",
        text: "Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen.",
      },
      fatima: {
        title: "Oratio Fatimae",
        text: "O mi Iesu, dimitte nobis debita nostra, libera nos ab igne inferni, conduc in caelum omnes animas, praesertim illas quae maxime indigent misericordia tua.",
      },
      hailholy: {
        title: "Salve Regina",
        text: "Salve, Regina, mater misericordiae; vita, dulcedo et spes nostra, salve. Ad te clamamus, exsules filii Hevae. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. Eia ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, o pia, o dulcis Virgo Maria. Ora pro nobis, sancta Dei Genetrix, ut digni efficiamur promissionibus Christi.",
      },
    },
  };

  var state = {
    mystery: "joyful",
    lang: "en",
    step: 0,
    completed: {},
    sequence: [],
  };

  function esc(s) {
    return String(s || "").replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function dayDefaultMystery() {
    var d = new Date().getDay(); // 0 Sun .. 6 Sat
    if (d === 1 || d === 6) return "joyful";
    if (d === 2 || d === 5) return "sorrowful";
    if (d === 4) return "luminous";
    return "glorious"; // Wed, Sun
  }

  function P() {
    return PRAYERS[state.lang] || PRAYERS.en;
  }


  function indexOfKind(kind) {
    var seq = state.sequence || [];
    for (var i = 0; i < seq.length; i++) {
      if (seq[i].kind === kind) return i;
    }
    return 0;
  }

  function startAtFirstOurFather() {
    state.sequence = buildSequence();
    // Fixed order: [0] crucifix [1] opening Our Father [2..4] three Aves ...
    // Always open on the first Pater Noster (pendant), never of-0/of-1/of-2.
    var idx = indexOfKind("of-intro");
    state.step = idx === 0 && state.sequence[0] && state.sequence[0].kind !== "of-intro" ? 1 : idx;
    if (!state.sequence[state.step] || state.sequence[state.step].kind !== "of-intro") {
      state.step = 1; // hard fallback matching buildSequence
    }
  }

  function buildSequence() {
    var seq = [];
    seq.push({ id: "crucifix", kind: "crucifix" });
    seq.push({ id: "of-intro", kind: "of-intro" });
    seq.push({ id: "hm-i0", kind: "hm-intro", hi: 0 });
    seq.push({ id: "hm-i1", kind: "hm-intro", hi: 1 });
    seq.push({ id: "hm-i2", kind: "hm-intro", hi: 2 });
    seq.push({ id: "glory-intro", kind: "glory-intro" });
    seq.push({ id: "medal", kind: "medal-announce" }); // announce first mystery at center
    for (var d = 0; d < 5; d++) {
      seq.push({ id: "of-" + d, kind: "of", di: d });
      for (var h = 0; h < 10; h++) {
        seq.push({ id: "hm-" + d + "-" + h, kind: "hm", di: d, hi: h });
      }
      seq.push({ id: "glory-" + d, kind: "glory", di: d });
    }
    seq.push({ id: "medal-end", kind: "medal", visualId: "medal" });
    return seq;
  }

  function decadeInfo(di) {
    var m = MYSTERIES[state.mystery];
    return m.decades[di] || { name: "", fruit: "", med: "" };
  }

  function infoForStep(stepObj) {
    var pr = P();
    var b = stepObj;
    if (b.kind === "crucifix")
      return {
        prayer: pr.creed,
        note: state.lang === "la" ? "Signum Crucis, deinde Symbolum Apostolorum." : "Begin with the Sign of the Cross, then the Apostles’ Creed.",
      };
    if (b.kind === "of-intro")
      return { prayer: pr.ourfather, note: state.lang === "la" ? "Pater Noster — initium (post Crucem)." : "First Our Father — on the pendant, after the Cross." };
    if (b.kind === "hm-intro") {
      var intent = (state.lang === "la" ? ["Fidem", "Spem", "Caritatem"] : ["Faith", "Hope", "Charity"])[b.hi];
      return {
        prayer: pr.hailmary,
        note: (state.lang === "la" ? "Ave Maria (" : "Hail Mary (") + (b.hi + 1) + "/3) — " + intent + ".",
      };
    }
    if (b.kind === "glory-intro")
      return { prayer: pr.glory, note: state.lang === "la" ? "Gloria Patri." : "Glory Be." };
    if (b.kind === "medal-announce") {
      var d0 = decadeInfo(0);
      return {
        prayer: { title: d0.name, text: d0.med },
        note: (state.lang === "la" ? "Primum mysterium · Fructus: " : "First mystery · Fruit: ") + d0.fruit,
        isMystery: true,
      };
    }
    if (b.kind === "of") {
      var di = decadeInfo(b.di);
      return {
        prayer: pr.ourfather,
        note: "Decade " + (b.di + 1) + " · " + di.name + (state.lang === "la" ? " — Pater Noster" : " — Our Father"),
        mystery: di,
      };
    }
    if (b.kind === "hm") {
      var dh = decadeInfo(b.di);
      return {
        prayer: pr.hailmary,
        note: "Decade " + (b.di + 1) + " · " + dh.name + " — " + (state.lang === "la" ? "Ave " : "Hail Mary ") + (b.hi + 1) + "/10",
        mystery: dh,
      };
    }
    if (b.kind === "glory") {
      return {
        prayer: pr.glory,
        note: (state.lang === "la" ? "Finis decadis " : "End of decade ") + (b.di + 1),
        extra: pr.fatima,
      };
    }
    if (b.kind === "medal")
      return { prayer: pr.hailholy, note: state.lang === "la" ? "Salve Regina — conclusio." : "Hail, Holy Queen — conclusion." };
    return { prayer: pr.hailmary, note: "" };
  }

  function visualId(stepObj) {
    return stepObj.visualId || stepObj.id;
  }

  function buildBeadLayout() {
    var beads = [];
    var CX = 200, CY = 188, RX = 142, RY = 122;

    beads.push({ id: "crucifix", kind: "crucifix", cx: 200, cy: 500, shape: "cross" });
    beads.push({ id: "of-intro", kind: "of-intro", cx: 200, cy: 456, r: 10, large: true });
    beads.push({ id: "hm-i0", kind: "hm-intro", hi: 0, cx: 200, cy: 428, r: 6.5 });
    beads.push({ id: "hm-i1", kind: "hm-intro", hi: 1, cx: 200, cy: 408, r: 6.5 });
    beads.push({ id: "hm-i2", kind: "hm-intro", hi: 2, cx: 200, cy: 388, r: 6.5 });
    beads.push({ id: "glory-intro", kind: "glory-intro", cx: 200, cy: 362, r: 8, large: true });
    beads.push({ id: "medal", kind: "medal", cx: 200, cy: 332, r: 12, large: true });

    // Five decades starting at the BOTTOM (nearest the medal / pendant join).
    // Each sector: Our Father → 10 Hail Marys → Glory Be, clockwise.
    // Previous layout put of-0 at the top, so the bead by the medal looked like the 3rd Pater.
    for (var d = 0; d < 5; d++) {
      var start = Math.PI / 2 + (d * 2 * Math.PI) / 5;
      var span = (2 * Math.PI) / 5;
      for (var i = 0; i < 12; i++) {
        var a = start + ((i + 0.15) / 12) * span;
        var cx = CX + Math.cos(a) * RX;
        var cy = CY + Math.sin(a) * RY;
        if (i === 0) {
          beads.push({ id: "of-" + d, kind: "of", di: d, cx: cx, cy: cy, r: 9.5, large: true });
        } else if (i === 11) {
          beads.push({ id: "glory-" + d, kind: "glory", di: d, cx: cx, cy: cy, r: 7.5, large: true });
        } else {
          beads.push({ id: "hm-" + d + "-" + (i - 1), kind: "hm", di: d, hi: i - 1, cx: cx, cy: cy, r: 5.6 });
        }
      }
    }
    return beads;
  }

  function chainSegments(beads) {
    var byId = {};
    beads.forEach(function (b) { byId[b.id] = b; });
    var pairs = [];
    // pendant
    var pendant = ["crucifix", "of-intro", "hm-i0", "hm-i1", "hm-i2", "glory-intro", "medal"];
    for (var i = 0; i < pendant.length - 1; i++) {
      pairs.push([pendant[i], pendant[i + 1]]);
    }
    // decades in sequence order around the oval
    var loop = [];
    for (var d = 0; d < 5; d++) {
      loop.push("of-" + d);
      for (var h = 0; h < 10; h++) loop.push("hm-" + d + "-" + h);
      loop.push("glory-" + d);
    }
    for (var j = 0; j < loop.length - 1; j++) pairs.push([loop[j], loop[j + 1]]);
    pairs.push([loop[loop.length - 1], loop[0]]);
    // connect medal into loop at first OF
    pairs.push(["medal", "of-0"]);
    return pairs
      .map(function (p) {
        var a = byId[p[0]], b = byId[p[1]];
        if (!a || !b) return "";
        var ax = a.cx, ay = a.cy, bx = b.cx, by = b.cy;
        return '<line class="rosary-chain" x1="' + ax + '" y1="' + ay + '" x2="' + bx + '" y2="' + by + '"/>';
      })
      .join("");
  }

  function renderPanel() {
    var panel = document.getElementById("rosary-panel");
    if (!panel) return;
    var seq = state.sequence;
    if (!seq.length) return;
    var step = Math.max(0, Math.min(state.step, seq.length - 1));
    var info = infoForStep(seq[step]);
    var pct = Math.round(((step + 1) / seq.length) * 100);

    var html =
      '<div class="rosary-progress"><div class="rosary-progress-bar" style="width:' +
      pct +
      '%"></div></div>' +
      '<p class="rosary-step-count">Step ' +
      (step + 1) +
      " of " +
      seq.length +
      "</p>";

    if (info.mystery) {
      html +=
        '<p class="rosary-mystery-tag">' +
        esc(info.mystery.name) +
        (info.mystery.fruit ? " · " + esc(info.mystery.fruit) : "") +
        "</p>";
    }

    html +=
      "<h3>" +
      esc(info.prayer.title) +
      "</h3>" +
      (info.note ? '<p class="rosary-panel-note">' + esc(info.note) + "</p>" : "") +
      '<p class="rosary-panel-text' +
      (info.isMystery ? " is-meditation" : "") +
      '">' +
      esc(info.prayer.text) +
      "</p>";

    if (info.extra) {
      html +=
        "<h4>" +
        esc(info.extra.title) +
        '</h4><p class="rosary-panel-text">' +
        esc(info.extra.text) +
        "</p>";
    }

    html +=
      '<div class="rosary-nav">' +
      '<button type="button" class="rosary-nav-btn" id="rosary-prev"' +
      (step === 0 ? " disabled" : "") +
      ">‹ Prev</button>" +
      '<button type="button" class="rosary-nav-btn rosary-nav-primary" id="rosary-next">' +
      (step >= seq.length - 1 ? "Finish" : "Next ›") +
      "</button>" +
      "</div>";

    panel.innerHTML = html;

    var prev = document.getElementById("rosary-prev");
    var next = document.getElementById("rosary-next");
    if (prev)
      prev.onclick = function () {
        goStep(state.step - 1);
      };
    if (next)
      next.onclick = function () {
        if (state.step >= seq.length - 1) {
          state.completed = {};
          startAtFirstOurFather();
          updateBeadClasses();
          renderPanel();
        } else goStep(state.step + 1);
      };
  }

  function updateBeadClasses() {
    var host = document.getElementById("rosary-interactive");
    if (!host) return;
    var seq = state.sequence;
    var cur = seq[state.step];
    var curId = cur ? visualId(cur) : "";
    host.querySelectorAll(".rosary-bead").forEach(function (el) {
      var id = el.getAttribute("data-id");
      el.classList.remove("is-lit", "is-selected", "is-done");
      if (state.completed[id]) el.classList.add("is-done");
      if (id === curId) el.classList.add("is-lit", "is-selected");
    });
  }

  function goStep(n) {
    var seq = state.sequence;
    if (n < 0 || n >= seq.length) return;
    if (n === state.step) {
      updateBeadClasses();
      renderPanel();
      return;
    }
    // Mark previous as done only when advancing
    if (n > state.step && state.step >= 0 && state.step < seq.length) {
      state.completed[visualId(seq[state.step])] = true;
    }
    state.step = n;
    updateBeadClasses();
    renderPanel();
  }

  function selectById(id) {
    var seq = state.sequence;
    for (var i = 0; i < seq.length; i++) {
      if (seq[i].id === id) {
        goStep(i);
        return;
      }
    }
    for (var j = 0; j < seq.length; j++) {
      if (visualId(seq[j]) === id) {
        goStep(j);
        return;
      }
    }
  }

  function setMystery(key) {
    if (!MYSTERIES[key]) return;
    state.mystery = key;
    state.completed = {};
    startAtFirstOurFather();
    document.querySelectorAll(".rosary-mystery-btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-mystery") === key);
    });
    var m = MYSTERIES[key];
    var label = document.getElementById("rosary-mystery-label");
    if (label) label.textContent = m.label + " · " + m.day;
    var list = document.getElementById("rosary-decade-list");
    if (list) {
      list.innerHTML = m.decades
        .map(function (dec, i) {
          return (
            "<li><span>" +
            (i + 1) +
            "</span> " +
            esc(dec.name) +
            (dec.fruit ? ' <em class="rosary-fruit">(' + esc(dec.fruit) + ")</em>" : "") +
            "</li>"
          );
        })
        .join("");
    }
    updateBeadClasses();
    renderPanel();
  }

  function mount() {
    var host = document.getElementById("rosary-interactive");
    if (!host) return;

    state.mystery = dayDefaultMystery();
    state.completed = {};
    startAtFirstOurFather();

    var beads = buildBeadLayout();

    var html =
      '<div class="rosary-app">' +
      '<header class="rosary-header">' +
      "<h3 class=\"rosary-heading\">The Holy Rosary</h3>" +
      '<p class="rosary-subhead" id="rosary-mystery-label"></p>' +
      '<div class="rosary-toolbar">' +
      '<div class="rosary-lang-btns" role="group" aria-label="Language">' +
      '<button type="button" class="rosary-lang-btn is-active" data-lang="en">English</button>' +
      '<button type="button" class="rosary-lang-btn" data-lang="la">Latina</button>' +
      "</div>" +
      '<div class="rosary-mystery-btns" role="group" aria-label="Mysteries">';

    Object.keys(MYSTERIES).forEach(function (key) {
      html +=
        '<button type="button" class="rosary-mystery-btn' +
        (key === state.mystery ? " is-active" : "") +
        '" data-mystery="' +
        key +
        '">' +
        esc(MYSTERIES[key].label.replace(" Mysteries", "")) +
        "</button>";
    });

    html +=
      "</div></div>" +
      '<ol class="rosary-decade-list" id="rosary-decade-list"></ol>' +
      "</header>" +
      '<div class="rosary-stage">' +
      '<div class="rosary-svg-wrap">' +
      '<svg class="rosary-svg" viewBox="0 0 400 520" aria-label="Interactive Rosary">' +
      "<defs>" +
      '<radialGradient id="beadGold" cx="32%" cy="28%" r="70%">' +
      '<stop offset="0%" stop-color="#fff6d0"/>' +
      '<stop offset="45%" stop-color="#e8c84a"/>' +
      '<stop offset="100%" stop-color="#7a6518"/>' +
      "</radialGradient>" +
      '<radialGradient id="beadIdle" cx="32%" cy="28%" r="70%">' +
      '<stop offset="0%" stop-color="#8a8274"/>' +
      '<stop offset="100%" stop-color="#3a352c"/>' +
      "</radialGradient>" +
      '<radialGradient id="beadDone" cx="32%" cy="28%" r="70%">' +
      '<stop offset="0%" stop-color="#c4b07a"/>' +
      '<stop offset="100%" stop-color="#5a4e28"/>' +
      "</radialGradient>" +
      '<filter id="glow" x="-50%" y="-50%" width="200%" height="200%">' +
      '<feGaussianBlur stdDeviation="2.2" result="b"/>' +
      '<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>' +
      "</filter>" +
      "</defs>" +
      chainSegments(beads);

    beads.forEach(function (b) {
      if (b.shape === "cross") {
        html +=
          '<g class="rosary-bead rosary-cross" data-id="' +
          b.id +
          '" tabindex="0">' +
          '<rect x="' + (b.cx - 3.5) + '" y="' + (b.cy - 18) + '" width="7" height="32" rx="1.5"/>' +
          '<rect x="' + (b.cx - 11) + '" y="' + (b.cy - 7) + '" width="22" height="7" rx="1.5"/>' +
          "</g>";
      } else {
        html +=
          '<circle class="rosary-bead' +
          (b.large ? " is-large" : "") +
          '" data-id="' +
          b.id +
          '" cx="' +
          b.cx +
          '" cy="' +
          b.cy +
          '" r="' +
          b.r +
          '" tabindex="0"/>';
      }
    });

    html +=
      "</svg>" +
      '<p class="rosary-hint">Click any bead, or use Next to pray in order</p>' +
      "</div>" +
      '<aside class="rosary-panel" id="rosary-panel"></aside>' +
      "</div></div>";

    host.innerHTML = html;

    host.querySelectorAll(".rosary-bead").forEach(function (el) {
      var id = el.getAttribute("data-id");
      el.addEventListener("mouseenter", function () {
        if (!el.classList.contains("is-selected")) el.classList.add("is-lit");
      });
      el.addEventListener("mouseleave", function () {
        if (!el.classList.contains("is-selected")) el.classList.remove("is-lit");
      });
      el.addEventListener("click", function () {
        selectById(id);
      });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectById(id);
        }
      });
    });

    host.querySelectorAll(".rosary-mystery-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setMystery(btn.getAttribute("data-mystery"));
      });
    });

    host.querySelectorAll(".rosary-lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.lang = btn.getAttribute("data-lang") || "en";
        host.querySelectorAll(".rosary-lang-btn").forEach(function (b) {
          b.classList.toggle("is-active", b.getAttribute("data-lang") === state.lang);
        });
        renderPanel();
      });
    });

    // Keyboard: arrow keys
    host.tabIndex = 0;
    host.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goStep(Math.min(state.step + 1, state.sequence.length - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goStep(Math.max(state.step - 1, 0));
      }
    });

    setMystery(state.mystery);
  }

  function maybeMount() {
    if (new URLSearchParams(window.location.search).get("id") !== "rosary") return;
    var root = document.getElementById("prayer-topic-root");
    if (!root) return;
    setTimeout(function () {
      if (!document.getElementById("rosary-interactive")) {
        var section = document.createElement("section");
        section.className = "exhibit-section rosary-interactive-section";
        section.innerHTML =
          '<span class="section-kicker">How to pray</span>' +
          "<h2>Interactive Rosary</h2>" +
          '<p class="exhibit-section-intro">Pray step by step with Next, or click any bead. Switch mysteries and English / Latin as you go.</p>' +
          '<div id="rosary-interactive"></div>';
        var essay = root.querySelector(".exhibit-section");
        if (essay && essay.parentNode) {
          if (essay.nextSibling) root.insertBefore(section, essay.nextSibling);
          else root.appendChild(section);
        } else root.appendChild(section);
      }
      mount();
    }, 40);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", maybeMount);
  } else maybeMount();
})();
