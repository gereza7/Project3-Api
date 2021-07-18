const rebooterRouter = require ('express').Router()
const jwt = require ('jsonwebtoken')
const {createRebooter, updateRebooter, deleteRebooter, getOneRebooter, getAllRebooter, getSoftSkills} = require ('../Controllers/rebooter.controllers')

rebooterRouter.post("/", auth, createRebooter)
rebooterRouter.put("/me", auth, updateRebooter)
rebooterRouter.delete("/me", auth, deleteRebooter)
rebooterRouter.get("/me", auth, getOneRebooter)
rebooterRouter.get("/all",  getAllRebooter)
rebooterRouter.get("/me/softskills", auth,getSoftSkills)

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

module.exports = rebooterRouter