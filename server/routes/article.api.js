/**
 * Created by mahdi on 09/04/17.
 */
const express = require('express');
const router = express.Router();

//http://mongoosejs.com/docs/2.7.x/docs/finding-documents.html
//User Tracker API
var Article = require('../models/Article');
router.route('/article/date')
    .get(function (req, res) {

        Article.find(function (err, articles) {
            if (err)
                res.send(err);
            res.status(200).json({message: 'article', data: articles});
        }).sort({date:-1}).limit(4);;

    });
router.route('/article')

// create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function (req, res) {

    var article = new Article();

    article._articleId = req.body._articleId;
    article.authors = req.body.authors;
    article.title = req.body.title;
    article.date = req.body.date;
    article.url = req.body.url;
    article.description = req.body.description;

    console.log(JSON.stringify(article));

    // save the bear and check for errors
    article.save(function (err, article) {
      if (err) return res.status(400).json(err);
      res.status(201).json({message: 'article created!', data: article});

    });
  })
  .get(function (req, res) {

    Article.find(function (err, articles) {
      if (err)
        res.send(err);
      res.status(200).json({message: 'article', data: articles});
    });

  });
router.route('/article/:_id')
  .get(function (req, res) {
    Article.findById(req.params._id, function (err, article) {
      if (err)
        res.send(err);
      res.status(200).json({message: 'article : ' + req.params._id, data: article});
    });
  })
  .delete(function (req, res) {
    Article.remove({
      _id: req.params._id
    }, function (err, article) {
      if (err)
        res.send(err);

      res.json({message: 'Successfully deleted'});
    });
  });
router.route('/article/find')
  .post(function (req, res) {
    Article.find(req.body, function (err, article) {
      if (err)
        res.send(err);
      res.status(200).json({
        message: 'Social : ' + req.params.articleId, data: article
      });
    });
  });

module.exports = router;
