var express = require('express');
var router = express.Router();
var db = require('orm').db;
var User = db.models.users;

/* GET home page. */
router.get('/', function(req, res, next) {

    User.find(function(err, users) {
      
        res.sendStatus(200);
    })

});

module.exports = router;
