
var express = require('express');
let app = express();
var router = express.Router();
var cntrMain = require('../controllers/main');

app.use(express.static(__dirname+'/public'));

//MongoDB code
var modelMain = require("../models/modelMain");
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/hotelDB');

//MongoDB code
app.use(function(req, res, next)
{
    req.db = db;
    next();
});

router.get('/addHotels', modelMain.get_addHotels);
router.get('/hotel', cntrMain.get_recommendation_page);
router.post('/get_recommendation', modelMain.post_recommendation);

module.exports = router;
