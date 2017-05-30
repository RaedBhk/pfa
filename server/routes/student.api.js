/**
 * Created by mahdi on 09/04/17.
 */
const express = require('express');
const router = express.Router();


//http://mongoosejs.com/docs/2.7.x/docs/finding-documents.html
//User Tracker API
var Student = require('../models/Student');

router.route('/student')

// create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function (req, res) {

    var student = new Student();

     student._studentId = req.body._studentId;
     student.email = req.body.email;
     student.firstName = req.body.firstName;
     student.lastName = req.body.lastName;
     student.phone = req.body.phone;
     student.thesis = req.body.thesis;
     student.researchFileds = req.body.researchFileds;
     student.resume = req.body.resume;
     student.socials = req.body.socials;
     student.articles = req.body.articles;

    console.log(JSON.stringify( student ));

    // save the bear and check for errors
     student .save(function (err, member) {
      if (err) return res.status(400).json(err);
      res.status(201).json({message: ' student  created!', data: member});

    });
  })
  .get(function (req, res) {

    Student.find(function (err, students) {
      if (err)
        res.send(err);
      res.status(200).json({message: 'Student', data: students});
    }).populate('articles thesis socials supervisor coSupervisors');

  });
router.route('/student/:_id')
  .get(function (req, res) {
    Student.findById(req.params._id, function (err, student) {
      if (err)
        res.send(err);
      res.status(200).json({message: 'Student : ' + req.params._id, data: student});
    }).populate('articles thesis socials supervisor coSupervisors');
  })
  .delete(function (req, res) {
    Student.remove({
      _id: req.params._id
    }, function (err, student) {
      if (err)
        res.send(err);

      res.json({message: 'Successfully deleted'});
    });
  });

router.route('/student/find')
  .post(function (req, res) {
    Student.find(req.body, function (err, students) {
      if (err)
        res.send(err);
      res.status(200).json({
        message: 'Student : ' + req.params.userId, data: students
      });
    });
  });
module.exports = router;
