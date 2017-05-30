/**
 * Created by mahdi on 09/04/17.
 */
var fs = require('fs');
const express = require('express');
const router = express.Router();
var multer = require('multer');
var DIR = './uploads/';

const passport= require('passport');
const jwt= require('jsonwebtoken');
/* GET api listing. */
router.get('/', function (req, res) {
  return res.send('Labo api works');
});

//http://mongoosejs.com/docs/2.7.x/docs/finding-documents.html
//User Tracker API
var Member = require('../models/Member');
const config = require('../config/database');
router.route('/member')

// create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function (req, res) {

    var member = new Member();

      member._memberId = req.body._memberId;
      member.email = req.body.email;
      member.pass =req.body.pass;
      member.login=req.body.login;
      member.firstName = req.body.firstName;
      member.lastName = req.body.lastName;
      member.grade = req.body.grade;
      member.homepage = req.body.homepage;
      member.phone = req.body.phone;
      member.thesis = req.body.thesis;
      member.researchFileds = req.body.researchFileds;
      member.resume = req.body.resume;
      member.socials = req.body.socials;
      member.articles = req.body.articles;

     /* member.img.data = fs.readFileSync(imgPath);
      member.img.contentType = 'image/png';*/


    console.log(JSON.stringify(member));

    // save the bear and check for errors
      Member.addMember(member,function (err, user) {
          if(err){
              res.json({success: false, msg:'failed to register user '});
          }else {
              res.json({success: true, msg:'succ to register user '})
          }
      });
  })
  .get(function (req, res) {

    Member.find(function (err, members) {
      if (err)
        res.send(err);

      res.status(200).json({message: 'Member', data: members});
    }).populate('articles socials thesis');

  });

router.route('/member/:_id')
  .get(function (req, res) {
    Member.findById(req.params._id, function (err, member) {
      if (err)
        return res.send(err);
      res.status(200).json({message: 'Member : ' + req.params._id, data: member});
    }).populate('articles socials thesis');
  })
    .post(function(req, res) {
        Member.findByIdAndUpdate(req.params._id, req.body,{new: true}, function (err, post) {
            if (err)
                return res.send(err);
            res.json(post);
        });
    })
  .delete(function (req, res) {
    Member.remove({
      _id: req.params._id
    }, function (err, member) {
      if (err)
        res.send(err);

      res.json({message: 'Successfully deleted'});
    });
  });
router.route('/members/find')
    .post(function (req, res) {
        var reg= new RegExp(["/", req.body, "/"].join(""), "i");


        Member.find({$or: [
           {grade: reg}, {firstname: reg}] }

        , function (err, events) {
            if (err)
                res.send(err);
            res.status(200).json({
                message: 'members : ' + req.params._memberId, data: events
            });
        });
    });









router.post('/uploadcv',function (req, res, next) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads/');

        },
        filename: function (req, file, cb) {
            cb(null, req.query.id+'.png');
        }
    });
    var upload = multer({storage:storage}).single('photo');
    var path = '';

    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return res.status(422).send("an Error occured")
        }
        // No error occured.
        console.log(req.query);
        path = req.file.path;

        return res.send("Upload Completed for "+path);
    });

});











router.route('/member/find')
  .post(function (req, res) {
    Member.find(req.body, function (err, members) {
      if (err)
        res.send(err);
      res.status(200).json({
        message: 'Member : ' + req.params.userId, data: members
      });
    });
  });
/*router.post("/register", function (req, res, next) {
  newMember= new member({
      name: req.body.name,
      email: req.body.email,
      login: req.body.username,
      pass: req.body.password,
  })

})*/
router.get('/profile', passport.authenticate('jwt' , {session:false}),function (req, res, next) {
    res.json({user:req.user});

});
router.post('/authenticate',function (req, res, next) {
    const login= req.body.login;
    const pass = req.body.pass;

    Member.getMemberByLogin(login, function (err, member) {
        if(err) throw err;
        if(!member){
            return res.json({success:false, msg: 'User not found'});
        }
        Member.comparePassword(pass, member.pass, function (err, isMatch) {

            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(member, config.secret, {
                    expiresIn: 604800 //1week
                });
                res.json({
                    success:true,
                    token: 'JWT ' +token,
                    member: {
                        name: member.name,
                        login: member.login,
                        email: member.email
                    }
                });
            }else {
                return res.json({success:false, msg: 'Invalid password'});
            }
        });

    });

});

module.exports = router;
