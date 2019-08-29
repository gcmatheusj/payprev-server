require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const databaseConfig = require('./config/database')

class App {
  constructor () {
    this.express = express()

    this.database()
    this.middlewares()
    this.routes()
  }

  database () {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }

  middlewares () {
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
