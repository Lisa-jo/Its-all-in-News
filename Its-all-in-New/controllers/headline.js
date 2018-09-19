// Controller for our headlines
// ============================
var db = require("../models/Headline");
// var db = require("../models");
module.exports = {
  // Find all headlines, sort them by date, send them back to the user
  findAll: function(req, res) {
    
    db.find({})
      // .find(req.query)
      .sort({ date: -1 })
      .then(function(dbHeadline) {
        
        res.json(dbHeadline);
      });
  },
  // Delete the specified headline
  delete: function(req, res) {
    console.log("test req: "+req.body.id);
    db.findOneAndRemove({ _id: req.params.id}).then(function(dbHeadline) {
      res.json(dbHeadline);
      console.log(dbHeadline);
    });
  },
  // Update the specified headline
  create: function(req, res) {

     db.create(req.body).then(function(dbHeadline) {
      res.json(dbHeadline);
    });
  }
};
