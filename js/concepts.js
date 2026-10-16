(function () {
  "use strict";

  /**
   * Concepts archive — Catholic theological lexicon for Melius Illuminare.
   * Sources are public-domain or free reference (New Advent / Catholic Encyclopedia,
   * ANF–NPNF Church Fathers, Councils, Summa, Catechism references).
   * Scope: Roman Catholic teaching, with the Fathers as received by the Church.
   */

  window.CONCEPT_ART = {
    "lent-fasting": ["LOCAL:img/concepts/lent-temptation.jpg", "center 45%"],
    "grace": ["LOCAL:img/concepts/grace-glory.jpg", "center 40%"],
    "justification": ["Last judgement.jpg", "center 32%"],
    "eucharist": ["LOCAL:img/concepts/eucharist-institution.jpg", "center 35%"],
    "trinity": ["Masaccio trinity.jpg", "center 42%"],
    "atonement": ["Crucifixion by Rembrandt (1631, S.Vincent du Mas-d'Agenais).jpg", "center 46%"],
    "church": ["Christ Handing the Keys to St. Peter by Pietro Perugino (crop).jpg", "center 48%"],
    "free-will": ["Caravaggio-The Conversion on the Way to Damascus.jpg", "center 52%"],
    "original-sin": ["Albrecht Dürer, Adam and Eve.jpg", "center 45%"],
    "sacraments": ["Seven Sacraments - Ordination 1636-40 Nicolas Poussin.jpg", "center 50%"],
    "scripture-tradition": ["Saint Jerome Writing-Caravaggio (1605-6).jpg", "center 40%"],
    "predestination": ["Jacopo Tintoretto - Jacob's Ladder - WGA22545.jpg", "center 50%"],
    "faith-works": ["Caravaggio - The Seven Works of Mercy.jpg", "center 45%"],
    "incarnation": ["Fra Angelico - The Annunciation.jpg", "center 48%"],
    "baptism": ["Pietro Perugino - Baptism of Christ - Sistine Chapel - cat13a.jpg", "center 50%"],
    "theosis": ["Transfiguration by Feofan Grek from Spaso-Preobrazhensky Cathedral in Pereslavl-Zalessky (15th c, Tretyakov gallery).jpeg", "center 50%"],
    "holy-spirit": ["Albrecht Dürer - Pentecost (NGA 1943.3.3667).jpg", "center 38%"],
    "mariology": ["Madonna of the Magnificat.png", "center 38%"],
    "purgatory": ["Carracci-Purgatory.jpg", "center 42%"],
    "faith": ["Johannes Vermeer, Allegory of the Catholic Faith, The Metropolitan Museum of Art.jpg", "center 42%"],
    "hope": ["LOCAL:img/concepts/hope-caravaggio.jpg", "center 35%"],
    "charity": ["LOCAL:img/concepts/charity-washing-feet.jpg", "center 55%"],
    "creation": ["Michelangelo - Creation of Adam.jpg", "center 42%"],
    "penance": ["Seven Sacraments - Ordination 1636-40 Nicolas Poussin.jpg", "center 48%"],
    "prayer": ["Albrecht Dürer - Study of an Apostle's Hands (Praying Hands) - WGA07062.jpg", "center 40%"],
    "death-resurrection": ["Resurrection.JPG", "center 40%"],
    "sin": ["LOCAL:img/concepts/sin-crying-angel.jpg", "center 30%"],
    "heaven": ["LOCAL:img/concepts/heaven-empyrean.jpg", "center 45%"],
    "hell": ["LOCAL:img/concepts/hell-damned.jpg", "center 35%"],
    "angels": ["LOCAL:img/concepts/angels-song.jpg", "center 40%"],
  };


  function conceptArtUrl(id) {
    const item = window.CONCEPT_ART[id];
    if (!item) return "";
    var name = item[0] || "";
    if (name.indexOf("LOCAL:") === 0) {
      return name.slice(6);
    }
    return "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(name) + "?width=640";
  }

  const concepts = [
    {
      id: "grace",
      name: "Grace",
      latin: "Gratia",
      short: "The free, unmerited gift by which God heals and elevates the human person to share His own life.",
      definition: "Grace is the free and unmerited gift of God by which the human person is called, healed, elevated, and made a partaker of the divine life. It is not a wage owed to nature, nor a mere external favor, but God's own action toward the creature.",
      scope: "Catholic teaching holds that fallen humanity cannot reach the supernatural end for which it was made without God’s free gift. Grace is both unmerited favor and an interior, elevating gift. It heals the wounds of sin and elevates nature so that the human person may live the life of faith, hope, and charity and, at last, the beatific vision.",
      treeUrl: "theological-tree.html?category=grace",
      exhibitUrl: "concept.html?id=grace",
      traditions: {
        catholic: {
          thesis: "Grace heals and elevates nature.",
          summary: "In Catholic teaching, grace is not a wage God owes to unaided effort. It is God’s free gift, ordered to a supernatural end that exceeds the powers of nature. Actual graces illuminate the mind and move the will; sanctifying (habitual) grace is a stable gift by which the soul is made a partaker of the divine nature and capable of meritorious acts of faith, hope, and charity. Justification is both forgiveness of sins and interior renewal. Faith is the beginning, foundation, and root, yet living faith is formed by charity. The sacraments are ordinary instruments of grace. Merit is always secondary: no one places God in debt. Final perseverance remains a gift to be prayed for. The Church distinguishes actual graces—transient helps that illuminate the intellect and move the will—from sanctifying (habitual) grace, a stable supernatural quality by which the soul is made a partaker of the divi…",
          sources: [
            { title: "On Grace and Free Will", url: "", note: "New Advent · Church Fathers" },
            { title: "On Nature and Grace", url: "", note: "New Advent · against Pelagius" },
            { title: "On the Spirit and the Letter", url: "", note: "New Advent · grace and law" },
            { title: "Summa Theologiae — Treatise on Grace", url: "", note: "ST I-II QQ.109–114" },
            { title: "Decree on Justification (Session VI)", url: "", note: "New Advent" }
          ]
        }
      }
    },
    {
      id: "justification",
      name: "Justification",
      latin: "Iustificatio",
      short: "How the sinner is made or declared righteous before God.",
      definition: "Justification names God’s gracious act of setting the sinner right with Himself through Christ. Traditions differ over how declaration, forgiveness, inward renewal, faith, and works belong together within this mystery.",
      scope: "In Catholic doctrine, justification is the translation of the sinner from the state of sin into the state of grace and adoption as a child of God. It is both the forgiveness of sins and the interior sanctification and renewal of the inner man by the voluntary reception of grace and gifts.",
      treeUrl: "theological-tree.html?category=justification",
      exhibitUrl: "concept.html?id=justification",
      traditions: {
        catholic: {
          thesis: "Forgiveness and the renewal of the inner man.",
          summary: "Trent teaches that justification is not only the remission of sins but also sanctification and renewal. Faith is the beginning, yet faith without hope and charity does not perfectly unite the believer to Christ. The righteousness is real in the believer. Works done in grace are not the price of the first justification. They are fruits of Christ living in the believer and, as such, meritorious. Penance restores justification lost by mortal sin. Faith is the beginning, foundation, and root of justification, yet living faith is faith formed by charity. Trent teaches that justification is not merely the imputation of Christ’s righteousness as a legal covering; it is a real renewal by which the justified become truly righteous, though still able to sin and always dependent on grace. Baptism is the ordinary instrumental cause of first justification. For those who fall after baptism, the sac…",
          sources: [
            { title: "Justification", url: "", note: "New Advent" },
            { title: "On the Spirit and the Letter", url: "", note: "New Advent" },
            { title: "ST I-II Q.113", url: "", note: "On Justification" },
            { title: "Session VI", url: "", note: "New Advent" },
            { title: "Article IV", url: "", note: "Book of Concord" }
          ]
        }
      }
    },
    {
      id: "eucharist",
      name: "Eucharist",
      latin: "Eucharistia",
      short: "The Lord’s Supper: presence, sacrifice, and communion.",
      definition: "The Eucharist is the sacramental memorial of Christ’s death and resurrection in which the Church gives thanks, receives communion, and proclaims Christ’s presence among His people.",
      scope: "The Eucharist is the sacrament of the Body and Blood of Christ, in which Christ Himself is truly, really, and substantially present under the appearances of bread and wine. It is both sacrifice and banquet, the source and summit of the Christian life.",
      treeUrl: "theological-tree.html?category=eucharist",
      exhibitUrl: "concept.html?id=eucharist",
      traditions: {
        catholic: {
          thesis: "True, real, and substantial presence; the Mass is a sacrifice.",
          summary: "Catholic doctrine teaches transubstantiation. The Eucharist is both communion and propitiatory sacrifice, applying the one sacrifice of the Cross. Adoration of the reserved sacrament follows from the real presence. Trent anathematizes purely symbolic and purely spiritual accounts that deny substantial presence. Aquinas’s treatise remains the classic Latin synthesis of sign, presence, and sacrifice. At the consecration, by the power of Christ’s words and the Holy Spirit, the whole substance of bread is converted into the substance of the Body of Christ, and the whole substance of wine into the substance of His Blood. This conversion the Church calls transubstantiation. The accidents (appearances) of bread and wine remain. Christ is present whole and entire under each species and under every part of each species. The presence is not local in the manner of ordinary bodies, nor is it a me…",
          sources: [
            { title: "Eucharist", url: "", note: "New Advent" },
            { title: "Letter to the Smyrnaeans", url: "", note: "New Advent" },
            { title: "Mystagogical Catecheses", url: "", note: "New Advent" },
            { title: "ST III QQ.73–83", url: "", note: "Real presence" },
            { title: "Article X", url: "", note: "Book of Concord" }
          ]
        }
      }
    },
    {
      id: "trinity",
      videos: [{"title": "The Trinity (1)", "url": "https://www.youtube.com/watch?v=Np_h1WbyRcM&list=PLchPAvHxUT1U"}, {"title": "The Trinity (2)", "url": "https://www.youtube.com/watch?v=wsFOkTnuVX8&list=PLchPAvHxUT1U"}, {"title": "The Trinity (3)", "url": "https://www.youtube.com/watch?v=9rK-gE1R6Zg&list=PLchPAvHxUT1U"}, {"title": "The Trinity (4)", "url": "https://www.youtube.com/watch?v=DxR1v5uFj-U&list=PLchPAvHxUT1U"}],
      name: "Trinity",
      latin: "Trinitas",
      short: "The one God who is Father, Son, and Holy Spirit.",
      definition: "The Trinity is the Christian confession that the one God exists eternally as Father, Son, and Holy Spirit: distinct in person, one in divine being, revealed in the economy of salvation.",
      scope: "The Catholic faith confesses one God in three Persons—Father, Son, and Holy Spirit—consubstantial, coeternal, and equal. The Trinity is the central mystery of Christian faith and life, revealed in the economy of salvation and confessed in the baptismal formula.",
      treeUrl: "theological-tree.html?category=trinity",
      exhibitUrl: "concept.html?id=trinity",
      traditions: {
        catholic: {
          thesis: "One essence in three persons; Filioque.",
          summary: "Latin theology, following Augustine and the medieval schools, develops relational analysis of the processions. The Filioque is confessed as safeguarding the Son’s full divinity in the Spirit’s origin. Aquinas’s treatise (ST I QQ.27–43) remains the standard Scholastic map of processions, relations, and missions. The Father is unbegotten; the Son is eternally begotten of the Father; the Holy Spirit proceeds from the Father and the Son (Filioque), as from one principle. The three Persons are distinguished by relations of origin, not by division of the divine substance. Augustine’s psychological analogies (memory, understanding, will; lover, beloved, love) are aids to speech, not proofs that reduce God to the structure of the human mind. Aquinas systematizes the processions and relations while insisting that we know God more truly by what He is not than by what we can define. The liturgy …",
          sources: [
            { title: "The Blessed Trinity", url: "", note: "New Advent" },
            { title: "On the Trinity", url: "", note: "New Advent" },
            { title: "On the Holy Spirit", url: "", note: "New Advent" },
            { title: "Theological Orations", url: "", note: "New Advent" },
            { title: "ST I QQ.27–43", url: "", note: "Treatise on the Trinity" }
          ]
        }
      }
    },
    {
      id: "atonement",
      name: "Atonement",
      latin: "Redemptio",
      short: "How Christ reconciles humanity to God.",
      definition: "Atonement describes the saving work of Christ by which sin and death are overcome and humanity is reconciled to God. Scripture and tradition use images of sacrifice, victory, ransom, healing, and representation.",
      scope: "Christ’s Passion is the unique, sufficient sacrifice that reconciles humanity to God. Catholic theology holds together the sacrificial, satisfaction, and redemptive dimensions of the Cross without reducing the mystery to a single forensic metaphor.",
      treeUrl: "theological-tree.html?category=atonement",
      exhibitUrl: "concept.html?id=atonement",
      traditions: {
        catholic: {
          thesis: "Satisfaction, sacrifice, and the application of the Cross.",
          summary: "Catholic theology receives Anselm’s insight that sin requires satisfaction, while retaining victory over death. Aquinas integrates merit, satisfaction, and sacrifice. The Cross is once for all; the Mass applies its fruits. Redemption is objective in Christ and must be subjectively received. Limited-atonement schemes are refused in favor of a universal sufficient cause applied particularly. Anselm’s Cur Deus Homo framed the question in terms of satisfaction: the gravity of sin against an infinite God requires a satisfaction only the God-man can offer. Aquinas integrates satisfaction with the broader economy of the Incarnation, merit, and sacramental application of the fruits of the Passion. The Cross is not a transaction that changes God’s mind from wrath to love; it is the supreme revelation of the love that was always ordered to the salvation of sinners. The Church applies the merits…",
          sources: [
            { title: "Atonement", url: "", note: "New Advent" },
            { title: "Against Heresies", url: "", note: "New Advent" },
            { title: "On the Incarnation", url: "", note: "New Advent" },
            { title: "Cur Deus Homo", url: "", note: "CCEL" },
            { title: "ST III QQ.46–49", url: "", note: "Passion of Christ" }
          ]
        }
      }
    },
    {
      id: "church",
      name: "Church",
      latin: "Ecclesia",
      short: "The nature, authority, and unity of the Body of Christ.",
      definition: "The Church is the community called together in Christ, formed by apostolic witness, nourished by word and sacrament, and sent as a sign of the Kingdom.",
      scope: "The Church is the Body of Christ, the People of God, and the sacrament of salvation for the world. She is one, holy, catholic, and apostolic—visible and hierarchical, yet animated by the Holy Spirit.",
      treeUrl: "theological-tree.html?category=church",
      exhibitUrl: "concept.html?id=church",
      traditions: {
        catholic: {
          thesis: "One, holy, catholic, apostolic—with Petrine primacy.",
          summary: "Catholic ecclesiology confesses a visible society with apostolic succession, seven sacraments, and the teaching office of the bishops in communion with the Pope. Unity is visible communion, not only charity. Extra ecclesiam nulla salus is interpreted with care for invincible ignorance, yet the Church remains the ordinary means of salvation. Christ founded the Church on the apostles, with Peter as the rock and the apostolic college continuing in the bishops in communion with the successor of Peter. The Church is not a mere voluntary association of believers; she is a visible society with a divine constitution. Outside the Church there is no salvation—understood as the necessity of the Church as the ordinary means of salvation, while affirming that those who through no fault of their own do not know the Gospel may still be related to her in ways known to God. The Church teaches with aut…",
          sources: [
            { title: "The Church", url: "", note: "New Advent" },
            { title: "On the Unity of the Church", url: "", note: "New Advent" },
            { title: "Letters", url: "", note: "New Advent" },
            { title: "Articles VII–VIII", url: "", note: "Book of Concord" },
            { title: "Institutes IV", url: "", note: "CCEL" }
          ]
        }
      }
    },
    {
      id: "free-will",
      name: "Free Will",
      latin: "Liberum Arbitrium",
      short: "Human freedom under grace and in relation to sin.",
      definition: "Free will concerns the human capacity to act knowingly and voluntarily. Christian theology asks how this freedom is wounded by sin, restored by grace, and held together with providence.",
      scope: "Catholic teaching holds that the human will remains free after the Fall, though wounded and inclined to evil. Grace does not destroy freedom; it heals and elevates it so that the person may freely consent to God’s call.",
      treeUrl: "theological-tree.html?category=free-will",
      exhibitUrl: "concept.html?id=free-will",
      traditions: {
        catholic: {
          thesis: "Freedom remains; it is healed, not replaced, by grace.",
          summary: "Catholic teaching, drawing on Augustine against Pelagius and on Aquinas, holds that the will remains after the Fall but cannot attain the supernatural end without grace. Operating grace moves the will; cooperating grace works with it. Coercion is not salvation. Trent rejects both Pelagian self-salvation and a bondage that makes all cooperation impossible. Councils also reject a freedom that makes grace a mere aid to an already sufficient nature. Against Pelagius, the Church teaches that fallen man cannot, without grace, perform works ordered to supernatural salvation. Against a doctrine of total passivity, she teaches that the will, moved by grace, truly cooperates. The Second Council of Orange and Trent both defend this balance. Aquinas distinguishes the natural integrity of the will from its need for grace toward the supernatural end. Actual grace can be resisted; the first justific…",
          sources: [
            { title: "Free Will", url: "", note: "New Advent" },
            { title: "On Grace and Free Will", url: "", note: "New Advent" },
            { title: "On Nature and Grace", url: "", note: "New Advent" },
            { title: "ST I-II QQ.109–114", url: "", note: "Treatise on Grace" },
            { title: "Bondage of the Will", url: "", note: "CCEL" }
          ]
        }
      }
    },
    {
      id: "original-sin",
      name: "Original Sin",
      latin: "Peccatum Originale",
      short: "The inherited condition of fallen humanity.",
      definition: "Original sin describes the wounded condition of humanity’s relation to God, connected with Adam’s fall and the universal need for redemption and grace.",
      scope: "Original sin is the deprivation of original holiness and justice inherited by all human beings through Adam. It is a wound in a nature that remains good, not a substance of evil. Baptism remits its guilt and restores sanctifying grace.",
      treeUrl: "theological-tree.html?category=original-sin",
      exhibitUrl: "concept.html?id=original-sin",
      traditions: {
        catholic: {
          thesis: "Inherited guilt remitted in baptism; nature wounded.",
          summary: "Trent teaches that Adam’s sin is transmitted by propagation, not mere imitation, and that baptism remits its guilt. Concupiscence remains as a wound and a field of battle, but in the baptized it is not itself sin unless consented to. The Immaculate Conception is a later Catholic definition about Mary’s preservation from original sin by a singular grace. Augustine’s mature teaching against the Pelagians shaped the Western doctrine: all sinned in Adam; death and disordered desire (concupiscence) follow; infants need baptism for the remission of original sin. The Council of Trent defined that original sin is transmitted by propagation, not mere imitation, and that baptism takes away its guilt. Concupiscence remains after baptism as a inclination to sin, but it is not itself sin in the baptized unless consented to. Human nature is not to…",
          sources: [
            { title: "Original Sin", url: "", note: "New Advent" },
            { title: "On the Merits and Forgiveness of Sins", url: "", note: "New Advent" },
            { title: "ST I-II Q.81–85", url: "", note: "Original sin" },
            { title: "Article II", url: "", note: "Book of Concord" },
            { title: "Institutes II.1–3", url: "", note: "CCEL" }
          ]
        }
      }
    },
    {
      id: "sacraments",
      name: "Sacraments",
      latin: "Sacramenta",
      short: "Visible signs through which God gives invisible grace.",
      definition: "Sacraments are sacred signs entrusted to the Church through which divine life is signified and, in the classical view, communicated. They join material actions to God’s gracious work.",
      scope: "The sacraments are efficacious signs of grace, instituted by Christ and entrusted to the Church, by which divine life is dispensed to us. There are seven: Baptism, Confirmation, Eucharist, Penance, Anointing of the Sick, Holy Orders, and Matrimony.",
      treeUrl: "theological-tree.html?category=sacraments",
      exhibitUrl: "concept.html?id=sacraments",
      traditions: {
        catholic: {
          thesis: "Seven sacraments as instruments of grace.",
          summary: "Catholic doctrine counts seven, instituted by Christ, which confer the grace they signify. Ex opere operato means the rite is God’s instrument, not a reward of the minister’s holiness—yet a recipient’s obstacle (e.g. unbelief, mortal sin) can block fruit. Aquinas’s treatise and Trent’s canons remain the Latin map: character in baptism, confirmation, orders; penance as a second plank after shipwreck. Sacraments work ex opere operato—by the fact of the action’s being performed—when the minister intends to do what the Church does and the recipient places no obstacle. Their efficacy does not depend on the personal holiness of the minister, though fruitful reception requires the proper disposition. Baptism is necessary for salvation (ordinary means); the Eucharist is the center of the sacramental economy; Penance restores the life of grace lost by mortal sin. Holy Orders configures the ord…",
          sources: [
            { title: "Sacraments", url: "", note: "New Advent" },
            { title: "On Christian Doctrine", url: "", note: "New Advent" },
            { title: "ST III QQ.60–65", url: "", note: "On the sacraments" },
            { title: "Article XIII", url: "", note: "Book of Concord" },
            { title: "Institutes IV.14", url: "", note: "CCEL" }
          ]
        }
      }
    },
    {
      id: "scripture-tradition",
      name: "Scripture & Tradition",
      latin: "Scriptura et Traditio",
      short: "The sources and authority of Christian teaching.",
      definition: "Scripture and tradition name the means by which the Church receives, interprets, preserves, and proclaims the apostolic faith. Their relation is a primary fault-line among Christian communities.",
      scope: "Sacred Tradition and Sacred Scripture form one sacred deposit of the Word of God. The Magisterium of the Church authentically interprets that deposit. Scripture is inspired and inerrant in the sense defined by the Church; Tradition transmits the living apostolic preaching.",
      treeUrl: "theological-tree.html?category=scripture-tradition",
      exhibitUrl: "concept.html?id=scripture-tradition",
      traditions: {
        catholic: {
          thesis: "One deposit; two modes; a living Magisterium.",
          summary: "Dei verbum’s later language of a single deposit in two modes is anticipated by Trent: the Gospel is contained in written books and unwritten traditions. The Magisterium is not a third source but the authentic interpreter. The canon including the deuterocanonicals is the Latin Old Testament. Private reading is encouraged; private judgment as a final court is refused. The canon of Scripture is received from the Church, not self-authenticating apart from her. The Latin Church’s canon includes the deuterocanonical books. Scripture is to be read within the living Tradition and under the guidance of the Magisterium. Tradition is not a second written source alongside Scripture; it is the living transmission of the apostolic faith in doctrine, life, and worship. Councils, the Fathers, the liturgy, and the ordinary universal teaching of the bishops in communion with the Pope all belong to this…",
          sources: [
            { title: "Tradition and the Living Magisterium", url: "", note: "New Advent" },
            { title: "Against Heresies III", url: "", note: "New Advent" },
            { title: "Festal Letter 39", url: "", note: "New Advent" },
            { title: "Session IV", url: "", note: "New Advent" },
            { title: "Summary, Rule and Norm", url: "", note: "Book of Concord" }
          ]
        }
      }
    },
    {
      id: "predestination",
      name: "Predestination",
      latin: "Praedestinatio",
      short: "God’s eternal purpose concerning salvation.",
      definition: "Predestination concerns God’s eternal purpose and the ordering of salvation to its end. Traditions seek to speak of this purpose without denying the reality of human response and responsibility.",
      scope: "God predestines no one to evil. He wills all to be saved and provides sufficient grace. The predestination of the elect is God’s eternal decree to bring them to glory through grace; reprobation is permission of final impenitence, not a positive decree of damnation independent of foreseen sin.",
      treeUrl: "theological-tree.html?category=predestination",
      exhibitUrl: "concept.html?id=predestination",
      traditions: {
        catholic: {
          thesis: "Predestination to life; God never authors sin.",
          summary: "Catholic doctrine affirms predestination to glory as a free act of God and denies positive predestination to evil. Within that boundary, Thomists and Molinists have long disputed the mode of grace and foreknowledge. The elect are known to God; the ordinary pastoral tone is exhortation, sacraments, and prayer for perseverance, not inspection of a secret list. Catholic theology has developed different schools (notably Thomist and Molinist) on the relation of grace, foreknowledge, and free consent. These remain legitimate theological opinions within the dogmatic framework defined against Pelagianism and against any denial of human freedom under grace. Assurance of predestination is not ordinarily given by private revelation of the secret decree; it is approached through the signs of a life of faith, hope, and charity, and through perseverance in the sacraments. Presumption and despair ar…",
          sources: [
            { title: "Predestination", url: "", note: "New Advent" },
            { title: "On the Predestination of the Saints", url: "", note: "New Advent" },
            { title: "ST I Q.23", url: "", note: "Predestination" },
            { title: "Article XI", url: "", note: "Book of Concord" },
            { title: "Institutes III.21–24", url: "", note: "CCEL" }
          ]
        }
      }
    },
    {
      id: "faith-works",
      name: "Faith & Works",
      latin: "Fides et Opera",
      short: "The relationship between believing and doing.",
      definition: "Faith and works names the Christian question of how trust in God, obedience, love, and transformed action belong together. The tradition rejects a dead, merely verbal faith while debating the role of works in justification.",
      scope: "Faith is the beginning of salvation, but living faith works through love. Justification is not by works of the law done before grace; yet the justified are bound to keep the commandments, and good works done in grace are truly meritorious under God.",
      treeUrl: "theological-tree.html?category=faith-works",
      exhibitUrl: "concept.html?id=faith-works",
      traditions: {
        catholic: {
          thesis: "Faith is the beginning; charity forms it; works in grace merit increase.",
          summary: "Trent: faith is the beginning, foundation, and root. Yet faith without hope and charity does not perfectly unite to Christ. Works done in grace are truly meritorious—always as gifts, never as placing God in debt for the first justification. The final judgment according to works is taken at face value as the manifestation and completion of a life of grace, not as a second, independent economy. James 2 and Paul are read together: Abraham was justified by faith, and that faith was completed by works. Trent teaches that works done before justification do not merit justification, while works done in grace increase justification and merit eternal life as a gift promised by God. Faith without works is dead. Charity is the form of the virtues; without it, faith is not living. The moral law remains the path of the justified, not a ladder by which the unjustified climb into grace by their own s…",
          sources: [
            { title: "Faith", url: "", note: "New Advent" },
            { title: "On Faith and Works", url: "", note: "New Advent" },
            { title: "ST I-II QQ.112–114", url: "", note: "Merit" },
            { title: "Articles IV–VI, XX", url: "", note: "Book of Concord" },
            { title: "Institutes III.11–19", url: "", note: "CCEL" }
          ]
        }
      }
    },
    {
      id: "incarnation",
      name: "Incarnation",
      latin: "Incarnatio",
      short: "The Word became flesh: true God and true man.",
      definition: "The Incarnation is the confession that the eternal Son took flesh of the Virgin Mary and became man, remaining what He was and assuming what He was not, for us and for our salvation.",
      scope: "The eternal Son of God assumed a complete human nature—body and rational soul—in the womb of the Virgin Mary, so that the one Person of the Word exists in two natures, divine and human, without confusion, change, division, or separation.",
      treeUrl: "theological-tree.html?category=incarnation",
      exhibitUrl: "concept.html?id=incarnation",
      traditions: {
        catholic: {
          thesis: "One Person, two natures; Mary as Theotokos.",
          summary: "Catholic Christology is Chalcedonian and then scholastic: the hypostatic union, two wills, the communication of idioms. Ephesus’s Theotokos is the hinge. Later Catholic Marian dogmas (Immaculate Conception, Assumption) are defined by the Catholic Church as belonging to the deposit of faith. The Incarnation is the ground of sacramental realism and of sacred images. The Councils of Nicaea, Ephesus, and Chalcedon define the dogma against Arian, Nestorian, and Monophysite errors. Mary is truly Theotokos, Mother of God, because the One she bore is the divine Person of the Son. Athanasius’s soteriological axiom remains decisive: only if the Son is true God can He deify; only if He is true man can He heal what was fallen. The Incarnation is ordered to the Passion, Resurrection, and the gift of the Spirit. Maximus the Confessor’s defense of the two wills (dyothelitism) protects the integrity of Christ’s hum…",
          sources: [
            { title: "Incarnation", url: "", note: "New Advent" },
            { title: "On the Incarnation", url: "", note: "New Advent" },
            { title: "Epistle 101", url: "", note: "New Advent" },
            { title: "ST III QQ.1–26", url: "", note: "The Incarnation" },
            { title: "Article VIII", url: "", note: "Book of Concord" }
          ]
        }
      }
    },
    {
      id: "baptism",
      name: "Baptism",
      latin: "Baptismus",
      short: "Washing in the triune Name: new birth, covenant, and the font.",
      definition: "Baptism is the washing with water in the Name of the Father, the Son, and the Holy Spirit, binding a person to Christ’s death and resurrection.",
      scope: "Baptism is the sacrament of regeneration by which the recipient is freed from original sin, becomes a member of Christ and of the Church, and receives sanctifying grace. It is necessary for salvation as the ordinary means instituted by Christ.",
      treeUrl: "theological-tree.html?category=baptism",
      exhibitUrl: "concept.html?id=baptism",
      traditions: {
        catholic: {
          thesis: "The sacrament of regeneration and the door of the Church.",
          summary: "Baptism remits original sin and actual sins, infuses sanctifying grace, and imprints an indelible character. It is ordinarily necessary. Infant baptism is apostolic practice as the Latin West reads it. Trinitarian heretical baptism may be valid as to character (Augustine vs. Donatists; later canon law). Conditional baptism is used when previous baptism is doubtful. It is not a second baptism. Baptism may be conferred by immersion, pouring, or sprinkling with the Trinitarian formula. Infants are baptized because they inherit original sin and are capable of receiving grace; the faith of the Church supplies what the infant cannot yet profess. Baptism of blood (martyrdom) and baptism of desire (explicit or, in certain cases, implicit) are recognized as means by which the grace of baptism can be received when the sacrament itself is not available, without denying the ordinary necessity of …",
          sources: [
            { title: "Baptism", url: "", note: "New Advent" },
            { title: "On Baptism", url: "", note: "New Advent" },
            { title: "Catechetical Lectures", url: "", note: "New Advent" },
            { title: "Small Catechism — Baptism", url: "", note: "Book of Concord" },
            { title: "Institutes IV.15–16", url: "", note: "CCEL" }
          ]
        }
      }
    },
    {
      id: "theosis",
      name: "Theosis",
      latin: "Deificatio",
      short: "Participation in the divine life without confusion of natures.",
      definition: "Theosis is the redeemed creature’s participation in the divine life: partakers of the divine nature who never become a fourth Person of the Trinity.",
      scope: "Catholic theology affirms real participation in the divine life—sometimes called deification or theosis—without confusion of the creature with the Creator. Sanctifying grace and the indwelling of the Trinity make the baptized partakers of the divine nature.",
      treeUrl: "theological-tree.html?category=theosis",
      exhibitUrl: "concept.html?id=theosis",
      traditions: {
        catholic: {
          thesis: "Partakers of the divine nature by sanctifying grace.",
          summary: "Catholic theology reads 2 Peter 1.4 as real participation. Sanctifying grace is a created gift making the soul pleasing to God; the blessed will see God by the light of glory. The language of deification is patristic and liturgical, even when the Latin system prefers ‘grace’ and ‘vision.’ Aquinas: the blessed see the divine essence; that is the terminus. While Latin theology more often speaks of created grace, Athanasius’s dictum “He was made man that we might be made God” is received in the Catholic tradition as participation by grace, not by identity of essence. The beatific vision is the final form of this participation: seeing God as He is. Aquinas speaks of the light of glory and of grace as a created participation in the divine nature. The Eastern language of energies is not foreign to Catholic mystical theology, though La…",
          sources: [
            { title: "On the Incarnation", url: "", note: "New Advent" },
            { title: "Supernatural Gift / Grace", url: "", note: "New Advent" },
            { title: "ST I-II Q.110; I Q.12", url: "", note: "Vision of God" },
            { title: "Institutes III.1–3, 25", url: "", note: "CCEL" },
            { title: "On the Holy Spirit", url: "", note: "New Advent" }
          ]
        }
      }
    },
    {
      id: "holy-spirit",
      name: "Holy Spirit",
      latin: "Spiritus Sanctus",
      short: "The Lord and Giver of life: procession, mission, and means.",
      definition: "The Holy Spirit is the third Person of the Trinity, who proceeds from the Father (and, in the West, from the Son) and is sent to sanctify the Church.",
      scope: "The Holy Spirit is the third Person of the Trinity, consubstantial with the Father and the Son, who proceeds from both as from one principle. He is the Sanctifier, the soul of the Church, and the giver of charisms and virtues.",
      treeUrl: "theological-tree.html?category=holy-spirit",
      exhibitUrl: "concept.html?id=holy-spirit",
      traditions: {
        catholic: {
          thesis: "The Lord and Giver of life; Filioque; sevenfold gifts.",
          summary: "Latin pneumatology follows the Creed with the Filioque, Augustine’s mutual-love analogy, and a developed theology of gifts, fruits, and confirmation as a distinct sacrament completing baptismal grace. The Spirit is the soul of the Church, not a private oracle against her. The Spirit is confessed in the Creed as “the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified.” He spoke through the prophets and continues to animate the Church’s teaching, sacraments, and mission. In the justified, the Spirit pours out charity in the heart, adopts the believer as a child of God, and distributes gifts for the building up of the Body. Confirmation strengthens the baptized with the gift of the Spirit for witness. Discernment of spirits and the regulation of charisms belong to the Church’s pastoral authority. Private revelation a…",
          sources: [
            { title: "Holy Ghost", url: "", note: "New Advent" },
            { title: "On the Holy Spirit", url: "", note: "New Advent" },
            { title: "On the Trinity", url: "", note: "New Advent" },
            { title: "Article V", url: "", note: "Book of Concord" },
            { title: "Institutes I.13; III.1", url: "", note: "CCEL" }
          ]
        }
      }
    },
    {
      id: "mariology",
      name: "Mariology",
      latin: "Mariologia",
      short: "The Blessed Virgin in relation to Christ and the Church: her privileges, her role, and the honor due to her.",
      definition: "Mariology is the part of theology that treats of the Blessed Virgin Mary in relation to Christ and the Church — her divine maternity, her privileges, her cooperation in the economy of salvation, and the singular honor (hyperdulia) due to her as Mother of God.",
      scope: "Catholic Mariology is Christocentric. Mary is Theotokos, ever-virgin, Immaculate, Assumed. Her mediation is subordinate to the one Mediator. True devotion leads through the Mother to the Son. The Church refuses both neglect and excess.",
      treeUrl: "theological-tree.html?category=mariology",
      exhibitUrl: "concept.html?id=mariology",
      traditions: {
        catholic: {
          thesis: "Mother of God, full of grace, first of the redeemed.",
          summary: "Ephesus defined the Theotokos. The Church confesses her perpetual virginity, the Immaculate Conception, and the Assumption. Scotus defended preservative redemption. Vatican II ordered Marian doctrine within the mystery of Christ and the Church. Hyperdulia is the honor due to her — above the saints, short of latria. All her dignity is from Christ; all intercession is through Him. The Rosary and the liturgical feasts are ordered to the Son. The ordinary Christian honors the Mother as the Church honors her and refuses both the minimalism that would make her optional and the maximalism that would obscure the unique mediation of Christ.",
          sources: [
            { title: "Council of Ephesus (431)", url: "", note: "Theotokos" },
            { title: "Ineffabilis Deus (1854)", url: "", note: "Immaculate Conception" },
            { title: "Munificentissimus Deus (1950)", url: "", note: "Assumption" },
            { title: "Lumen Gentium VIII", url: "", note: "Mary and the Church" },
            { title: "Aquinas, ST III qq. 27–30", url: "", note: "Sanctification of the B.V.M." }
          ]
        }
      }
    },
    {
      id: "purgatory",
      name: "Purgatory",
      latin: "Purgatorium",
      short: "The final purification of the elect who die in grace but are not yet ready for the vision of God.",
      definition: "Purgatory is the final purification of the elect who die in God's grace and friendship, yet still imperfectly purified, so that they may achieve the holiness necessary to enter the joy of heaven.",
      scope: "Catholic doctrine holds that there is a purgatory and that the souls detained there are helped by the suffrages of the faithful, especially the Sacrifice of the Mass. It is not hell. It is the antechamber of heaven for those already saved but not yet perfectly holy.",
      treeUrl: "theological-tree.html?category=purgatory",
      exhibitUrl: "concept.html?id=purgatory",
      traditions: {
        catholic: {
          thesis: "There is a purgatory; the living can help the dead.",
          summary: "Trent defined that there is a purgatory and that the souls there are aided by the prayers and especially the Mass of the faithful. Scripture is read as teaching prayer for the dead and salvation as by fire. The Fathers witness the practice. The Reformers' denial is refused. Purgatory is temporary purification for the elect, not a third final end. Indulgences apply the treasury of merits to the living and the dead. The doctrine is one of hope: imperfect holiness at death is not damnation; the fire is ordered to glory.",
          sources: [
            { title: "Council of Trent, Session 25", url: "", note: "Decree on Purgatory" },
            { title: "2 Maccabees 12:46", url: "", note: "Prayer for the dead" },
            { title: "1 Corinthians 3:15", url: "", note: "Saved as by fire" },
            { title: "CCC 1030–1032", url: "", note: "Final purification" },
            { title: "Aquinas, ST Suppl.", url: "", note: "Purgatory" }
          ]
        }
      }
    },

    {
      id: "faith",
      name: "Faith",
      latin: "Fides",
      short: "The theological virtue by which we believe God and all He has revealed, because He is Truth itself.",
      definition: "Faith is the theological virtue by which we believe in God and all that He has said and revealed, and that Holy Church proposes for our belief, because He is truth itself.",
      scope: "By faith the intellect assents to revealed truth under the command of the will moved by grace. Living faith is formed by charity. Faith is the beginning of justification, yet not its whole.",
      exhibitUrl: "concept.html?id=faith",
      traditions: {
        catholic: {
          thesis: "Assent to revealed truth by the authority of God who reveals.",
          summary: "Catholic faith is not mere private confidence without content, nor empty opinion without trust. It is personal adherence to God and firm assent to the deposit of faith proposed by the Church. Faith and reason cannot finally conflict. Dead faith without charity does not justify.",
          sources: [
            { title: "Hebrews 11", url: "", note: "Nature of faith" },
            { title: "ST II-II qq. 1–7", url: "", note: "Aquinas" },
            { title: "Vatican I, Dei Filius", url: "", note: "Faith and reason" }
          ]
        }
      }
    },
    {
      id: "hope",
      name: "Hope",
      latin: "Spes",
      short: "The theological virtue by which we desire eternal life and trust God’s help to attain it.",
      definition: "Hope is the theological virtue by which we desire the kingdom of heaven and eternal life as our happiness, trusting Christ’s promises and the grace of the Holy Spirit.",
      scope: "Hope stands between despair and presumption. It is certain on God’s side; on ours we pray for perseverance. Its principal object is God as our beatitude.",
      exhibitUrl: "concept.html?id=hope",
      traditions: {
        catholic: {
          thesis: "Trust in God for eternal life and the means of grace.",
          summary: "Hope expects heaven and the helps needed to reach it, relying on God’s mercy and power. Despair and presumption are sins against hope. Temporal goods may be asked for only as ordered to salvation.",
          sources: [
            { title: "Romans 5:5", url: "", note: "Hope does not disappoint" },
            { title: "ST II-II qq. 17–22", url: "", note: "Aquinas on hope" }
          ]
        }
      }
    },
    {
      id: "charity",
      name: "Charity",
      latin: "Caritas",
      short: "The theological virtue by which we love God above all and our neighbor for God’s sake.",
      definition: "Charity is the theological virtue by which we love God above all things for His own sake, and our neighbor as ourselves for the love of God.",
      scope: "Charity is the form of the virtues and the greatest of the three. It is friendship with God, destroyed by mortal sin and restored by penance.",
      exhibitUrl: "concept.html?id=charity",
      traditions: {
        catholic: {
          thesis: "Love of God and neighbor; form of the virtues.",
          summary: "Charity orders all other virtues to the last end. It loves the enemy with benevolence and keeps an order: God first, then neighbor in God. Feelings are not its essence; the will’s adherence is.",
          sources: [
            { title: "1 Corinthians 13", url: "", note: "The greatest is charity" },
            { title: "ST II-II qq. 23–27", url: "", note: "Aquinas on charity" }
          ]
        }
      }
    },
    {
      id: "creation",
      name: "Creation",
      latin: "Creatio",
      short: "God’s free act of bringing all finite being into existence from nothing and conserving it.",
      definition: "Creation is the act by which God freely brings all things other than Himself into being from nothing, and continuously conserves them in being.",
      scope: "Creatio ex nihilo excludes dualism and pantheism. The world had a beginning. Providence governs what creation posits. The human soul is created immediately by God.",
      exhibitUrl: "concept.html?id=creation",
      traditions: {
        catholic: {
          thesis: "From nothing, by freedom, toward providence.",
          summary: "God alone creates in the strict sense. Evil is privation, not a creature. Evolutionary theories about the body may be discussed if the soul’s special creation and original sin are preserved.",
          sources: [
            { title: "Genesis 1", url: "", note: "Creation" },
            { title: "ST I qq. 44–46", url: "", note: "Aquinas" },
            { title: "Vatican I", url: "", note: "Creator of all things" }
          ]
        }
      }
    },
    {
      id: "penance",
      name: "Penance",
      latin: "Paenitentia",
      short: "The sacrament of forgiveness after baptism through contrition, confession, and absolution.",
      definition: "Penance is the sacrament instituted by Christ for the remission of post-baptismal sins through the absolution of the priest, with the penitent’s contrition, confession, and satisfaction.",
      scope: "Christ gave the power of the keys. Integral confession of mortal sins is required. The sacrament restores charity and reconciles to the Church.",
      exhibitUrl: "concept.html?id=penance",
      traditions: {
        catholic: {
          thesis: "Judicial forgiveness through the ministry of the Church.",
          summary: "Trent defends the sacrament against reduction to mere private assurance. Attrition with the sacrament suffices; perfect contrition with desire of the sacrament justifies before confession when the sacrament is intended.",
          sources: [
            { title: "John 20:23", url: "", note: "Power to forgive" },
            { title: "Trent Session XIV", url: "", note: "Decree on Penance" }
          ]
        }
      }
    },
    {
      id: "prayer",
      videos: [{"title": "Prayer", "url": "https://www.youtube.com/watch?v=2OwQUigkbWA&list=PLchPAvHxUT1U"}],
      name: "Prayer",
      latin: "Oratio",
      short: "The raising of the mind and heart to God in adoration, thanksgiving, contrition, and petition.",
      definition: "Prayer is the raising of the mind and heart to God, or the requesting of good things from Him—the living relationship of God’s children with the Father, through the Son, in the Spirit.",
      scope: "Liturgical and private, vocal and mental, petition and contemplation. The Our Father is the model. Distraction is fought by fidelity, not by force.",
      exhibitUrl: "concept.html?id=prayer",
      traditions: {
        catholic: {
          thesis: "Covenant communion with God who first calls.",
          summary: "We pray as Christ taught and as the Church prays in the liturgy. Contemplation is gift ordered to love, not a technique of self-exaltation. Petition is itself willed by providence.",
          sources: [
            { title: "Matthew 6", url: "", note: "Our Father" },
            { title: "CCC Part Four", url: "", note: "Christian prayer" }
          ]
        }
      }
    },
    {
      id: "death-resurrection",
      name: "Death and Resurrection",
      latin: "Mors et Resurrectio",
      short: "The end of earthly probation and the raising of the body after the pattern of Christ’s resurrection.",
      definition: "Death is the separation of soul and body and the end of the time of merit; resurrection is God’s raising of the body to share the soul’s eternal destiny, after the pattern of Christ the firstfruits.",
      scope: "Particular judgment follows death; the general resurrection precedes the last judgment. Christian hope is not escape from the body but its redemption.",
      exhibitUrl: "concept.html?id=death-resurrection",
      traditions: {
        catholic: {
          thesis: "Particular judgment; resurrection of the flesh; Christ the firstfruits.",
          summary: "Death entered through sin; in Christ it becomes a passage. The creed confesses the resurrection of the body. Cremation is allowed only without denial of this hope.",
          sources: [
            { title: "1 Corinthians 15", url: "", note: "Resurrection" },
            { title: "CCC 988–1060", url: "", note: "Last things" }
          ]
        }
      }
    },

    {
      id: "sin",
      name: "Sin",
      latin: "Peccatum",
      short: "A free, morally disordered act — a turning from God toward a mutable good against the eternal law.",
      definition: "Sin is an utterance, a deed, or a desire contrary to the eternal law. It is a voluntary offense against God, wounding nature and charity, and — when mortal — destroying the life of grace in the soul.",
      scope: "Original sin is the inherited wound; actual sin is personal. Mortal sin kills charity; venial sin wounds but does not destroy it. Sin is not a mere social construct: it is measured by God’s law and the final end of man.",
      exhibitUrl: "concept.html?id=sin",
      traditions: {
        catholic: {
          thesis: "Sin is free disorder against God; grace alone restores the soul to the life of charity.",
          summary: "Catholic theology distinguishes original and actual sin; mortal and venial; sins of commission and omission. Confession restores the baptized who fall. The Cross is the remedy; presumption and despair are the twin refusals of that remedy.",
          sources: [
            { title: "1 John 3:4; Rom 5–7", url: "", note: "Scripture" },
            { title: "ST I-II qq. 71–89", url: "", note: "Aquinas" },
            { title: "Trent, Decree on Original Sin & Justification", url: "", note: "Council" }
          ]
        }
      }
    },
    {
      id: "heaven",
      name: "Heaven",
      latin: "Caelum / Beatitudo",
      short: "The state of definitive happiness in the immediate vision of God — the blessed see Him face to face.",
      definition: "Heaven is the perfect life with the Most Holy Trinity — the fulfillment of the deepest human longing, and the state of supreme, definitive happiness. The blessed see God as He is, love Him without interruption, and reign with Christ forever.",
      scope: "Heaven is not a vague reward of feeling, but the beatific vision: God known without intermediary of creature. The body will share this glory after the resurrection. Degrees of glory differ according to charity, yet all are perfectly filled.",
      exhibitUrl: "concept.html?id=heaven",
      traditions: {
        catholic: {
          thesis: "The end of man is the vision of God; heaven is that vision possessed forever.",
          summary: "Defined against delays of the vision (Benedictus Deus) and against reduction of heaven to earthly utopia. The saints intercede; the Church on earth hopes; the liturgy already tastes the heavenly banquet.",
          sources: [
            { title: "1 Cor 13:12; Rev 21–22", url: "", note: "Scripture" },
            { title: "Benedictus Deus (1336)", url: "", note: "Beatific vision" },
            { title: "ST I q. 12; I-II q. 3", url: "", note: "Aquinas" }
          ]
        }
      }
    },
    {
      id: "hell",
      name: "Hell",
      latin: "Infernus / Gehenna",
      short: "The state of definitive self-exclusion from communion with God — the punishment of eternal loss and the pain of sense.",
      definition: "Hell is the everlasting separation from God reserved for those who die in unrepented mortal sin. Its principal pain is the loss of the beatific vision; Scripture also speaks of fire and exterior darkness. God predestines no one to hell; it follows the free refusal of final repentance.",
      scope: "Hell is a dogma of the Church’s faith, not a medieval excess. It guards the seriousness of freedom and the truth of God’s justice and mercy. The Church prays that all may be saved, while refusing to deny the possibility of final loss.",
      exhibitUrl: "concept.html?id=hell",
      traditions: {
        catholic: {
          thesis: "Final unrepented mortal sin issues in eternal separation from God.",
          summary: "Catholic teaching holds both the reality of hell and the universality of God’s saving will. Mystery remains; contradiction is refused. The saints warn; the liturgy intercedes; presumption is forbidden.",
          sources: [
            { title: "Mt 25:31–46; Mk 9:43–48", url: "", note: "Scripture" },
            { title: "ST Suppl. qq. 97–99", url: "", note: "Aquinas" },
            { title: "Benedictus Deus; CCC 1033–1037", url: "", note: "Magisterium" }
          ]
        }
      }
    },
    {
      id: "angels",
      name: "Angels",
      latin: "Angeli",
      short: "Purely spiritual creatures — personal, intelligent, and free — who glorify God and serve His plan for the salvation of men.",
      definition: "Angels are created spirits without bodies, endowed with intellect and will. They are neither divine nor mythical: they are creatures who stand before God, minister to the heirs of salvation, and — in the case of the fallen — oppose His kingdom until the judgment.",
      scope: "The Church confesses angels in the Creed’s ‘maker of all things visible and invisible,’ in the liturgy, and in the guardianship of persons and nations. Christ is Lord of angels; Mary is Queen of Angels; the faithful may invoke their aid without adoring them.",
      exhibitUrl: "concept.html?id=angels",
      traditions: {
        catholic: {
          thesis: "Angels are real created persons; the good serve, the demons tempt; only God is to be adored.",
          summary: "Catholic angelology refuses both skepticism and superstition. Dionysian hierarchies, Thomistic treatises, and the liturgical calendar of Michael, Gabriel, Raphael, and the Guardian Angels form a continuous tradition under the Word of God.",
          sources: [
            { title: "Heb 1:14; Tobit; Lk 1", url: "", note: "Scripture" },
            { title: "ST I qq. 50–64", url: "", note: "Aquinas" },
            { title: "Lateran IV (Firmiter)", url: "", note: "Creator of angels" }
          ]
        }
      }
    }

      
      ,
    {
      id: "lent-fasting",
      name: "Lent & Fasting",
      latin: "Quadragesima et Ieiunium",
      short: "Forty days with Christ in the desert: prayer, fasting, and almsgiving toward Easter.",
      definition: "Lent is the solemn forty-day preparation for Easter; fasting is the voluntary limitation of food for the love of God, ordered to prayer, penance, and charity.",
      scope: "Ash Wednesday to the Triduum; days of fast and abstinence; the triad of prayer, fasting, and almsgiving; Christ’s temptation in the desert as the pattern.",
      exhibitUrl: "concept.html?id=lent-fasting",
      traditions: {
        catholic: {
          thesis: "The Church unites herself to Jesus in the desert and trains desire under the Gospel.",
          summary: "Lent is Christological before it is moralistic: participation in the Lord’s fast and victory over the tempter, ordered to the Paschal mystery. Fasting under temperance serves prayer and almsgiving. The law of abstinence and fasting is a minimum; conversion of heart is the aim.",
          sources: [
            { title: "CCC 538–540, 1434–1439", url: "", note: "Desert and penance" },
            { title: "Matthew 4:1–11; 6:16–18", url: "", note: "Temptation and fasting" },
            { title: "ST II-II q.147", url: "", note: "On fasting" }
          ]
        }
      }
    }
  ];


  const grid = document.getElementById("concept-grid");
  window.CONCEPTS = concepts;

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
    });
  }


  if (!grid) return;

  concepts.forEach(function (concept, index) {
    const card = document.createElement("a");
    card.href = "concept.html?id=" + encodeURIComponent(concept.id);
    card.className = "concept-card";
    card.style.setProperty("--card-order", String(index));
    card.setAttribute("aria-label", "Read about " + concept.name);
    card.dataset.id = concept.id;
    const art = window.CONCEPT_ART[concept.id];
    const artUrl = conceptArtUrl(concept.id);
    if (art) card.style.setProperty("--concept-image-position", art[1]);
    card.innerHTML =
      (artUrl
        ? '<span class="concept-card-art"><img src="' + escapeHtml(artUrl) + '" alt="" loading="lazy" /></span>'
        : "") +
      '<span class="concept-card-shade"></span>' +
      '<span class="concept-card-number">' + String(index + 1).padStart(2, "0") + "</span>" +
      '<span class="concept-card-content"><span class="concept-card-latin">' + escapeHtml(concept.latin) + "</span>" +
      '<span class="concept-card-title">' + escapeHtml(concept.name) + "</span>" +
      '<span class="concept-card-summary">' + escapeHtml(concept.short) + "</span></span>";
    // Direct navigation to encyclopedia exhibit — no side panel
    grid.appendChild(card);
  });
})();
