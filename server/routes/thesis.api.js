/**
 * Created by mahdi on 09/04/17.
 */
const express = require('express');
const router = express.Router();

//http://mongoosejs.com/docs/2.7.x/docs/finding-documents.html
//User Tracker API
var Thesis = require('../models/Thesis');

router.route('/thesis')

// create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function (req, res) {

        var thesis = new Thesis();

        thesis._thesisId = req.body._thesisId;
        thesis.title = req.body.title;
        thesis.date = req.body.date;
        thesis.laboratories = req.body.laboratories;

        console.log(JSON.stringify( thesis ));

        // save the bear and check for errors
        thesis.save(function (err, thesis) {
            if (err) return res.status(400).json(err);
            res.status(201).json({message: ' thesis  created!', data: thesis});

        });
    })
    .get(function (req, res) {

        Thesis.find(function (err, thesis) {
            if (err)
                res.send(err);
            res.status(200).json({message: 'Thesis', data: thesis});
        });

    });
router.route('/thesis/:_id')
    .get(function (req, res) {
        Thesis.findById(req.params._id, function (err, thesis) {
            if (err)
                res.send(err);
            res.status(200).json({message: 'thesis : ' + req.params._id, data: thesis});
        });
    })
    .delete(function (req, res) {
        Thesis.remove({
            _id: req.params._id
        }, function (err, thesis) {
            if (err)
                res.send(err);

            res.json({message: 'Successfully deleted'});
        });
    });
router.route('/thesis/find')
    .post(function (req, res) {
        Thesis.find(req.body, function (err, thesis) {
            if (err)
                res.send(err);
            res.status(200).json({
                message: 'Thesis : ' + req.params._id, data: thesis
            });
        });
    });
module.exports = router;