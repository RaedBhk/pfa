/**
 * Created by Heisenberg on 16/04/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventsSchema = new Schema({
    _eventId: String,
    title: String,
    date: Date,
    description: String,
    organizer: String
});


module.exports = mongoose.model('Events', EventsSchema);