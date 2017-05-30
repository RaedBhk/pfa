// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
var passport  = require('passport');
// Get our API routes
const articleRouter = require('./routes/article.api');
const memberRouter = require('./routes/member.api');
const socialRouter = require('./routes/social.api');
const studentRouter = require('./routes/student.api');
const thesisRouter = require('./routes/thesis.api');
const eventsRouter = require('./routes/events.api');

const app = express();
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});
app.use(function(req, res, next) {
//set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var mongoose = require('mongoose');
mongoose.connect('mongodb://user:password@ds157040.mlab.com:57040/labo', function (error) {

  if (error) throw error;
}); // connect to our database

// Parsers for POST data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Set our api routes
app.use('/api', articleRouter);
app.use('/api', memberRouter);
app.use('/api', socialRouter);
app.use('/api', studentRouter);
app.use('/api', thesisRouter);
app.use('/api', eventsRouter);

app.use(cors());

// Catch all other routes and return the index file
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () {
  console.log("Labo running on localhost:" + port);
});
