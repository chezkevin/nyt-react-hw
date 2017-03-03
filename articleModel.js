// Require mongoose
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

// new Schema: UserSchema
var ArticleSchema = new Schema({
  // title of the article: a trimmed, required string
  articleTitle: {
    type: String,
    trim: true,
  },
  // link to the nyt article: a trimmed, required string
  articleLink: {
    type: String,
    trim: true,
  },
  // lastUpdated: a date type entry
  lastUpdated: { type: Date }
});


// Use the above schema to make the User model
var Article = mongoose.model("Article", ArticleSchema);

// Export the model so the server can use it
module.exports = Article;
