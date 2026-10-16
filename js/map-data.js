/**
 * Theological Map — intellectual genealogy data
 * Concepts, lineages, positions, and comparative tables.
 * Expand by adding entries; figures reference ids from figures.js.
 */
window.MAP_DATA = {
  concepts: [
    {
      id: "grace",
      name: "Grace",
      short: "The free, unmerited favor and transforming power of God.",
      summary: "Grace is the thread that runs from the Apostolic Fathers through Augustine’s controversy with Pelagius, the Scholastics, the Reformers, and modern theology. The question is never whether grace is needed, but how it relates to nature, free will, and the Christian life."
    },
    {
      id: "justification",
      name: "Justification",
      short: "How the sinner is made (or declared) righteous before God.",
      summary: "Justification stands at the heart of the Reformation debates and remains a primary point of convergence and divergence among Catholic, Orthodox, and Protestant traditions."
    },
    {
      id: "trinity",
      name: "Trinity",
      short: "The one God who is Father, Son, and Holy Spirit.",
      summary: "From the New Testament witness through the Cappadocians and Augustine to later Scholastic and Reformation treatments, the doctrine of the Trinity is the architectural center of Christian theology."
    },
    {
      id: "atonement",
      name: "Atonement",
      short: "How the death and resurrection of Christ reconcile humanity to God.",
      summary: "Models of the atonement—recapitulation, satisfaction, penal substitution, Christus Victor, moral influence—develop across the centuries and often coexist within single traditions."
    },
    {
      id: "church",
      name: "Church",
      short: "The nature, authority, and unity of the Body of Christ.",
      summary: "Ecclesiology shapes everything from sacramental theology to the interpretation of Scripture and the meaning of tradition."
    },
    {
      id: "eucharist",
      name: "Eucharist",
      short: "The Lord’s Supper: presence, sacrifice, and communion.",
      summary: "From the Didache and Ignatius through the medieval debates on the real presence to the Reformation controversies and modern ecumenical statements."
    },
    {
      id: "predestination",
      name: "Predestination",
      short: "God’s eternal purpose concerning salvation.",
      summary: "Augustine, the medieval schools, Calvin, Arminius, and the Orthodox emphasis on synergy offer distinct accounts of how divine sovereignty and human freedom relate."
    },
    {
      id: "free-will",
      name: "Free Will",
      short: "Human freedom under grace and in relation to sin.",
      summary: "The Pelagian controversy, the Scholastic distinctions, the Bondage of the Will, and Eastern synergism form a continuous conversation."
    },
    {
      id: "faith-works",
      name: "Faith & Works",
      short: "The relationship between believing and doing.",
      summary: "James and Paul, Augustine, Aquinas, Luther, Trent, and Wesley each address how faith is living and how works relate to justification and sanctification."
    },
    {
      id: "original-sin",
      name: "Original Sin",
      short: "The inherited condition of fallen humanity.",
      summary: "From Irenaeus and Augustine through the medieval synthesis to Reformation and modern restatements, the doctrine of original sin frames the need for grace."
    },
    {
      id: "scripture-tradition",
      name: "Scripture & Tradition",
      short: "The sources and authority of Christian teaching.",
      summary: "The relationship between the written Word and the living tradition of the Church is a defining fault-line and a point of ongoing dialogue."
    },
    {
      id: "sacraments",
      name: "Sacraments",
      short: "Visible signs of invisible grace.",
      summary: "Number, efficacy, and mode of the sacraments differ across the traditions while sharing a common conviction that God acts through material means."
    }
  ],

  /**
   * Lineage trees: nodes are either figure ids (from FIGURES) or synthetic labels.
   * Edges are directed (from → to) or bidirectional for contrasts.
   */
  lineages: {
    grace: {
      root: "Grace",
      nodes: [
        { id: "pelagius", label: "Pelagius", type: "opponent", tradition: "early" },
        { id: "augustine", label: "Augustine", type: "figure", tradition: "early" },
        { id: "medieval", label: "Medieval Theology", type: "era" },
        { id: "aquinas", label: "Aquinas", type: "figure", tradition: "catholic" },
        { id: "bonaventure", label: "Bonaventure", type: "figure", tradition: "catholic" },
        { id: "reformation", label: "Reformation", type: "era" },
        { id: "luther", label: "Luther", type: "figure", tradition: "protestant" },
        { id: "calvin", label: "Calvin", type: "figure", tradition: "protestant" },
        { id: "trent", label: "Council of Trent", type: "council", tradition: "catholic" },
        { id: "modern-prot", label: "Modern Protestant", type: "era" },
        { id: "modern-cath", label: "Modern Catholic", type: "era" }
      ],
      edges: [
        { from: "root", to: "augustine" },
        { from: "root", to: "pelagius" },
        { from: "augustine", to: "medieval" },
        { from: "medieval", to: "aquinas" },
        { from: "medieval", to: "bonaventure" },
        { from: "aquinas", to: "reformation" },
        { from: "reformation", to: "luther" },
        { from: "reformation", to: "calvin" },
        { from: "aquinas", to: "trent" },
        { from: "luther", to: "modern-prot" },
        { from: "calvin", to: "modern-prot" },
        { from: "trent", to: "modern-cath" }
      ]
    },
    justification: {
      root: "Justification",
      nodes: [
        { id: "paul", label: "Paul (Romans, Galatians)", type: "source" },
        { id: "augustine", label: "Augustine", type: "figure", tradition: "early" },
        { id: "aquinas", label: "Aquinas", type: "figure", tradition: "catholic" },
        { id: "luther", label: "Luther", type: "figure", tradition: "protestant" },
        { id: "calvin", label: "Calvin", type: "figure", tradition: "protestant" },
        { id: "trent", label: "Trent", type: "council", tradition: "catholic" },
        { id: "wesley", label: "Wesley", type: "figure", tradition: "protestant" },
        { id: "newman", label: "Newman", type: "figure", tradition: "catholic" }
      ],
      edges: [
        { from: "root", to: "paul" },
        { from: "paul", to: "augustine" },
        { from: "augustine", to: "aquinas" },
        { from: "augustine", to: "luther" },
        { from: "aquinas", to: "trent" },
        { from: "luther", to: "calvin" },
        { from: "luther", to: "wesley" },
        { from: "trent", to: "newman" }
      ]
    },
    trinity: {
      root: "Trinity",
      nodes: [
        { id: "nt", label: "New Testament", type: "source" },
        { id: "irenaeus", label: "Irenaeus", type: "figure", tradition: "early" },
        { id: "origen", label: "Origen", type: "figure", tradition: "early" },
        { id: "athanasius", label: "Athanasius", type: "figure", tradition: "early" },
        { id: "basil", label: "Basil", type: "figure", tradition: "early" },
        { id: "gregory-nazianzen", label: "Gregory Nazianzen", type: "figure", tradition: "early" },
        { id: "gregory-nyssa", label: "St. Gregory of Nyssa", type: "figure", tradition: "early" },
        { id: "augustine", label: "Augustine", type: "figure", tradition: "early" },
        { id: "damascene", label: "St. John of Damascus", type: "figure", tradition: "orthodox" },
        { id: "aquinas", label: "Aquinas", type: "figure", tradition: "catholic" }
      ],
      edges: [
        { from: "root", to: "nt" },
        { from: "nt", to: "irenaeus" },
        { from: "nt", to: "origen" },
        { from: "origen", to: "athanasius" },
        { from: "athanasius", to: "basil" },
        { from: "basil", to: "gregory-nazianzen" },
        { from: "basil", to: "gregory-nyssa" },
        { from: "gregory-nazianzen", to: "augustine" },
        { from: "gregory-nyssa", to: "damascene" },
        { from: "augustine", to: "aquinas" }
      ]
    }
  },

  /**
   * Positions: what a figure (or council) taught on a concept.
   * Keys: conceptId → figureId → { thesis, summary, relations[] }
   */
  positions: {
    grace: {
      augustine: {
        thesis: "Grace is necessary, prior, and efficacious; without it the will remains bound by sin.",
        summary: "Against Pelagius, Augustine insisted that fallen humanity cannot initiate or complete the return to God. Grace heals, liberates, and enables the will. Predestination and perseverance flow from this account.",
        relations: [
          { to: "pelagius", kind: "opposes", note: "Pelagius held that the human will retains the power to obey without special grace; Augustine denied this." },
          { to: "aquinas", kind: "develops", note: "Aquinas receives Augustine’s priority of grace and integrates it with a more developed account of nature and secondary causes." },
          { to: "luther", kind: "echoes", note: "Luther radicalizes Augustine’s bondage of the will and the sole sufficiency of grace." }
        ]
      },
      aquinas: {
        thesis: "Grace does not destroy nature; it perfects it.",
        summary: "For Aquinas, nature is wounded but not annihilated by original sin. Grace elevates and heals the natural powers so that the person can attain the supernatural end of the beatific vision. Habitual grace and actual grace, operating and cooperating grace, are carefully distinguished.",
        relations: [
          { to: "augustine", kind: "develops", note: "Aquinas develops Augustine’s account of grace within an Aristotelian metaphysics of nature and habit." },
          { to: "trent", kind: "forms", note: "Later Catholic theology, especially at Trent, incorporates and develops the Thomistic synthesis on justification and grace." },
          { to: "luther", kind: "diverges", note: "Both affirm the necessity of grace, but diverge sharply on the residual capacity of nature and on the forensic character of justification." }
        ]
      },
      luther: {
        thesis: "Grace is the free, alien righteousness of Christ received by faith alone.",
        summary: "Luther’s theology of grace is shaped by the discovery that the righteousness of God is not a demand but a gift. The will is bound; grace is unilateral; faith is the receptive organ that receives Christ and all his benefits.",
        relations: [
          { to: "augustine", kind: "radicalizes", note: "Luther intensifies Augustine’s anti-Pelagianism, especially in The Bondage of the Will." },
          { to: "calvin", kind: "shares", note: "Calvin shares the sola gratia / sola fide structure while developing a more systematic account of predestination and the duplex gratia." },
          { to: "aquinas", kind: "diverges", note: "Luther rejects the notion that grace perfects an intact natural capacity for merit." }
        ]
      },
      calvin: {
        thesis: "Grace is God’s sovereign, electing, and regenerating action; faith is its instrument.",
        summary: "Calvin’s Institutes present grace as the outworking of eternal election. Regeneration, justification, and sanctification are distinct yet inseparable benefits of union with Christ.",
        relations: [
          { to: "luther", kind: "systematizes", note: "Calvin systematizes the Reformation recovery of grace while adding a more explicit double-predestination framework." },
          { to: "augustine", kind: "receives", note: "Calvin explicitly claims the Augustinian inheritance on grace and predestination." }
        ]
      },
      trent: {
        thesis: "Justification is a work of God’s grace that both declares and makes righteous; cooperation is possible under grace.",
        summary: "The Council of Trent affirms the priority of grace, the necessity of faith, and the reality of intrinsic transformation, while rejecting both Pelagian self-salvation and a purely forensic imputation that excludes inherent righteousness.",
        relations: [
          { to: "aquinas", kind: "codifies", note: "Trent largely codifies the mature medieval (especially Thomistic) synthesis against Protestant formulations." },
          { to: "luther", kind: "opposes", note: "Trent anathematizes key Lutheran theses on justification by faith alone and the total corruption of nature." }
        ]
      }
    },
    justification: {
      luther: {
        thesis: "The sinner is justified by faith alone, through the alien righteousness of Christ imputed to the believer.",
        summary: "Justification is forensic: God declares the sinner righteous on the basis of Christ’s obedience. Faith is not a work but the empty hand that receives the gift. Good works follow as fruit, not as cause.",
        relations: [
          { to: "paul", kind: "recovers", note: "Luther reads Romans and Galatians as teaching a radical break between law and gospel." },
          { to: "trent", kind: "opposes", note: "Trent insists on an intrinsic change and the role of charity and works in the process of justification." }
        ]
      },
      aquinas: {
        thesis: "Justification is the movement from the state of sin to the state of grace, involving remission of guilt and infusion of grace.",
        summary: "Aquinas treats justification as a real change in the soul: the infusion of habitual grace, the movement of free will toward God, and the remission of sin. Faith is the beginning; charity forms it.",
        relations: [
          { to: "augustine", kind: "develops", note: "Aquinas inherits Augustine’s anti-Pelagian framework and gives it Scholastic precision." },
          { to: "luther", kind: "diverges", note: "The forensic emphasis of the Reformers is foreign to Aquinas’s transformative account." }
        ]
      },
      calvin: {
        thesis: "Justification is a forensic declaration grounded in union with Christ; it is distinct from, yet never separated from, sanctification.",
        summary: "Calvin carefully distinguishes justification (imputed righteousness) from sanctification (inherent renewal), while insisting that both are given together in Christ.",
        relations: [
          { to: "luther", kind: "clarifies", note: "Calvin sharpens the forensic character while guarding against antinomianism through the duplex gratia." }
        ]
      },
      wesley: {
        thesis: "Justification by faith is the door; sanctification (including Christian perfection) is the house.",
        summary: "Wesley receives the Reformation doctrine of justification by faith while emphasizing the subsequent work of the Spirit in transforming the believer into the image of Christ.",
        relations: [
          { to: "luther", kind: "receives", note: "Wesley affirms sola fide for justification while pressing beyond it into holiness of heart and life." }
        ]
      }
    },
    trinity: {
      athanasius: {
        thesis: "The Son is homoousios with the Father; the full divinity of the Word is the foundation of salvation.",
        summary: "Against Arianism, Athanasius argued that only if the Son is true God can he deify humanity. The Incarnation and the Trinity stand or fall together.",
        relations: [
          { to: "origen", kind: "corrects", note: "Athanasius inherits Origen’s speculative energy but rejects subordinationist tendencies." },
          { to: "basil", kind: "precedes", note: "The Cappadocians complete the defense of the full divinity of the Spirit and clarify the language of one ousia and three hypostases." }
        ]
      },
      basil: {
        thesis: "One ousia, three hypostases; the Spirit is co-equal and co-eternal with the Father and the Son.",
        summary: "Basil’s On the Holy Spirit and the theological orations of Gregory Nazianzen establish the classic Eastern formulation that becomes standard for both East and West.",
        relations: [
          { to: "athanasius", kind: "completes", note: "The Cappadocians extend Athanasius’s homoousios to the Holy Spirit and refine the technical vocabulary." },
          { to: "augustine", kind: "influences", note: "Augustine receives the Cappadocian settlement and develops a more psychological model of the Trinity." }
        ]
      },
      augustine: {
        thesis: "The Trinity is one God in three persons; the psychological analogies (memory, understanding, will) illuminate the relations without exhausting the mystery.",
        summary: "De Trinitate explores the processions and relations of the divine persons and offers the most influential Western account of the filioque and the unity of the divine essence.",
        relations: [
          { to: "basil", kind: "receives", note: "Augustine builds on the Cappadocian achievement while shifting emphasis toward the unity of the essence and the inner life of the mind." },
          { to: "aquinas", kind: "forms", note: "Aquinas’s Trinitarian theology is deeply Augustinian in structure and terminology." }
        ]
      }
    }
  },

  /**
   * Comparative snapshots across the three major post-Schism traditions.
   */
  comparative: {
    grace: {
      columns: ["Catholic", "Eastern Orthodox", "Protestant"],
      rows: [
        {
          label: "Central emphasis",
          cells: [
            "Grace elevates and perfects nature; habitual and actual grace",
            "Uncreated energies; participation / theosis",
            "Sola gratia; forensic and regenerating grace"
          ]
        },
        {
          label: "Key figures",
          cells: [
            "Augustine → Aquinas → Trent → Newman",
            "Athanasius → Maximus → Palamas → Cabasilas",
            "Luther → Calvin → Wesley → Edwards"
          ]
        },
        {
          label: "Key texts",
          cells: [
            "Romans, Augustine’s anti-Pelagian writings, Summa, Trent",
            "John, 2 Peter, Cappadocians, Palamas’s Triads",
            "Romans, Galatians, Bondage of the Will, Institutes"
          ]
        },
        {
          label: "Major distinction",
          cells: [
            "Grace as habit and cooperation under grace",
            "Essence–energies; synergy without Pelagianism",
            "Imputed righteousness and the bound will (varying degrees)"
          ]
        }
      ]
    },
    justification: {
      columns: ["Catholic", "Eastern Orthodox", "Protestant"],
      rows: [
        {
          label: "Central emphasis",
          cells: [
            "Grace transforms and justifies; faith formed by charity",
            "Participation in divine life; theosis as the goal",
            "Justification by faith alone; imputed righteousness"
          ]
        },
        {
          label: "Key figures",
          cells: [
            "Augustine → Aquinas → Trent",
            "Athanasius → Maximus → Palamas",
            "Luther → Calvin → Wesley"
          ]
        },
        {
          label: "Key texts",
          cells: [
            "Romans, James, Trent Decree on Justification",
            "John, 2 Peter, Fathers on deification",
            "Romans, Galatians, Augsburg Confession"
          ]
        },
        {
          label: "Major distinction",
          cells: [
            "Intrinsic righteousness and the role of works under grace",
            "Theosis rather than a primarily forensic category",
            "Forensic declaration distinct from (yet linked to) sanctification"
          ]
        }
      ]
    },
    trinity: {
      columns: ["Catholic", "Eastern Orthodox", "Protestant"],
      rows: [
        {
          label: "Central emphasis",
          cells: [
            "Unity of essence; filioque; psychological analogies",
            "Monarchy of the Father; essence–energies; Cappadocian formula",
            "Reception of the creeds; varying accents on economic vs. immanent"
          ]
        },
        {
          label: "Key figures",
          cells: [
            "Augustine → Aquinas → later Scholastics",
            "Athanasius → Cappadocians → Damascene → Palamas",
            "Reception of Nicaea/Constantinople; Reformers largely traditional"
          ]
        },
        {
          label: "Key texts",
          cells: [
            "De Trinitate, Summa Theologiae I qq. 27–43",
            "Theological Orations, On the Holy Spirit, Exact Exposition",
            "Creeds; Institutes I; various Reformed and Lutheran treatments"
          ]
        },
        {
          label: "Major distinction",
          cells: [
            "Filioque and the Western emphasis on the unity of the essence",
            "Rejection of the filioque; essence–energies distinction",
            "Generally accept the Western creed; some modern reconsideration"
          ]
        }
      ]
    }
  }
};
