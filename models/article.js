// Example model
var db = require('orm').db;

var Article = db.define('article', {
    title: String,
    url: String
}, {
    methods: {
        example: function(){
            // return example;
        }
    }
});
