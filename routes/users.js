var express = require('express');
var router = express.Router();
var db = require('orm').db;
var User = db.models.users;

/* GET articles listing. */
router.get('/', function(req, res, next) {
    User.find(function(err, users) {
        if (err) throw new Error(err);
        res.render('users', {
            layout: 'layouts/other',
            title: 'Userenator',
            users: users
        });
    })
});

router.get('/:id', function(req, res, next) {
    User.get(req.params.id,
        function(err, user) {
            if (err) throw new Error(err);
            res.render('user', {
                layout: 'layouts/other',
                // location: 'Userenator',
                location: user.location,
                login: user.login,
                email: user.email
            });
    })
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
