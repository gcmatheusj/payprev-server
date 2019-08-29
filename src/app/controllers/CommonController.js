const GithubUser = require('../models/GithubUser')

class CommonController {
  async index (req, res) {
    const users = await GithubUser.find()

    return res.json(users)
  }
}

module.exports = new CommonController()
