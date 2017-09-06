var express = require('express'),
    ejs = require('ejs-locals');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', ejs);
app.use(express.static(__dirname + '/assets'));

var router = require('./routes')(app);

var port = process.env.PORT || 8081;
app.listen(port, function() {
    console.log("app listening on port " + port);
});