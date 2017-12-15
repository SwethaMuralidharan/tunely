var express = require('express'),
  bodyParser = require('body-parser'),
  db = require('./models');
var controllers = require('./controllers');

var app = express();
// server.js
app.get('/api', controllers.api.index);

 app.use(express.static('public'));

  app.get('/', function (req, res) {
    res.sendFile('views/index.html' , { root : __dirname});
  });



  app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening at http://localhost:3000/');
  })
