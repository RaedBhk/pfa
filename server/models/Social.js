/**
 * Created by mahdi on 16/04/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SocialSchema = new Schema({
  _socialId: String,
  facebook: String,
  twitter: String,
  linkedin: String,
  google: String,
  researchGate: String
});


module.exports = mongoose.model('Social', SocialSchema);
