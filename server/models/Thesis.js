/**
 * Created by mahdi on 16/04/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ThesisSchema = new Schema({
    _thesisId: String,
    title: String,
    date: Date,
    laboratories: [String]
},
    {
        collection: 'thesis'
    });


module.exports = mongoose.model('Thesis', ThesisSchema);
