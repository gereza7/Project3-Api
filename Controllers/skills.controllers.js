const skillsModel = require ('../Models/skills.model')

function createSkills (req, res){
  skillsModel.create (req.body)
  .then((skills ) => {
    res.json(skills)
  })
  .catch((err) => {
    res.json(err)
  })
}

function updateSkills(req,res){
  skillsModel.findByIdAndUpdate(req.params.skillsId, req.body, { new: true })
  .then ((skills) => {
      res.json(skills)
  })
  .catch((err) => {
      res.json(err)
  })
}


function deleteSkills(req,res){
  skillsModel.findByIdAndDelete (req.params.skillsId)
  .then ((skills) => {
      res.json("skills deleted successfully")
  })
  .catch((err) => {
      res.json(err)
  })
}

function getOneSkills (req, res){
  skillsModel.findById(req.params.skillsId)
  .then ((skills) => {
     res.json(skills)
  })
  .catch((err) => {
      res.json(err)
  })
}


function getAllSkills (req, res){
  skillsModel.find()
  .then ((skills) => {
     res.json(skills)
  })
  .catch((err) => {
      res.json(err)
  })
}

module.exports = {createSkills, updateSkills, deleteSkills, getOneSkills, getAllSkills}