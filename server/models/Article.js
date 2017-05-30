/**
 * Created by mahdi on 16/04/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  _articleId: String,
  authors: [String],
  title: String,
  date: Date,
  url: String,
  description: String
});


module.exports = mongoose.model('Article', ArticleSchema);
