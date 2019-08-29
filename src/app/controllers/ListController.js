const List = require('../models/List')

class ListController {
  async index (req, res) {
    const lists = await List.find()

    return res.json(lists)
  }

  async create (req, res) {
    const list = await List.create(req.body)

    return res.json(list)
  }

  async update (req, res) {
    const { id } = req.params

    const list = await List.findByIdAndUpdate(id, req.body, {
      new: true
    })

    return res.json(list)
  }

  async delete (req, res) {
    const { id } = req.params

    await List.findByIdAndDelete(id)

    return res.send()
  }
}

module.exports = new ListController()
