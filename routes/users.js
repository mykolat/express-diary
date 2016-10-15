var express = require('express');
var router = express.Router();
var db = require('orm').db;
var User = db.models.user;

/* GET articles listing. */
router.get('/', function(req, res, next) {
    User.find(function(err, users) {
        if (err) throw new Error(err);
        // res.json(users);

        // res.render('home/index', {
        //   title: 'Generator-Express MVC',
        //   articles: articles
        // });
    }).each(function (user) {
      console.log(user)
    });
});

router.post('/', function(req, res, next) {
    console.log(req.body)
    User.create([{
        title: "Something",
        url: "demo",
        text: "hello world"
    }], function(err, item) {
        console.log(item)
        console.log(err)
        res.sendStatus(200)
    })
});

module.exports = router;
