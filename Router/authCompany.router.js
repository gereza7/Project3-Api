const authCompanyRouter = require('express').Router()

const { login, signUp } = require('../Controllers/authCompany.controllers')

authCompanyRouter.post( '/login', login)
authCompanyRouter.post( '/signUp', signUp)

module.exports = authCompanyRouter


