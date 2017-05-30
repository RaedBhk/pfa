/**
 * Created by mahdi on 16/04/17.
 */
var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
  _memberId: String,
    login: String,
    pass: String,
  firstName: String,
  lastName: String,
  grade: String,
  email: String,
  homepage: String,
  phone: String,
  thesis: [{ type: Schema.Types.Mixed, ref: 'Thesis' }],
  researchFileds : String,
  resume: String,
  socials: { type: Schema.Types.ObjectId, ref: 'Social' },
  articles: [{ type: Schema.Types.Mixed, ref: 'Article' }]

});

const Member=module.exports = mongoose.model('Member', MemberSchema);

module.exports.getMemberByLogin= function (login, callback) {
    const query = {login: login}
    Member.findOne(query, callback);
}
module.exports.getMemberById= function (id, callback){
    Member.findById(id, callback);

}

    module.exports.comparePassword = function (Candidatepass, hash, callback) {
        bcrypt.compare(Candidatepass,hash, function (err, isMatch) {
            if(err) throw err;
            callback(null, isMatch);

        });
    }

module.exports.addMember=function (newMember, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newMember.pass,salt, function (err, hash) {
            if(err) throw err;
            newMember.pass=hash;
            newMember.save(callback);
        });

    });

}