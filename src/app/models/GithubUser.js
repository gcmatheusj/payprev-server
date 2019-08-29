const mongoose = require('mongoose')

const GithubUserSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    },
    location: {
      type: String
    },
    url: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const GithubUser = mongoose.model('GithubUser', GithubUserSchema)

module.exports = GithubUser
