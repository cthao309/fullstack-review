const request = require('request');
const config = require('../config.js');

const githubURL = 'https://api.github.com';

console.log('token => ', config.TOKEN)

let getReposByUsername = (userName, callback) => {
  // TODO - Use the request module to request repos for a specific user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  console.log('userName (github.js) => ', userName)

  let options = {
    url: `${githubURL}/users/${userName}/repos`,
    headers: {
      'User-Agent': 'request',
      'Accept': 'application/vnd.github.v3.raw+json',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, res, body) => {
    console.log('getReposByUserName => ', body)
    if(!err) {
      console.log('successful request to github => ', body)
      callback(null, body);
    } else {
      console.log('Fail request to github => ', err)
      callback(err, null);
    }
  });

}

module.exports = getReposByUsername;

