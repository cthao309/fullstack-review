const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const mongo = require('../database/index.js')
const getReposByUserName = require('../helpers/github.js');

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

  console.log('POST request from client => ', req.body)

  getReposByUserName(Object.keys(req.body)[0], (err, data) => {
    if(!err) {
      console.log('\nGithub data => ', data);
    } else {
      console.log('\nerror => ', err)
    }
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

