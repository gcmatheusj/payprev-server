const GithubUser = require('../models/GithubUser')
const fetch = require('../utils/fetch')

class AdminController {
  async show (req, res) {
    const { username } = req.params

    const user = await fetch(username)

    if (!user) {
      return res.status(400).json({ error: 'User not found.' })
    }

    return res.json(user)
  }

  async create (req, res) {
    const { username } = req.body

    const userExists = await fetch(username)

    if (!userExists) {
      return res.status(400).json({ error: 'User not found.' })
    }

    const { login, name, bio, location, html_url: url } = userExists

    const githubUserExists = await GithubUser.findOne({ login })

    if (githubUserExists) {
      return res.status(400).json({ error: 'This user is already registered' })
    }

    const user = await GithubUser.create({ login, name, bio, location, url })

    return res.json(user)
  }
}

module.exports = new AdminController()
