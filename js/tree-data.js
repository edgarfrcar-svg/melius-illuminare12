/**
 * The Theological Tree — Data Model
 * Nodes may carry figureId and controversyId for site links.
 */
const TREE_DATA = {
  "meta": {
    "title": "Theological Tree Categories",
    "activeCategory": "grace",
    "categories": [
      "grace",
      "justification",
      "eucharist",
      "atonement",
      "church",
      "baptism",
      "trinity",
      "original_sin",
      "predestination"
    ],
    "note": "Doctrinal families are grouped into separate trees so each category can be studied on its own."
  },
  "relationshipTypes": {
    "developed_from": {
      "label": "Developed From",
      "category": "lineage",
      "group": "development"
    },
    "continued_by": {
      "label": "Continued By",
      "category": "lineage",
      "group": "development"
    },
    "represented_at": {
      "label": "Represented At",
      "category": "lineage",
      "group": "development"
    },
    "drifted_from": {
      "label": "Drifted From",
      "category": "conflict",
      "group": "opposition"
    },
    "directly_opposed": {
      "label": "Directly Opposed",
      "category": "conflict",
      "group": "opposition"
    },
    "rejected": {
      "label": "Rejected",
      "category": "judgment",
      "group": "opposition"
    },
    "debated_during": {
      "label": "Debated During",
      "category": "conflict",
      "group": "controversy"
    },
    "condemned_during": {
      "label": "Condemned During",
      "category": "conflict",
      "group": "controversy"
    },
    "split_during": {
      "label": "Split During",
      "category": "conflict",
      "group": "controversy"
    },
    "influenced": {
      "label": "Influenced",
      "category": "lineage",
      "group": "influence"
    },
    "inspired_by": {
      "label": "Inspired By",
      "category": "lineage",
      "group": "influence"
    },
    "affirmed": {
      "label": "Affirmed",
      "category": "judgment",
      "group": "influence"
    },
    "foreshadowed": {
      "label": "Foreshadowed → Fulfillment",
      "category": "typology",
      "group": "development"
    },
    "fulfillment": {
      "label": "Fulfillment",
      "category": "typology",
      "group": "development"
    }
  },
  "categories": {
    "grace": {
      "label": "Grace",
      "summary": "From Paul’s gift-language through the Pelagian controversy, Orange, Aquinas, the Reformation, Trent, and the De Auxiliis dispute — the doctrine of God’s free and transformative favor.",
      "nodes": [
        {
          "id": "grace",
          "type": "concept",
          "title": "Grace",
          "subtitle": "Gratia",
          "dates": "Scripture to present",
          "tradition": "core",
          "summary": "The free and unmerited gift of God by which the human person is called, healed, elevated, and made a partaker of the divine life — not a wage owed to nature, but God’s own action toward the creature.",
          "x": 600,
          "y": 60,
          "tier": 0,
          "level": 1
        },
        {
          "id": "paul",
          "type": "figure",
          "title": "St. Paul",
          "subtitle": "Apostle of grace",
          "dates": "1st century",
          "tradition": "early",
          "summary": "The apostolic source whose letters place grace at the center of salvation: justified by grace as a gift (Rom 3:24), saved by grace through faith (Eph 2:8), and living under a reign of grace rather than of law.",
          "x": 600,
          "y": 240,
          "tier": 1,
          "level": 1
        },
        {
          "id": "augustine",
          "type": "figure",
          "title": "St. Augustine of Hippo",
          "subtitle": "Doctor of Grace",
          "dates": "354 – 430",
          "tradition": "early",
          "summary": "Forged the Western doctrine of grace against Pelagius: original sin, the priority of grace over every good will, and the prayer “Give what you command.” His mature teaching shaped councils, scholasticism, and the Reformation alike.",
          "x": 320,
          "y": 420,
          "tier": 2,
          "level": 1,
          "figureId": "augustine"
        },
        {
          "id": "pelagius",
          "type": "figure",
          "title": "Pelagius",
          "subtitle": "Natural capacity",
          "dates": "c. 354 – c. 418",
          "tradition": "early",
          "summary": "Taught that fallen man retains the moral capacity to begin and advance toward salvation without an inward prior grace, reducing grace largely to law, example, and external help.",
          "x": 880,
          "y": 420,
          "tier": 2,
          "level": 1
        },
        {
          "id": "pelagian_controversy",
          "type": "event",
          "title": "Pelagian Controversy",
          "subtitle": "c. 411 – 431",
          "dates": "c. 411 – 431",
          "tradition": "early",
          "summary": "The decisive early crisis over original sin, free will, and the necessity of grace. African councils and papal letters received Augustine’s line; Pelagianism was condemned as alien to the Catholic faith.",
          "x": 600,
          "y": 600,
          "tier": 3,
          "level": 1,
          "controversyId": "pelagianism",
          "controversyCentury": "5th"
        },
        {
          "id": "orange",
          "type": "event",
          "title": "Council of Orange",
          "subtitle": "529",
          "dates": "529",
          "tradition": "catholic",
          "summary": "Confirmed by Boniface II, Orange closed the semi-Pelagian debate for the Latin Church: the beginning of faith itself is gift; grace heals and elevates the will; nature alone does not rise to the supernatural end.",
          "x": 600,
          "y": 780,
          "tier": 4,
          "level": 1,
          "controversyId": "semi-pelagianism",
          "controversyCentury": "6th"
        },
        {
          "id": "aquinas",
          "type": "figure",
          "title": "St. Thomas Aquinas",
          "subtitle": "Scholastic synthesis",
          "dates": "1225 – 1274",
          "tradition": "catholic",
          "summary": "Placed grace within a full account of nature and elevation: sanctifying grace as habitual participation in the divine life, actual graces as God’s help in particular acts, and the theological virtues as infused principles of the supernatural life.",
          "x": 600,
          "y": 960,
          "tier": 5,
          "level": 1,
          "figureId": "aquinas"
        },
        {
          "id": "luther",
          "type": "figure",
          "title": "Martin Luther",
          "subtitle": "Sola gratia",
          "dates": "1483 – 1546",
          "tradition": "protestant",
          "summary": "Renewed the cry of free grace against what he took to be a semi-Pelagian scholasticism: the sinner is justified by grace alone through faith, by the alien righteousness of Christ, not by inherent merit preceding justification.",
          "x": 320,
          "y": 1140,
          "tier": 6,
          "level": 1
        },
        {
          "id": "cajetan",
          "type": "figure",
          "title": "Cardinal Cajetan",
          "subtitle": "Thomist reply",
          "dates": "1469 – 1534",
          "tradition": "catholic",
          "summary": "Leading Dominican commentator on Thomas who met Luther’s challenge and defended the Catholic account of grace, merit, and justification as a preparation for the conciliar response at Trent.",
          "x": 880,
          "y": 1140,
          "tier": 6,
          "level": 1,
          "figureId": "cajetan"
        },
        {
          "id": "trent",
          "type": "event",
          "title": "Council of Trent",
          "subtitle": "1545 – 1563",
          "dates": "1545 – 1563",
          "tradition": "catholic",
          "summary": "Defined that justification is by grace, involves the sinner’s free cooperation under grace, and consists in a true interior renewal — not imputation alone. Canons on grace and justification remain the Catholic dogmatic baseline.",
          "x": 600,
          "y": 1320,
          "tier": 7,
          "level": 1,
          "controversyId": "justification-trent",
          "controversyCentury": "16th"
        },
        {
          "id": "catholic_tradition",
          "type": "tradition",
          "title": "Catholic Tradition",
          "subtitle": "Grace that transforms",
          "dates": "Trent – present",
          "tradition": "catholic",
          "summary": "Grace as both favor and interior gift: prevenient and cooperative, habitual and actual, ordered to theosis and the vision of God, applied through faith and the sacraments in the communion of the Church.",
          "x": 320,
          "y": 1500,
          "tier": 8,
          "level": 1
        },
        {
          "id": "protestant_tradition",
          "type": "tradition",
          "title": "Protestant Tradition",
          "subtitle": "Sola gratia",
          "dates": "16th c. – present",
          "tradition": "protestant",
          "summary": "The Reformation families’ insistence that salvation is by grace alone, typically paired with forensic justification and a strong doctrine of the bondage or inability of the fallen will apart from regenerating grace.",
          "x": 880,
          "y": 1500,
          "tier": 8,
          "level": 1
        },
        {
          "id": "banez",
          "type": "figure",
          "title": "Domingo Báñez, O.P.",
          "subtitle": "Physical premotion",
          "dates": "1528 – 1604",
          "tradition": "catholic",
          "summary": "Dominican theologian who defended a Thomist account of efficacious grace as physical premotion: God moves the will infallibly yet freely to the salutary act.",
          "x": 160,
          "y": 1740,
          "tier": 9,
          "level": 1
        },
        {
          "id": "molina",
          "type": "figure",
          "title": "Luis de Molina, S.J.",
          "subtitle": "Middle knowledge",
          "dates": "1535 – 1600",
          "tradition": "catholic",
          "summary": "Jesuit theologian who taught scientia media and a concurrence that preserves a stronger account of the will’s contribution under grace — the Molinist alternative to Báñez.",
          "x": 520,
          "y": 1740,
          "tier": 9,
          "level": 1
        },
        {
          "id": "orthodox_tradition",
          "type": "tradition",
          "title": "Eastern Orthodox Tradition",
          "subtitle": "Energies & theosis",
          "dates": "Patristic – present",
          "tradition": "orthodox",
          "summary": "Grace as the uncreated energies of God by which the human person is deified. Distinct in vocabulary from the Latin habitus-account, yet ordered to the same end: participation in the divine life.",
          "x": 920,
          "y": 1740,
          "tier": 9,
          "level": 1
        },
        {
          "id": "de_auxiliis",
          "type": "event",
          "title": "De Auxiliis",
          "subtitle": "Grace & free will",
          "dates": "1598 – 1607",
          "tradition": "catholic",
          "summary": "The Dominican–Jesuit controversy over efficacious grace, predestination, and free will. Congregations under Clement VIII and Paul V examined both systems; the Holy See imposed silence on mutual censures without dogmatically settling either school.",
          "x": 340,
          "y": 1960,
          "tier": 10,
          "level": 1,
          "controversyId": "de-auxiliis",
          "controversyCentury": "17th"
        },
        {
          "id": "catholic_schools",
          "type": "tradition",
          "title": "Catholic Schools",
          "subtitle": "Both permitted",
          "dates": "1607 – present",
          "tradition": "catholic",
          "summary": "After De Auxiliis, Thomist and Molinist accounts of grace and freedom remain legitimate Catholic schools. Dogma requires both true grace and true freedom; it does not canonize one technical explanation of their concurrence.",
          "x": 340,
          "y": 2160,
          "tier": 11,
          "level": 1
        }
      ],
      "branches": [
        {
          "parent": "grace",
          "child": "paul",
          "type": "developed_from"
        },
        {
          "parent": "paul",
          "child": "augustine",
          "type": "developed_from"
        },
        {
          "parent": "paul",
          "child": "pelagius",
          "type": "drifted_from"
        },
        {
          "parent": "augustine",
          "child": "pelagian_controversy",
          "type": "debated_in"
        },
        {
          "parent": "pelagius",
          "child": "pelagian_controversy",
          "type": "debated_in"
        },
        {
          "parent": "pelagian_controversy",
          "child": "orange",
          "type": "settled_by"
        },
        {
          "parent": "orange",
          "child": "aquinas",
          "type": "continued_by"
        },
        {
          "parent": "aquinas",
          "child": "luther",
          "type": "drifted_from"
        },
        {
          "parent": "aquinas",
          "child": "cajetan",
          "type": "continued_by"
        },
        {
          "parent": "luther",
          "child": "trent",
          "type": "debated_in"
        },
        {
          "parent": "cajetan",
          "child": "trent",
          "type": "debated_in"
        },
        {
          "parent": "trent",
          "child": "catholic_tradition",
          "type": "continued_by"
        },
        {
          "parent": "trent",
          "child": "protestant_tradition",
          "type": "drifted_from"
        },
        {
          "parent": "pelagian_controversy",
          "child": "orthodox_tradition",
          "type": "continued_by",
          "display": true
        },
        {
          "parent": "catholic_tradition",
          "child": "banez",
          "type": "continued_by"
        },
        {
          "parent": "catholic_tradition",
          "child": "molina",
          "type": "continued_by"
        },
        {
          "parent": "banez",
          "child": "de_auxiliis",
          "type": "debated_in"
        },
        {
          "parent": "molina",
          "child": "de_auxiliis",
          "type": "debated_in"
        },
        {
          "parent": "de_auxiliis",
          "child": "catholic_schools",
          "type": "continued_by"
        }
      ],
      "edges": [
        {
          "source": "paul",
          "target": "augustine",
          "type": "developed_from",
          "prominence": "primary"
        },
        {
          "source": "augustine",
          "target": "pelagian_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "pelagius",
          "target": "pelagian_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "pelagian_controversy",
          "target": "orange",
          "type": "settled_by",
          "prominence": "primary"
        },
        {
          "source": "orange",
          "target": "aquinas",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "aquinas",
          "target": "cajetan",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "aquinas",
          "target": "luther",
          "type": "drifted_from",
          "prominence": "primary"
        },
        {
          "source": "luther",
          "target": "trent",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "cajetan",
          "target": "trent",
          "type": "represented_at",
          "prominence": "primary"
        },
        {
          "source": "trent",
          "target": "catholic_tradition",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "trent",
          "target": "protestant_tradition",
          "type": "drifted_from",
          "prominence": "primary"
        },
        {
          "source": "banez",
          "target": "de_auxiliis",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "molina",
          "target": "de_auxiliis",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "de_auxiliis",
          "target": "catholic_schools",
          "type": "continued_by",
          "prominence": "primary"
        }
      ]
    },
    "justification": {
      "label": "Justification",
      "summary": "From Paul’s forensic and transformative language through Augustine, Aquinas, Luther, Cajetan, and Trent — the doctrine of how God makes the sinner righteous in Christ.",
      "nodes": [
        {
          "id": "justification",
          "type": "concept",
          "title": "Justification",
          "subtitle": "Declaring and making righteous",
          "dates": "Scripture to present",
          "tradition": "core",
          "summary": "The doctrine by which God, in Christ, deals with the sinner as righteous — in Catholic teaching by a grace that truly transforms; in classical Protestant teaching chiefly by the imputation of Christ’s righteousness received by faith.",
          "x": 600,
          "y": 60,
          "tier": 0,
          "level": 1,
          "controversyId": "justification-trent",
          "controversyCentury": "16th"
        },
        {
          "id": "paul",
          "type": "figure",
          "title": "St. Paul",
          "subtitle": "Romans & Galatians",
          "dates": "1st century",
          "tradition": "early",
          "summary": "The apostolic center of the doctrine: “justified by faith apart from works of the law” (Rom 3:28), yet also “created in Christ Jesus for good works” (Eph 2:10). Every later controversy returns to his letters.",
          "x": 600,
          "y": 240,
          "tier": 1,
          "level": 1
        },
        {
          "id": "augustine",
          "type": "figure",
          "title": "St. Augustine of Hippo",
          "subtitle": "Grace that justifies",
          "dates": "354 – 430",
          "tradition": "early",
          "summary": "Grounded justification in the gift of the Spirit and the divine initiative: the will is healed so that it can love God. Justification is inseparable from the grace that makes the unjust just.",
          "x": 600,
          "y": 420,
          "tier": 2,
          "level": 1,
          "figureId": "augustine"
        },
        {
          "id": "aquinas",
          "type": "figure",
          "title": "St. Thomas Aquinas",
          "subtitle": "Infusion & cooperation",
          "dates": "1225 – 1274",
          "tradition": "catholic",
          "summary": "Taught justification as the infusion of grace, the forgiveness of sins, and the free acceptance of grace — a true change in the soul, not a mere external declaration, ordered to the sacraments and the virtues.",
          "x": 600,
          "y": 600,
          "tier": 3,
          "level": 1,
          "figureId": "aquinas"
        },
        {
          "id": "luther",
          "type": "figure",
          "title": "Martin Luther",
          "subtitle": "Faith alone",
          "dates": "1483 – 1546",
          "tradition": "protestant",
          "summary": "Taught that the sinner is justified by faith alone, by the alien righteousness of Christ imputed to the believer. Inherent righteousness is the fruit of justification, not its basis before God.",
          "x": 320,
          "y": 800,
          "tier": 4,
          "level": 1
        },
        {
          "id": "cajetan",
          "type": "figure",
          "title": "Cardinal Cajetan",
          "subtitle": "Catholic disputant",
          "dates": "1469 – 1534",
          "tradition": "catholic",
          "summary": "Met Luther at Augsburg and in writing; defended the scholastic and sacramental account of justification as transformation by infused grace against a purely forensic reading.",
          "x": 880,
          "y": 800,
          "tier": 4,
          "level": 1,
          "figureId": "cajetan"
        },
        {
          "id": "melanchthon",
          "type": "figure",
          "title": "Philip Melanchthon",
          "subtitle": "Augsburg Confession",
          "dates": "1497 – 1560",
          "tradition": "protestant",
          "summary": "Luther’s colleague who gave the Lutheran doctrine of justification its confessional shape in the Augsburg Confession (1530) and later Apology — forensic acquittal received by faith.",
          "x": 200,
          "y": 980,
          "tier": 5,
          "level": 2
        },
        {
          "id": "contarini",
          "type": "figure",
          "title": "Gasparo Contarini",
          "subtitle": "Regensburg attempt",
          "dates": "1483 – 1542",
          "tradition": "catholic",
          "summary": "Cardinal who sought a formula of agreement on justification at the Regensburg Colloquy (1541). Temporary convergence failed; the deeper divide over inherent righteousness remained.",
          "x": 1000,
          "y": 980,
          "tier": 5,
          "level": 2
        },
        {
          "id": "trent",
          "type": "event",
          "title": "Council of Trent",
          "subtitle": "Session VI, 1547",
          "dates": "1547",
          "tradition": "catholic",
          "summary": "Defined that justification is not only remission of sins but also sanctification and renewal of the interior man; faith is the beginning, foundation, and root, yet not justifying if charity is absent. Canons exclude sola fide as the reformers defined it.",
          "x": 600,
          "y": 1160,
          "tier": 6,
          "level": 1,
          "controversyId": "justification-trent",
          "controversyCentury": "16th"
        },
        {
          "id": "catholic_tradition",
          "type": "tradition",
          "title": "Catholic Tradition",
          "subtitle": "Inherent righteousness",
          "dates": "Trent – present",
          "tradition": "catholic",
          "summary": "Justification as a true interior change by sanctifying grace, received through faith and the sacraments, increased by good works done in grace, and capable of being lost by mortal sin and restored by penance.",
          "x": 320,
          "y": 1360,
          "tier": 7,
          "level": 1
        },
        {
          "id": "protestant_tradition",
          "type": "tradition",
          "title": "Protestant Tradition",
          "subtitle": "Imputed righteousness",
          "dates": "16th c. – present",
          "tradition": "protestant",
          "summary": "Justification as God’s forensic declaration that the believer is righteous for Christ’s sake, received by faith alone; sanctification follows as a distinct, necessary fruit but not the ground of acceptance.",
          "x": 880,
          "y": 1360,
          "tier": 7,
          "level": 1
        },
        {
          "id": "newman",
          "type": "figure",
          "title": "St. John Henry Newman",
          "subtitle": "Lectures on Justification",
          "dates": "1801 – 1890",
          "tradition": "catholic",
          "summary": "Anglican then Catholic theologian whose Lectures on Justification sought a path beyond bare imputation and bare moralism, stressing the indwelling presence of Christ — later received within a Catholic frame.",
          "x": 320,
          "y": 1540,
          "tier": 8,
          "level": 2,
          "figureId": "newman"
        },
        {
          "id": "joint_declaration",
          "type": "event",
          "title": "Joint Declaration",
          "subtitle": "1999",
          "dates": "1999",
          "tradition": "core",
          "summary": "The Joint Declaration on the Doctrine of Justification (Catholic Church and Lutheran World Federation) stated a differentiated consensus on basic truths, without erasing remaining differences on merit, cooperation, and the sacraments.",
          "x": 600,
          "y": 1540,
          "tier": 8,
          "level": 2
        }
      ],
      "branches": [
        {
          "parent": "justification",
          "child": "paul",
          "type": "developed_from"
        },
        {
          "parent": "paul",
          "child": "augustine",
          "type": "developed_from"
        },
        {
          "parent": "augustine",
          "child": "aquinas",
          "type": "continued_by"
        },
        {
          "parent": "aquinas",
          "child": "luther",
          "type": "drifted_from"
        },
        {
          "parent": "aquinas",
          "child": "cajetan",
          "type": "continued_by"
        },
        {
          "parent": "luther",
          "child": "melanchthon",
          "type": "continued_by"
        },
        {
          "parent": "cajetan",
          "child": "contarini",
          "type": "continued_by"
        },
        {
          "parent": "luther",
          "child": "trent",
          "type": "debated_in"
        },
        {
          "parent": "cajetan",
          "child": "trent",
          "type": "debated_in"
        },
        {
          "parent": "trent",
          "child": "catholic_tradition",
          "type": "continued_by"
        },
        {
          "parent": "trent",
          "child": "protestant_tradition",
          "type": "drifted_from"
        },
        {
          "parent": "catholic_tradition",
          "child": "newman",
          "type": "continued_by"
        },
        {
          "parent": "catholic_tradition",
          "child": "joint_declaration",
          "type": "debated_in"
        },
        {
          "parent": "protestant_tradition",
          "child": "joint_declaration",
          "type": "debated_in"
        }
      ],
      "edges": [
        {
          "source": "paul",
          "target": "augustine",
          "type": "developed_from",
          "prominence": "primary"
        },
        {
          "source": "augustine",
          "target": "aquinas",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "aquinas",
          "target": "cajetan",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "aquinas",
          "target": "luther",
          "type": "drifted_from",
          "prominence": "primary"
        },
        {
          "source": "luther",
          "target": "melanchthon",
          "type": "continued_by",
          "prominence": "secondary"
        },
        {
          "source": "luther",
          "target": "trent",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "cajetan",
          "target": "trent",
          "type": "represented_at",
          "prominence": "primary"
        },
        {
          "source": "trent",
          "target": "catholic_tradition",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "trent",
          "target": "protestant_tradition",
          "type": "drifted_from",
          "prominence": "primary"
        },
        {
          "source": "catholic_tradition",
          "target": "joint_declaration",
          "type": "debated_during",
          "prominence": "secondary"
        },
        {
          "source": "protestant_tradition",
          "target": "joint_declaration",
          "type": "debated_during",
          "prominence": "secondary"
        }
      ]
    },
    "eucharist": {
      "label": "Eucharist",
      "summary": "From biblical types through Pauline controversy and the Carolingian dispute to the scholastic definition of transubstantiation.",
      "nodes": [
        {
          "id": "manna",
          "type": "concept",
          "title": "Manna",
          "subtitle": "Bread from heaven",
          "dates": "Exodus · typology",
          "tradition": "scripture",
          "summary": "The desert bread that prefigures the true Bread from heaven.",
          "x": 300,
          "y": 120,
          "tier": 0,
          "level": 1
        },
        {
          "id": "paschal_lamb",
          "type": "concept",
          "title": "Paschal Lamb",
          "subtitle": "Sacrifice and meal",
          "dates": "Exodus · typology",
          "tradition": "scripture",
          "summary": "The Passover lamb — type of Christ's sacrificial banquet.",
          "x": 900,
          "y": 120,
          "tier": 0,
          "level": 1
        },
        {
          "id": "last_supper",
          "type": "concept",
          "title": "Last Supper",
          "subtitle": "Fulfillment",
          "dates": "c. 33",
          "tradition": "scripture",
          "summary": "Fulfillment of the manna and the Paschal Lamb; Christ gives his body and blood under bread and wine.",
          "x": 600,
          "y": 340,
          "tier": 1,
          "level": 1
        },
        {
          "id": "paul",
          "type": "figure",
          "title": "St Paul",
          "dates": "1st century",
          "tradition": "early",
          "summary": "Apostolic witness to the words of institution and to Eucharistic discipline.",
          "x": 300,
          "y": 560,
          "tier": 2,
          "level": 1
        },
        {
          "id": "corinthians",
          "type": "movement",
          "title": "Corinthians",
          "subtitle": "The community at Corinth",
          "dates": "1st century",
          "tradition": "early",
          "summary": "The Christian community at Corinth whose divisions Paul addresses.",
          "x": 900,
          "y": 560,
          "tier": 2,
          "level": 1
        },
        {
          "id": "corinthian_debate",
          "type": "event",
          "title": "Corinthian Dispute",
          "subtitle": "Strong and weak",
          "dates": "1st century",
          "tradition": "early",
          "summary": "Conflict in Corinth over meals, idol-food, and the Lord's table.",
          "x": 600,
          "y": 780,
          "tier": 3,
          "level": 1
        },
        {
          "id": "adynatoi",
          "type": "movement",
          "title": "Adynatoi",
          "subtitle": "The weak",
          "dates": "1 Cor",
          "tradition": "early",
          "summary": "Those whose conscience is troubled; the line that continues in this genealogy.",
          "x": 300,
          "y": 1000,
          "tier": 4,
          "level": 1
        },
        {
          "id": "dynatoi",
          "type": "movement",
          "title": "Dynatoi",
          "subtitle": "The strong",
          "dates": "1 Cor",
          "tradition": "early",
          "summary": "Those confident in liberty — no further offspring in this genealogy.",
          "x": 900,
          "y": 1000,
          "tier": 4,
          "level": 1
        },
        {
          "id": "paschasius",
          "type": "figure",
          "title": "Paschasius Radbertus",
          "dates": "c. 785 – c. 865",
          "tradition": "catholic",
          "summary": "Abbot of Corbie; robust real identity of the consecrated elements with Christ's body.",
          "x": 300,
          "y": 1220,
          "tier": 5,
          "level": 1
        },
        {
          "id": "ratramnus",
          "type": "figure",
          "title": "Ratramnus of Corbie",
          "dates": "d. c. 868",
          "tradition": "catholic",
          "summary": "More figurative and spiritual reading of the sacrament.",
          "x": 900,
          "y": 1220,
          "tier": 5,
          "level": 1
        },
        {
          "id": "carolingian_dispute",
          "type": "event",
          "title": "Carolingian Controversy",
          "subtitle": "Corbie",
          "dates": "9th century",
          "tradition": "catholic",
          "summary": "Ninth-century debate over how Christ is present in the Eucharist.",
          "x": 600,
          "y": 1440,
          "tier": 6,
          "level": 1
        },
        {
          "id": "literalist",
          "type": "tradition",
          "title": "Literalists",
          "subtitle": "Real identity",
          "dates": "Carolingian line",
          "tradition": "catholic",
          "summary": "The consecrated bread and wine are truly the body and blood of Christ.",
          "x": 300,
          "y": 1660,
          "tier": 7,
          "level": 1
        },
        {
          "id": "spiritualist",
          "type": "tradition",
          "title": "Spiritualists",
          "subtitle": "Figure and spirit",
          "dates": "Carolingian line",
          "tradition": "catholic",
          "summary": "Sacrament as sacred figure and spiritual power — no further offspring in this genealogy.",
          "x": 900,
          "y": 1660,
          "tier": 7,
          "level": 1
        },
        {
          "id": "aquinas",
          "type": "figure",
          "title": "St Thomas Aquinas",
          "dates": "1225 – 1274",
          "tradition": "catholic",
          "summary": "Classical metaphysical account of Eucharistic conversion and presence.",
          "x": 300,
          "y": 1880,
          "tier": 8,
          "level": 1,
          "figureId": "aquinas"
        },
        {
          "id": "transubstantiation",
          "type": "concept",
          "title": "Transubstantiation",
          "subtitle": "Substantial conversion",
          "dates": "Defined 1215 · Classical form in Aquinas",
          "tradition": "catholic",
          "summary": "The whole substance of bread and wine is converted into the substance of Christ's body and blood; the accidents remain.",
          "x": 300,
          "y": 2100,
          "tier": 9,
          "level": 1,
          "controversyId": "transubstantiation-lateran",
          "controversyCentury": "13th"
        }
      ],
      "branches": [
        {
          "parent": "manna",
          "child": "last_supper",
          "type": "foreshadowed"
        },
        {
          "parent": "paschal_lamb",
          "child": "last_supper",
          "type": "foreshadowed"
        },
        {
          "parent": "last_supper",
          "child": "paul",
          "type": "continued_by"
        },
        {
          "parent": "last_supper",
          "child": "corinthians",
          "type": "continued_by"
        },
        {
          "parent": "paul",
          "child": "corinthian_debate",
          "type": "continued_by"
        },
        {
          "parent": "corinthians",
          "child": "corinthian_debate",
          "type": "continued_by"
        },
        {
          "parent": "corinthian_debate",
          "child": "adynatoi",
          "type": "continued_by"
        },
        {
          "parent": "corinthian_debate",
          "child": "dynatoi",
          "type": "continued_by"
        },
        {
          "parent": "adynatoi",
          "child": "paschasius",
          "type": "developed_from"
        },
        {
          "parent": "adynatoi",
          "child": "ratramnus",
          "type": "developed_from"
        },
        {
          "parent": "paschasius",
          "child": "carolingian_dispute",
          "type": "continued_by"
        },
        {
          "parent": "ratramnus",
          "child": "carolingian_dispute",
          "type": "continued_by"
        },
        {
          "parent": "carolingian_dispute",
          "child": "literalist",
          "type": "continued_by"
        },
        {
          "parent": "carolingian_dispute",
          "child": "spiritualist",
          "type": "continued_by"
        },
        {
          "parent": "literalist",
          "child": "aquinas",
          "type": "developed_from"
        },
        {
          "parent": "aquinas",
          "child": "transubstantiation",
          "type": "developed_from"
        }
      ],
      "edges": [
        {
          "source": "manna",
          "target": "last_supper",
          "type": "foreshadowed",
          "prominence": "primary"
        },
        {
          "source": "paschal_lamb",
          "target": "last_supper",
          "type": "foreshadowed",
          "prominence": "primary"
        },
        {
          "source": "last_supper",
          "target": "paul",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "last_supper",
          "target": "corinthians",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "paul",
          "target": "corinthian_debate",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "corinthians",
          "target": "corinthian_debate",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "corinthian_debate",
          "target": "adynatoi",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "corinthian_debate",
          "target": "dynatoi",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "adynatoi",
          "target": "paschasius",
          "type": "developed_from",
          "prominence": "primary"
        },
        {
          "source": "adynatoi",
          "target": "ratramnus",
          "type": "developed_from",
          "prominence": "primary"
        },
        {
          "source": "paschasius",
          "target": "carolingian_dispute",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "ratramnus",
          "target": "carolingian_dispute",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "carolingian_dispute",
          "target": "literalist",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "carolingian_dispute",
          "target": "spiritualist",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "literalist",
          "target": "aquinas",
          "type": "developed_from",
          "prominence": "primary"
        },
        {
          "source": "aquinas",
          "target": "transubstantiation",
          "type": "developed_from",
          "prominence": "primary"
        }
      ]
    },
    "atonement": {
      "label": "Atonement",
      "summary": "From Calvary through Anselm and Abelard, then Calvin and Bellarmine — each controversy opened by two opposing figures and resolved in tradition.",
      "nodes": [
        {
          "id": "atonement",
          "type": "concept",
          "title": "Atonement",
          "subtitle": "Making at one",
          "dates": "Scripture to present",
          "tradition": "core",
          "summary": "The doctrine of how God reconciles sinners to Himself through Christ — covering, satisfaction, and restoration of communion.",
          "x": 600,
          "y": 40,
          "tier": 0,
          "level": 1
        },
        {
          "id": "calvary",
          "type": "event",
          "title": "Calvary",
          "subtitle": "The Cross of Christ",
          "dates": "c. 30–33 AD",
          "tradition": "early",
          "summary": "The passion and death of Jesus Christ, in which the types of the Old Testament are fulfilled and the New Covenant is sealed in His blood.",
          "x": 600,
          "y": 200,
          "tier": 1,
          "level": 1
        },
        {
          "id": "abelard",
          "type": "figure",
          "title": "Peter Abelard",
          "subtitle": "Moral influence",
          "dates": "1079 – 1142",
          "tradition": "medieval",
          "summary": "Taught that the Cross primarily reveals God’s love and moves the sinner to repentance, rather than satisfying a debt of justice in the Anselmian sense.",
          "x": 300,
          "y": 380,
          "tier": 2,
          "level": 1
        },
        {
          "id": "anselm",
          "type": "figure",
          "title": "St. Anselm of Canterbury",
          "subtitle": "Cur Deus Homo",
          "dates": "1033 – 1109",
          "tradition": "medieval",
          "summary": "Argued that sin is an infinite offense against God’s honor; only a God-man can make due satisfaction. His work set the terms of Western atonement theology.",
          "x": 900,
          "y": 380,
          "tier": 2,
          "level": 1,
          "figureId": "anselm"
        },
        {
          "id": "anselmian_controversy",
          "type": "event",
          "title": "Anselmian Controversy",
          "subtitle": "Satisfaction debated",
          "dates": "12th century",
          "tradition": "medieval",
          "summary": "Abelard’s subjective account against Anselm’s satisfaction model. The medieval Church receives and refines satisfaction as the dominant Western framework.",
          "x": 600,
          "y": 560,
          "tier": 3,
          "level": 1
        },
        {
          "id": "satisfaction_theory",
          "type": "tradition",
          "title": "Satisfaction Tradition",
          "subtitle": "Anselm’s legacy",
          "dates": "Medieval synthesis",
          "tradition": "catholic",
          "summary": "Christ offers superabundant satisfaction for sin, restoring the order of justice. Scholasticism develops Anselm without adopting Abelard’s reduction of the Cross to example alone.",
          "x": 600,
          "y": 720,
          "tier": 4,
          "level": 1
        },
        {
          "id": "calvin",
          "type": "figure",
          "title": "John Calvin",
          "subtitle": "Penal substitution",
          "dates": "1509 – 1564",
          "tradition": "protestant",
          "summary": "Developed a forensic account in which Christ bears the penalty due to sinners. The Institutes became a primary source of Reformed atonement theology.",
          "x": 300,
          "y": 900,
          "tier": 5,
          "level": 1
        },
        {
          "id": "bellarmine",
          "type": "figure",
          "title": "St. Robert Bellarmine",
          "subtitle": "Catholic reply",
          "dates": "1542 – 1621",
          "tradition": "catholic",
          "summary": "Defended Catholic doctrine of the Cross against Reformed accounts: satisfaction, merit, and the sacrificial character of Christ’s death in continuity with Trent.",
          "x": 900,
          "y": 900,
          "tier": 5,
          "level": 1,
          "figureId": "bellarmine"
        },
        {
          "id": "psa_controversy",
          "type": "event",
          "title": "PSA Controversy",
          "subtitle": "Penal substitution debated",
          "dates": "Reformation – present",
          "tradition": "core",
          "summary": "Whether Christ endures the Father’s penal wrath in the sinner’s place, and how that claim relates to satisfaction, sacrifice, and Tridentine teaching.",
          "x": 600,
          "y": 1080,
          "tier": 6,
          "level": 1
        },
        {
          "id": "calvinism",
          "type": "tradition",
          "title": "Calvinism",
          "subtitle": "Reformed atonement",
          "dates": "16th century – present",
          "tradition": "protestant",
          "summary": "Reformed account centered on penal substitution and the forensic justification that flows from Christ’s finished work.",
          "x": 300,
          "y": 1260,
          "tier": 7,
          "level": 1
        },
        {
          "id": "tridentine_atonement",
          "type": "tradition",
          "title": "Tridentine Atonement",
          "subtitle": "Catholic synthesis",
          "dates": "Trent – present",
          "tradition": "catholic",
          "summary": "Christ is true propitiatory sacrifice; His satisfaction and merit are applied through faith and the sacraments; justification is not by imputation alone.",
          "x": 900,
          "y": 1260,
          "tier": 7,
          "level": 1
        }
      ],
      "branches": [
        {
          "parent": "atonement",
          "child": "calvary",
          "type": "developed_from"
        },
        {
          "parent": "calvary",
          "child": "abelard",
          "type": "interpreted_by"
        },
        {
          "parent": "calvary",
          "child": "anselm",
          "type": "interpreted_by"
        },
        {
          "parent": "abelard",
          "child": "anselmian_controversy",
          "type": "debated_in"
        },
        {
          "parent": "anselm",
          "child": "anselmian_controversy",
          "type": "debated_in"
        },
        {
          "parent": "anselmian_controversy",
          "child": "satisfaction_theory",
          "type": "continued_by"
        },
        {
          "parent": "satisfaction_theory",
          "child": "calvin",
          "type": "drifted_from"
        },
        {
          "parent": "satisfaction_theory",
          "child": "bellarmine",
          "type": "continued_by"
        },
        {
          "parent": "calvin",
          "child": "psa_controversy",
          "type": "debated_in"
        },
        {
          "parent": "bellarmine",
          "child": "psa_controversy",
          "type": "debated_in"
        },
        {
          "parent": "psa_controversy",
          "child": "calvinism",
          "type": "continued_by"
        },
        {
          "parent": "psa_controversy",
          "child": "tridentine_atonement",
          "type": "continued_by"
        }
      ],
      "edges": [
        {
          "source": "abelard",
          "target": "anselmian_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "anselm",
          "target": "anselmian_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "anselmian_controversy",
          "target": "satisfaction_theory",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "calvin",
          "target": "psa_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "bellarmine",
          "target": "psa_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "psa_controversy",
          "target": "calvinism",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "psa_controversy",
          "target": "tridentine_atonement",
          "type": "continued_by",
          "prominence": "primary"
        }
      ]
    },
    "church": {
      "label": "Church",
      "summary": "From Pentecost through Nestorius and Cyril, Leo IX and Michael I, Eck and Luther — each schism opened by two opposing figures and resolved in lasting traditions.",
      "nodes": [
        {
          "id": "church",
          "type": "concept",
          "title": "Church",
          "subtitle": "One body in Christ",
          "dates": "Pentecost to present",
          "tradition": "core",
          "summary": "The one Church founded by Christ, born publicly at Pentecost, and tested through the centuries by heresy and schism.",
          "x": 600,
          "y": 40,
          "tier": 0,
          "level": 1
        },
        {
          "id": "pentecost",
          "type": "event",
          "title": "Pentecost",
          "subtitle": "Public birth",
          "dates": "c. 30–33 AD",
          "tradition": "early",
          "summary": "The descent of the Holy Spirit: the Church steps into history as a public, missionary body under the apostolic college.",
          "x": 600,
          "y": 200,
          "tier": 1,
          "level": 1
        },
        {
          "id": "cyril",
          "type": "figure",
          "title": "St. Cyril of Alexandria",
          "subtitle": "Theotokos",
          "dates": "c. 376 – 444",
          "tradition": "early",
          "summary": "Defended the unity of Christ’s person and Mary as Mother of God at Ephesus. His theology became the touchstone of Catholic Christology.",
          "x": 300,
          "y": 380,
          "tier": 2,
          "level": 1,
          "figureId": "cyril-alex"
        },
        {
          "id": "nestorius",
          "type": "figure",
          "title": "Nestorius",
          "subtitle": "Christotokos",
          "dates": "c. 386 – c. 451",
          "tradition": "early",
          "summary": "Resisted the title Theotokos and was condemned at Ephesus. The controversy produced the first lasting Christological division of communion.",
          "x": 900,
          "y": 380,
          "tier": 2,
          "level": 1
        },
        {
          "id": "nestorian_controversy",
          "type": "event",
          "title": "Nestorian Controversy",
          "subtitle": "Ephesus 431",
          "dates": "428 – 431",
          "tradition": "early",
          "summary": "Crisis over Mary as Mother of God and the unity of Christ’s person. Ephesus condemns Nestorius; lasting separation follows.",
          "x": 600,
          "y": 560,
          "tier": 3,
          "level": 1,
          "controversyId": "nestorianism",
          "controversyCentury": "5th"
        },
        {
          "id": "catholic_chalcedonian",
          "type": "tradition",
          "title": "Catholic",
          "subtitle": "Chalcedonian communion",
          "dates": "After Ephesus / Chalcedon",
          "tradition": "catholic",
          "summary": "The communion that received Ephesus and Chalcedon: one Christ in two natures, Mary as Theotokos, in union with the Roman see.",
          "x": 300,
          "y": 720,
          "tier": 4,
          "level": 1
        },
        {
          "id": "oriental",
          "type": "tradition",
          "title": "Oriental",
          "subtitle": "Non-Chalcedonian",
          "dates": "5th century – present",
          "tradition": "oriental",
          "summary": "Churches that rejected or did not receive Chalcedon — Coptic, Syriac, Armenian, Ethiopian — preserving a Cyrilline Christology apart from the Chalcedonian hierarchy.",
          "x": 900,
          "y": 720,
          "tier": 4,
          "level": 1
        },
        {
          "id": "leo_ix",
          "type": "figure",
          "title": "Pope St. Leo IX",
          "subtitle": "Roman primacy",
          "dates": "1002 – 1054",
          "tradition": "catholic",
          "summary": "Reform pope whose legation delivered the bull of excommunication in Constantinople in 1054, the conventional date of the East–West schism.",
          "x": 300,
          "y": 900,
          "tier": 5,
          "level": 1,
          "figureId": "leo"
        },
        {
          "id": "michael_i",
          "type": "figure",
          "title": "Michael I Cerularius",
          "subtitle": "Constantinople",
          "dates": "c. 1000 – 1059",
          "tradition": "orthodox",
          "summary": "Patriarch who closed Latin churches and opposed Latin practices. His clash with Leo’s legates sealed the mutual excommunications of 1054.",
          "x": 900,
          "y": 900,
          "tier": 5,
          "level": 1
        },
        {
          "id": "great_schism",
          "type": "event",
          "title": "Great Schism",
          "subtitle": "1054",
          "dates": "1054",
          "tradition": "core",
          "summary": "Formal rupture between Rome and Constantinople over primacy, Filioque, and rite. The wound hardened into Catholic and Eastern Orthodox communions.",
          "x": 600,
          "y": 1080,
          "tier": 6,
          "level": 1,
          "controversyId": "photian-schism",
          "controversyCentury": "9th"
        },
        {
          "id": "catholic_west",
          "type": "tradition",
          "title": "Catholic",
          "subtitle": "Western communion",
          "dates": "1054 – present",
          "tradition": "catholic",
          "summary": "The Church in communion with the Bishop of Rome after the East–West break, holding papal primacy and the full Catholic dogmatic tradition.",
          "x": 300,
          "y": 1240,
          "tier": 7,
          "level": 1
        },
        {
          "id": "eastern_orthodoxy",
          "type": "tradition",
          "title": "Eastern Orthodoxy",
          "subtitle": "Byzantine communion",
          "dates": "1054 – present",
          "tradition": "orthodox",
          "summary": "Autocephalous churches centered historically on Constantinople, rejecting papal jurisdiction as defined in the West, holding the first seven councils.",
          "x": 900,
          "y": 1240,
          "tier": 7,
          "level": 1
        },
        {
          "id": "johann_eck",
          "type": "figure",
          "title": "Johann Eck",
          "subtitle": "Catholic disputant",
          "dates": "1486 – 1543",
          "tradition": "catholic",
          "summary": "Debated Luther at Leipzig on authority, councils, and the papacy, and later shared in the Catholic response leading toward Trent.",
          "x": 300,
          "y": 1420,
          "tier": 8,
          "level": 1
        },
        {
          "id": "martin_luther",
          "type": "figure",
          "title": "Martin Luther",
          "subtitle": "Reform",
          "dates": "1483 – 1546",
          "tradition": "protestant",
          "summary": "His critique of indulgences and doctrine of justification by faith alone, defended at Leipzig, became the spark of the Protestant Reformation.",
          "x": 900,
          "y": 1420,
          "tier": 8,
          "level": 1
        },
        {
          "id": "leipzig_debate",
          "type": "event",
          "title": "Leipzig Debate",
          "subtitle": "1519",
          "dates": "1519",
          "tradition": "core",
          "summary": "Public disputation between Eck and Luther. Luther’s appeals to Scripture against councils and popes clarified the break over authority in the West.",
          "x": 600,
          "y": 1600,
          "tier": 9,
          "level": 1,
          "controversyId": "reformation",
          "controversyCentury": "16th"
        },
        {
          "id": "catholic_reformation",
          "type": "tradition",
          "title": "Catholic",
          "subtitle": "Tridentine communion",
          "dates": "16th century – present",
          "tradition": "catholic",
          "summary": "The Catholic Church as she answered the Reformation at Trent: justification, sacraments, Scripture and tradition, and the papal magisterium reaffirmed.",
          "x": 300,
          "y": 1780,
          "tier": 10,
          "level": 1
        },
        {
          "id": "protestant",
          "type": "tradition",
          "title": "Protestant",
          "subtitle": "Reformation churches",
          "dates": "16th century – present",
          "tradition": "protestant",
          "summary": "Churches arising from the sixteenth-century Reformation — Lutheran, Reformed, Anglican, and later free churches — typically ordered around sola scriptura.",
          "x": 900,
          "y": 1780,
          "tier": 10,
          "level": 1
        }
      ],
      "branches": [
        {
          "parent": "church",
          "child": "pentecost",
          "type": "developed_from"
        },
        {
          "parent": "pentecost",
          "child": "cyril",
          "type": "continued_by"
        },
        {
          "parent": "pentecost",
          "child": "nestorius",
          "type": "continued_by"
        },
        {
          "parent": "cyril",
          "child": "nestorian_controversy",
          "type": "debated_in"
        },
        {
          "parent": "nestorius",
          "child": "nestorian_controversy",
          "type": "debated_in"
        },
        {
          "parent": "nestorian_controversy",
          "child": "catholic_chalcedonian",
          "type": "continued_by"
        },
        {
          "parent": "nestorian_controversy",
          "child": "oriental",
          "type": "drifted_from"
        },
        {
          "parent": "catholic_chalcedonian",
          "child": "leo_ix",
          "type": "continued_by"
        },
        {
          "parent": "catholic_chalcedonian",
          "child": "michael_i",
          "type": "continued_by"
        },
        {
          "parent": "leo_ix",
          "child": "great_schism",
          "type": "debated_in"
        },
        {
          "parent": "michael_i",
          "child": "great_schism",
          "type": "debated_in"
        },
        {
          "parent": "great_schism",
          "child": "catholic_west",
          "type": "continued_by"
        },
        {
          "parent": "great_schism",
          "child": "eastern_orthodoxy",
          "type": "drifted_from"
        },
        {
          "parent": "catholic_west",
          "child": "johann_eck",
          "type": "continued_by"
        },
        {
          "parent": "catholic_west",
          "child": "martin_luther",
          "type": "continued_by"
        },
        {
          "parent": "johann_eck",
          "child": "leipzig_debate",
          "type": "debated_in"
        },
        {
          "parent": "martin_luther",
          "child": "leipzig_debate",
          "type": "debated_in"
        },
        {
          "parent": "leipzig_debate",
          "child": "catholic_reformation",
          "type": "continued_by"
        },
        {
          "parent": "leipzig_debate",
          "child": "protestant",
          "type": "drifted_from"
        }
      ],
      "edges": [
        {
          "source": "cyril",
          "target": "nestorian_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "nestorius",
          "target": "nestorian_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "nestorian_controversy",
          "target": "catholic_chalcedonian",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "nestorian_controversy",
          "target": "oriental",
          "type": "drifted_from",
          "prominence": "primary"
        },
        {
          "source": "leo_ix",
          "target": "great_schism",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "michael_i",
          "target": "great_schism",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "great_schism",
          "target": "catholic_west",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "great_schism",
          "target": "eastern_orthodoxy",
          "type": "drifted_from",
          "prominence": "primary"
        },
        {
          "source": "johann_eck",
          "target": "leipzig_debate",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "martin_luther",
          "target": "leipzig_debate",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "leipzig_debate",
          "target": "catholic_reformation",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "leipzig_debate",
          "target": "protestant",
          "type": "drifted_from",
          "prominence": "primary"
        }
      ]
    },
    "baptism": {
      "label": "Baptism",
      "summary": "From the apostolic rite through the baptism of heretics, Donatism, and the Reformation — each controversy opened by two opposing figures and resolved in lasting traditions.",
      "nodes": [
        {
          "id": "baptism",
          "type": "concept",
          "title": "Baptism",
          "subtitle": "Water and the Spirit",
          "dates": "Scripture to present",
          "tradition": "core",
          "summary": "The sacrament of initiation by which the believer is washed, regenerated, and incorporated into Christ and His Church.",
          "x": 600,
          "y": 40,
          "tier": 0,
          "level": 1
        },
        {
          "id": "apostolic_baptism",
          "type": "concept",
          "title": "Apostolic Baptism",
          "subtitle": "Mt 28:19 · Acts",
          "dates": "1st century",
          "tradition": "early",
          "summary": "The Church baptizes in the Triune name for the forgiveness of sins. The rite and the name are given together before later controversies arise.",
          "x": 600,
          "y": 200,
          "tier": 1,
          "level": 1
        },
        {
          "id": "cyprian",
          "type": "figure",
          "title": "St. Cyprian of Carthage",
          "subtitle": "Rebaptize heretics",
          "dates": "c. 200 – 258",
          "tradition": "early",
          "summary": "Held that baptism outside the Catholic Church is void and must be repeated. African synods under his influence refused the Roman practice.",
          "x": 300,
          "y": 380,
          "tier": 2,
          "level": 1,
          "figureId": "cyprian"
        },
        {
          "id": "stephen_i",
          "type": "figure",
          "title": "Pope St. Stephen I",
          "subtitle": "One baptism",
          "dates": "d. 257",
          "tradition": "early",
          "summary": "Refused to rebaptize those washed in the Triune name outside Catholic communion. The once-given form is not repeated.",
          "x": 900,
          "y": 380,
          "tier": 2,
          "level": 1
        },
        {
          "id": "baptism_heretics",
          "type": "event",
          "title": "Baptism of Heretics",
          "subtitle": "Controversy",
          "dates": "c. 255 – 257",
          "tradition": "early",
          "summary": "Carthage against Rome: does heretical baptism count? The dispute forces a judgment on the objectivity of the Triune washing versus the necessity of Catholic communion.",
          "x": 600,
          "y": 560,
          "tier": 3,
          "level": 1,
          "controversyId": "baptism-heretics",
          "controversyCentury": "3rd"
        },
        {
          "id": "roman_baptismal_tradition",
          "type": "tradition",
          "title": "Roman Tradition",
          "subtitle": "Valid form stands",
          "dates": "3rd century onward",
          "tradition": "catholic",
          "summary": "Reception favors Stephen: baptism in the Triune name is not repeated. Validity of the form is distinguished from full communion with the Church.",
          "x": 600,
          "y": 720,
          "tier": 4,
          "level": 1
        },
        {
          "id": "donatus",
          "type": "figure",
          "title": "Donatus",
          "subtitle": "Purity of the minister",
          "dates": "4th century",
          "tradition": "early",
          "summary": "Leader of the North African schism holding that sacraments depend on the minister’s holiness and that the true Church is a pure remnant.",
          "x": 300,
          "y": 900,
          "tier": 5,
          "level": 1
        },
        {
          "id": "augustine_baptism",
          "type": "figure",
          "title": "St. Augustine of Hippo",
          "subtitle": "Christ baptizes",
          "dates": "354 – 430",
          "tradition": "early",
          "summary": "Taught that Christ is the principal agent of the sacrament. The minister’s unworthiness does not nullify baptism given in the Church’s rite; character is indelible.",
          "x": 900,
          "y": 900,
          "tier": 5,
          "level": 1,
          "figureId": "augustine"
        },
        {
          "id": "donatist_controversy",
          "type": "event",
          "title": "Donatist Controversy",
          "subtitle": "Validity debated",
          "dates": "4th–5th century",
          "tradition": "early",
          "summary": "Whether the validity of baptism depends on the holiness of the minister. Augustine and the Catholic bishops refuse the pure-body schism.",
          "x": 600,
          "y": 1080,
          "tier": 6,
          "level": 1,
          "controversyId": "donatism",
          "controversyCentury": "4th"
        },
        {
          "id": "catholic_baptism_patristic",
          "type": "tradition",
          "title": "Catholic Baptismal Doctrine",
          "subtitle": "Ex opere operato",
          "dates": "Augustine onward",
          "tradition": "catholic",
          "summary": "Baptism’s validity does not rest on the minister’s sanctity. Infant baptism, indelible character, and regeneration by water and the Spirit become the Western baseline.",
          "x": 600,
          "y": 1240,
          "tier": 7,
          "level": 1
        },
        {
          "id": "anabaptists",
          "type": "figure",
          "title": "Anabaptist Leaders",
          "subtitle": "Believers only",
          "dates": "16th century",
          "tradition": "protestant",
          "summary": "Radical Reformers who rejected infant baptism and “rebaptized” adults on profession of faith, denying the historic practice of the Church.",
          "x": 300,
          "y": 1420,
          "tier": 8,
          "level": 1
        },
        {
          "id": "trent_fathers",
          "type": "figure",
          "title": "Council of Trent",
          "subtitle": "Catholic defense",
          "dates": "1547",
          "tradition": "catholic",
          "summary": "The conciliar fathers reaffirm baptism as a true sacrament, valid for infants, not to be repeated, and ordinarily necessary for salvation — against Anabaptist and purely symbolic readings.",
          "x": 900,
          "y": 1420,
          "tier": 8,
          "level": 1,
          "controversyId": "reformation",
          "controversyCentury": "16th"
        },
        {
          "id": "reformation_baptism_controversy",
          "type": "event",
          "title": "Reformation Baptism Controversy",
          "subtitle": "Infant vs believer",
          "dates": "16th century",
          "tradition": "core",
          "summary": "The clash over infant baptism, rebaptism, and whether baptism is a regenerating sacrament or a sign of prior faith. Trent and the magisterial Reformers both refuse the Anabaptist line; they still diverge on efficacy.",
          "x": 600,
          "y": 1600,
          "tier": 9,
          "level": 1,
          "controversyId": "reformation",
          "controversyCentury": "16th"
        },
        {
          "id": "catholic_baptism",
          "type": "tradition",
          "title": "Catholic Teaching",
          "subtitle": "Sacrament of regeneration",
          "dates": "Trent – present",
          "tradition": "catholic",
          "summary": "Baptism remits sin, infuses grace, imparts character, and incorporates into the Church. Infants are valid subjects; the sacrament works ex opere operato when form and matter are present.",
          "x": 300,
          "y": 1780,
          "tier": 10,
          "level": 1
        },
        {
          "id": "protestant_baptism",
          "type": "tradition",
          "title": "Protestant Teaching",
          "subtitle": "Sign and covenant",
          "dates": "16th c. – present",
          "tradition": "protestant",
          "summary": "Magisterial Protestants retain infant baptism as covenant sign; Baptist and free-church traditions insist on believers’ baptism only. Efficacy ranges from means of grace to pure memorial.",
          "x": 900,
          "y": 1780,
          "tier": 10,
          "level": 1
        }
      ],
      "branches": [
        {
          "parent": "baptism",
          "child": "apostolic_baptism",
          "type": "developed_from"
        },
        {
          "parent": "apostolic_baptism",
          "child": "cyprian",
          "type": "continued_by"
        },
        {
          "parent": "apostolic_baptism",
          "child": "stephen_i",
          "type": "continued_by"
        },
        {
          "parent": "cyprian",
          "child": "baptism_heretics",
          "type": "debated_in"
        },
        {
          "parent": "stephen_i",
          "child": "baptism_heretics",
          "type": "debated_in"
        },
        {
          "parent": "baptism_heretics",
          "child": "roman_baptismal_tradition",
          "type": "continued_by"
        },
        {
          "parent": "roman_baptismal_tradition",
          "child": "donatus",
          "type": "continued_by"
        },
        {
          "parent": "roman_baptismal_tradition",
          "child": "augustine_baptism",
          "type": "continued_by"
        },
        {
          "parent": "donatus",
          "child": "donatist_controversy",
          "type": "debated_in"
        },
        {
          "parent": "augustine_baptism",
          "child": "donatist_controversy",
          "type": "debated_in"
        },
        {
          "parent": "donatist_controversy",
          "child": "catholic_baptism_patristic",
          "type": "continued_by"
        },
        {
          "parent": "catholic_baptism_patristic",
          "child": "anabaptists",
          "type": "drifted_from"
        },
        {
          "parent": "catholic_baptism_patristic",
          "child": "trent_fathers",
          "type": "continued_by"
        },
        {
          "parent": "anabaptists",
          "child": "reformation_baptism_controversy",
          "type": "debated_in"
        },
        {
          "parent": "trent_fathers",
          "child": "reformation_baptism_controversy",
          "type": "debated_in"
        },
        {
          "parent": "reformation_baptism_controversy",
          "child": "catholic_baptism",
          "type": "continued_by"
        },
        {
          "parent": "reformation_baptism_controversy",
          "child": "protestant_baptism",
          "type": "drifted_from"
        }
      ],
      "edges": [
        {
          "source": "cyprian",
          "target": "baptism_heretics",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "stephen_i",
          "target": "baptism_heretics",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "baptism_heretics",
          "target": "roman_baptismal_tradition",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "donatus",
          "target": "donatist_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "augustine_baptism",
          "target": "donatist_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "donatist_controversy",
          "target": "catholic_baptism_patristic",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "anabaptists",
          "target": "reformation_baptism_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "trent_fathers",
          "target": "reformation_baptism_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "reformation_baptism_controversy",
          "target": "catholic_baptism",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "reformation_baptism_controversy",
          "target": "protestant_baptism",
          "type": "drifted_from",
          "prominence": "primary"
        }
      ]
    },
    "trinity": {
      "label": "Trinity",
      "summary": "From the baptismal name through modalism, Arianism, the Spirit’s divinity, and the Filioque — each controversy opened by two opposing figures and resolved in tradition.",
      "nodes": [
        {
          "id": "trinity",
          "type": "concept",
          "title": "Trinity",
          "subtitle": "One God, three persons",
          "dates": "Scripture to present",
          "tradition": "core",
          "summary": "The central mystery of Christian faith: one God in three persons — Father, Son, and Holy Spirit — consubstantial, coeternal, and equally to be adored.",
          "x": 600,
          "y": 40,
          "tier": 0,
          "level": 1
        },
        {
          "id": "baptismal_formula",
          "type": "concept",
          "title": "Baptismal Formula",
          "subtitle": "Matthew 28:19",
          "dates": "Apostolic",
          "tradition": "early",
          "summary": "The Church baptizes “in the name of the Father and of the Son and of the Holy Spirit.” Three names, one name — the seed of all later Trinitarian dogma.",
          "x": 600,
          "y": 200,
          "tier": 1,
          "level": 1
        },
        {
          "id": "sabellius",
          "type": "figure",
          "title": "Sabellius",
          "subtitle": "Modalism",
          "dates": "3rd century",
          "tradition": "early",
          "summary": "Collapsed Father, Son, and Spirit into successive modes of one person. The Three of baptism become masks, not real persons.",
          "x": 300,
          "y": 380,
          "tier": 2,
          "level": 1
        },
        {
          "id": "tertullian_hippolytus",
          "type": "figure",
          "title": "Tertullian & Hippolytus",
          "subtitle": "Three persons",
          "dates": "2nd–3rd century",
          "tradition": "early",
          "summary": "Defended the real distinction of Father, Son, and Spirit against modalism. Tertullian’s “three persons, one substance” gave the West its enduring vocabulary.",
          "x": 900,
          "y": 380,
          "tier": 2,
          "level": 1,
          "figureId": "tertullian"
        },
        {
          "id": "modalist_controversy",
          "type": "event",
          "title": "Modalist Controversy",
          "subtitle": "Persons or masks?",
          "dates": "3rd century",
          "tradition": "early",
          "summary": "Whether Father, Son, and Spirit are real distinct persons or successive appearances of one person. The Church refuses modalism without falling into tritheism.",
          "x": 600,
          "y": 560,
          "tier": 3,
          "level": 1,
          "controversyId": "sabellianism",
          "controversyCentury": "3rd"
        },
        {
          "id": "pre_nicene_tradition",
          "type": "tradition",
          "title": "Pre-Nicene Orthodoxy",
          "subtitle": "Three and One",
          "dates": "3rd century",
          "tradition": "early",
          "summary": "The public rule of faith: one God, the Father; one Lord Jesus Christ His Son; one Holy Spirit — real distinction without division of the divine substance.",
          "x": 600,
          "y": 720,
          "tier": 4,
          "level": 1
        },
        {
          "id": "arius",
          "type": "figure",
          "title": "Arius",
          "subtitle": "“There was when He was not”",
          "dates": "c. 256 – 336",
          "tradition": "early",
          "summary": "Taught that the Son is a creature, however exalted. The Word is not true God but the first and greatest of made things.",
          "x": 300,
          "y": 900,
          "tier": 5,
          "level": 1
        },
        {
          "id": "athanasius",
          "type": "figure",
          "title": "St. Athanasius",
          "subtitle": "Consubstantial",
          "dates": "c. 296 – 373",
          "tradition": "early",
          "summary": "Champion of Nicaea under repeated exile. The Son is begotten, not made, true God from true God — otherwise deification and worship collapse.",
          "x": 900,
          "y": 900,
          "tier": 5,
          "level": 1,
          "figureId": "athanasius"
        },
        {
          "id": "arian_controversy",
          "type": "event",
          "title": "Arian Controversy",
          "subtitle": "Nicaea 325",
          "dates": "c. 318 – 381",
          "tradition": "early",
          "summary": "The crisis over the Son’s divinity. Nicaea defines the homoousios; decades of imperial politics follow before the Creed is securely received.",
          "x": 600,
          "y": 1080,
          "tier": 6,
          "level": 1,
          "controversyId": "arianism",
          "controversyCentury": "4th"
        },
        {
          "id": "nicene_tradition",
          "type": "tradition",
          "title": "Nicene Faith",
          "subtitle": "Homoousios",
          "dates": "325 onward",
          "tradition": "early",
          "summary": "The Son is consubstantial with the Father. This is the non-negotiable premise of all later Catholic and Orthodox Christology and Trinitarian dogma.",
          "x": 600,
          "y": 1240,
          "tier": 7,
          "level": 1
        },
        {
          "id": "pneumatomachi",
          "type": "figure",
          "title": "Pneumatomachi",
          "subtitle": "Spirit as creature",
          "dates": "4th century",
          "tradition": "early",
          "summary": "Denied the full divinity of the Holy Spirit, treating Him as a creature or lesser power rather than true God to be worshipped with the Father and the Son.",
          "x": 300,
          "y": 1420,
          "tier": 8,
          "level": 1
        },
        {
          "id": "cappadocians",
          "type": "figure",
          "title": "The Cappadocians",
          "subtitle": "Spirit is Lord",
          "dates": "4th century",
          "tradition": "early",
          "summary": "Basil, Gregory of Nazianzus, and Gregory of Nyssa defended the Spirit’s full divinity and fixed the language of one ousia and three hypostases.",
          "x": 900,
          "y": 1420,
          "tier": 8,
          "level": 1,
          "figureId": "basil"
        },
        {
          "id": "pneumatomachian_controversy",
          "type": "event",
          "title": "Pneumatomachian Controversy",
          "subtitle": "Constantinople 381",
          "dates": "c. 360 – 381",
          "tradition": "early",
          "summary": "Whether the Holy Spirit is true God. Constantinople I completes the Creed: the Spirit is “the Lord and Giver of life… worshipped and glorified with the Father and the Son.”",
          "x": 600,
          "y": 1600,
          "tier": 9,
          "level": 1,
          "controversyId": "pneumatomachian",
          "controversyCentury": "4th"
        },
        {
          "id": "constantinopolitan_tradition",
          "type": "tradition",
          "title": "Constantinopolitan Faith",
          "subtitle": "Full Trinity",
          "dates": "381 onward",
          "tradition": "early",
          "summary": "One God in three consubstantial persons. Nicaea and Constantinople together are the foundation of all later Trinitarian theology East and West.",
          "x": 600,
          "y": 1760,
          "tier": 10,
          "level": 1
        },
        {
          "id": "photius",
          "type": "figure",
          "title": "Photius of Constantinople",
          "subtitle": "Against the Filioque",
          "dates": "c. 810 – 893",
          "tradition": "orthodox",
          "summary": "Patriarch who made the Filioque a public charge against the Latins, defending the Father as sole unbegotten source of the Spirit.",
          "x": 300,
          "y": 1940,
          "tier": 11,
          "level": 1
        },
        {
          "id": "latin_doctors",
          "type": "figure",
          "title": "Latin Doctors",
          "subtitle": "From the Father and the Son",
          "dates": "Augustine – Aquinas",
          "tradition": "catholic",
          "summary": "Augustine, the Carolingian theologians, and Aquinas hold that the Spirit proceeds from the Father and the Son as from one principle — safeguarding the Son’s consubstantial divinity.",
          "x": 900,
          "y": 1940,
          "tier": 11,
          "level": 1
        },
        {
          "id": "filioque_controversy",
          "type": "event",
          "title": "Filioque Controversy",
          "subtitle": "Procession debated",
          "dates": "9th century – present",
          "tradition": "core",
          "summary": "Whether the Spirit proceeds from the Father alone or from the Father and the Son. Doctrine, Creed text, and communion become entangled between East and West.",
          "x": 600,
          "y": 2120,
          "tier": 12,
          "level": 1,
          "controversyId": "filioque-9th",
          "controversyCentury": "9th"
        },
        {
          "id": "latin_trinity",
          "type": "tradition",
          "title": "Latin Tradition",
          "subtitle": "Filioque",
          "dates": "Medieval – present",
          "tradition": "catholic",
          "summary": "The Spirit proceeds from the Father and the Son. The Filioque is true doctrine and, in the Latin Church, part of the liturgical Creed.",
          "x": 300,
          "y": 2300,
          "tier": 13,
          "level": 1
        },
        {
          "id": "greek_trinity",
          "type": "tradition",
          "title": "Greek Tradition",
          "subtitle": "From the Father",
          "dates": "Patristic – present",
          "tradition": "orthodox",
          "summary": "The Father is sole unbegotten source. The Creed of 381 stands without addition; the Filioque is rejected as creed and, by many, as doctrine.",
          "x": 900,
          "y": 2300,
          "tier": 13,
          "level": 1
        }
      ],
      "branches": [
        {
          "parent": "trinity",
          "child": "baptismal_formula",
          "type": "developed_from"
        },
        {
          "parent": "baptismal_formula",
          "child": "sabellius",
          "type": "drifted_from"
        },
        {
          "parent": "baptismal_formula",
          "child": "tertullian_hippolytus",
          "type": "continued_by"
        },
        {
          "parent": "sabellius",
          "child": "modalist_controversy",
          "type": "debated_in"
        },
        {
          "parent": "tertullian_hippolytus",
          "child": "modalist_controversy",
          "type": "debated_in"
        },
        {
          "parent": "modalist_controversy",
          "child": "pre_nicene_tradition",
          "type": "continued_by"
        },
        {
          "parent": "pre_nicene_tradition",
          "child": "arius",
          "type": "drifted_from"
        },
        {
          "parent": "pre_nicene_tradition",
          "child": "athanasius",
          "type": "continued_by"
        },
        {
          "parent": "arius",
          "child": "arian_controversy",
          "type": "debated_in"
        },
        {
          "parent": "athanasius",
          "child": "arian_controversy",
          "type": "debated_in"
        },
        {
          "parent": "arian_controversy",
          "child": "nicene_tradition",
          "type": "continued_by"
        },
        {
          "parent": "nicene_tradition",
          "child": "pneumatomachi",
          "type": "drifted_from"
        },
        {
          "parent": "nicene_tradition",
          "child": "cappadocians",
          "type": "continued_by"
        },
        {
          "parent": "pneumatomachi",
          "child": "pneumatomachian_controversy",
          "type": "debated_in"
        },
        {
          "parent": "cappadocians",
          "child": "pneumatomachian_controversy",
          "type": "debated_in"
        },
        {
          "parent": "pneumatomachian_controversy",
          "child": "constantinopolitan_tradition",
          "type": "continued_by"
        },
        {
          "parent": "constantinopolitan_tradition",
          "child": "photius",
          "type": "continued_by"
        },
        {
          "parent": "constantinopolitan_tradition",
          "child": "latin_doctors",
          "type": "continued_by"
        },
        {
          "parent": "photius",
          "child": "filioque_controversy",
          "type": "debated_in"
        },
        {
          "parent": "latin_doctors",
          "child": "filioque_controversy",
          "type": "debated_in"
        },
        {
          "parent": "filioque_controversy",
          "child": "latin_trinity",
          "type": "continued_by"
        },
        {
          "parent": "filioque_controversy",
          "child": "greek_trinity",
          "type": "drifted_from"
        }
      ],
      "edges": [
        {
          "source": "sabellius",
          "target": "modalist_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "tertullian_hippolytus",
          "target": "modalist_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "modalist_controversy",
          "target": "pre_nicene_tradition",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "arius",
          "target": "arian_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "athanasius",
          "target": "arian_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "arian_controversy",
          "target": "nicene_tradition",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "pneumatomachi",
          "target": "pneumatomachian_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "cappadocians",
          "target": "pneumatomachian_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "pneumatomachian_controversy",
          "target": "constantinopolitan_tradition",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "photius",
          "target": "filioque_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "latin_doctors",
          "target": "filioque_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "filioque_controversy",
          "target": "latin_trinity",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "filioque_controversy",
          "target": "greek_trinity",
          "type": "drifted_from",
          "prominence": "primary"
        }
      ]
    },
    "original_sin": {
      "label": "Original Sin",
      "summary": "From Paul’s Adam typology through Pelagius and Augustine, then Reformation disputes — each controversy opened by two opposing figures and resolved in tradition.",
      "nodes": [
        {
          "id": "original_sin",
          "type": "concept",
          "title": "Original Sin",
          "subtitle": "Peccatum originale",
          "dates": "Scripture to present",
          "tradition": "core",
          "summary": "The doctrine that Adam’s sin has consequences for the whole human race — guilt, deprivation of original justice, and a wounded nature transmitted to his descendants.",
          "x": 600,
          "y": 40,
          "tier": 0,
          "level": 1
        },
        {
          "id": "paul_adam",
          "type": "figure",
          "title": "St. Paul",
          "subtitle": "Romans 5",
          "dates": "1st century",
          "tradition": "early",
          "summary": "“Sin came into the world through one man, and death through sin” (Rom 5:12). The apostolic text is the scriptural center of every later doctrine of original sin.",
          "x": 600,
          "y": 200,
          "tier": 1,
          "level": 1
        },
        {
          "id": "pelagius_os",
          "type": "figure",
          "title": "Pelagius",
          "subtitle": "No inherited guilt",
          "dates": "c. 354 – c. 418",
          "tradition": "early",
          "summary": "Denied that Adam’s sin is transmitted as guilt to infants. Children are born in the same state as Adam before the fall; sin is only imitation, not propagation.",
          "x": 300,
          "y": 380,
          "tier": 2,
          "level": 1
        },
        {
          "id": "augustine_os",
          "type": "figure",
          "title": "St. Augustine of Hippo",
          "subtitle": "Propagated sin",
          "dates": "354 – 430",
          "tradition": "early",
          "summary": "Taught that all inherit from Adam both the guilt of sin and a wounded will. Infant baptism for the remission of sins presupposes that infants need remission.",
          "x": 900,
          "y": 380,
          "tier": 2,
          "level": 1,
          "figureId": "augustine"
        },
        {
          "id": "pelagian_os_controversy",
          "type": "event",
          "title": "Pelagian Controversy",
          "subtitle": "Sin & infants",
          "dates": "c. 411 – 431",
          "tradition": "early",
          "summary": "Whether newborns inherit Adam’s sin or only his bad example. African councils and papal letters received Augustine; Pelagianism was condemned.",
          "x": 600,
          "y": 560,
          "tier": 3,
          "level": 1,
          "controversyId": "pelagianism",
          "controversyCentury": "5th"
        },
        {
          "id": "catholic_os_patristic",
          "type": "tradition",
          "title": "Catholic Doctrine",
          "subtitle": "Inherited wound",
          "dates": "5th century onward",
          "tradition": "catholic",
          "summary": "Original sin is transmitted by propagation, not imitation alone. It is the deprivation of original holiness and justice; baptism remits it. Orange (529) confirms the Augustinian line.",
          "x": 600,
          "y": 720,
          "tier": 4,
          "level": 1
        },
        {
          "id": "luther_os",
          "type": "figure",
          "title": "Martin Luther",
          "subtitle": "Total corruption",
          "dates": "1483 – 1546",
          "tradition": "protestant",
          "summary": "Radicalized the Augustinian diagnosis: fallen man is totally corrupt in spiritual things; original sin remains even after baptism as the lasting tinder of concupiscence identified with sin itself.",
          "x": 300,
          "y": 900,
          "tier": 5,
          "level": 1
        },
        {
          "id": "trent_os",
          "type": "figure",
          "title": "Council of Trent",
          "subtitle": "Catholic definition",
          "dates": "1546",
          "tradition": "catholic",
          "summary": "Defined that Adam’s sin is transmitted to all by propagation, not imitation; that it is proper to each person; and that baptism takes away its guilt, though concupiscence remains as fuel for struggle, not as sin itself in the baptized.",
          "x": 900,
          "y": 900,
          "tier": 5,
          "level": 1,
          "controversyId": "reformation",
          "controversyCentury": "16th"
        },
        {
          "id": "reformation_os_controversy",
          "type": "event",
          "title": "Reformation Controversy",
          "subtitle": "Guilt & concupiscence",
          "dates": "16th century",
          "tradition": "core",
          "summary": "Whether original sin remains after baptism as true sin, how far nature is corrupted, and whether concupiscence in the justified is itself sin. Trent and the Reformers diverge.",
          "x": 600,
          "y": 1080,
          "tier": 6,
          "level": 1,
          "controversyId": "reformation",
          "controversyCentury": "16th"
        },
        {
          "id": "catholic_os",
          "type": "tradition",
          "title": "Catholic Teaching",
          "subtitle": "Trent to present",
          "dates": "Trent – present",
          "tradition": "catholic",
          "summary": "Original sin is the loss of original justice and holiness, transmitted by generation. Baptism remits it. Concupiscence remains but is not sin itself in the regenerate. Infants need baptism for this remission.",
          "x": 300,
          "y": 1260,
          "tier": 7,
          "level": 1
        },
        {
          "id": "protestant_os",
          "type": "tradition",
          "title": "Protestant Teaching",
          "subtitle": "Reformation lines",
          "dates": "16th c. – present",
          "tradition": "protestant",
          "summary": "Classical Protestantism stresses total inability in spiritual things and often treats remaining concupiscence as sin. Views of infant guilt and baptism vary across Lutheran, Reformed, and free-church traditions.",
          "x": 900,
          "y": 1260,
          "tier": 7,
          "level": 1
        }
      ],
      "branches": [
        {
          "parent": "original_sin",
          "child": "paul_adam",
          "type": "developed_from"
        },
        {
          "parent": "paul_adam",
          "child": "pelagius_os",
          "type": "drifted_from"
        },
        {
          "parent": "paul_adam",
          "child": "augustine_os",
          "type": "continued_by"
        },
        {
          "parent": "pelagius_os",
          "child": "pelagian_os_controversy",
          "type": "debated_in"
        },
        {
          "parent": "augustine_os",
          "child": "pelagian_os_controversy",
          "type": "debated_in"
        },
        {
          "parent": "pelagian_os_controversy",
          "child": "catholic_os_patristic",
          "type": "continued_by"
        },
        {
          "parent": "catholic_os_patristic",
          "child": "luther_os",
          "type": "drifted_from"
        },
        {
          "parent": "catholic_os_patristic",
          "child": "trent_os",
          "type": "continued_by"
        },
        {
          "parent": "luther_os",
          "child": "reformation_os_controversy",
          "type": "debated_in"
        },
        {
          "parent": "trent_os",
          "child": "reformation_os_controversy",
          "type": "debated_in"
        },
        {
          "parent": "reformation_os_controversy",
          "child": "catholic_os",
          "type": "continued_by"
        },
        {
          "parent": "reformation_os_controversy",
          "child": "protestant_os",
          "type": "drifted_from"
        }
      ],
      "edges": [
        {
          "source": "pelagius_os",
          "target": "pelagian_os_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "augustine_os",
          "target": "pelagian_os_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "pelagian_os_controversy",
          "target": "catholic_os_patristic",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "luther_os",
          "target": "reformation_os_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "trent_os",
          "target": "reformation_os_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "reformation_os_controversy",
          "target": "catholic_os",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "reformation_os_controversy",
          "target": "protestant_os",
          "type": "drifted_from",
          "prominence": "primary"
        }
      ]
    },
    "predestination": {
      "label": "Predestination",
      "summary": "From Paul’s election language through Augustine and semi-Pelagians, then Calvin and Catholic doctors — each controversy opened by two opposing figures and resolved in tradition.",
      "nodes": [
        {
          "id": "predestination",
          "type": "concept",
          "title": "Predestination",
          "subtitle": "God’s eternal purpose",
          "dates": "Scripture to present",
          "tradition": "core",
          "summary": "The doctrine that God, from eternity, orders rational creatures to their supernatural end. Catholic teaching affirms predestination to grace and glory while refusing a double decree of reprobation that would make God the author of sin.",
          "x": 600,
          "y": 40,
          "tier": 0,
          "level": 1
        },
        {
          "id": "paul_election",
          "type": "figure",
          "title": "St. Paul",
          "subtitle": "Romans 8–9 · Ephesians 1",
          "dates": "1st century",
          "tradition": "early",
          "summary": "“Those whom he predestined he also called” (Rom 8:30). Election and calling are grounded in God’s purpose, not in foreseen human merit as the first cause.",
          "x": 600,
          "y": 200,
          "tier": 1,
          "level": 1
        },
        {
          "id": "semi_pelagians",
          "type": "figure",
          "title": "Semi-Pelagians",
          "subtitle": "Beginning from us",
          "dates": "5th–6th century",
          "tradition": "early",
          "summary": "Held that the beginning of faith may come from the human will, while later perseverance needs grace. Predestination is adjusted to foreseen response rather than to pure initiative of grace.",
          "x": 300,
          "y": 380,
          "tier": 2,
          "level": 1
        },
        {
          "id": "augustine_pred",
          "type": "figure",
          "title": "St. Augustine of Hippo",
          "subtitle": "Grace’s initiative",
          "dates": "354 – 430",
          "tradition": "early",
          "summary": "Taught predestination as God’s gracious preparation of gifts that make the elect respond. The will is free, yet every good beginning is already gift. Massa damnata and the primacy of grace mark his late anti-Pelagian works.",
          "x": 900,
          "y": 380,
          "tier": 2,
          "level": 1,
          "figureId": "augustine"
        },
        {
          "id": "orange_pred_controversy",
          "type": "event",
          "title": "Semi-Pelagian Controversy",
          "subtitle": "Orange 529",
          "dates": "5th–6th century",
          "tradition": "early",
          "summary": "Whether the first turn toward God can be from nature alone. Orange, confirmed by Boniface II, teaches that the beginning of faith is gift and closes semi-Pelagianism for the Latin Church.",
          "x": 600,
          "y": 560,
          "tier": 3,
          "level": 1,
          "controversyId": "semi-pelagianism",
          "controversyCentury": "6th"
        },
        {
          "id": "catholic_pred_patristic",
          "type": "tradition",
          "title": "Catholic Doctrine",
          "subtitle": "Grace first",
          "dates": "Orange onward",
          "tradition": "catholic",
          "summary": "God predestines; grace is prior to every salutary act; free will is healed, not destroyed. Double predestination to damnation as a positive decree parallel to election is not Catholic dogma.",
          "x": 600,
          "y": 720,
          "tier": 4,
          "level": 1
        },
        {
          "id": "calvin_pred",
          "type": "figure",
          "title": "John Calvin",
          "subtitle": "Double decree",
          "dates": "1509 – 1564",
          "tradition": "protestant",
          "summary": "Taught a doctrine of double predestination: some are elected to life, others ordained to damnation, for the manifestation of God’s glory. The decree is ultimate and not based on foreseen faith.",
          "x": 300,
          "y": 900,
          "tier": 5,
          "level": 1
        },
        {
          "id": "catholic_doctors_pred",
          "type": "figure",
          "title": "Catholic Doctors",
          "subtitle": "Election without double decree",
          "dates": "Scholastic – Trent",
          "tradition": "catholic",
          "summary": "Aquinas and the mainstream scholastic tradition: God predestines the elect to grace and glory; reprobation is permission of sin and the consequent just punishment, not a symmetric positive decree to evil.",
          "x": 900,
          "y": 900,
          "tier": 5,
          "level": 1
        },
        {
          "id": "reformation_pred_controversy",
          "type": "event",
          "title": "Reformation Controversy",
          "subtitle": "Double predestination",
          "dates": "16th–17th century",
          "tradition": "core",
          "summary": "Whether God actively predestines some to damnation as he predestines others to life. Reformed confessions often affirm it; Catholic theology refuses a decree that would make God the author of sin.",
          "x": 600,
          "y": 1080,
          "tier": 6,
          "level": 1,
          "controversyId": "reformation",
          "controversyCentury": "16th"
        },
        {
          "id": "catholic_pred",
          "type": "tradition",
          "title": "Catholic Teaching",
          "subtitle": "Predestination to life",
          "dates": "Trent – present",
          "tradition": "catholic",
          "summary": "God predestines no one to evil by a positive decree. Predestination to grace and glory is real; human freedom under grace is real. Thomist and Molinist schools explain the concurrence differently; both are permitted.",
          "x": 300,
          "y": 1260,
          "tier": 7,
          "level": 1
        },
        {
          "id": "reformed_pred",
          "type": "tradition",
          "title": "Reformed Teaching",
          "subtitle": "Election & reprobation",
          "dates": "16th c. – present",
          "tradition": "protestant",
          "summary": "Classical Reformed theology affirms unconditional election and, in many confessions, reprobation as part of the eternal decree. Later Reformed thought varies in how the double decree is stated.",
          "x": 900,
          "y": 1260,
          "tier": 7,
          "level": 1
        },
        {
          "id": "banez_pred",
          "type": "figure",
          "title": "Domingo Báñez, O.P.",
          "subtitle": "Thomist predestination",
          "dates": "1528 – 1604",
          "tradition": "catholic",
          "summary": "Linked predestination to physical premotion: the elect are infallibly moved by efficacious grace; the asymmetry of election is rooted in God’s will to give that grace.",
          "x": 200,
          "y": 1440,
          "tier": 8,
          "level": 1
        },
        {
          "id": "molina_pred",
          "type": "figure",
          "title": "Luis de Molina, S.J.",
          "subtitle": "Middle knowledge",
          "dates": "1535 – 1600",
          "tradition": "catholic",
          "summary": "Explained predestination via scientia media: God elects in light of what creatures would freely do in any circumstance, preserving a different account of the will’s role under grace.",
          "x": 500,
          "y": 1440,
          "tier": 8,
          "level": 1
        },
        {
          "id": "de_auxiliis_pred",
          "type": "event",
          "title": "De Auxiliis",
          "subtitle": "How grace elects",
          "dates": "1598 – 1607",
          "tradition": "catholic",
          "summary": "The same congregations that examined grace and freedom examined predestination. Neither Báñez nor Molina was condemned; the Church required both the priority of grace and the reality of freedom.",
          "x": 350,
          "y": 1620,
          "tier": 9,
          "level": 1,
          "controversyId": "de-auxiliis",
          "controversyCentury": "17th"
        },
        {
          "id": "catholic_schools_pred",
          "type": "tradition",
          "title": "Catholic Schools",
          "subtitle": "Both permitted",
          "dates": "1607 – present",
          "tradition": "catholic",
          "summary": "Thomist and Molinist accounts of predestination remain legitimate. Dogma binds on the refusal of Pelagianism and of a decree to evil; technical explanations of the decree remain schools of opinion.",
          "x": 350,
          "y": 1800,
          "tier": 10,
          "level": 1
        }
      ],
      "branches": [
        {
          "parent": "predestination",
          "child": "paul_election",
          "type": "developed_from"
        },
        {
          "parent": "paul_election",
          "child": "semi_pelagians",
          "type": "drifted_from"
        },
        {
          "parent": "paul_election",
          "child": "augustine_pred",
          "type": "continued_by"
        },
        {
          "parent": "semi_pelagians",
          "child": "orange_pred_controversy",
          "type": "debated_in"
        },
        {
          "parent": "augustine_pred",
          "child": "orange_pred_controversy",
          "type": "debated_in"
        },
        {
          "parent": "orange_pred_controversy",
          "child": "catholic_pred_patristic",
          "type": "continued_by"
        },
        {
          "parent": "catholic_pred_patristic",
          "child": "calvin_pred",
          "type": "drifted_from"
        },
        {
          "parent": "catholic_pred_patristic",
          "child": "catholic_doctors_pred",
          "type": "continued_by"
        },
        {
          "parent": "calvin_pred",
          "child": "reformation_pred_controversy",
          "type": "debated_in"
        },
        {
          "parent": "catholic_doctors_pred",
          "child": "reformation_pred_controversy",
          "type": "debated_in"
        },
        {
          "parent": "reformation_pred_controversy",
          "child": "catholic_pred",
          "type": "continued_by"
        },
        {
          "parent": "reformation_pred_controversy",
          "child": "reformed_pred",
          "type": "drifted_from"
        },
        {
          "parent": "catholic_pred",
          "child": "banez_pred",
          "type": "continued_by"
        },
        {
          "parent": "catholic_pred",
          "child": "molina_pred",
          "type": "continued_by"
        },
        {
          "parent": "banez_pred",
          "child": "de_auxiliis_pred",
          "type": "debated_in"
        },
        {
          "parent": "molina_pred",
          "child": "de_auxiliis_pred",
          "type": "debated_in"
        },
        {
          "parent": "de_auxiliis_pred",
          "child": "catholic_schools_pred",
          "type": "continued_by"
        }
      ],
      "edges": [
        {
          "source": "semi_pelagians",
          "target": "orange_pred_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "augustine_pred",
          "target": "orange_pred_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "orange_pred_controversy",
          "target": "catholic_pred_patristic",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "calvin_pred",
          "target": "reformation_pred_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "catholic_doctors_pred",
          "target": "reformation_pred_controversy",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "reformation_pred_controversy",
          "target": "catholic_pred",
          "type": "continued_by",
          "prominence": "primary"
        },
        {
          "source": "reformation_pred_controversy",
          "target": "reformed_pred",
          "type": "drifted_from",
          "prominence": "primary"
        },
        {
          "source": "banez_pred",
          "target": "de_auxiliis_pred",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "molina_pred",
          "target": "de_auxiliis_pred",
          "type": "debated_during",
          "prominence": "primary"
        },
        {
          "source": "de_auxiliis_pred",
          "target": "catholic_schools_pred",
          "type": "continued_by",
          "prominence": "primary"
        }
      ]
    }
  },
  "nodes": [
    {
      "id": "grace",
      "type": "concept",
      "title": "Grace",
      "subtitle": "Gratia",
      "dates": "Scripture to present",
      "tradition": "core",
      "summary": "The free and unmerited gift of God by which the human person is called, healed, elevated, and made a partaker of the divine life — not a wage owed to nature, but God’s own action toward the creature.",
      "x": 600,
      "y": 60,
      "tier": 0,
      "level": 1
    },
    {
      "id": "paul",
      "type": "figure",
      "title": "St. Paul",
      "subtitle": "Apostle of grace",
      "dates": "1st century",
      "tradition": "early",
      "summary": "The apostolic source whose letters place grace at the center of salvation: justified by grace as a gift (Rom 3:24), saved by grace through faith (Eph 2:8), and living under a reign of grace rather than of law.",
      "x": 600,
      "y": 240,
      "tier": 1,
      "level": 1
    },
    {
      "id": "augustine",
      "type": "figure",
      "title": "St. Augustine of Hippo",
      "subtitle": "Doctor of Grace",
      "dates": "354 – 430",
      "tradition": "early",
      "summary": "Forged the Western doctrine of grace against Pelagius: original sin, the priority of grace over every good will, and the prayer “Give what you command.” His mature teaching shaped councils, scholasticism, and the Reformation alike.",
      "x": 320,
      "y": 420,
      "tier": 2,
      "level": 1,
      "figureId": "augustine"
    },
    {
      "id": "pelagius",
      "type": "figure",
      "title": "Pelagius",
      "subtitle": "Natural capacity",
      "dates": "c. 354 – c. 418",
      "tradition": "early",
      "summary": "Taught that fallen man retains the moral capacity to begin and advance toward salvation without an inward prior grace, reducing grace largely to law, example, and external help.",
      "x": 880,
      "y": 420,
      "tier": 2,
      "level": 1
    },
    {
      "id": "pelagian_controversy",
      "type": "event",
      "title": "Pelagian Controversy",
      "subtitle": "c. 411 – 431",
      "dates": "c. 411 – 431",
      "tradition": "early",
      "summary": "The decisive early crisis over original sin, free will, and the necessity of grace. African councils and papal letters received Augustine’s line; Pelagianism was condemned as alien to the Catholic faith.",
      "x": 600,
      "y": 600,
      "tier": 3,
      "level": 1,
      "controversyId": "pelagianism",
      "controversyCentury": "5th"
    },
    {
      "id": "orange",
      "type": "event",
      "title": "Council of Orange",
      "subtitle": "529",
      "dates": "529",
      "tradition": "catholic",
      "summary": "Confirmed by Boniface II, Orange closed the semi-Pelagian debate for the Latin Church: the beginning of faith itself is gift; grace heals and elevates the will; nature alone does not rise to the supernatural end.",
      "x": 600,
      "y": 780,
      "tier": 4,
      "level": 1,
      "controversyId": "semi-pelagianism",
      "controversyCentury": "6th"
    },
    {
      "id": "aquinas",
      "type": "figure",
      "title": "St. Thomas Aquinas",
      "subtitle": "Scholastic synthesis",
      "dates": "1225 – 1274",
      "tradition": "catholic",
      "summary": "Placed grace within a full account of nature and elevation: sanctifying grace as habitual participation in the divine life, actual graces as God’s help in particular acts, and the theological virtues as infused principles of the supernatural life.",
      "x": 600,
      "y": 960,
      "tier": 5,
      "level": 1,
      "figureId": "aquinas"
    },
    {
      "id": "luther",
      "type": "figure",
      "title": "Martin Luther",
      "subtitle": "Sola gratia",
      "dates": "1483 – 1546",
      "tradition": "protestant",
      "summary": "Renewed the cry of free grace against what he took to be a semi-Pelagian scholasticism: the sinner is justified by grace alone through faith, by the alien righteousness of Christ, not by inherent merit preceding justification.",
      "x": 320,
      "y": 1140,
      "tier": 6,
      "level": 1
    },
    {
      "id": "cajetan",
      "type": "figure",
      "title": "Cardinal Cajetan",
      "subtitle": "Thomist reply",
      "dates": "1469 – 1534",
      "tradition": "catholic",
      "summary": "Leading Dominican commentator on Thomas who met Luther’s challenge and defended the Catholic account of grace, merit, and justification as a preparation for the conciliar response at Trent.",
      "x": 880,
      "y": 1140,
      "tier": 6,
      "level": 1,
      "figureId": "cajetan"
    },
    {
      "id": "trent",
      "type": "event",
      "title": "Council of Trent",
      "subtitle": "1545 – 1563",
      "dates": "1545 – 1563",
      "tradition": "catholic",
      "summary": "Defined that justification is by grace, involves the sinner’s free cooperation under grace, and consists in a true interior renewal — not imputation alone. Canons on grace and justification remain the Catholic dogmatic baseline.",
      "x": 600,
      "y": 1320,
      "tier": 7,
      "level": 1,
      "controversyId": "justification-trent",
      "controversyCentury": "16th"
    },
    {
      "id": "catholic_tradition",
      "type": "tradition",
      "title": "Catholic Tradition",
      "subtitle": "Grace that transforms",
      "dates": "Trent – present",
      "tradition": "catholic",
      "summary": "Grace as both favor and interior gift: prevenient and cooperative, habitual and actual, ordered to theosis and the vision of God, applied through faith and the sacraments in the communion of the Church.",
      "x": 320,
      "y": 1500,
      "tier": 8,
      "level": 1
    },
    {
      "id": "protestant_tradition",
      "type": "tradition",
      "title": "Protestant Tradition",
      "subtitle": "Sola gratia",
      "dates": "16th c. – present",
      "tradition": "protestant",
      "summary": "The Reformation families’ insistence that salvation is by grace alone, typically paired with forensic justification and a strong doctrine of the bondage or inability of the fallen will apart from regenerating grace.",
      "x": 880,
      "y": 1500,
      "tier": 8,
      "level": 1
    },
    {
      "id": "orthodox_tradition",
      "type": "tradition",
      "title": "Eastern Orthodox Tradition",
      "subtitle": "Energies & theosis",
      "dates": "Patristic – present",
      "tradition": "orthodox",
      "summary": "Grace as the uncreated energies of God by which the human person is deified. Distinct in vocabulary from the Latin habitus-account, yet ordered to the same end: participation in the divine life.",
      "x": 600,
      "y": 1680,
      "tier": 9,
      "level": 1
    },
    {
      "id": "banez",
      "type": "figure",
      "title": "Domingo Báñez, O.P.",
      "subtitle": "Physical premotion",
      "dates": "1528 – 1604",
      "tradition": "catholic",
      "summary": "Dominican theologian who defended a Thomist account of efficacious grace as physical premotion: God moves the will infallibly yet freely to the salutary act.",
      "x": 200,
      "y": 1680,
      "tier": 9,
      "level": 1
    },
    {
      "id": "molina",
      "type": "figure",
      "title": "Luis de Molina, S.J.",
      "subtitle": "Middle knowledge",
      "dates": "1535 – 1600",
      "tradition": "catholic",
      "summary": "Jesuit theologian who taught scientia media and a concurrence that preserves a stronger account of the will’s contribution under grace — the Molinist alternative to Báñez.",
      "x": 500,
      "y": 1680,
      "tier": 9,
      "level": 1
    },
    {
      "id": "de_auxiliis",
      "type": "event",
      "title": "De Auxiliis",
      "subtitle": "Grace & free will",
      "dates": "1598 – 1607",
      "tradition": "catholic",
      "summary": "The Dominican–Jesuit controversy over efficacious grace, predestination, and free will. Congregations under Clement VIII and Paul V examined both systems; the Holy See imposed silence on mutual censures without dogmatically settling either school.",
      "x": 350,
      "y": 1860,
      "tier": 10,
      "level": 1,
      "controversyId": "de-auxiliis",
      "controversyCentury": "17th"
    },
    {
      "id": "catholic_schools",
      "type": "tradition",
      "title": "Catholic Schools",
      "subtitle": "Both permitted",
      "dates": "1607 – present",
      "tradition": "catholic",
      "summary": "After De Auxiliis, Thomist and Molinist accounts of grace and freedom remain legitimate Catholic schools. Dogma requires both true grace and true freedom; it does not canonize one technical explanation of their concurrence.",
      "x": 350,
      "y": 2040,
      "tier": 11,
      "level": 1
    }
  ],
  "branches": [
    {
      "parent": "grace",
      "child": "paul",
      "type": "developed_from"
    },
    {
      "parent": "paul",
      "child": "augustine",
      "type": "developed_from"
    },
    {
      "parent": "paul",
      "child": "pelagius",
      "type": "drifted_from"
    },
    {
      "parent": "augustine",
      "child": "pelagian_controversy",
      "type": "debated_in"
    },
    {
      "parent": "pelagius",
      "child": "pelagian_controversy",
      "type": "debated_in"
    },
    {
      "parent": "pelagian_controversy",
      "child": "orange",
      "type": "settled_by"
    },
    {
      "parent": "orange",
      "child": "aquinas",
      "type": "continued_by"
    },
    {
      "parent": "aquinas",
      "child": "luther",
      "type": "drifted_from"
    },
    {
      "parent": "aquinas",
      "child": "cajetan",
      "type": "continued_by"
    },
    {
      "parent": "luther",
      "child": "trent",
      "type": "debated_in"
    },
    {
      "parent": "cajetan",
      "child": "trent",
      "type": "debated_in"
    },
    {
      "parent": "trent",
      "child": "catholic_tradition",
      "type": "continued_by"
    },
    {
      "parent": "trent",
      "child": "protestant_tradition",
      "type": "drifted_from"
    },
    {
      "parent": "pelagian_controversy",
      "child": "orthodox_tradition",
      "type": "continued_by",
      "display": true
    },
    {
      "parent": "catholic_tradition",
      "child": "banez",
      "type": "continued_by"
    },
    {
      "parent": "catholic_tradition",
      "child": "molina",
      "type": "continued_by"
    },
    {
      "parent": "banez",
      "child": "de_auxiliis",
      "type": "debated_in"
    },
    {
      "parent": "molina",
      "child": "de_auxiliis",
      "type": "debated_in"
    },
    {
      "parent": "de_auxiliis",
      "child": "catholic_schools",
      "type": "continued_by"
    }
  ],
  "edges": [
    {
      "source": "paul",
      "target": "augustine",
      "type": "developed_from",
      "prominence": "primary"
    },
    {
      "source": "augustine",
      "target": "pelagian_controversy",
      "type": "debated_during",
      "prominence": "primary"
    },
    {
      "source": "pelagius",
      "target": "pelagian_controversy",
      "type": "debated_during",
      "prominence": "primary"
    },
    {
      "source": "pelagian_controversy",
      "target": "orange",
      "type": "settled_by",
      "prominence": "primary"
    },
    {
      "source": "orange",
      "target": "aquinas",
      "type": "continued_by",
      "prominence": "primary"
    },
    {
      "source": "aquinas",
      "target": "cajetan",
      "type": "continued_by",
      "prominence": "primary"
    },
    {
      "source": "aquinas",
      "target": "luther",
      "type": "drifted_from",
      "prominence": "primary"
    },
    {
      "source": "luther",
      "target": "trent",
      "type": "debated_during",
      "prominence": "primary"
    },
    {
      "source": "cajetan",
      "target": "trent",
      "type": "represented_at",
      "prominence": "primary"
    },
    {
      "source": "trent",
      "target": "catholic_tradition",
      "type": "continued_by",
      "prominence": "primary"
    },
    {
      "source": "trent",
      "target": "protestant_tradition",
      "type": "drifted_from",
      "prominence": "primary"
    },
    {
      "source": "banez",
      "target": "de_auxiliis",
      "type": "debated_during",
      "prominence": "primary"
    },
    {
      "source": "molina",
      "target": "de_auxiliis",
      "type": "debated_during",
      "prominence": "primary"
    },
    {
      "source": "de_auxiliis",
      "target": "catholic_schools",
      "type": "continued_by",
      "prominence": "primary"
    }
  ]
};

const defaultCategory = TREE_DATA.categories[TREE_DATA.meta.activeCategory] || Object.values(TREE_DATA.categories)[0];
TREE_DATA.nodes = defaultCategory.nodes;
TREE_DATA.branches = defaultCategory.branches;
TREE_DATA.edges = defaultCategory.edges;

if (typeof module !== "undefined" && module.exports) {
  module.exports = TREE_DATA;
}
