module.exports.get_addHotels = function(req, res){

    var jsonData = require('../Hotel.json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbase = db.db("hotelDB");
        dbase.createCollection("hotel", function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
            dbase.collection("hotel").insertMany(jsonData, function (err, result) {
                if (err) throw err;
                console.log("Hotels Inserted");
            });

        });
    });

    res.send('Successfully inserted hotel data into hotelDB database');
};
module.exports.post_recommendation = function(req, res){
  var db = req.db;

  var collection = db.get('hotel');

  collection.find({}, {},
      function(err, docs)
      {
          res.render('displayRecommendations.hbs', {
              pageTitle: "Top 5 hotels",
              talent: docs,
              currentYear: new Date().getFullYear()
          })

      });
};
