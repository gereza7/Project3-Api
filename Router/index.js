const router = require ('express').Router()
const rebooterRouter = require ('./rebooter.router')
const skillsRouter = require ('./skills.router')
const authRouter = require ('./auth.router')
const authCompanyRouter = require ('./authCompany.router')
const companyRouter = require ('./company.router')

router.use('/rebooter', rebooterRouter)
router.use('/skills', skillsRouter)
router.use('/auth', authRouter)
router.use('/authCompany', authCompanyRouter)
router.use('/company', companyRouter)

module.exports = router