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
  owner: {}
});

let Repo = mongoose.model('Repo', repoSchema);

// function to check if there already exist the same repo in the database
let isRepoExist = () => {
  let repos = mongoose.model('Repo');

  repos.find({}, function(err, data) {
    if(!err) {
      console.log('Mongo database => ', data)
    }
  })
}

let save = (data, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // console.log('data to be save => ', JSON.parse(data))

  let repos = JSON.parse(data);
  console.log('repos[0].owner => ', repos[0].owner)

  let newMode = new Repo({
    id: repos[0].id,
    name: repos[0].name,
    full_name: repos[0].full_name,
    owner: {
      login: repos[0].owner.login,
      id: repos[0].owner.id,
      url: repos[0].owner.url,
      repos_url: repos[0].owner.repos_url,
      type: repos[0].owner.type
    }
  });

  console.log('\n\nmodel to be save => ', newMode)

  newMode.save((err) => {
    if(!err) {
      console.log('data is save in successfully')
      callback('Successfully save data to mongo database')
    } else {
      console.log('Fail to save data in mongo: err => ', err)
      callback('Fail to save data in mongo')
    }
  });

}

module.exports.save = save;