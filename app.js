
express = require('express')
var app = express();
var rand = require("generate-key");


var port = 8080;
app.listen(port, function(){
  console.log("Listening on port: " + port);
});

app.get('/', function (req, res) {
  res.send('Welcome to Linc!');
});

app.get('/new', function (req, res) {
  //var key = rand.generateKey();
  var first = req.query.first;
  var last = req.query.last;
  var key = req.query.key;
  var user = {
    key: key,
    first: first,
    last: last,
    active: false
  };
  res.send(user);
});

app.get('/discoverable/:id', function (req, res) {
  var dis = {
    key: req.params.id,
    active: true
  }
  res.send(dis);
});

app.get('/channel/:channel', function (req, res) {
  var key1 = rand.generateKey();
  var key2 = rand.generateKey();
  var key3 = rand.generateKey();
  var population = [];
  var user_1 = {
    key: key1,
    first: "John",
    last: "Doe",
    active: true
  };
  var user_2 = {
    key: key2,
    first: "Bernie",
    last: "Sanders",
    active: true
  };
  var user_3 = {
    key: key3,
    first: "Hillary",
    last: "Clinton",
    active: false
  };
  population.push(user_1);
  population.push(user_2);
  population.push(user_3);

  res.send(population);
});

app.get('/user/:id', function (req, res) {
  var fb = 'fb_'+rand.generateKey();
  var ln = 'ln_'+rand.generateKey();
  var user = {
    key: req.params.id,
    first: "John",
    last: "Doe",
    facebook: fb,
    linkedin: ln
  }
  res.send(user);
});