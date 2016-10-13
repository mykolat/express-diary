var express = require('express');
var router = express.Router();
var db = require('orm').db;
var Article = db.models.article;

/* GET articles listing. */
router.get('/', function(req, res, next) {
  Article.find(function(err, articles){
    if(err) throw new Error(err);
    res.json(articles);

    // res.render('home/index', {
    //   title: 'Generator-Express MVC',
    //   articles: articles
    // });
  });
});

module.exports = router;
