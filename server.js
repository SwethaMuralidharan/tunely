
// You must add body-parser to your package.json using npm install.
// This was included in the Tunely directions.
// Documentation her: https://github.com/expressjs/body-parser
// body-parser parses "incoming request bodies... available under req.body"
// body-parser basically makes it possible to parse the data sent by a form

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

var db = require('./models');
var controllers = require('./controllers');


app.get('/', function homepage (req, res) {
  res.sendFile('views/index.html', { root : __dirname });
});


app.get('/api', controllers.api.index);
app.get('/api/albums', controllers.albums.index);
app.post('/api/albums', controllers.albums.create);

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
