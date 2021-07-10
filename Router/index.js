const router = require ('express').Router()
const rebooterRouter = require ('./rebooter.router')
const skillsRouter = require ('./skills.router')
const authRouter = require ('./auth.router')

router.use('/rebooter', rebooterRouter)
router.use('/skills', skillsRouter)
router.use('/auth', authRouter)

module.exports = router