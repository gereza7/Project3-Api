const router = require ('express').Router()
const rebooterRouter = require ('./rebooter.router')
const skillsRouter = require ('./skills.router')

router.use('/rebooter', rebooterRouter)
router.use('/skills', skillsRouter)

module.exports = router