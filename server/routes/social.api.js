/**
 * Created by mahdi on 09/04/17.
 */
const express = require('express');
const router = express.Router();

//http://mongoosejs.com/docs/2.7.x/docs/finding-documents.html
//User Tracker API
var Social = require('../models/Social');

router.route('/social')

// create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function (req, res) {

    var social = new Social();

    social.facebook = req.body.facebook;
    social.twitter = req.body.twitter;
    social.linkedin = req.body.linkedin;
    social.google = req.body.google;
    social.researchGate = req.body.researchGate;

    console.log(JSON.stringify(social));

    // save the bear and check for errors
    social.save(function (err, article) {
      if (err) return res.status(400).json(err);
      res.status(201).json({message: 'social created!', data: article});

    });
  })
  .get(function (req, res) {

    Social.find(function (err, articles) {
      if (err)
        res.send(err);
      res.status(200).json({message: 'article', data: articles});
    });

  });
router.route('/article/:_id')
  .get(function (req, res) {
    Social.findById(req.params._id, function (err, article) {
      if (err)
        res.send(err);
      res.status(200).json({message: 'article : ' + req.params._id, data: article});
    });
  })
  .delete(function (req, res) {
    Social.remove({
      _id: req.params._id
    }, function (err, article) {
      if (err)
        res.send(err);

      res.json({message: 'Successfully deleted'});
    });
  });
router.route('/social/find')
  .post(function (req, res) {
    Social.find(req.body, function (err, article) {
      if (err)
        res.send(err);
      res.status(200).json({
        message: 'Social : ' + req.params.articleId, data: article
      });
    });
  });
module.exports = router;
