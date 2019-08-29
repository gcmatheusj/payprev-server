const express = require('express')

const controllers = require('./app/controllers')
const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router()

routes.post('/signup', controllers.SessionController.store)
routes.post('/signin', controllers.UserController.store)

routes.get('/users/github/:username', controllers.AdminController.show)
routes.post('/users', controllers.AdminController.create)

routes.get('/users', controllers.CommonController.index)

routes.use(authMiddleware)

module.exports = routes
