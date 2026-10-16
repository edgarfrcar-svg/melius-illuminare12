/**
 * Store — genre cards → curated external sources.
 */
(function (global) {
  "use strict";
  global.STORE_DATA = {
  "title": "Store",
  "latin": "Taberna",
  "definition": "Curated sources for books, sacred art, and religious goods — each path leads to trusted publishers and artisans.",
  "categories": [
    {
      "id": "books",
      "name": "Books",
      "latin": "Libri",
      "blurb": "Scripture, missals, spiritual classics, theology, and the Fathers.",
      "links": [
        {
          "name": "TAN Books",
          "url": "https://tanbooks.com/",
          "blurb": "A long-standing Catholic publisher of saints’ lives, spiritual classics, traditional catechesis, and family reading — strong on the older devotional tradition."
        },
        {
          "name": "Bibliotheca",
          "url": "https://www.bibliotheca.co/",
          "blurb": "Fine, minimalist editions of the Bible designed for continuous reading — craft typography and binding rather than study notes."
        },
        {
          "name": "Sophia Institute Press",
          "url": "https://sophiainstitute.com/",
          "blurb": "Contemporary Catholic press for doctrine, spiritual theology, conversion stories, and clear apologetics aimed at the educated lay reader."
        },
        {
          "name": "Angelus Press — 1962 Daily Missal",
          "url": "https://angeluspress.org/products/1962-roman-catholic-daily-missal",
          "blurb": "Publisher of the Society of St. Pius X. Their 1962 Roman Catholic Daily Missal is a standard hand missal for the Traditional Latin Mass."
        },
        {
          "name": "NRSVCE Illustrated Catholic Bible",
          "url": "https://www.amazon.ca/NRSVCE-Illustrated-Catholic-Leathersoft-Comfort/dp/0785239634",
          "blurb": "New Revised Standard Version, Catholic Edition, in an illustrated leathersoft format — readable modern translation with the full Catholic canon."
        },
        {
          "name": "Christian B. Wagner",
          "url": "https://www.christianbwagner.com/team-1-1",
          "blurb": "Independent Catholic bookseller and content creator focused on traditional theology, Thomism, and carefully chosen spiritual titles."
        },
        {
          "name": "Accordance — Schaff’s Church Fathers",
          "url": "https://www.accordancebible.com/product/schaffs-church-fathers-and-church-history-modules/",
          "blurb": "Digital modules of the Nicene and Post-Nicene Fathers (Schaff) and related church history — searchable library for patristic study."
        },
        {
          "name": "Ignatius Press",
          "url": "https://ignatius.com/",
          "blurb": "Major Catholic publisher founded by Fr. Joseph Fessio, S.J.: Scripture (Ignatius Study Bible), Ratzinger/Benedict, classics, fiction, and film."
        },
        {
          "name": "Penguin Shop",
          "url": "https://penguinshop.ca/",
          "blurb": "Canadian bookseller with a strong selection of classics and contemporary titles — a practical source for building a home library alongside explicitly Catholic presses."
        }
      ]
    },
    {
      "id": "catholic-art",
      "name": "Catholic Art",
      "latin": "Ars sacra",
      "blurb": "Prints, icons, and sacred images for the home, chapel, and study.",
      "links": [
        {
          "name": "Catholic Art",
          "url": "https://www.catholicart.com/",
          "blurb": "Broad catalog of traditional Catholic fine art prints and reproductions — saints, Madonna and Child, Passion scenes, and liturgical subjects."
        },
        {
          "name": "Beata Home",
          "url": "https://beatahome.com/",
          "blurb": "Sacred art and home goods with a contemplative aesthetic — pieces meant to make the household feel more like an oratory."
        },
        {
          "name": "House of Joppa",
          "url": "https://www.houseofjoppa.com/",
          "blurb": "Catholic lifestyle and art shop: prints, statues, and religious décor with a modern-traditional sense of beauty."
        },
        {
          "name": "Catholic Art Company",
          "url": "https://catholicartcompany.com/",
          "blurb": "Dedicated Catholic art retailer — classical and contemporary sacred images, often with framed options, for gifting and home enthronement."
        },
        {
          "name": "Legacy Icons",
          "url": "https://legacyicons.com/",
          "blurb": "High-quality Byzantine and Orthodox-style icons of Christ, the Theotokos, and the saints for prayer corners."
        },
        {
          "name": "Monastère VMC — Byzantine Icons",
          "url": "https://www.monasterevmc.org/collections/byzantine-orthodox-icons",
          "blurb": "Icons from the monastic tradition of the Monastère de la Vierge Marie Consolatrice — Byzantine imagery rooted in liturgical life."
        },
        {
          "name": "Catholic Art and Jewelry",
          "url": "https://www.catholicartandjewelry.com/",
          "blurb": "Sacred art prints and Catholic jewelry in one place — accessible pieces for personal devotion and gifts."
        }
      ]
    },
    {
      "id": "religious-items",
      "name": "Religious Items",
      "latin": "Res sacrae",
      "blurb": "Rosaries, sacramentals, and goods for the domestic church.",
      "links": [
        {
          "name": "Joseph’s Inspirational",
          "url": "https://www.josephsinspirational.ca/",
          "blurb": "Canadian Catholic gift and sacramental shop — medals, statues, rosaries, and seasonal religious goods for home and parish."
        },
        {
          "name": "Liturgy of the Home",
          "url": "https://www.liturgyofthehome.com/",
          "blurb": "Goods and guidance for living the liturgical year at home — art, calendars, and practices that extend the Church’s seasons into the household."
        },
        {
          "name": "Theotokos Rosaries",
          "url": "https://www.theotokosrosaries.com/",
          "blurb": "Handcrafted rosaries with attention to beauty and durability — made for daily prayer rather than disposable souvenirs."
        },
        {
          "name": "Catholic Woodworker",
          "url": "https://catholicwoodworker.com/",
          "blurb": "Handcrafted wooden religious goods — crosses, home altars, and durable pieces made for daily Catholic life."
        },
        {
          "name": "Ziegler’s",
          "url": "https://www.zieglers.com/",
          "blurb": "Long-established Catholic goods supplier — vestments, vessels, statues, rosaries, and church furnishings."
        },
        {
          "name": "West Coast Catholic",
          "url": "https://westcoastcatholic.co/",
          "blurb": "Modern Catholic lifestyle brand — rosaries, jewelry, and accessories with a clean West Coast aesthetic."
        },
        {
          "name": "The Combat Rosary",
          "url": "https://store.catholicgentleman.com/products/the-combat-rosary?variant=45477014864068",
          "blurb": "From The Catholic Gentleman: a sturdy, military-inspired rosary built for men who pray on the go."
        }
      ]
    },
    {
      "id": "merch",
      "name": "Merch & Cool Stuff",
      "latin": "Mercatura",
      "blurb": "Apparel, flags, coffee, and distinctive Catholic gear.",
      "links": [
        {
          "name": "Hardcore Catholics",
          "url": "https://hardcorecatholics.com/",
          "blurb": "Bold Catholic apparel and merchandise — unapologetic designs for streetwear and everyday witness."
        },
        {
          "name": "Sanctus Co.",
          "url": "https://sanctusco.com/",
          "blurb": "Catholic streetwear and accessories with sacred imagery and a contemporary brand feel."
        },
        {
          "name": "The Little Rose Shop — Sweatshirts",
          "url": "https://thelittleroseshop.com/collections/sweatshirts",
          "blurb": "Soft Catholic sweatshirts and apparel from The Little Rose Shop — cozy gear with a devotional edge."
        },
        {
          "name": "The Catholic Company — Apparel",
          "url": "https://www.catholiccompany.com/collections/apparel",
          "blurb": "Large Catholic retailer apparel line — t-shirts, hoodies, and wearables for all ages."
        },
        {
          "name": "Trad Flags",
          "url": "https://tradflags.com/",
          "blurb": "Traditional Catholic and papal flags for the home, procession, or parish hall."
        },
        {
          "name": "Seattle Engraving Center — Cathedral",
          "url": "https://seattleengravingcenter.com/collections/cathedral",
          "blurb": "Engraved cathedral and sacred architecture pieces — distinctive keepsakes and desk items."
        },
        {
          "name": "Roman Rite Crafts",
          "url": "https://www.romanritecrafts.com/",
          "blurb": "Crafted items oriented to the Roman Rite — traditional Catholic aesthetic in wearable and gift form."
        },
        {
          "name": "Mystic Monk Coffee",
          "url": "https://www.mysticmonkcoffee.com/",
          "blurb": "Coffee roasted by the Carmelite monks of Wyoming — support contemplative life with every bag."
        },
        {
          "name": "Catholic Coffee",
          "url": "https://www.catholiccoffee.com/",
          "blurb": "Catholic-owned coffee brand — roasts and blends marketed for the faithful who take both espresso and doctrine seriously."
        },
        {
          "name": "House of Bruar",
          "url": "https://www.houseofbruar.com/ca/",
          "blurb": "Scottish country clothing and outdoor wear — tweeds, knitwear, and classic Highland style for the wardrobe that outlasts trends."
        },
        {
          "name": "Scottish Shop",
          "url": "https://scottishshop.com/",
          "blurb": "Kilts, tartans, highland dress, and Scottish gifts — clan heritage and formal Highland attire."
        },
        {
          "name": "Walker Slater",
          "url": "https://www.walkerslater.com/",
          "blurb": "Edinburgh tailor of tweed and tailored clothing — structured jackets and lasting cloth in the British tradition."
        },
        {
          "name": "Bernardi’s Antiques",
          "url": "https://bernardisantiques.com/",
          "blurb": "Antiques and fine objects — furniture, décor, and pieces with history for a home that feels inherited, not temporary."
        },
        {
          "name": "Luca Faloni",
          "url": "https://lucafaloni.com/en/ca",
          "blurb": "Italian menswear in cashmere, linen, and suede — understated luxury made in Italy."
        },
        {
          "name": "Sleuth & Statesman",
          "url": "https://sleuthandstatesman.com/",
          "blurb": "Classic menswear and accessories with a literary, old-world bent — tailored style for the discreet gentleman."
        },
        {
          "name": "Unique Maps",
          "url": "https://uniquemaps.ca/",
          "blurb": "Canadian map seller — antique-style and historical maps for the study, library wall, or gift."
        },
        {
          "name": "George Bayntun — New Bindings",
          "url": "https://www.georgebayntun.com/new-bindings",
          "blurb": "Bath bookbinders famous for fine leather bindings — new bindings on classic texts for a proper library shelf."
        },
        {
          "name": "Reliks",
          "url": "https://www.reliks.com/",
          "blurb": "Swords, armor, and historical replicas — medieval and military pieces for collectors and reenactors."
        },
        {
          "name": "The Knight Shop",
          "url": "https://www.theknightshop.com/",
          "blurb": "Medieval arms, armor, and knightly kit — practical gear for HEMA, reenactment, and display."
        },
        {
          "name": "D.R. Harris",
          "url": "https://www.drharris.co.uk/",
          "blurb": "St. James’s Street chemists since the 18th century — traditional shaving, cologne, and gentlemen’s grooming."
        },
        {
          "name": "Miracoli Eucaristici",
          "url": "https://www.miracolieucaristici.org/en/Liste/list.html",
          "blurb": "Catalog of Eucharistic miracles worldwide — documentation and lists compiled in the spirit of Blessed Carlo Acutis’s project, for study and pilgrimage."
        }
      ]
    }
  ]
};
})(typeof window !== "undefined" ? window : globalThis);
