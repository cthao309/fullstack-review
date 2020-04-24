const request = require('request');
const config = require('../config.js');

const githubURL: 'https://api.github.com'

let getReposByUsername = (/* TODO */) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: githubURL,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  };

}

module.exports.getReposByUsername = getReposByUsername;