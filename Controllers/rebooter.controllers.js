const rebooterModel = require ('../Models/rebooter.model')

function createRebooter (req, res){
  rebooterModel.create (req.body)
  .then((rebooter ) => {
    res.json(rebooter)
  })
  .catch((err) => {
    res.json(err)
  })
}

function updateRebooter(req,res){
  rebooterModel.findByIdAndUpdate(res.locals.id, req.body, { new: true })
  .then ((rebooter) => {
      res.json(rebooter)
  })
  .catch((err) => {
      res.json(err)
  })
}


function deleteRebooter(req,res){
  rebooterModel.findByIdAndDelete (req.params.rebooterId)
  .then ((rebooter) => {
      res.json("rebooter deleted successfully")
  })
  .catch((err) => {
      res.json(err)
  })
}

function getOneRebooter (req, res){
  rebooterModel.findById(res.locals.id)
  .then ((rebooter) => {
     res.json(rebooter)
  })
  .catch((err) => {
      res.json(err)
  })
}


function getAllRebooter (req, res){
  rebooterModel.find()
  .then ((rebooter) => {
     res.json(rebooter)
  })
  .catch((err) => {
      res.json(err)
  })
}

module.exports = {createRebooter, updateRebooter, deleteRebooter, getOneRebooter, getAllRebooter}