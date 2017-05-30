/**
 * Created by mahdi on 08/04/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  _studentId: String,
  firstName: String,
  lastName: String,
  grade: String,
  email: String,
  phone: String,
  thesis: [{ type: Schema.Types.Mixed, ref: 'Thesis' }],
  researchFileds : String,
  resume: String,
  supervisor: [{type: Schema.Types.ObjectId, ref:'Member'}],
  coSupervisors: [{type: Schema.Types.Mixed, ref:'Member'}],
  socials: [{ type: Schema.Types.ObjectId, ref: 'Social' }],
  articles: [{ type: Schema.Types.Mixed, ref: 'Article' }]
});


module.exports = mongoose.model('Student', StudentSchema);
