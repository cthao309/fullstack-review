const mongoose = require('mongoose');

let option = { useMongoClient: true };
mongoose.connect('mongodb://localhost/fetcher', option, () => {
  console.log('Mongo database is connected: fetcher')
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;