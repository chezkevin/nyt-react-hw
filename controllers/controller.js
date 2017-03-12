// Require models
var ArticleModel = require("../models/ArticleModel.js");
var CommentModel = require("../models/CommentModel.js")

module.exports = function(app){
    // Routes

    // query MongoDB for all saved articles
    app.get("/api/saved", function(req, res) {
        Article.find({}, function(error, articles) {
            if (error) {
                response.send(error);
            } else {
                response.json(articles);
            }
        });
    })

    // saves an article to the database
    app.post("/api/saved", function(req,res){
        var article = req.body;
        Article.create(article, function(error, article) {
            if (error) {
                response.send(error);
            } else {
                response.send(article);
            }
        });
    })

    // sends default page when user goes to website
    app.get("/", function(req, res) {
        res.send(index.html);
    });
}