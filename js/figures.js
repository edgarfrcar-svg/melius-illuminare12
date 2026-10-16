// Eras (figures directory filters)
const TRADITION_COLORS = {
  "antiquity": {
    "name": "Antiquity",
    "range": "c. 1000 BC–AD 476",
    "color": "#a97142",
    "glow": "#e6b988"
  },
  "early-middle": {
    "name": "Early Middle Ages",
    "range": "c. 500–1000",
    "color": "#8b6914",
    "glow": "#d4a84b"
  },
  "high-middle": {
    "name": "High Middle Ages",
    "range": "c. 1000–1300",
    "color": "#c9a227",
    "glow": "#ffd98e"
  },
  "late-middle": {
    "name": "Late Middle Ages",
    "range": "c. 1300–1500",
    "color": "#9a7b2f",
    "glow": "#e0c35a"
  },
  "renaissance": {
    "name": "Renaissance",
    "range": "c. 1300–1600",
    "color": "#6b3a76",
    "glow": "#c79bd6"
  },
  "early-modern": {
    "name": "Early Modern",
    "range": "c. 1500–1770",
    "color": "#5c4a3a",
    "glow": "#c4a882"
  },
  "revolutions": {
    "name": "Age of Revolutions",
    "range": "c. 1770–1848",
    "color": "#7a3b2e",
    "glow": "#d4a090"
  },
  "modern": {
    "name": "Modern Age",
    "range": "c. 1848–1945",
    "color": "#3a6ea5",
    "glow": "#9ecbff"
  },
  "postwar": {
    "name": "Postwar Period",
    "range": "1945–c. 1968",
    "color": "#4a5d4e",
    "glow": "#a8c4b0"
  },
  "contemporary": {
    "name": "Contemporary",
    "range": "c. 1968–present",
    "color": "#5a6b7a",
    "glow": "#b0c4d4"
  }
};

const FIGURES = [
  {
    "id": "elijah",
    "name": "Elijah the Prophet",
    "dates": "9th c. BC",
    "tradition": "antiquity",
    "epithet": "Prophet of Mount Carmel · Spiritual father of the Carmelites",
    "img": "img/figures/elijah.jpg",
    "slug": "figures/profile.html?id=elijah",
    "works": [
      {
        "title": "Apophthegmata Patrum (Sayings of the Desert Fathers)",
        "url": "texts/work.html?id=apophthegmata-patrum"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "ignatius",
    "name": "St. Ignatius of Antioch",
    "dates": "c. 35–c. 107",
    "tradition": "antiquity",
    "epithet": "Bishop of Antioch · Apostolic Father",
    "img": "img/figures/ignatius-antioch.jpg",
    "works": [
      {
        "title": "Epistle to the Ephesians",
        "url": "texts/work.html?id=ignatius-ephesians"
      },
      {
        "title": "Epistle to the Romans",
        "url": "texts/work.html?id=ignatius-romans"
      },
      {
        "title": "Epistle to the Smyrnaeans",
        "url": "texts/work.html?id=ignatius-smyrnaeans"
      },
      {
        "title": "Epistle to the Magnesians",
        "url": "texts/work.html?id=ignatius-magnesians"
      },
      {
        "title": "Epistle to the Trallians",
        "url": "texts/work.html?id=ignatius-trallians"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "polycarp",
    "name": "St. Polycarp of Smyrna",
    "dates": "c. 69–c. 155",
    "tradition": "antiquity",
    "epithet": "Bishop of Smyrna, disciple of the Apostle John",
    "img": "img/figures/polycarp.jpg",
    "works": [
      {
        "title": "Letter to the Philippians",
        "url": "texts/work.html?id=polycarp-philippians"
      },
      {
        "title": "Martyrdom of Polycarp",
        "url": "texts/work.html?id=polycarp-martyrdom"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "justin",
    "name": "St. Justin Martyr",
    "dates": "c. 100–c. 165",
    "tradition": "antiquity",
    "epithet": "Philosopher and Apologist",
    "img": "img/figures/justin.jpg",
    "works": [
      {
        "title": "First Apology",
        "url": "texts/work.html?id=justin-first-apology"
      },
      {
        "title": "Second Apology",
        "url": "texts/work.html?id=justin-second-apology"
      },
      {
        "title": "Dialogue with Trypho",
        "url": "texts/work.html?id=justin-trypho"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "irenaeus",
    "name": "St. Irenaeus of Lyons",
    "dates": "c. 130–c. 202",
    "tradition": "antiquity",
    "epithet": "Bishop of Lyons, opponent of Gnosticism",
    "img": "img/figures/irenaeus.jpg",
    "works": [
      {
        "title": "Against Heresies",
        "url": "texts/work.html?id=irenaeus-heresies"
      },
      {
        "title": "Fragments",
        "url": "texts/work.html?id=irenaeus-fragments"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "tertullian",
    "name": "Tertullian",
    "dates": "c. 155–c. 220",
    "tradition": "antiquity",
    "epithet": "Father of Latin theology",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Tertullian.jpg",
    "works": [
      {
        "title": "The Apology",
        "url": "texts/work.html?id=tertullian-apology"
      },
      {
        "title": "Prescription Against Heretics",
        "url": "texts/work.html?id=tertullian-prescription"
      },
      {
        "title": "On Baptism",
        "url": "texts/work.html?id=tertullian-baptism"
      },
      {
        "title": "Against Praxeas",
        "url": "texts/work.html?id=tertullian-praxeas"
      },
      {
        "title": "On the Flesh of Christ",
        "url": "texts/work.html?id=tertullian-flesh"
      },
      {
        "title": "On the Resurrection of the Flesh",
        "url": "texts/work.html?id=tertullian-resurrection"
      },
      {
        "title": "On the Soul",
        "url": "texts/work.html?id=tertullian-soul"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "origen",
    "name": "Origen of Alexandria",
    "dates": "c. 184–c. 253",
    "tradition": "antiquity",
    "epithet": "Biblical scholar and speculative theologian",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Origen.jpg",
    "works": [
      {
        "title": "On First Principles",
        "url": "texts/work.html?id=origen-principles"
      },
      {
        "title": "Against Celsus",
        "url": "texts/work.html?id=origen-celsus"
      },
      {
        "title": "On Prayer",
        "url": "texts/work.html?id=origen-prayer"
      },
      {
        "title": "Exhortation to Martyrdom",
        "url": "texts/work.html?id=origen-martyrdom"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "cyprian",
    "name": "St. Cyprian of Carthage",
    "dates": "c. 200–258",
    "tradition": "antiquity",
    "epithet": "Bishop of Carthage, martyr",
    "img": "img/figures/cyprian.jpg",
    "works": [
      {
        "title": "Treatises",
        "url": "texts/work.html?id=cyprian-writings"
      },
      {
        "title": "On the Unity of the Church",
        "url": "texts/work.html?id=cyprian-unity"
      },
      {
        "title": "On Works and Alms",
        "url": "texts/work.html?id=cyprian-alms"
      },
      {
        "title": "To Demetrian",
        "url": "texts/work.html?id=cyprian-demetrian"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "athanasius",
    "name": "St. Athanasius of Alexandria",
    "dates": "c. 296–373",
    "tradition": "antiquity",
    "epithet": "Defender of the Nicene faith against Arianism",
    "img": "img/figures/athanasius.jpg",
    "works": [
      {
        "title": "On the Incarnation of the Word",
        "url": "texts/work.html?id=athanasius-incarnation"
      },
      {
        "title": "Orations Against the Arians",
        "url": "texts/work.html?id=athanasius-arians"
      },
      {
        "title": "Defence of the Nicene Definition",
        "url": "texts/work.html?id=athanasius-nicene"
      },
      {
        "title": "Life of Antony",
        "url": "texts/work.html?id=athanasius-antony"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "basil",
    "name": "St. Basil the Great",
    "dates": "c. 330–379",
    "tradition": "antiquity",
    "epithet": "Cappadocian Father, Bishop of Caesarea",
    "img": "img/figures/basil.jpg",
    "works": [
      {
        "title": "Hexaemeron",
        "url": "texts/work.html?id=basil-hexaemeron"
      },
      {
        "title": "Letters",
        "url": "texts/work.html?id=basil-letters"
      },
      {
        "title": "On the Holy Spirit",
        "url": "texts/work.html?id=basil-holy-spirit"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "gregory-nazianzen",
    "name": "St. Gregory of Nazianzus",
    "dates": "c. 329–390",
    "tradition": "antiquity",
    "epithet": "The Theologian, Cappadocian Father",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Gregory_the_Theologian_La_Martorana_Palermo_2008-08-27.jpg",
    "works": [
      {
        "title": "Theological Orations",
        "url": "texts/work.html?id=gregory-nazianzen-theological-orations"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "gregory-nyssa",
    "name": "St. Gregory of Nyssa",
    "dates": "c. 335–c. 395",
    "tradition": "antiquity",
    "epithet": "Cappadocian Father, mystical theologian",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Gregory_of_Nyssa.jpg",
    "works": [
      {
        "title": "The Great Catechism",
        "url": "texts/work.html?id=gregory-nyssa-catechism"
      },
      {
        "title": "On the Making of Man",
        "url": "texts/work.html?id=gregory-nyssa-making-man"
      },
      {
        "title": "On the Soul and the Resurrection",
        "url": "texts/work.html?id=gregory-nyssa-soul"
      },
      {
        "title": "The Life of Moses",
        "url": "texts/work.html?id=gregory-nyssa-life-moses"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "chrysostom",
    "name": "St. John Chrysostom",
    "dates": "c. 347–407",
    "tradition": "antiquity",
    "epithet": "Archbishop of Constantinople, “Golden-Mouthed”",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Byzantinischer_Mosaizist_des_9._Jahrhunderts_003.jpg",
    "works": [
      {
        "title": "Homilies on the Statues",
        "url": "texts/work.html?id=chrysostom-statues"
      },
      {
        "title": "Homilies on Matthew",
        "url": "texts/work.html?id=chrysostom-matthew"
      },
      {
        "title": "On the Priesthood",
        "url": "texts/work.html?id=chrysostom-priesthood"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "ambrose",
    "name": "St. Ambrose of Milan",
    "dates": "c. 340–397",
    "tradition": "antiquity",
    "epithet": "Bishop of Milan, Doctor of the Church",
    "img": "img/figures/ambrose.jpg",
    "works": [
      {
        "title": "On the Duties of the Clergy (complete)",
        "url": "texts/work.html?id=ambrose-duties"
      },
      {
        "title": "On the Mysteries",
        "url": "texts/work.html?id=ambrose-mysteries"
      },
      {
        "title": "On the Holy Spirit",
        "url": "texts/work.html?id=ambrose-holy-spirit"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "jerome",
    "name": "St. Jerome",
    "dates": "c. 347–420",
    "tradition": "antiquity",
    "epithet": "Translator of the Vulgate, Doctor of the Church",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Saint_Jerome_Writing-Caravaggio_(1605-6).jpg",
    "works": [
      {
        "title": "Lives of Illustrious Men (De Viris Illustribus)",
        "url": "texts/work.html?id=jerome-viris"
      },
      {
        "title": "Against Helvidius",
        "url": "texts/work.html?id=jerome-helvidius"
      },
      {
        "title": "Against Jovinianus",
        "url": "texts/work.html?id=jerome-jovinian"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "augustine",
    "name": "St. Augustine of Hippo",
    "dates": "354–430",
    "tradition": "antiquity",
    "epithet": "Bishop of Hippo, Doctor of Grace",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Antonio%20Rodr%C3%ADguez%20-%20Saint%20Augustine%20-%20Google%20Art%20Project.jpg",
    "slug": "figures/profile.html?id=augustine",
    "works": [
      {
        "title": "The City of God",
        "url": "texts/work.html?id=augustine-city-of-god"
      },
      {
        "title": "Confessions",
        "url": "texts/work.html?id=augustine-confessions"
      },
      {
        "title": "Enchiridion on Faith, Hope, and Love",
        "url": "texts/work.html?id=augustine-enchiridion"
      },
      {
        "title": "On Christian Doctrine — Book I",
        "url": "texts/work.html?id=augustine-doctrine"
      },
      {
        "title": "On the Spirit and the Letter",
        "url": "texts/work.html?id=augustine-spirit-letter"
      },
      {
        "title": "On Grace and Free Will",
        "url": "texts/work.html?id=augustine-grace-free-will"
      },
      {
        "title": "On Nature and Grace",
        "url": "texts/work.html?id=augustine-nature-grace"
      },
      {
        "title": "On the Trinity",
        "url": "texts/work.html?id=augustine-trinity"
      },
      {
        "title": "Anti-Pelagian Writings",
        "url": "texts/work.html?id=augustine-anti-pelagian"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "cyril-alex",
    "name": "St. Cyril of Alexandria",
    "dates": "c. 376–444",
    "tradition": "antiquity",
    "epithet": "Patriarch of Alexandria, champion of the Theotokos",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Icon_St._Cyril_of_Alexandria.jpg",
    "works": [
      {
        "title": "That Christ is One",
        "url": "texts/work.html?id=cyril-incarnation"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "leo",
    "name": "St. Leo the Great",
    "dates": "c. 400–461",
    "tradition": "antiquity",
    "epithet": "Pope, Doctor of the Church",
    "img": "img/figures/pope-leo.jpg",
    "works": [
      {
        "title": "The Tome of Leo",
        "url": "texts/work.html?id=leo-tome"
      },
      {
        "title": "Sermons",
        "url": "texts/work.html?id=leo-sermons"
      },
      {
        "title": "Sermon on the Nativity",
        "url": "texts/work.html?id=leo-nativity"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "maximus",
    "name": "St. Maximus the Confessor",
    "dates": "c. 580–662",
    "tradition": "early-middle",
    "epithet": "Monk and theologian of the dyothelite controversy",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Maximus_the_Confessor.jpg",
    "works": [
      {
        "title": "Mystagogy",
        "url": "texts/work.html?id=maximus-mystagogy"
      },
      {
        "title": "Two Hundred Chapters on Theology",
        "url": "texts/work.html?id=maximus-theology-chapters"
      }
    ],
    "era": "early-middle",
    "eraLabel": "Early Middle Ages"
  },
  {
    "id": "damascene",
    "name": "St. John of Damascus",
    "dates": "c. 675–749",
    "tradition": "early-middle",
    "epithet": "Last of the Greek Church Fathers, hymnographer",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/Ioann_Damaskin_ikona.jpg",
    "works": [
      {
        "title": "An Exposition of Faith",
        "url": "texts/work.html?id=damascene-faith"
      }
    ],
    "era": "early-middle",
    "eraLabel": "Early Middle Ages"
  },
  {
    "id": "anselm",
    "name": "St. Anselm of Canterbury",
    "dates": "1033–1109",
    "tradition": "high-middle",
    "epithet": "Father of Scholasticism, ontological argument",
    "img": "img/figures/anselm.jpg",
    "works": [
      {
        "title": "Proslogion",
        "url": "texts/work.html?id=anselm-proslogion"
      },
      {
        "title": "Monologion",
        "url": "texts/work.html?id=anselm-monologion"
      },
      {
        "title": "Cur Deus Homo",
        "url": "texts/work.html?id=anselm-cur-deus-homo"
      }
    ],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "aquinas",
    "name": "St. Thomas Aquinas",
    "dates": "1225–1274",
    "tradition": "high-middle",
    "epithet": "Doctor Angelicus, author of the Summa Theologiae",
    "img": "img/figures/aquinas.jpg",
    "slug": "figures/profile.html?id=aquinas",
    "works": [
      {
        "title": "Summa Theologiae",
        "url": "texts/summa.html"
      },
      {
        "title": "Summa Contra Gentiles",
        "url": "texts/work.html?id=aquinas-contra-gentiles"
      }
    ],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "bonaventure",
    "name": "St. Bonaventure",
    "dates": "c. 1217–1274",
    "tradition": "high-middle",
    "epithet": "Seraphic Doctor, Franciscan theologian",
    "img": "img/figures/bonaventure.jpg",
    "works": [
      {
        "title": "Journey of the Mind into God (Itinerarium mentis in Deum)",
        "url": "texts/work.html?id=bonaventure-itinerarium"
      }
    ],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "teresa",
    "name": "St. Teresa of Ávila",
    "dates": "1515–1582",
    "tradition": "renaissance",
    "epithet": "Carmelite mystic, Doctor of the Church",
    "img": "img/figures/teresa.jpg",
    "works": [
      {
        "title": "The Life of Teresa of Jesus",
        "url": "texts/work.html?id=teresa-life"
      },
      {
        "title": "The Interior Castle",
        "url": "texts/work.html?id=teresa-interior-castle"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "john-cross",
    "name": "St. John of the Cross",
    "dates": "1542–1591",
    "tradition": "renaissance",
    "epithet": "Carmelite mystic, Doctor of the Church",
    "img": "img/figures/john-cross.jpg",
    "works": [
      {
        "title": "Ascent of Mount Carmel",
        "url": "texts/work.html?id=john-cross-ascent"
      },
      {
        "title": "Dark Night of the Soul",
        "url": "texts/work.html?id=john-cross-dark-night"
      },
      {
        "title": "Ascent & Dark Night (combined)",
        "url": "texts/work.html?id=john-cross-writings"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "newman",
    "name": "St. John Henry Newman",
    "dates": "1801–1890",
    "tradition": "modern",
    "epithet": "Cardinal, theorist of the development of doctrine",
    "img": "https://commons.wikimedia.org/wiki/Special:FilePath/John_Henry_Newman_by_Sir_John_Everett_Millais%2C_1st_Bt.jpg",
    "works": [
      {
        "title": "Apologia pro Vita Sua",
        "url": "texts/work.html?id=newman-apologia"
      },
      {
        "title": "An Essay on the Development of Christian Doctrine",
        "url": "texts/work.html?id=newman-development"
      }
    ],
    "era": "modern",
    "eraLabel": "Modern Age"
  },
  {
    "id": "bernard",
    "name": "St. Bernard of Clairvaux",
    "dates": "1090–1153",
    "tradition": "high-middle",
    "epithet": "Cistercian abbot, Doctor of the Church, Mellifluous Doctor",
    "img": "img/figures/bernard.jpg",
    "works": [
      {
        "title": "On Loving God",
        "url": "texts/work.html?id=bernard-loving-god"
      },
      {
        "title": "Sermons on the Song of Songs (1–43)",
        "url": "texts/work.html?id=bernard-song-sermons"
      }
    ],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "albert",
    "name": "St. Albert the Great",
    "dates": "c. 1200–1280",
    "tradition": "high-middle",
    "epithet": "Dominican, Doctor of the Church, Universal Doctor, teacher of Aquinas",
    "img": "img/figures/albert.jpg",
    "works": [
      {
        "title": "On Cleaving to God",
        "url": "texts/work.html?id=albert-cleaving"
      }
    ],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "scotus",
    "name": "Bl. John Duns Scotus",
    "dates": "c. 1266–1308",
    "tradition": "late-middle",
    "epithet": "Franciscan, Subtle Doctor, defender of the Immaculate Conception",
    "img": "img/figures/scotus.jpg",
    "works": [
      {
        "title": "On God as First Principle",
        "url": "texts/work.html?id=scotus-primo-principio"
      }
    ],
    "era": "late-middle",
    "eraLabel": "Late Middle Ages"
  },
  {
    "id": "bellarmine",
    "name": "St. Robert Bellarmine",
    "dates": "1542–1621",
    "tradition": "early-modern",
    "epithet": "Jesuit cardinal, Doctor of the Church, Controversist",
    "img": "img/figures/bellarmine.jpg",
    "works": [
      {
        "title": "The Mind's Ascent to God",
        "url": "texts/work.html?id=bellarmine-ascent"
      }
    ],
    "era": "early-modern",
    "eraLabel": "Early Modern"
  },
  {
    "id": "suarez",
    "name": "Francisco Suárez",
    "dates": "1548–1617",
    "tradition": "early-modern",
    "epithet": "Jesuit, Doctor Eximius, metaphysician and theologian",
    "img": "img/figures/suarez.png",
    "works": [
      {
        "title": "Selections on Laws, Faith, and the Virtues",
        "url": "texts/work.html?id=suarez-selections"
      }
    ],
    "era": "early-modern",
    "eraLabel": "Early Modern"
  },
  {
    "id": "giles-rome",
    "name": "Giles of Rome",
    "dates": "c. 1243–1316",
    "tradition": "late-middle",
    "epithet": "Doctor Fundatissimus · Augustinian theologian",
    "img": "img/figures/giles-rome.jpg",
    "slug": "figures/profile.html?id=giles-rome",
    "works": [
      {
        "title": "On Ecclesiastical Power (Note and Context)",
        "url": "texts/work.html?id=giles-rome-note"
      }
    ],
    "era": "late-middle",
    "eraLabel": "Late Middle Ages"
  },
  {
    "id": "nicholas-tolentine",
    "name": "St. Nicholas of Tolentine",
    "dates": "1245–1305",
    "tradition": "late-middle",
    "epithet": "Augustinian friar · Patron of the Holy Souls",
    "img": "img/figures/nicholas-tolentine.jpg",
    "slug": "figures/profile.html?id=nicholas-tolentine",
    "works": [
      {
        "title": "The Life of St. Nicholas of Tolentino",
        "url": "texts/work.html?id=nicholas-tolentino-life"
      }
    ],
    "era": "late-middle",
    "eraLabel": "Late Middle Ages"
  },
  {
    "id": "thomas-villanova",
    "name": "St. Thomas of Villanova",
    "dates": "1488–1555",
    "tradition": "renaissance",
    "epithet": "Archbishop of Valencia · Father of the Poor",
    "img": "img/figures/thomas-villanova.jpg",
    "slug": "figures/profile.html?id=thomas-villanova",
    "works": [
      {
        "title": "Selected Sermons",
        "url": "texts/work.html?id=villanova-sermons"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "rita-cascia",
    "name": "St. Rita of Cascia",
    "dates": "1381–1457",
    "tradition": "renaissance",
    "epithet": "Augustinian nun · Patron of impossible causes",
    "img": "img/figures/rita-cascia.jpg",
    "slug": "figures/profile.html?id=rita-cascia",
    "works": [
      {
        "title": "Life of St. Rita of Cascia",
        "url": "texts/work.html?id=rita-cascia-life"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "prosper-aquitaine",
    "name": "Prosper of Aquitaine",
    "dates": "c. 390–c. 463",
    "tradition": "antiquity",
    "epithet": "Disciple of Augustine · Defender of the doctrine of grace",
    "img": "img/figures/prosper-aquitaine.jpg",
    "slug": "figures/profile.html?id=prosper-aquitaine",
    "works": [
      {
        "title": "The Call of All Nations",
        "url": "texts/work.html?id=prosper-call-nations"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "hugh-st-victor",
    "name": "Hugh of St. Victor",
    "dates": "c. 1096–1141",
    "tradition": "high-middle",
    "epithet": "Victorine master · Augustinian of the heart and of study",
    "img": "img/figures/hugh-st-victor.jpg",
    "slug": "figures/profile.html?id=hugh-st-victor",
    "works": [
      {
        "title": "Didascalicon",
        "url": "texts/work.html?id=hugh-didascalicon"
      },
      {
        "title": "On the Sacraments of the Christian Faith",
        "url": "texts/work.html?id=hugh-de-sacramentis"
      }
    ],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "gregory-rimini",
    "name": "Gregory of Rimini",
    "dates": "c. 1300–1358",
    "tradition": "late-middle",
    "epithet": "Doctor Authenticus · Augustinian of grace and the will",
    "img": "img/figures/gregory-rimini.jpg",
    "slug": "figures/profile.html?id=gregory-rimini",
    "works": [
      {
        "title": "Note on His Teaching",
        "url": "texts/work.html?id=gregory-rimini-note"
      }
    ],
    "era": "late-middle",
    "eraLabel": "Late Middle Ages"
  },
  {
    "id": "benedict",
    "name": "St. Benedict of Nursia",
    "dates": "c. 480–c. 547",
    "tradition": "early-middle",
    "epithet": "Father of Western monasticism · Author of the Rule",
    "img": "img/figures/benedict.jpg",
    "slug": "figures/profile.html?id=benedict",
    "works": [
      {
        "title": "The Rule of St. Benedict",
        "url": "texts/work.html?id=benedict-rule"
      }
    ],
    "era": "early-middle",
    "eraLabel": "Early Middle Ages"
  },
  {
    "id": "scholastica",
    "name": "St. Scholastica",
    "dates": "c. 480–c. 543",
    "tradition": "early-middle",
    "epithet": "Sister of St. Benedict · Patron of Benedictine nuns",
    "img": "img/figures/scholastica.jpg",
    "slug": "figures/profile.html?id=scholastica",
    "works": [],
    "era": "early-middle",
    "eraLabel": "Early Middle Ages"
  },
  {
    "id": "gregory-great",
    "name": "St. Gregory the Great",
    "dates": "c. 540–604",
    "tradition": "early-middle",
    "epithet": "Pope · Doctor of the Church · Biographer of Benedict",
    "img": "img/figures/gregory-great.jpg",
    "slug": "figures/profile.html?id=gregory-great",
    "works": [
      {
        "title": "The Book of Pastoral Rule",
        "url": "texts/work.html?id=gregory-pastoral-rule"
      },
      {
        "title": "The Dialogues",
        "url": "texts/work.html?id=gregory-dialogues"
      },
      {
        "title": "Moralia in Job",
        "url": "texts/work.html?id=gregory-moralia"
      }
    ],
    "era": "early-middle",
    "eraLabel": "Early Middle Ages"
  },
  {
    "id": "bede",
    "name": "St. Bede the Venerable",
    "dates": "c. 673–735",
    "tradition": "early-middle",
    "epithet": "Doctor of the Church · Historian of the English people",
    "img": "img/figures/bede.jpg",
    "slug": "figures/profile.html?id=bede",
    "works": [
      {
        "title": "Ecclesiastical History of the English People",
        "url": "texts/work.html?id=bede-ecclesiastical-history"
      }
    ],
    "era": "early-middle",
    "eraLabel": "Early Middle Ages"
  },
  {
    "id": "francis",
    "name": "St. Francis of Assisi",
    "dates": "1181/82–1226",
    "tradition": "high-middle",
    "epithet": "Il Poverello · Founder of the Friars Minor",
    "img": "img/figures/francis.jpg",
    "slug": "figures/profile.html?id=francis",
    "works": [
      {
        "title": "The Rule of the Friars Minor (1223)",
        "url": "texts/work.html?id=francis-rule-1223"
      },
      {
        "title": "The Testament",
        "url": "texts/work.html?id=francis-testament"
      },
      {
        "title": "The Admonitions",
        "url": "texts/work.html?id=francis-admonitions"
      },
      {
        "title": "The Canticle of the Sun",
        "url": "texts/work.html?id=francis-canticle"
      }
    ],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "clare",
    "name": "St. Clare of Assisi",
    "dates": "1194–1253",
    "tradition": "high-middle",
    "epithet": "Foundress of the Poor Clares · Mirror of Franciscan poverty",
    "img": "img/figures/clare.jpg",
    "slug": "figures/profile.html?id=clare",
    "works": [
      {
        "title": "The Form of Life (Rule of St. Clare)",
        "url": "texts/work.html?id=clare-rule"
      }
    ],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "anthony-padua",
    "name": "St. Anthony of Padua",
    "dates": "1195–1231",
    "tradition": "high-middle",
    "epithet": "Evangelical Doctor · Wonder-worker of Padua",
    "img": "img/figures/anthony-padua.jpg",
    "slug": "figures/profile.html?id=anthony-padua",
    "works": [],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "angela-foligno",
    "name": "St. Angela of Foligno",
    "dates": "1248–1309",
    "tradition": "late-middle",
    "epithet": "Franciscan tertiary · Teacher of the theologians",
    "img": "img/figures/angela-foligno.jpg",
    "slug": "figures/profile.html?id=angela-foligno",
    "works": [
      {
        "title": "The Book of Divine Consolation",
        "url": "texts/work.html?id=angela-divine-consolation"
      }
    ],
    "era": "late-middle",
    "eraLabel": "Late Middle Ages"
  },
  {
    "id": "simon-stock",
    "name": "St. Simon Stock",
    "dates": "c. 1165–1265",
    "tradition": "high-middle",
    "epithet": "Carmelite prior general · Brown Scapular",
    "img": "img/figures/simon-stock.jpg",
    "slug": "figures/profile.html?id=simon-stock",
    "works": [],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "therese",
    "name": "St. Thérèse of Lisieux",
    "dates": "1873–1897",
    "tradition": "modern",
    "epithet": "Doctor of the Church · Little Way",
    "img": "img/figures/therese.jpg",
    "slug": "figures/profile.html?id=therese",
    "works": [
      {
        "title": "Story of a Soul",
        "url": "texts/work.html?id=therese-story-of-soul"
      }
    ],
    "era": "modern",
    "eraLabel": "Modern Age"
  },
  {
    "id": "elizabeth-trinity",
    "name": "St. Elizabeth of the Trinity",
    "dates": "1880–1906",
    "tradition": "modern",
    "epithet": "Carmelite of Dijon · Indwelling of the Trinity",
    "img": "img/figures/elizabeth-trinity.jpg",
    "slug": "figures/profile.html?id=elizabeth-trinity",
    "works": [
      {
        "title": "The Praise of Glory",
        "url": "texts/work.html?id=elizabeth-trinity-praise"
      }
    ],
    "era": "modern",
    "eraLabel": "Modern Age"
  },
  {
    "id": "edith-stein",
    "name": "St. Teresa Benedicta of the Cross (Edith Stein)",
    "dates": "1891–1942",
    "tradition": "modern",
    "epithet": "Philosopher · Carmelite martyr · Co-patroness of Europe",
    "img": "img/figures/edith-stein.jpg",
    "slug": "figures/profile.html?id=edith-stein",
    "works": [
      {
        "title": "Spiritual and Philosophical Teaching (Thematic Exposition)",
        "url": "texts/work.html?id=edith-stein-teaching"
      }
    ],
    "era": "modern",
    "eraLabel": "Modern Age"
  },
  {
    "id": "xavier",
    "name": "St. Francis Xavier",
    "dates": "1506–1552",
    "tradition": "renaissance",
    "epithet": "Apostle of the Indies · Jesuit missionary",
    "img": "img/figures/xavier.jpg",
    "slug": "figures/profile.html?id=xavier",
    "works": [
      {
        "title": "Selected Letters",
        "url": "texts/work.html?id=xavier-letters"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "faber",
    "name": "St. Peter Faber",
    "dates": "1506–1546",
    "tradition": "renaissance",
    "epithet": "First companion of Ignatius · Master of spiritual conversation",
    "img": "img/figures/faber.jpg",
    "slug": "figures/profile.html?id=faber",
    "works": [
      {
        "title": "Memoriale (Selections)",
        "url": "texts/work.html?id=faber-memoriale"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "canisius",
    "name": "St. Peter Canisius",
    "dates": "1521–1597",
    "tradition": "renaissance",
    "epithet": "Doctor of the Church · Second Apostle of Germany",
    "img": "img/figures/canisius.jpg",
    "slug": "figures/profile.html?id=canisius",
    "works": [
      {
        "title": "A Sum of Christian Doctrine (Selections)",
        "url": "texts/work.html?id=canisius-catechism"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "aloysius",
    "name": "St. Aloysius Gonzaga",
    "dates": "1568–1591",
    "tradition": "renaissance",
    "epithet": "Jesuit scholastic · Patron of youth",
    "img": "img/figures/aloysius.jpg",
    "slug": "figures/profile.html?id=aloysius",
    "works": [
      {
        "title": "Spiritual Counsels and Letters (Selections)",
        "url": "texts/work.html?id=aloysius-counsels"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "dominic",
    "name": "St. Dominic de Guzmán",
    "dates": "c. 1170–1221",
    "tradition": "high-middle",
    "epithet": "Founder of the Order of Preachers",
    "img": "img/figures/dominic.jpg",
    "slug": "figures/profile.html?id=dominic",
    "works": [],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "catherine-siena",
    "name": "St. Catherine of Siena",
    "dates": "1347–1380",
    "tradition": "late-middle",
    "epithet": "Doctor of the Church · Dominican tertiary",
    "img": "img/figures/catherine-siena.jpg",
    "slug": "figures/profile.html?id=catherine-siena",
    "works": [
      {
        "title": "The Dialogue",
        "url": "texts/work.html?id=catherine-dialogue"
      }
    ],
    "era": "late-middle",
    "eraLabel": "Late Middle Ages"
  },
  {
    "id": "vincent-ferrer",
    "name": "St. Vincent Ferrer",
    "dates": "1350–1419",
    "tradition": "late-middle",
    "epithet": "Dominican preacher · Angel of the Judgment",
    "img": "img/figures/vincent-ferrer.jpg",
    "slug": "figures/profile.html?id=vincent-ferrer",
    "works": [
      {
        "title": "Treatise on the Spiritual Life (Selections)",
        "url": "texts/work.html?id=vincent-ferrer-spiritual-life"
      }
    ],
    "era": "late-middle",
    "eraLabel": "Late Middle Ages"
  },
  {
    "id": "martin-porres",
    "name": "St. Martin de Porres",
    "dates": "1579–1639",
    "tradition": "early-modern",
    "epithet": "Dominican brother · Patron of mixed-race people and the poor",
    "img": "img/figures/martin-porres.jpg",
    "slug": "figures/profile.html?id=martin-porres",
    "works": [
      {
        "title": "Life and Virtues (Traditional Account — Summary)",
        "url": "texts/work.html?id=martin-porres-life"
      }
    ],
    "era": "early-modern",
    "eraLabel": "Early Modern"
  },
  {
    "id": "anthony-great",
    "name": "St. Anthony the Great",
    "dates": "c. 251–356",
    "tradition": "antiquity",
    "epithet": "Father of Monks · Desert hermit",
    "img": "img/figures/anthony-great.jpg",
    "slug": "figures/profile.html?id=anthony-great",
    "works": [
      {
        "title": "Apophthegmata Patrum (Sayings of the Desert Fathers)",
        "url": "texts/work.html?id=apophthegmata-patrum"
      },
      {
        "title": "The Seven Letters",
        "url": "texts/work.html?id=anthony-seven-letters"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "syncletica",
    "name": "St. Syncletica of Alexandria",
    "dates": "c. 270–c. 350",
    "tradition": "antiquity",
    "epithet": "Desert Mother · teacher of endurance",
    "img": "img/figures/syncletica.jpg",
    "slug": "figures/profile.html?id=syncletica",
    "works": [
      {
        "title": "Apophthegmata Patrum (Sayings of the Desert Fathers)",
        "url": "texts/work.html?id=apophthegmata-patrum"
      },
      {
        "title": "Twenty-Eight Spiritual Sayings",
        "url": "texts/work.html?id=syncletica-sayings"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "pachomius",
    "name": "St. Pachomius the Great",
    "dates": "c. 292–348",
    "tradition": "antiquity",
    "epithet": "Father of cenobitic monasticism",
    "img": "img/figures/pachomius.jpg",
    "slug": "figures/profile.html?id=pachomius",
    "works": [
      {
        "title": "Apophthegmata Patrum (Sayings of the Desert Fathers)",
        "url": "texts/work.html?id=apophthegmata-patrum"
      },
      {
        "title": "The Rule of Saint Pachomius",
        "url": "texts/work.html?id=pachomius-rule"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "macarius",
    "name": "St. Macarius of Egypt",
    "dates": "c. 300–391",
    "tradition": "antiquity",
    "epithet": "Abba of Scetis · Desert father",
    "img": "img/figures/macarius.jpg",
    "slug": "figures/profile.html?id=macarius",
    "works": [
      {
        "title": "Apophthegmata Patrum (Sayings of the Desert Fathers)",
        "url": "texts/work.html?id=apophthegmata-patrum"
      },
      {
        "title": "The Fifty Spiritual Homilies",
        "url": "texts/work.html?id=macarius-fifty-homilies"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "evagrius",
    "name": "Evagrius Ponticus",
    "dates": "345–399",
    "tradition": "antiquity",
    "epithet": "Theorist of the eight thoughts · Desert ascetic",
    "img": "img/figures/evagrius.jpg",
    "slug": "figures/profile.html?id=evagrius",
    "works": [
      {
        "title": "Apophthegmata Patrum (Sayings of the Desert Fathers)",
        "url": "texts/work.html?id=apophthegmata-patrum"
      },
      {
        "title": "The Praktikos",
        "url": "texts/work.html?id=evagrius-praktikos"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "cassian",
    "name": "St. John Cassian",
    "dates": "c. 360–c. 435",
    "tradition": "antiquity",
    "epithet": "Bridge of Desert wisdom to the Latin West",
    "img": "img/figures/cassian.jpg",
    "slug": "figures/profile.html?id=cassian",
    "works": [
      {
        "title": "The Conferences",
        "url": "texts/work.html?id=cassian-conferences"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "moses-black",
    "name": "St. Moses the Black",
    "dates": "c. 330–405",
    "tradition": "antiquity",
    "epithet": "Desert Father · repentance",
    "img": "img/figures/moses-black.jpg",
    "slug": "figures/profile.html?id=moses-black",
    "works": [
      {
        "title": "Apophthegmata Patrum (Sayings of the Desert Fathers)",
        "url": "texts/work.html?id=apophthegmata-patrum"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "arsenius",
    "name": "St. Arsenius the Great",
    "dates": "c. 354–449",
    "tradition": "antiquity",
    "epithet": "Desert solitary · silence",
    "img": "img/figures/arsenius.jpg",
    "slug": "figures/profile.html?id=arsenius",
    "works": [
      {
        "title": "The Collected Sayings of Abba Arsenios",
        "url": "texts/work.html?id=arsenius-sayings"
      },
      {
        "title": "Apophthegmata Patrum (Sayings of the Desert Fathers)",
        "url": "texts/work.html?id=apophthegmata-patrum"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "poemen",
    "name": "Abba Poemen",
    "dates": "c. 340–450",
    "tradition": "antiquity",
    "epithet": "Desert abba · sayings",
    "img": "img/figures/poemen.jpg",
    "slug": "figures/profile.html?id=poemen",
    "works": [
      {
        "title": "Apophthegmata Patrum (Sayings of the Desert Fathers)",
        "url": "texts/work.html?id=apophthegmata-patrum"
      },
      {
        "title": "Apophthegmata Patrum (Sayings of Abba Poemen)",
        "url": "texts/work.html?id=poemen-apophthegmata"
      }
    ],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "odo-cluny",
    "name": "St. Odo of Cluny",
    "dates": "c. 878–942",
    "tradition": "early-middle",
    "epithet": "Cluniac reformer",
    "img": "img/figures/odo-cluny.jpg",
    "slug": "figures/profile.html?id=odo-cluny",
    "works": [
      {
        "title": "Life of St. Gerald of Aurillac",
        "url": "texts/work.html?id=odo-gerald"
      }
    ],
    "era": "early-middle",
    "eraLabel": "Early Middle Ages"
  },
  {
    "id": "hildegard",
    "name": "St. Hildegard of Bingen",
    "dates": "1098–1179",
    "tradition": "high-middle",
    "epithet": "Doctor · abbess · visionary",
    "img": "img/figures/hildegard.jpg",
    "slug": "figures/profile.html?id=hildegard",
    "works": [],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "gertrude",
    "name": "St. Gertrude the Great",
    "dates": "1256–1302",
    "tradition": "late-middle",
    "epithet": "Herald of divine love · Helfta mystic",
    "img": "img/figures/gertrude.jpg",
    "slug": "figures/profile.html?id=gertrude",
    "works": [
      {
        "title": "Life and Revelations (Selections)",
        "url": "texts/work.html?id=gertrude-revelations"
      }
    ],
    "era": "late-middle",
    "eraLabel": "Late Middle Ages"
  },
  {
    "id": "magdalene-pazzi",
    "name": "St. Mary Magdalene de Pazzi",
    "dates": "1566–1607",
    "tradition": "early-modern",
    "epithet": "Carmelite mystic",
    "img": "img/figures/magdalene-pazzi.jpg",
    "slug": "figures/profile.html?id=magdalene-pazzi",
    "works": [
      {
        "title": "Selected Revelations and Counsels",
        "url": "texts/work.html?id=pazzi-revelations"
      }
    ],
    "era": "early-modern",
    "eraLabel": "Early Modern"
  },
  {
    "id": "titus-brandsma",
    "name": "St. Titus Brandsma",
    "dates": "1881–1942",
    "tradition": "modern",
    "epithet": "Carmelite martyr",
    "img": "img/figures/titus-brandsma.jpg",
    "slug": "figures/profile.html?id=titus-brandsma",
    "works": [
      {
        "title": "Spiritual Teaching (Thematic Exposition)",
        "url": "texts/work.html?id=brandsma-teaching"
      }
    ],
    "era": "modern",
    "eraLabel": "Modern Age"
  },
  {
    "id": "colette",
    "name": "St. Colette of Corbie",
    "dates": "1381–1447",
    "tradition": "late-middle",
    "epithet": "Poor Clare reformer",
    "img": "img/figures/colette.jpg",
    "slug": "figures/profile.html?id=colette",
    "works": [
      {
        "title": "Life of St. Colette of Corbie",
        "url": "texts/work.html?id=colette-life"
      }
    ],
    "era": "late-middle",
    "eraLabel": "Late Middle Ages"
  },
  {
    "id": "kolbe",
    "name": "St. Maximilian Kolbe",
    "dates": "1894–1941",
    "tradition": "modern",
    "epithet": "Franciscan martyr",
    "img": "img/figures/kolbe.jpg",
    "slug": "figures/profile.html?id=kolbe",
    "works": [
      {
        "title": "Marian Spirituality and Martyrdom (Thematic Exposition)",
        "url": "texts/work.html?id=kolbe-spirituality"
      }
    ],
    "era": "modern",
    "eraLabel": "Modern Age"
  },
  {
    "id": "elizabeth-hungary",
    "name": "St. Elizabeth of Hungary",
    "dates": "1207–1231",
    "tradition": "high-middle",
    "epithet": "Franciscan tertiary",
    "img": "img/figures/scholastica.jpg",
    "slug": "figures/profile.html?id=elizabeth-hungary",
    "works": [
      {
        "title": "The Revelations of St. Elizabeth",
        "url": "texts/work.html?id=elizabeth-revelations"
      }
    ],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "hyacinth",
    "name": "St. Hyacinth of Poland",
    "dates": "c. 1185–1257",
    "tradition": "high-middle",
    "epithet": "Dominican apostle",
    "img": "img/figures/hyacinth.jpg",
    "slug": "figures/profile.html?id=hyacinth",
    "works": [],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "pius-v",
    "name": "St. Pius V",
    "dates": "1504–1572",
    "tradition": "renaissance",
    "epithet": "Dominican pope",
    "img": "img/figures/pius-v.jpg",
    "slug": "figures/profile.html?id=pius-v",
    "works": [
      {
        "title": "Quo Primum (Promulgation of the Roman Missal)",
        "url": "texts/work.html?id=pius-v-quo-primum"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "rose-lima",
    "name": "St. Rose of Lima",
    "dates": "1586–1617",
    "tradition": "early-modern",
    "epithet": "First saint of the Americas",
    "img": "img/figures/rose-lima.jpg",
    "slug": "figures/profile.html?id=rose-lima",
    "works": [
      {
        "title": "Spiritual Maxims and Counsels (Selections)",
        "url": "texts/work.html?id=rose-lima-maxims"
      }
    ],
    "era": "early-modern",
    "eraLabel": "Early Modern"
  },
  {
    "id": "stanislaus",
    "name": "St. Stanislaus Kostka",
    "dates": "1550–1568",
    "tradition": "renaissance",
    "epithet": "Jesuit novice",
    "img": "img/figures/stanislaus.jpg",
    "slug": "figures/profile.html?id=stanislaus",
    "works": [
      {
        "title": "Spiritual Counsels and Letters (Selections)",
        "url": "texts/work.html?id=stanislaus-counsels"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "campion",
    "name": "St. Edmund Campion",
    "dates": "1540–1581",
    "tradition": "renaissance",
    "epithet": "Jesuit martyr",
    "img": "img/figures/campion.jpg",
    "slug": "figures/profile.html?id=campion",
    "works": [
      {
        "title": "Challenge to the Privy Council (Campion’s Brag)",
        "url": "texts/work.html?id=campion-brag"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "colombiere",
    "name": "St. Claude de la Colombière",
    "dates": "1641–1682",
    "tradition": "early-modern",
    "epithet": "Sacred Heart apostle",
    "img": "img/figures/colombiere.jpg",
    "slug": "figures/profile.html?id=colombiere",
    "works": [
      {
        "title": "Spiritual Writings (Selections on the Sacred Heart)",
        "url": "texts/work.html?id=colombiere-sacred-heart"
      }
    ],
    "era": "early-modern",
    "eraLabel": "Early Modern"
  },
  {
    "id": "ignatius-loyola",
    "name": "St. Ignatius of Loyola",
    "dates": "1491–1556",
    "tradition": "renaissance",
    "epithet": "Founder of the Society of Jesus",
    "img": "img/figures/ignatius-loyola.jpg",
    "slug": "figures/profile.html?id=ignatius-loyola",
    "works": [
      {
        "title": "The Spiritual Exercises (Full Text)",
        "url": "texts/work.html?id=loyola-exercises"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "peter",
    "name": "St. Peter",
    "dates": "c. 30–64/67",
    "tradition": "antiquity",
    "epithet": "Prince of the Apostles, first Bishop of Rome",
    "img": "img/figures/pope-peter.jpg",
    "works": [],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "clement-i",
    "name": "St. Clement I",
    "dates": "c. 88–97",
    "tradition": "antiquity",
    "epithet": "Apostolic Father, Bishop of Rome",
    "img": "img/figures/pope-clement-i.jpg",
    "works": [],
    "era": "antiquity",
    "eraLabel": "Antiquity"
  },
  {
    "id": "gregory-vii",
    "name": "St. Gregory VII",
    "dates": "1073–1085",
    "tradition": "high-middle",
    "epithet": "Gregorian Reform, Hildebrand",
    "img": "img/figures/pope-gregory-vii.jpg",
    "works": [
      {
        "title": "Dictatus Papae",
        "url": "texts/work.html?id=gregory-vii-dictatus"
      }
    ],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "innocent-iii",
    "name": "Innocent III",
    "dates": "1198–1216",
    "tradition": "high-middle",
    "epithet": "Fourth Lateran Council",
    "img": "img/figures/pope-innocent-iii.jpg",
    "works": [
      {
        "title": "On the Misery of the Human Condition (Selections)",
        "url": "texts/work.html?id=innocent-misery"
      }
    ],
    "era": "high-middle",
    "eraLabel": "High Middle Ages"
  },
  {
    "id": "pius-ix",
    "name": "Bl. Pius IX",
    "dates": "1846–1878",
    "tradition": "modern",
    "epithet": "Immaculate Conception, Vatican I",
    "img": "img/figures/pope-pius-ix.jpg",
    "works": [
      {
        "title": "Ineffabilis Deus",
        "url": "texts/work.html?id=pius-ix-ineffabilis"
      },
      {
        "title": "Quanta Cura",
        "url": "texts/work.html?id=pius-ix-quanta-cura"
      },
      {
        "title": "Syllabus of Errors",
        "url": "texts/work.html?id=pius-ix-syllabus"
      }
    ],
    "era": "modern",
    "eraLabel": "Modern Age"
  },
  {
    "id": "leo-xiii",
    "name": "Leo XIII",
    "dates": "1878–1903",
    "tradition": "modern",
    "epithet": "Rerum Novarum, Thomistic revival",
    "img": "img/figures/pope-leo-xiii.jpg",
    "works": [
      {
        "title": "Rerum Novarum",
        "url": "texts/work.html?id=leo-xiii-rerum-novarum"
      },
      {
        "title": "Aeterni Patris",
        "url": "texts/work.html?id=leo-xiii-aeterni-patris"
      }
    ],
    "era": "modern",
    "eraLabel": "Modern Age"
  },
  {
    "id": "pius-x",
    "name": "St. Pius X",
    "dates": "1903–1914",
    "tradition": "modern",
    "epithet": "Restore all things in Christ",
    "img": "img/figures/pope-pius-x.jpg",
    "works": [
      {
        "title": "Pascendi Dominici Gregis",
        "url": "texts/work.html?id=pius-x-pascendi"
      },
      {
        "title": "Acerbo Nimis",
        "url": "texts/work.html?id=pius-x-acerbo"
      }
    ],
    "era": "modern",
    "eraLabel": "Modern Age"
  },
  {
    "id": "pius-xii",
    "name": "Pius XII",
    "dates": "1939–1958",
    "tradition": "postwar",
    "epithet": "Assumption, Mystici Corporis",
    "img": "img/figures/pope-pius-xii.jpg",
    "works": [
      {
        "title": "Mystici Corporis Christi",
        "url": "texts/work.html?id=pius-xii-mystici"
      },
      {
        "title": "Mediator Dei",
        "url": "texts/work.html?id=pius-xii-mediator"
      },
      {
        "title": "Munificentissimus Deus",
        "url": "texts/work.html?id=pius-xii-munificentissimus"
      }
    ],
    "era": "postwar",
    "eraLabel": "Postwar Period"
  },
  {
    "id": "john-xxiii",
    "name": "St. John XXIII",
    "dates": "1958–1963",
    "tradition": "postwar",
    "epithet": "Convoked Vatican II",
    "img": "img/figures/pope-john-xxiii.jpg",
    "works": [
      {
        "title": "Pacem in Terris",
        "url": "texts/work.html?id=john-xxiii-pacem"
      }
    ],
    "era": "postwar",
    "eraLabel": "Postwar Period"
  },
  {
    "id": "paul-vi",
    "name": "St. Paul VI",
    "dates": "1963–1978",
    "tradition": "contemporary",
    "epithet": "Humanae Vitae, closed Vatican II",
    "img": "img/figures/pope-paul-vi.jpg",
    "works": [
      {
        "title": "Humanae Vitae",
        "url": "texts/work.html?id=paul-vi-humanae"
      }
    ],
    "era": "contemporary",
    "eraLabel": "Contemporary"
  },
  {
    "id": "john-paul-ii",
    "name": "St. John Paul II",
    "dates": "1978–2005",
    "tradition": "contemporary",
    "epithet": "Totus Tuus, Catechism",
    "img": "img/figures/pope-john-paul-ii.jpg",
    "works": [
      {
        "title": "Redemptor Hominis",
        "url": "texts/work.html?id=jp2-redemptor"
      },
      {
        "title": "Evangelium Vitae",
        "url": "texts/work.html?id=jp2-evangelium-vitae"
      }
    ],
    "era": "contemporary",
    "eraLabel": "Contemporary"
  },
  {
    "id": "benedict-xvi",
    "name": "Benedict XVI",
    "dates": "2005–2013",
    "tradition": "contemporary",
    "epithet": "Co-worker of the truth",
    "img": "img/figures/pope-benedict-xvi.jpg",
    "works": [
      {
        "title": "Deus Caritas Est",
        "url": "texts/work.html?id=bxvi-deus-caritas"
      },
      {
        "title": "Caritas in Veritate",
        "url": "texts/work.html?id=bxvi-caritas-veritate"
      }
    ],
    "era": "contemporary",
    "eraLabel": "Contemporary"
  },
  {
    "id": "pope-francis",
    "name": "Francis",
    "dates": "2013–2025",
    "tradition": "contemporary",
    "epithet": "Bishop of Rome · Evangelii Gaudium",
    "img": "img/figures/pope-francis.jpg",
    "works": [
      {
        "title": "Lumen Fidei",
        "url": "texts/work.html?id=francis-lumen-fidei"
      },
      {
        "title": "Laudato Si’",
        "url": "texts/work.html?id=francis-laudato-si"
      }
    ],
    "era": "contemporary",
    "eraLabel": "Contemporary"
  },
  {
    "id": "alphonsus",
    "name": "St. Alphonsus Liguori",
    "dates": "1696–1787",
    "tradition": "revolutions",
    "epithet": "Doctor of moral theology · Apostle of the confessional",
    "img": "img/figures/alphonsus.jpg",
    "slug": "figures/profile.html?id=alphonsus",
    "works": [
      {
        "title": "The Glories of Mary",
        "url": "texts/work.html?id=alphonsus-glories-mary"
      },
      {
        "title": "Visits to the Blessed Sacrament and to the Blessed Virgin Mary",
        "url": "texts/work.html?id=alphonsus-visits"
      },
      {
        "title": "Practice of the Love of Jesus Christ",
        "url": "texts/work.html?id=alphonsus-practice-love"
      },
      {
        "title": "Theologia Moralis"
      }
    ],
    "era": "revolutions",
    "eraLabel": "Age of Revolutions"
  },
  {
    "id": "montfort",
    "name": "St. Louis-Marie de Montfort",
    "dates": "1673–1716",
    "tradition": "early-modern",
    "epithet": "Apostle of Total Consecration to Mary",
    "img": "img/figures/montfort.jpg",
    "slug": "figures/profile.html?id=montfort",
    "works": [
      {
        "title": "True Devotion to the Blessed Virgin",
        "url": "texts/work.html?id=montfort-true-devotion"
      },
      {
        "title": "The Secret of Mary",
        "url": "texts/work.html?id=montfort-secret-mary"
      },
      {
        "title": "The Love of Eternal Wisdom"
      }
    ],
    "era": "early-modern",
    "eraLabel": "Early Modern"
  },
  {
    "id": "scheeben",
    "name": "Matthias Joseph Scheeben",
    "dates": "1835–1888",
    "tradition": "modern",
    "epithet": "Theologian of the supernatural · Mysteries of Christianity",
    "img": "img/figures/scheeben.jpg",
    "slug": "figures/profile.html?id=scheeben",
    "works": [
      {
        "title": "The Mysteries of Christianity (Thematic Exposition)",
        "url": "texts/work.html?id=scheeben-mysteries"
      },
      {
        "title": "Nature and Grace"
      },
      {
        "title": "Handbook of Catholic Dogmatics"
      }
    ],
    "era": "modern",
    "eraLabel": "Modern Age"
  },
  {
    "id": "francis-de-sales",
    "name": "St. Francis de Sales",
    "dates": "1567–1622",
    "tradition": "early-modern",
    "epithet": "Doctor of divine love · Gentleman saint",
    "img": "img/figures/francis-de-sales.jpg",
    "slug": "figures/profile.html?id=francis-de-sales",
    "works": [
      {
        "title": "Introduction to the Devout Life",
        "url": "texts/work.html?id=sales-devout-life"
      },
      {
        "title": "Treatise on the Love of God (Selections)",
        "url": "texts/work.html?id=sales-love-of-god"
      }
    ],
    "era": "early-modern",
    "eraLabel": "Early Modern"
  },
  {
    "id": "faustina",
    "name": "St. Faustina Kowalska",
    "dates": "1905–1938",
    "tradition": "modern",
    "epithet": "Apostle of Divine Mercy",
    "img": "img/figures/faustina.jpg",
    "slug": "figures/profile.html?id=faustina",
    "works": [
      {
        "title": "Divine Mercy Spirituality (Thematic Exposition)",
        "url": "texts/work.html?id=faustina-divine-mercy"
      }
    ],
    "era": "modern",
    "eraLabel": "Modern Age"
  },
  {
    "id": "john-st-thomas",
    "name": "John of St. Thomas",
    "dates": "1589–1644",
    "tradition": "early-modern",
    "epithet": "Thomist · João Poinsot",
    "img": "img/figures/john-st-thomas.jpg",
    "slug": "figures/profile.html?id=john-st-thomas",
    "works": [
      {
        "title": "Life and Works Overview",
        "url": "texts/work.html?id=john-st-thomas-overview"
      },
      {
        "title": "The Gifts of the Holy Spirit (Selections)",
        "url": "texts/work.html?id=john-st-thomas-gifts"
      },
      {
        "title": "On Signs (Selections)",
        "url": "texts/work.html?id=john-st-thomas-signs"
      }
    ],
    "era": "early-modern",
    "eraLabel": "Early Modern"
  },
  {
    "id": "cajetan",
    "name": "Cardinal Cajetan",
    "dates": "1469–1534",
    "tradition": "renaissance",
    "epithet": "Tommaso de Vio · Thomist commentator",
    "img": "img/figures/cajetan.jpg",
    "slug": "figures/profile.html?id=cajetan",
    "works": [
      {
        "title": "On the Authority of the Pope and the Council (Selections)",
        "url": "texts/work.html?id=cajetan-pope-council"
      },
      {
        "title": "Commentary on the Summa Theologiae"
      },
      {
        "title": "Opuscula omnia"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "isaac-syrian",
    "name": "St. Isaac the Syrian",
    "dates": "c. 613–c. 700",
    "tradition": "early-middle",
    "epithet": "Bishop of Nineveh · Ascetical Homilies",
    "img": "img/figures/isaac-syrian.jpg",
    "works": [
      {
        "title": "Ascetical Homilies",
        "url": "texts/work.html?id=isaac-ascetical-homilies"
      }
    ],
    "era": "early-middle",
    "eraLabel": "Early Middle Ages"
  },
  {
    "id": "denis-carthusian",
    "name": "Bl. Denis the Carthusian",
    "slug": "figures/profile.html?id=denis-carthusian",
    "dates": "1402–1471",
    "tradition": "renaissance",
    "epithet": "Doctor Ecstaticus · Carthusian mystic and theologian",
    "img": "img/figures/denis-carthusian.jpg",
    "works": [
      {
        "title": "Life and Writings Overview",
        "url": "texts/work.html?id=denis-carthusian-life"
      }
    ],
    "era": "renaissance",
    "eraLabel": "Renaissance"
  },
  {
    "id": "vianney",
    "name": "St. John Vianney",
    "dates": "1786–1859",
    "tradition": "modern",
    "epithet": "Curé of Ars · Patron of parish priests",
    "img": "img/figures/vianney.jpg",
    "slug": "figures/profile.html?id=vianney",
    "works": [
      {
        "title": "The Little Catechism of the Curé of Ars",
        "url": "texts/work.html?id=vianney-catechism"
      },
      {
        "title": "Selected Sermons",
        "url": "texts/work.html?id=vianney-sermons"
      }
    ],
    "era": "modern",
    "eraLabel": "Modern Age"
  },
  {
    "id": "padre-pio",
    "name": "St. Pio of Pietrelcina",
    "dates": "1887–1968",
    "tradition": "postwar",
    "epithet": "Padre Pio · Capuchin stigmatic",
    "img": "img/figures/padre-pio.jpg",
    "slug": "figures/profile.html?id=padre-pio",
    "works": [
      {
        "title": "Spiritual Counsels (Traditional Account)",
        "url": "texts/work.html?id=padre-pio-counsels"
      }
    ],
    "era": "postwar",
    "eraLabel": "Postwar Period"
  },
  {
    "id": "leo-xiv",
    "name": "Pope Leo XIV",
    "dates": "b. 1955 · elected 2025",
    "tradition": "contemporary",
    "epithet": "Bishop of Rome · Most recent figure",
    "img": "img/figures/leo-xiv.jpg",
    "slug": "figures/profile.html?id=leo-xiv",
    "works": [
      {
        "title": "Magnifica Humanitas",
        "url": "texts/work.html?id=leo-xiv-magnifica"
      }
    ],
    "era": "contemporary",
    "eraLabel": "Contemporary"
  }
];

function monogram(name) {
  const parts = String(name || '')
    .replace(/^St\.?\s+/i, '')
    .replace(/of\s|the\s/gi, '')
    .split(/\s+/)
    .filter(Boolean);
  return ((parts[0] && parts[0][0]) || '?') + ((parts[1] && parts[1][0]) || '');
}

/** Monogram only — used in the directory list so we never load 30+ remote images at once. */
function monogramHTML(fig) {
  const t = TRADITION_COLORS[fig.tradition] || TRADITION_COLORS["high-middle"];
  return '<span class="monogram" style="color:' + t.color + '">' + monogram(fig.name).toUpperCase() + '</span>';
}

/** Full portrait for the selected profile only. */
function portraitHTML(fig) {
  const t = TRADITION_COLORS[fig.tradition] || TRADITION_COLORS["high-middle"];
  if (fig.img) {
    const mono = monogram(fig.name).toUpperCase();
    return '<img src="' + fig.img + '" alt="Portrait of ' + fig.name + '" loading="lazy" decoding="async" width="120" height="120" onerror="this.outerHTML=\'<span class=monogram style=color:' + t.color + '>' + mono + '</span>\'">';
  }
  return monogramHTML(fig);
}
