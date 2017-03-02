var express = require('express');
var router = express.Router();

var data =
[
  {
    "title" : "The Bible",
    "description" : "We believe the Bible, both the Old and New Testaments, is the only inspired, infallible, and authoritative Word of God. It is the supreme source of truth for Christian faith and living.",
  },
  {
    "title" : "God",
    "description": "We believe in one God, Creator of all things, infinitely perfect and eternally existing in three persons: Father, Son, and Holy Spirit."
  },
  {
    "title": "Jesus Christ",
    "description": "We believe that Jesus Christ is true God and true man, having been conceived of the Holy Spirit and born of the virgin Mary. He died on the cross, the complete and final sacrifice for our sins according to the Scriptures. Further, He arose bodily from the dead, ascended into heaven where, at God’s right hand, He intercedes for His people and rules as Lord over all."
  },
  {
    "title": "The Holy Spirit",
    "description": "We believe that the ministry of the Holy Spirit is to glorify the Lord Jesus Christ, and during this age to convict the world of sin. He also regenerates the believing sinner, indwells, guides, instructs, and empowers us for godly living and sacrifice."
  },
  {
    "title" : "Man",
    "description": "We believe that the man was created in the image of God but fell into sin and is therefore lost, and only through regeneration by the Holy Spirit can salvation and spiritual life be obtained."
  },
  {
    "title": "Salvation",
    "description": "We believe that the shed blood of Jesus Christ and His resurrection provide the only ground for justification and salvation for all who believe, and only such as receive Jesus Christ by faith are born of the Holy Spirit and thus become children of God."
  },
  {
    "title": "Future Events",
    "description": "We believe in visible, personal, glorious, imminent return of Jesus Christ, bodily resurrection of the dead, the rapture of the church, the judgment of the just and the unjust and the fulfillment of Christ’s Kingdom in the new heavens and the new earth. Then shall the eager expectation of creation be fulfilled and the whole earth shall proclaim the glory of God who makes all things new."
  },
  {
    "title": "The Church",
    "description": "We believe that the true Church is composed of all such persons who through saving faith in Jesus Christ have been regenerated by the Holy Spirit and are united together in the body of Christ. We believe that Jesus Christ is the Head of the Church, and that every local church has the right under Christ to decide and govern its own affairs."
  },
  {
    "title" : "Ordinances",
    "description" : "We believe that water baptism and the Lord’s Supper are ordinances to be observed by the Church during the present age. They are, however, not to be regarded as means of salvation."
  }
]
router.route('/')
.get(function (request, response) {
  console.log("request for believe");
  response.json(data);
});

module.exports = router;