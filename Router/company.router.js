const companyRouter = require ('express').Router()
const jwt = require ('jsonwebtoken')
const {createCompany, updateCompany, deleteCompany, getOneCompany, getAllCompany} = require ('../Controllers/company.controllers')


companyRouter.post("/", auth, createCompany)
companyRouter.put("/me", auth, updateCompany)
companyRouter.delete("/me", auth, deleteCompany)
companyRouter.get("/me", auth, getOneCompany)
companyRouter.get("/all",  getAllCompany)


function auth(req, res, next) {

    jwt.verify(
      req.headers.token, 
      process.env.SECRET, 
      (err, insideToken) => {
        if (err) res.json('Token not valid')
        res.locals.id = insideToken.id
        next()
    })
  }

module.exports = companyRouter