var express = require('express');
var router = express.Router();
var db = require('orm').db;
var Article = db.models.article;

/* GET home page. */
router.get('/', function(req, res, next) {
  Article.find(function(err, articles){
    // if(err) throw new Error(err);
    // res.json(articles);
    console.log(1)
      res.render('index', { layout: 'layouts/other', title: 'Express', articles: articles });
    // res.render('home/index', {
    //   title: 'Generator-Express MVC',
    //   articles: articles
    // });
  });
    console.log(2)

});

module.exports = router;
