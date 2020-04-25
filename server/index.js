const express = require('express');
const axios = require('axios');

const getReposByUserName = require('../helpers/github.js');
const { save, limitData } = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

// enable express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  // console.log('POST request from client => ', req.body)

  getReposByUserName(Object.keys(req.body)[0], (err, data) => {
    if(!err) {

      // console.log('\nGithub data => ', data);

      save(data, (err, dataLength) => {
        if(!err) {
          res.status(201).send(dataLength)
        } else {
          res.status(400).send(err)
        }
      });
    } else {
      console.log('\nerror => ', err)
    }
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

  // note limitData takes in an interger (the desire number of record) and an anonymous function callback
  limitData(25, (err, data) => {
    if(!err) {
      console.log('25 query: ', data)
      res.status(200).send(data)
    } else {
      console.log('Error 25 query: ', err)
      res.status(500).send(err);
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

