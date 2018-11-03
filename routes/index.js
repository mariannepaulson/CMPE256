
var express = require('express');
let app = express();
var router = express.Router();
var cntrMain = require('../controllers/main');

app.use(express.static(__dirname+'/public'));

//MongoDB code
var modelMain = require("../models/modelMain");
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/jobsDB');

//MongoDB code
app.use(function(req, res, next)
{
    req.db = db;
    next();
});

router.get('/', cntrMain.get_home_page);

module.exports = router;
