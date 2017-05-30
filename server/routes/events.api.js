/**
 * Created by Heisenberg on 16/04/2017.
 */

const express = require('express');
const router = express.Router();

//http://mongoosejs.com/docs/2.7.x/docs/finding-documents.html
//User Tracker API
var Events = require('../models/Events');
router.route('/events/date')
    .get(function (req,res) {
        Events.find(function (err, events) {
            if (err)
                res.send(err);
            res.status(200).json({message: 'events', data: events});
        }).sort({date:-1}).limit(3);
            
        });


router.route('/events')

// create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function (req, res) {

        var events = new Events();

        events._eventsId = req.body._eventsId;
        events.title = req.body.title;
        events.date = req.body.date;
        events.description = req.body.description;
        events.organizer = req.body.organizer;

        console.log(JSON.stringify(events));

        // save the bear and check for errors
        events.save(function (err, events) {
            if (err) return res.status(400).json(err);
            res.status(201).json({message: 'event created!', data: events});

        });
    })
    .get(function (req, res) {

        Events.find(function (err, events) {
            if (err)
                res.send(err);
            res.status(200).json({message: 'events', data: events});
        }).sort({date:-1});

    });
router.route('/events/:_id')
    .get(function (req, res) {
        Events.findById(req.params._id, function (err, events) {
            if (err)
                res.send(err);
            res.status(200).json({message: 'events : ' + req.params._id, data: events});
        });
    })
    .delete(function (req, res) {
        Events.remove({
            _id: req.params._id
        }, function (err, events) {
            if (err)
                res.send(err);

            res.json({message: 'Successfully deleted'});
        });
    });
router.route('/events/find')
    .post(function (req, res) {
        Events.find(req.body, function (err, events) {
            if (err)
                res.send(err);
            res.status(200).json({
                message: 'events : ' + req.params.eventsId, data: events
            });
        });
    });

module.exports = router;