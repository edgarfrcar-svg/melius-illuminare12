/**
 * Dual liturgical calendar — Ordinary Form (Novus Ordo) & Traditional (1962).
 * Uses the visitor's local date/time; ticks live; rolls over at midnight.
 * For study and prayer — follow your parish ordo for Mass.
 */
(function (global) {
  "use strict";

  var RITE_KEY = "mi-litcal-rite"; // "ordinary" | "traditional"

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }
  function ymd(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function atLocal(y, m, d) {
    return new Date(y, m, d, 0, 0, 0, 0);
  }
  function addDays(d, n) {
    var x = new Date(d.getTime());
    x.setDate(x.getDate() + n);
    return x;
  }
  function sameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }
  function daysBetween(a, b) {
    var A = atLocal(a.getFullYear(), a.getMonth(), a.getDate());
    var B = atLocal(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.round((B - A) / 86400000);
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function cap(s) {
    return (s || "").charAt(0).toUpperCase() + (s || "").slice(1);
  }

  /** Gregorian Easter (local midnight). */
  function easterSunday(year) {
    var a = year % 19;
    var b = Math.floor(year / 100);
    var c = year % 100;
    var d = Math.floor(b / 4);
    var e = b % 4;
    var f = Math.floor((b + 8) / 25);
    var g = Math.floor((b - f + 1) / 3);
    var h = (19 * a + b - d - g + 15) % 30;
    var i = Math.floor(c / 4);
    var k = c % 4;
    var l = (32 + 2 * e + 2 * i - h - k) % 7;
    var m = Math.floor((a + 11 * h + 22 * l) / 451);
    var month = Math.floor((h + l - 7 * m + 114) / 31);
    var day = ((h + l - 7 * m + 114) % 31) + 1;
    return atLocal(year, month - 1, day);
  }

  function adventStart(year) {
    var start = atLocal(year, 10, 27);
    while (start.getDay() !== 0) start = addDays(start, 1);
    return start;
  }

  /** Last Sunday of October (1962 Christ the King). */
  function lastSundayOfOctober(year) {
    var d = atLocal(year, 9, 31);
    while (d.getDay() !== 0) d = addDays(d, -1);
    return d;
  }

  /** Ember Wednesday after a reference Sunday (approx traditional). */
  function emberWednesdayAfter(sunday) {
    return addDays(sunday, 3);
  }

  var COLORS = {
    violet: { hex: "#6b4c7a", label: "Violet" },
    white: { hex: "#e8e0d0", label: "White" },
    green: { hex: "#3d5c45", label: "Green" },
    red: { hex: "#8b2e2e", label: "Red" },
    rose: { hex: "#a66a7a", label: "Rose" },
    black: { hex: "#2a2420", label: "Black" },
    gold: { hex: "#c9a227", label: "Gold" },
  };

  // Shared major fixed observances (month 1-12)
  var FIXED_COMMON = [
    { m: 1, d: 1, no: "Mary, Mother of God", tr: "Circumcision of the Lord", rank: "solemnity", color: "white" },
    { m: 1, d: 6, no: "Epiphany of the Lord", tr: "Epiphany of the Lord", rank: "solemnity", color: "white" },
    { m: 1, d: 13, no: null, tr: "Baptism of the Lord", rank: "commemoration", color: "white" },
    { m: 1, d: 21, no: "St. Agnes", tr: "St. Agnes", rank: "memorial", color: "red" },
    { m: 1, d: 25, no: "Conversion of St. Paul", tr: "Conversion of St. Paul", rank: "feast", color: "white" },
    { m: 1, d: 28, no: "St. Thomas Aquinas", tr: "St. Peter Nolasco", rank: "memorial", color: "white" },
    { m: 2, d: 2, no: "Presentation of the Lord", tr: "Purification of the B.V.M. (Candlemas)", rank: "feast", color: "white" },
    { m: 2, d: 11, no: "Our Lady of Lourdes", tr: "Apparition of Our Lady of Lourdes", rank: "optional", color: "white" },
    { m: 2, d: 14, no: "Ss. Cyril and Methodius", tr: "St. Valentine", rank: "memorial", color: "white" },
    { m: 2, d: 22, no: "Chair of St. Peter", tr: "Chair of St. Peter at Antioch", rank: "feast", color: "white" },
    { m: 3, d: 7, no: "Ss. Perpetua and Felicity", tr: "St. Thomas Aquinas", rank: "memorial", color: "red" },
    { m: 3, d: 19, no: "St. Joseph", tr: "St. Joseph, Spouse of the B.V.M.", rank: "solemnity", color: "white" },
    { m: 3, d: 25, no: "Annunciation of the Lord", tr: "Annunciation of the B.V.M.", rank: "solemnity", color: "white" },
    { m: 4, d: 23, no: "St. George", tr: "St. George", rank: "optional", color: "red" },
    { m: 4, d: 25, no: "St. Mark", tr: "St. Mark the Evangelist", rank: "feast", color: "red" },
    { m: 4, d: 29, no: "St. Catherine of Siena", tr: "St. Peter of Verona", rank: "memorial", color: "white" },
    { m: 5, d: 1, no: "St. Joseph the Worker", tr: "St. Joseph the Worker", rank: "optional", color: "white" },
    { m: 5, d: 3, no: "Ss. Philip and James", tr: "Finding of the Holy Cross", rank: "feast", color: "red" },
    { m: 5, d: 13, no: "Our Lady of Fatima", tr: "St. Robert Bellarmine", rank: "optional", color: "white" },
    { m: 5, d: 14, no: "St. Matthias", tr: "St. Boniface", rank: "feast", color: "red" },
    { m: 5, d: 31, no: "Visitation of the B.V.M.", tr: "Queenship of Mary", rank: "feast", color: "white" },
    { m: 6, d: 11, no: "St. Barnabas", tr: "St. Barnabas", rank: "memorial", color: "red" },
    { m: 6, d: 13, no: "St. Anthony of Padua", tr: "St. Anthony of Padua", rank: "memorial", color: "white" },
    { m: 6, d: 24, no: "Nativity of St. John the Baptist", tr: "Nativity of St. John the Baptist", rank: "solemnity", color: "white" },
    { m: 6, d: 29, no: "Ss. Peter and Paul", tr: "Ss. Peter and Paul", rank: "solemnity", color: "red" },
    { m: 7, d: 1, no: null, tr: "Precious Blood of Our Lord", rank: "feast", color: "red" },
    { m: 7, d: 6, no: "St. Maria Goretti", tr: "Octave of Ss. Peter and Paul", rank: "optional", color: "red" },
    { m: 7, d: 11, no: "St. Benedict", tr: "St. Pius I", rank: "memorial", color: "white" },
    { m: 7, d: 16, no: "Our Lady of Mount Carmel", tr: "Our Lady of Mount Carmel", rank: "optional", color: "white" },
    { m: 7, d: 22, no: "St. Mary Magdalene", tr: "St. Mary Magdalene", rank: "feast", color: "white" },
    { m: 7, d: 25, no: "St. James", tr: "St. James the Greater", rank: "feast", color: "red" },
    { m: 7, d: 26, no: "Ss. Joachim and Anne", tr: "St. Anne", rank: "memorial", color: "white" },
    { m: 7, d: 29, no: "Ss. Martha, Mary and Lazarus", tr: "St. Martha", rank: "memorial", color: "white" },
    { m: 7, d: 31, no: "St. Ignatius of Loyola", tr: "St. Ignatius of Loyola", rank: "memorial", color: "white" },
    { m: 8, d: 1, no: "St. Alphonsus Liguori", tr: "St. Peter's Chains", rank: "memorial", color: "white" },
    { m: 8, d: 4, no: "St. John Vianney", tr: "St. Dominic", rank: "memorial", color: "white" },
    { m: 8, d: 6, no: "Transfiguration of the Lord", tr: "Transfiguration of the Lord", rank: "feast", color: "white" },
    { m: 8, d: 8, no: "St. Dominic", tr: "Ss. Cyriacus, Largus & Smaragdus", rank: "memorial", color: "white" },
    { m: 8, d: 10, no: "St. Lawrence", tr: "St. Lawrence", rank: "feast", color: "red" },
    { m: 8, d: 15, no: "Assumption of the B.V.M.", tr: "Assumption of the B.V.M.", rank: "solemnity", color: "white" },
    { m: 8, d: 22, no: "Queenship of the B.V.M.", tr: "Immaculate Heart of Mary", rank: "memorial", color: "white" },
    { m: 8, d: 24, no: "St. Bartholomew", tr: "St. Bartholomew", rank: "feast", color: "red" },
    { m: 8, d: 28, no: "St. Augustine", tr: "St. Augustine", rank: "memorial", color: "white" },
    { m: 8, d: 29, no: "Passion of St. John the Baptist", tr: "Beheading of St. John the Baptist", rank: "memorial", color: "red" },
    { m: 9, d: 8, no: "Nativity of the B.V.M.", tr: "Nativity of the B.V.M.", rank: "feast", color: "white" },
    { m: 9, d: 14, no: "Exaltation of the Holy Cross", tr: "Exaltation of the Holy Cross", rank: "feast", color: "red" },
    { m: 9, d: 15, no: "Our Lady of Sorrows", tr: "Seven Sorrows of the B.V.M.", rank: "memorial", color: "white" },
    { m: 9, d: 21, no: "St. Matthew", tr: "St. Matthew", rank: "feast", color: "red" },
    { m: 9, d: 29, no: "Ss. Michael, Gabriel and Raphael", tr: "Dedication of St. Michael the Archangel", rank: "feast", color: "white" },
    { m: 9, d: 30, no: "St. Jerome", tr: "St. Jerome", rank: "memorial", color: "white" },
    { m: 10, d: 2, no: "Holy Guardian Angels", tr: "Holy Guardian Angels", rank: "memorial", color: "white" },
    { m: 10, d: 4, no: "St. Francis of Assisi", tr: "St. Francis of Assisi", rank: "memorial", color: "white" },
    { m: 10, d: 7, no: "Our Lady of the Rosary", tr: "Our Lady of the Rosary", rank: "memorial", color: "white" },
    { m: 10, d: 15, no: "St. Teresa of Ávila", tr: "St. Teresa of Ávila", rank: "memorial", color: "white" },
    { m: 10, d: 18, no: "St. Luke", tr: "St. Luke", rank: "feast", color: "red" },
    { m: 11, d: 1, no: "All Saints", tr: "All Saints", rank: "solemnity", color: "white" },
    { m: 11, d: 2, no: "All Souls", tr: "Commemoration of All the Faithful Departed", rank: "commemoration", color: "black" },
    { m: 11, d: 9, no: "Dedication of the Lateran Basilica", tr: "Dedication of the Archbasilica of Our Saviour", rank: "feast", color: "white" },
    { m: 11, d: 11, no: "St. Martin of Tours", tr: "St. Martin of Tours", rank: "memorial", color: "white" },
    { m: 11, d: 21, no: "Presentation of the B.V.M.", tr: "Presentation of the B.V.M.", rank: "memorial", color: "white" },
    { m: 11, d: 22, no: "St. Cecilia", tr: "St. Cecilia", rank: "memorial", color: "red" },
    { m: 11, d: 30, no: "St. Andrew", tr: "St. Andrew", rank: "feast", color: "red" },
    { m: 12, d: 6, no: "St. Nicholas", tr: "St. Nicholas", rank: "optional", color: "white" },
    { m: 12, d: 7, no: "St. Ambrose", tr: "St. Ambrose", rank: "memorial", color: "white" },
    { m: 12, d: 8, no: "Immaculate Conception", tr: "Immaculate Conception of the B.V.M.", rank: "solemnity", color: "white" },
    { m: 12, d: 12, no: "Our Lady of Guadalupe", tr: "Our Lady of Guadalupe", rank: "feast", color: "white" },
    { m: 12, d: 13, no: "St. Lucy", tr: "St. Lucy", rank: "memorial", color: "red" },
    { m: 12, d: 21, no: "St. Peter Canisius", tr: "St. Thomas the Apostle", rank: "optional", color: "white" },
    { m: 12, d: 25, no: "Nativity of the Lord", tr: "Nativity of Our Lord", rank: "solemnity", color: "white" },
    { m: 12, d: 26, no: "St. Stephen", tr: "St. Stephen, Protomartyr", rank: "feast", color: "red" },
    { m: 12, d: 27, no: "St. John the Apostle", tr: "St. John the Evangelist", rank: "feast", color: "white" },
    { m: 12, d: 28, no: "Holy Innocents", tr: "Holy Innocents", rank: "feast", color: "red" },
  ];

  function fixedOn(date, rite) {
    var m = date.getMonth() + 1;
    var d = date.getDate();
    for (var i = 0; i < FIXED_COMMON.length; i++) {
      var f = FIXED_COMMON[i];
      if (f.m !== m || f.d !== d) continue;
      var name = rite === "traditional" ? f.tr : f.no;
      if (!name) continue;
      return { name: name, rank: f.rank, color: f.color };
    }
    return null;
  }

  function getRite() {
    try {
      var r = localStorage.getItem(RITE_KEY);
      if (r === "traditional" || r === "ordinary") return r;
    } catch (e) {}
    return "ordinary";
  }
  function setRite(r) {
    try {
      localStorage.setItem(RITE_KEY, r);
    } catch (e) {}
  }


  var ORDINALS = [
    "", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth",
    "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth",
    "Eighteenth", "Nineteenth", "Twentieth", "Twenty-first", "Twenty-second", "Twenty-third",
    "Twenty-fourth", "Twenty-fifth", "Twenty-sixth", "Twenty-seventh", "Twenty-eighth",
    "Twenty-ninth", "Thirtieth", "Thirty-first", "Thirty-second", "Thirty-third", "Thirty-fourth",
  ];

  function ordinal(n) {
    n = Math.round(n);
    if (n >= 1 && n < ORDINALS.length) return ORDINALS[n];
    if (n <= 0) return ORDINALS[1];
    return n + "th";
  }

  function nextSundayOnOrAfter(d) {
    var x = new Date(d.getTime());
    while (x.getDay() !== 0) x = addDays(x, 1);
    return x;
  }

  function prevSundayOnOrBefore(d) {
    var x = new Date(d.getTime());
    while (x.getDay() !== 0) x = addDays(x, -1);
    return x;
  }

  /** Ordinary Form: Sunday number in Ordinary Time (2–34), or null if not OT Sunday. */
  function noOrdinarySundayNumber(date, bapt, ash, pentecost, christKing) {
    if (date.getDay() !== 0) return null;
    if (sameDay(date, christKing)) return 34;
    // After Baptism, before Lent
    if (date > bapt && date < ash) {
      // Week 1 begins the Monday after Baptism; the first Sunday after Baptism is usually Sunday 2
      // (Baptism of the Lord occupies the slot of the First Sunday when it falls on Sunday).
      var anchor = bapt.getDay() === 0 ? bapt : nextSundayOnOrAfter(addDays(bapt, 1));
      // If bapt is Sunday, anchor is Baptism (= "1"); next Sunday is 2
      var n = Math.floor(daysBetween(anchor, date) / 7) + (bapt.getDay() === 0 ? 1 : 2);
      // When bapt is not Sunday, first Sunday after bapt is Sunday 2
      if (bapt.getDay() !== 0) {
        var firstSun = nextSundayOnOrAfter(addDays(bapt, 1));
        n = Math.floor(daysBetween(firstSun, date) / 7) + 2;
      } else {
        n = Math.floor(daysBetween(bapt, date) / 7) + 1;
      }
      return Math.max(2, Math.min(n, 33));
    }
    // After Pentecost through Christ the King: count backward from 34
    if (date > pentecost && date <= christKing) {
      var n2 = 34 - Math.floor(daysBetween(date, christKing) / 7);
      return Math.max(1, Math.min(n2, 34));
    }
    return null;
  }

  /** Ordinary Form weekday: "Monday of the Nth Week of Ordinary Time" */
  function noOrdinaryWeekNumber(date, bapt, ash, pentecost, christKing) {
    // Map any day to the Sunday that begins its liturgical week (Sunday of that week)
    var sun = prevSundayOnOrBefore(date);
    // Special: Mon–Sat after Baptism before first OT Sunday
    if (date > bapt && date < ash) {
      var n = noOrdinarySundayNumber(sun, bapt, ash, pentecost, christKing);
      if (n == null) {
        // week of Baptism counts as week 1
        if (sun <= bapt) return 1;
        n = noOrdinarySundayNumber(nextSundayOnOrAfter(addDays(bapt, 1)), bapt, ash, pentecost, christKing) || 2;
      }
      return n;
    }
    if (date > pentecost && date < christKing) {
      var n2 = noOrdinarySundayNumber(sun, bapt, ash, pentecost, christKing);
      if (n2 != null) return n2;
      // midweek after a numbered Sunday
      return 34 - Math.floor(daysBetween(sun, christKing) / 7);
    }
    if (date > christKing && date < adventStart(date.getFullYear())) {
      return 34;
    }
    return null;
  }

  /** Traditional: Nth Sunday after Pentecost (Trinity counts as week 1 in many ordos — we number Sundays after Trinity as 1st, 2nd…). */
  function trSundayAfterPentecost(date, pentecost, trinity, advent) {
    if (date.getDay() !== 0) return null;
    if (date <= pentecost) return null;
    if (sameDay(date, trinity)) return null; // named Trinity
    if (date >= advent) return null;
    // First Sunday after Trinity = 1st Sunday after Pentecost (common modern traditional usage)
    var first = addDays(trinity, 7);
    if (date < first) return null;
    return Math.floor(daysBetween(first, date) / 7) + 1;
  }

  /** Traditional: Nth Sunday after Epiphany (before Septuagesima). */
  function trSundayAfterEpiphany(date, year, septuagesima) {
    if (date.getDay() !== 0) return null;
    var epi = atLocal(year, 0, 6);
    var first = nextSundayOnOrAfter(addDays(epi, 1));
    if (date < first || date >= septuagesima) return null;
    return Math.floor(daysBetween(first, date) / 7) + 1;
  }

  function weekdayName(d) {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getDay()];
  }


  function resolveDay(date, rite) {
    rite = rite || getRite();
    var y = date.getFullYear();
    var easter = easterSunday(y);
    var ash = addDays(easter, -46);
    var palm = addDays(easter, -7);
    var holyThu = addDays(easter, -3);
    var goodFri = addDays(easter, -2);
    var holySat = addDays(easter, -1);
    var ascension = addDays(easter, 39);
    var pentecost = addDays(easter, 49);
    var trinity = addDays(easter, 56);
    var corpus = addDays(easter, 60);
    var sacredHeart = addDays(easter, 68);
    var septuagesima = addDays(easter, -63);
    var sexagesima = addDays(easter, -56);
    var quinquagesima = addDays(easter, -49);
    var advent = adventStart(y);
    var christmas = atLocal(y, 11, 25);
    var christKingNO = addDays(advent, -7);
    var christKingTR = lastSundayOfOctober(y);
    var baptNO = (function () {
      var d = atLocal(y, 0, 7);
      while (d.getDay() !== 0) d = addDays(d, 1);
      return d;
    })();
    var fx = fixedOn(date, rite);
    var dow = date.getDay();
    var out = {
      date: date,
      iso: ymd(date),
      longDate: date.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
      name: "",
      rank: "feria",
      color: "green",
      season: "Ordinary Time",
      note: "",
      rite: rite,
    };

    function done(o) {
      return Object.assign(out, o);
    }

    // ——— Peak movable (both rites) ———
    if (sameDay(date, easter))
      return done({
        name: rite === "traditional" ? "Easter Sunday" : "Easter Sunday of the Resurrection of the Lord",
        rank: "solemnity",
        color: "white",
        season: "Easter",
        note: "The feast of feasts.",
      });
    if (sameDay(date, goodFri))
      return done({
        name: "Good Friday",
        rank: "solemnity",
        color: "black",
        season: "Paschal Triduum",
        note: "Celebration of the Lord's Passion.",
      });
    if (sameDay(date, holyThu))
      return done({
        name: rite === "traditional" ? "Maundy Thursday" : "Thursday of the Lord's Supper",
        rank: "solemnity",
        color: "white",
        season: "Paschal Triduum",
      });
    if (sameDay(date, holySat))
      return done({
        name: "Holy Saturday",
        rank: "feria",
        color: "violet",
        season: "Paschal Triduum",
        note: "The Church waits at the Lord's tomb.",
      });
    if (sameDay(date, palm))
      return done({
        name: rite === "traditional" ? "Palm Sunday" : "Palm Sunday of the Passion of the Lord",
        rank: "solemnity",
        color: "red",
        season: "Holy Week",
      });
    if (sameDay(date, ash))
      return done({
        name: "Ash Wednesday",
        rank: "feria",
        color: "violet",
        season: "Lent",
        note: "Beginning of the Lenten fast.",
      });
    if (sameDay(date, ascension))
      return done({
        name: "Ascension of the Lord",
        rank: "solemnity",
        color: "white",
        season: "Easter",
      });
    if (sameDay(date, pentecost))
      return done({
        name: "Pentecost Sunday",
        rank: "solemnity",
        color: "red",
        season: "Easter",
      });
    if (sameDay(date, trinity))
      return done({
        name: rite === "traditional" ? "Trinity Sunday" : "The Most Holy Trinity",
        rank: "solemnity",
        color: "white",
        season: rite === "traditional" ? "Time after Pentecost" : "Ordinary Time",
      });
    if (sameDay(date, corpus))
      return done({
        name: rite === "traditional" ? "Corpus Christi" : "The Most Holy Body and Blood of Christ",
        rank: "solemnity",
        color: "white",
        season: rite === "traditional" ? "Time after Pentecost" : "Ordinary Time",
      });
    if (sameDay(date, sacredHeart))
      return done({
        name: "Sacred Heart of Jesus",
        rank: "solemnity",
        color: "white",
        season: rite === "traditional" ? "Time after Pentecost" : "Ordinary Time",
      });

    // Traditional Gesima Sundays
    if (rite === "traditional") {
      if (sameDay(date, septuagesima))
        return done({ name: "Septuagesima Sunday", rank: "semidouble", color: "violet", season: "Septuagesima", note: "Beginning of the pre-Lenten season." });
      if (sameDay(date, sexagesima))
        return done({ name: "Sexagesima Sunday", rank: "semidouble", color: "violet", season: "Septuagesima" });
      if (sameDay(date, quinquagesima))
        return done({ name: "Quinquagesima Sunday", rank: "semidouble", color: "violet", season: "Septuagesima" });
      if (sameDay(date, christKingTR))
        return done({ name: "Christ the King", rank: "solemnity", color: "white", season: "Time after Pentecost", note: "Last Sunday of October (1962)." });
    } else {
      if (sameDay(date, christKingNO))
        return done({ name: "Our Lord Jesus Christ, King of the Universe", rank: "solemnity", color: "white", season: "Ordinary Time" });
      if (sameDay(date, baptNO))
        return done({ name: "Baptism of the Lord", rank: "feast", color: "white", season: "Christmas" });
    }

    // Easter octave
    var de = daysBetween(easter, date);
    if (de > 0 && de < 8) {
      if (de === 7) {
        return done({
          name: rite === "traditional" ? "Low Sunday (Quasimodo / Dominica in Albis)" : "Second Sunday of Easter (Divine Mercy)",
          rank: "solemnity",
          color: "white",
          season: "Easter",
          note: rite === "traditional" ? "First Sunday after Easter." : "Octave day of Easter.",
        });
      }
      return done({
        name: "Easter Octave · " + weekdayName(date) + " in the Octave of Easter",
        rank: "feast",
        color: "white",
        season: "Easter",
      });
    }

    // Easter season Sundays (3–7) and weekdays after the octave
    if (date > addDays(easter, 7) && date < pentecost) {
      out.season = "Easter";
      out.color = "white";
      if (dow === 0) {
        var eSun = Math.floor(daysBetween(easter, date) / 7) + 1; // Easter=1, Low/2nd=2, …
        return done({
          name: ordinal(eSun) + " Sunday of Easter",
          rank: "solemnity",
          color: "white",
          season: "Easter",
        });
      }
      if (fx && (fx.rank === "solemnity" || fx.rank === "feast")) {
        return done({ name: fx.name, rank: fx.rank, color: fx.color || "white", season: "Easter" });
      }
      if (fx) {
        return done({
          name: fx.name + " · " + weekdayName(date) + " of the " + ordinal(Math.floor(daysBetween(easter, date) / 7) + 1) + " Week of Easter",
          rank: fx.rank,
          color: fx.color || "white",
          season: "Easter",
        });
      }
      return done({
        name: weekdayName(date) + " of the " + ordinal(Math.floor(daysBetween(easter, date) / 7) + 1) + " Week of Easter",
        rank: "feria",
        color: "white",
        season: "Easter",
      });
    }

    // Solemnities outrank seasonal Sundays; ordinary feasts of saints yield to Sundays of Advent/Lent/Easter/OT.
    if (fx && fx.rank === "solemnity") {
      var seasonF = "Ordinary Time";
      if (date >= advent && date < christmas) seasonF = "Advent";
      else if (date >= christmas || (date.getMonth() === 0 && (rite === "ordinary" ? date <= baptNO : date.getDate() <= 13)))
        seasonF = "Christmas";
      else if (rite === "traditional" && date >= septuagesima && date < ash) seasonF = "Septuagesima";
      else if (date >= ash && date < easter) seasonF = "Lent";
      else if (date > easter && date < pentecost) seasonF = "Easter";
      else if (rite === "traditional" && date > pentecost) seasonF = "Time after Pentecost";
      else if (rite === "ordinary") seasonF = "Ordinary Time";
      return done({ name: fx.name, rank: fx.rank, color: fx.color, season: seasonF });
    }
    // Feasts of saints on weekdays (not on ranked Sundays)
    if (fx && fx.rank === "feast" && dow !== 0) {
      var seasonG = rite === "traditional" && date > pentecost ? "Time after Pentecost" : "Ordinary Time";
      if (date >= advent && date < christmas) seasonG = "Advent";
      else if (date >= ash && date < easter) seasonG = "Lent";
      else if (date > easter && date < pentecost) seasonG = "Easter";
      return done({ name: fx.name, rank: fx.rank, color: fx.color, season: seasonG });
    }

    // Advent (numbered)
    if (date >= advent && date < christmas) {
      var advWeek = Math.floor(daysBetween(advent, date) / 7) + 1;
      advWeek = Math.min(Math.max(advWeek, 1), 4);
      var gaudete = sameDay(date, addDays(advent, 14)) && dow === 0;
      out.season = "Advent";
      out.color = gaudete ? "rose" : "violet";
      if (dow === 0) {
        return done({
          name: ordinal(advWeek) + " Sunday of Advent",
          rank: "solemnity",
          color: gaudete ? "rose" : "violet",
          season: "Advent",
          note: gaudete ? "Gaudete Sunday." : "",
        });
      }
      if (fx) {
        return done({
          name: fx.name + " · " + weekdayName(date) + " of the " + ordinal(advWeek) + " Week of Advent",
          rank: fx.rank,
          color: fx.color,
          season: "Advent",
        });
      }
      return done({
        name: weekdayName(date) + " of the " + ordinal(advWeek) + " Week of Advent",
        rank: "feria",
        color: "violet",
        season: "Advent",
      });
    }

    // Christmas season
    if (date >= christmas || (date.getMonth() === 0 && (rite === "ordinary" ? date <= baptNO : date.getDate() <= 13))) {
      out.season = "Christmas";
      out.color = "white";
      if (fx) return done({ name: fx.name, rank: fx.rank, color: fx.color || "white", season: "Christmas" });
      if (dow === 0) {
        if (date > christmas && daysBetween(christmas, date) < 8)
          return done({ name: "Sunday in the Octave of Christmas", rank: "feast", color: "white", season: "Christmas" });
        return done({ name: "Sunday in the Christmas season", rank: "feast", color: "white", season: "Christmas" });
      }
      if (daysBetween(christmas, date) >= 0 && daysBetween(christmas, date) < 8 && date >= christmas)
        return done({
          name: weekdayName(date) + " in the Octave of Christmas",
          rank: "feast",
          color: "white",
          season: "Christmas",
        });
      return done({ name: weekdayName(date) + " of the Christmas season", rank: "feria", color: "white", season: "Christmas" });
    }

    // Traditional Septuagesima
    if (rite === "traditional" && date >= septuagesima && date < ash) {
      out.season = "Septuagesima";
      out.color = "violet";
      if (dow === 0) {
        if (sameDay(date, septuagesima))
          return done({ name: "Septuagesima Sunday", rank: "semidouble", color: "violet", season: "Septuagesima", note: "Beginning of the pre-Lenten season." });
        if (sameDay(date, sexagesima))
          return done({ name: "Sexagesima Sunday", rank: "semidouble", color: "violet", season: "Septuagesima" });
        if (sameDay(date, quinquagesima))
          return done({ name: "Quinquagesima Sunday", rank: "semidouble", color: "violet", season: "Septuagesima" });
      }
      if (fx) return done({ name: fx.name, rank: fx.rank, color: fx.color, season: "Septuagesima" });
      return done({ name: weekdayName(date) + " of Septuagesima", rank: "feria", color: "violet", season: "Septuagesima" });
    }

    // Traditional Sundays after Epiphany (before Septuagesima)
    if (rite === "traditional" && date > atLocal(y, 0, 6) && date < septuagesima) {
      out.season = "Time after Epiphany";
      out.color = "green";
      if (dow === 0) {
        var ae = trSundayAfterEpiphany(date, y, septuagesima);
        if (ae)
          return done({
            name: ordinal(ae) + " Sunday after Epiphany",
            rank: "semidouble",
            color: "green",
            season: "Time after Epiphany",
          });
      }
      if (fx) return done({ name: fx.name, rank: fx.rank, color: fx.color, season: "Time after Epiphany" });
      var aeW = trSundayAfterEpiphany(prevSundayOnOrBefore(date), y, septuagesima);
      if (aeW)
        return done({
          name: weekdayName(date) + " of the " + ordinal(aeW) + " Week after Epiphany",
          rank: "feria",
          color: "green",
          season: "Time after Epiphany",
        });
    }

    // Lent (numbered Sundays & weekdays)
    if (date >= ash && date < easter) {
      var laetare = sameDay(date, addDays(easter, -21)) && dow === 0;
      out.season = date >= palm ? "Holy Week" : "Lent";
      out.color = laetare ? "rose" : "violet";
      if (date >= palm && date < holyThu) {
        if (dow === 0) return done({ name: rite === "traditional" ? "Palm Sunday" : "Palm Sunday of the Passion of the Lord", rank: "solemnity", color: "red", season: "Holy Week" });
        return done({ name: weekdayName(date) + " of Holy Week", rank: "feria", color: "violet", season: "Holy Week" });
      }
      if (dow === 0) {
        // Lent Sundays: 1st = Sunday after Ash Wednesday
        var lent1 = nextSundayOnOrAfter(addDays(ash, 1));
        var ln = Math.floor(daysBetween(lent1, date) / 7) + 1;
        ln = Math.min(Math.max(ln, 1), 5);
        var lname = ordinal(ln) + " Sunday of Lent";
        if (ln === 4) lname += " (Laetare)";
        if (rite === "traditional" && ln === 5) lname = "Passion Sunday";
        return done({
          name: lname,
          rank: "solemnity",
          color: ln === 4 ? "rose" : "violet",
          season: "Lent",
        });
      }
      if (fx) {
        var lent1b = nextSundayOnOrAfter(addDays(ash, 1));
        var lw = Math.floor(daysBetween(lent1b, prevSundayOnOrBefore(date)) / 7) + 1;
        return done({
          name: fx.name + " · " + weekdayName(date) + " of the " + ordinal(Math.max(lw, 1)) + " Week of Lent",
          rank: fx.rank,
          color: fx.color,
          season: "Lent",
        });
      }
      var lent1c = nextSundayOnOrAfter(addDays(ash, 1));
      var lw2 = Math.floor(daysBetween(lent1c, prevSundayOnOrBefore(date)) / 7) + 1;
      if (date < lent1c)
        return done({ name: weekdayName(date) + " after Ash Wednesday", rank: "feria", color: "violet", season: "Lent" });
      return done({
        name: weekdayName(date) + " of the " + ordinal(Math.max(lw2, 1)) + " Week of Lent",
        rank: "feria",
        color: "violet",
        season: "Lent",
      });
    }

    // ——— Ordinary Form: Ordinary Time with full numbering ———
    if (rite === "ordinary") {
      if (dow === 0) {
        var otn = noOrdinarySundayNumber(date, baptNO, ash, pentecost, christKingNO);
        if (otn != null) {
          return done({
            name: ordinal(otn) + " Sunday in Ordinary Time",
            rank: "feast",
            color: "green",
            season: "Ordinary Time",
            note: otn === 34 ? "Last Sunday of Ordinary Time · Christ the King is observed this day when solemnity coincides." : "",
          });
        }
      }
      var otw = noOrdinaryWeekNumber(date, baptNO, ash, pentecost, christKingNO);
      if (otw != null && date > baptNO && (date < ash || date > pentecost)) {
        if (fx) {
          return done({
            name: fx.name + " · " + weekdayName(date) + " of the " + ordinal(otw) + " Week in Ordinary Time",
            rank: fx.rank,
            color: fx.color,
            season: "Ordinary Time",
          });
        }
        return done({
          name: weekdayName(date) + " of the " + ordinal(otw) + " Week in Ordinary Time",
          rank: "feria",
          color: "green",
          season: "Ordinary Time",
        });
      }
    }

    // ——— Traditional: Sundays after Pentecost + ferias ———
    if (rite === "traditional" && date > pentecost && date < advent) {
      out.season = "Time after Pentecost";
      out.color = "green";
      if (dow === 0) {
        var ap = trSundayAfterPentecost(date, pentecost, trinity, advent);
        if (ap != null) {
          return done({
            name: ordinal(ap) + " Sunday after Pentecost",
            rank: "semidouble",
            color: "green",
            season: "Time after Pentecost",
          });
        }
      }
      if (fx) {
        var apw = trSundayAfterPentecost(prevSundayOnOrBefore(date), pentecost, trinity, advent);
        return done({
          name: fx.name + (apw ? " · " + weekdayName(date) + " of the " + ordinal(apw) + " Week after Pentecost" : ""),
          rank: fx.rank,
          color: fx.color,
          season: "Time after Pentecost",
        });
      }
      var apw2 = trSundayAfterPentecost(prevSundayOnOrBefore(date), pentecost, trinity, advent);
      if (apw2 != null) {
        return done({
          name: weekdayName(date) + " of the " + ordinal(apw2) + " Week after Pentecost",
          rank: "feria",
          color: "green",
          season: "Time after Pentecost",
        });
      }
      return done({ name: "Feria", rank: "feria", color: "green", season: "Time after Pentecost" });
    }

    // Fallback memorials
    if (fx) {
      return done({ name: fx.name, rank: fx.rank, color: fx.color, season: out.season });
    }

    return done({
      name: rite === "traditional" ? "Feria" : "Weekday of Ordinary Time",
      rank: "feria",
      color: "green",
      season: rite === "traditional" ? "Time after Pentecost" : "Ordinary Time",
    });

    return out;
  }

  function weekAround(center, rite) {
    var start = addDays(center, -center.getDay());
    var days = [];
    for (var i = 0; i < 7; i++) days.push(resolveDay(addDays(start, i), rite));
    return days;
  }

  function formatTime(d) {
    return d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  }

  function shortName(n) {
    if (!n) return "";
    if (n.length <= 26) return n;
    return n.slice(0, 24).replace(/\s+\S*$/, "") + "…";
  }

  function renderCalendarHtml() {
    var rite = getRite();
    var now = new Date();
    var today = resolveDay(now, rite);
    var week = weekAround(now, rite);
    var col = COLORS[today.color] || COLORS.green;

    function dayCell(d) {
      var c = COLORS[d.color] || COLORS.green;
      var isToday = d.iso === today.iso;
      return (
        '<button type="button" class="litcal-day' +
        (isToday ? " is-today" : "") +
        '" data-iso="' +
        d.iso +
        '" style="--day-color:' +
        c.hex +
        '">' +
        '<span class="litcal-day-wd">' +
        d.date.toLocaleDateString(undefined, { weekday: "short" }) +
        "</span>" +
        '<span class="litcal-day-num">' +
        d.date.getDate() +
        "</span>" +
        '<span class="litcal-day-dot" aria-hidden="true"></span>' +
        '<span class="litcal-day-name">' +
        esc(shortName(d.name)) +
        "</span>" +
        "</button>"
      );
    }

    return (
      '<section class="litcal" id="litcal" aria-label="Liturgical calendar">' +
      '<div class="litcal-inner">' +
      '<header class="litcal-head">' +
      '<p class="litcal-kicker">Ordo · local time</p>' +
      "<h2>Liturgical calendar</h2>" +
      '<div class="litcal-rite-switch" role="tablist" aria-label="Calendar form">' +
      '<button type="button" class="litcal-rite-btn' +
      (rite === "ordinary" ? " is-active" : "") +
      '" data-rite="ordinary" role="tab" aria-selected="' +
      (rite === "ordinary" ? "true" : "false") +
      '">Novus Ordo</button>' +
      '<button type="button" class="litcal-rite-btn' +
      (rite === "traditional" ? " is-active" : "") +
      '" data-rite="traditional" role="tab" aria-selected="' +
      (rite === "traditional" ? "true" : "false") +
      '">Traditional (1962)</button>' +
      "</div>" +
      '<p class="litcal-disclaimer">For study and prayer. Follow your parish ordo for Mass. ' +
      (rite === "traditional"
        ? "Traditional Roman Calendar (1962) — simplified sanctoral & seasons."
        : "General Roman Calendar (Ordinary Form) — simplified sanctoral & seasons.") +
      "</p>" +
      "</header>" +
      '<div class="litcal-today" style="--lit-color:' +
      col.hex +
      '">' +
      '<div class="litcal-today-main">' +
      '<p class="litcal-live"><span class="litcal-pulse" aria-hidden="true"></span> <span id="litcal-clock">' +
      esc(today.longDate) +
      " · " +
      esc(formatTime(now)) +
      "</span></p>" +
      '<p class="litcal-season">' +
      esc(today.season) +
      " · " +
      esc(col.label) +
      "</p>" +
      '<h3 id="litcal-today-name">' +
      esc(today.name) +
      "</h3>" +
      '<p class="litcal-rank" id="litcal-today-rank">' +
      esc(cap(today.rank)) +
      "</p>" +
      '<p class="litcal-note" id="litcal-today-note"' +
      (today.note ? "" : " hidden") +
      ">" +
      esc(today.note || "") +
      "</p>" +
      "</div>" +
      '<div class="litcal-swatch" title="' +
      esc(col.label) +
      '" aria-hidden="true"></div>' +
      "</div>" +
      '<p class="litcal-week-label">This week</p>' +
      '<div class="litcal-week" id="litcal-week">' +
      week.map(dayCell).join("") +
      "</div>" +
      "</div></section>"
    );
  }

  function fillToday(info) {
    var col = COLORS[info.color] || COLORS.green;
    var box = document.querySelector(".litcal-today");
    if (box) box.style.setProperty("--lit-color", col.hex);
    var n = document.getElementById("litcal-today-name");
    var r = document.getElementById("litcal-today-rank");
    var note = document.getElementById("litcal-today-note");
    var season = document.querySelector(".litcal-season");
    if (n) n.textContent = info.name;
    if (r) r.textContent = cap(info.rank);
    if (season) season.textContent = info.season + " · " + col.label;
    if (note) {
      if (info.note) {
        note.hidden = false;
        note.textContent = info.note;
      } else {
        note.hidden = true;
        note.textContent = "";
      }
    }
  }

  function bindWeek() {
    var week = document.getElementById("litcal-week");
    if (!week) return;
    var rite = getRite();
    week.querySelectorAll(".litcal-day").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var iso = btn.getAttribute("data-iso");
        var parts = iso.split("-");
        var d = atLocal(+parts[0], +parts[1] - 1, +parts[2]);
        var info = resolveDay(d, rite);
        fillToday(info);
        week.querySelectorAll(".litcal-day").forEach(function (b) {
          b.classList.toggle("is-today", b.getAttribute("data-iso") === iso);
        });
      });
    });
  }

  function reRender() {
    var section = document.getElementById("litcal");
    if (!section || !section.parentNode) return;
    var wrap = document.createElement("div");
    wrap.innerHTML = renderCalendarHtml();
    section.replaceWith(wrap.firstChild);
    bindAll();
  }

  function bindAll() {
    bindWeek();
    document.querySelectorAll(".litcal-rite-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setRite(btn.getAttribute("data-rite"));
        reRender();
      });
    });
  }

  function mount(root) {
    if (!root || !root.querySelector("#litcal")) return;

    function refreshClock() {
      var el = document.getElementById("litcal-clock");
      if (!el) return;
      var now = new Date();
      var t = resolveDay(now, getRite());
      el.textContent = t.longDate + " · " + formatTime(now);
    }

    var lastIso = resolveDay(new Date(), getRite()).iso;
    setInterval(function () {
      refreshClock();
      var nowIso = resolveDay(new Date(), getRite()).iso;
      if (nowIso !== lastIso) {
        lastIso = nowIso;
        reRender();
      }
    }, 1000);

    bindAll();
  }

  global.LiturgicalCalendar = {
    resolveDay: resolveDay,
    easterSunday: easterSunday,
    renderCalendarHtml: renderCalendarHtml,
    mount: mount,
    getRite: getRite,
    COLORS: COLORS,
  };
})(typeof window !== "undefined" ? window : globalThis);
