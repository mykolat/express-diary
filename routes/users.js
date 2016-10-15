var express = require('express');
var router = express.Router();
var db = require('orm').db;
var User = db.models.users;
var _ = require('lodash');
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

router.get('/name/:name', function(req, res, next) {
    User.find({
            login: req.params.name
        },
        function(err, users) {
            // console.log(user)
            if (err) throw new Error(err);
            res.render('users', {
                layout: 'layouts/other',
                users: users
            });
        });
});

router.post('/', function(req, res, next) {
    if (req.body.password == req.body.password2) {
        var user = _.pick(req.body, 'login', 'location', 'password', 'email');
        User.create(user, function(err, item) {
            if(item) {
              res.redirect(req.headers.referer)
            } else {
              res.send(err.code)
            }
                // console.log(err)

        })
    } else {
        res.sendStatus(403)
    }

});

module.exports = router;
