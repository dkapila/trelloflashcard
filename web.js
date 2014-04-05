// web.js
var express = require("express");
var logfmt = require("logfmt");
var routes = require('./routes/routelist')
var path = require('path');
var app = express();

app.use(logfmt.requestLogger());

app.get('/', routes.index);



app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});