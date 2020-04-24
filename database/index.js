const mongoose = require('mongoose');

let option = { useMongoClient: true };
mongoose.connect('mongodb://localhost/fetcher', option, () => {
  console.log('Mongo database is connected: fetcher')
});

// owner schema
let ownerSchema = mongoose.Schema({
  login: String,
  id: Number,
  avatar_url: String,
  gravatar_id: String,
  url: String,
  html_url: String,
  repos_url: String,
  type: String
})

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  full_name: String,
  owner: ownerSchema,
  private: Boolean,
  html_url: String,
  description: String,
  url: String,
  forks_url: String,
  keys_url: String,
  branches_url: String,
  commits_url: String,
  git_commits_url: String,
  comments_url: String,
  created_at: String,
  updated_a: String,
  pushed_at: String,
  git_url: String,
  ssh_url: String,
  clone_url: String,
  svn_url: String,
  homepage: String,
  size: Number,
  language: String,
  forks: Number,
  watchers: Number,
  default_branch: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;