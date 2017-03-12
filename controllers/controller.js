// Require models
var ArticleModel = require("../models/ArticleModel.js");
var CommentModel = require("../models/CommentModel.js")

module.exports = function(app){
    // Routes
    app.get("/", function(req, res) {
    res.send(index.html);
    });
}