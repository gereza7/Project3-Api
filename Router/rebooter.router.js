const rebooterRouter = require ('express').Router()
const jwt = require ('jsonwebtoken')
const {createRebooter, updateRebooter, deleteRebooter, getOneRebooter, getAllRebooter} = require ('../Controllers/rebooter.controllers')

rebooterRouter.post("/",  createRebooter)
rebooterRouter.put("/:rebooterId",  updateRebooter)
rebooterRouter.delete("/:rebooterId", deleteRebooter)
rebooterRouter.get("/", getAllRebooter)
rebooterRouter.get("/all",  getAllRebooter)

module.exports = rebooterRouter