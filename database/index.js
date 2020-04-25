const mongoose = require('mongoose');

let option = { useMongoClient: true };
mongoose.connect('mongodb://localhost/fetcher', option, () => {
  console.log('Mongo database is connected: fetcher')
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  full_name: String,
  created_at: String,
  owner: {}
});

let Repo = mongoose.model('Repo', repoSchema);

// function to check if there already exist the same repo in the database
let limitData = (num, callback) => {
  let repos = mongoose.model('Repo');

  repos.find()
          .sort({ "created_at-": -1 })
          .limit(num)
          .exec((err, data) => {
            if(!err) {
              callback(null, data)
            } else {
              callback(err, null)
            }
          });
}

let save = (data, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // console.log('data to be save => ', JSON.parse(data))

  let repos = JSON.parse(data);
  // console.log('repos[0].owner => ', repos[0].owner)

  let counter = 0;

  for(let i = 0; i < repos.length; i++) {
    let newMode = new Repo({
      id: repos[i].id,
      name: repos[i].name,
      full_name: repos[i].full_name,
      created_at: repos[i].created_at,
      owner: {
        login: repos[i].owner.login,
        id: repos[i].owner.id,
        url: repos[i].owner.url,
        repos_url: repos[i].owner.repos_url,
        type: repos[i].owner.type
      }
    }).save((err) => {
      if(!err) {
        console.log('data is save in successfully')
        // callback('Fail to save data in mongo', null)
      } else {
        console.log('Fail to save data in mongo: err => ', err)
      }
    });
  }

}

module.exports = {
  save,
  limitData
}