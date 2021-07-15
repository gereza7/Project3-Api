const authRouter = require('express').Router()

const { login, signUp } = require('../Controllers/auth.controllers')

authRouter.post( '/login', login)
authRouter.post( '/signUp', signUp)

module.exports = authRouter