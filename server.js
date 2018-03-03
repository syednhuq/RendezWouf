var express = require('express');
var app = express();
var bodyParser = require("body-parser");

var ports = 3000;

var db = require('./models');


app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('./public'))


app.get('/api/puppies' ,function (req, res) {

    db.puppylist.findAll(
    ).then(function(puppylist){
      res.json(puppylist)
    })
  })


app.post('/api/puppies' ,function (req, res) {
  console.log(req.body)
    db.puppylist.create({
      Email:req.body.email,
      State:req.body.state,
      City:req.body.city,
      Zip:req.body.zip,
      Puppy_name: req.body.Puppy_name,
      Age:req.body.age,
      Photo:req.body.Photo

    }).then(function(pupplylist){
      res.json('/puppylist')
    })
  })

  app.get('/puppylist', function (req, res) {
    res.sendFile(__dirname+'/index.html')
    db.puppylist.findAll({ 
    }).then(function(puppylist){
      res.json(puppylist)
  })
  })

  db.sequelize.sync().then(function() {
  app.listen(ports, function() {
    console.log("App listening on ports " + ports);
  });
  });