// Example model
var db = require('orm').db;

var User = db.define('users', {
    login: String,
    password: String,
    location: String,
    email: String
}, {
    methods: {
        example: function() {
            // return example;
        },
        serialize: function() {
            return this;
        }
    }
});
