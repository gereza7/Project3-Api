const skillsRouter = require ('express').Router()
const {createSkills, updateSkills, deleteSkills, getOneSkills, getAllSkills} = require ('../Controllers/skills.controllers')

skillsRouter.post("/",  createSkills)
skillsRouter.put("/:skillsId",  updateSkills)
skillsRouter.delete("/:skillsId", deleteSkills)
skillsRouter.get("/", getAllSkills)
skillsRouter.get("/all",  getAllSkills)

module.exports = skillsRouter