const companyModel = require('../Models/company.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function signUp(req, res) {
  try {
    const hashed_pwd = await bcrypt.hash(req.body.companyPwd, 10)
    const company = await companyModel.create({
      companyEmail: req.body.companyEmail,
      companyPwd: hashed_pwd
    })


    const token = jwt.sign(
      {
        companyName: company.companyName,
        id: company._id,
        companyEmail: company.companyEmail
      },
      process.env.SECRET
    )

    const resCompany =

      res.json({
        id: company._id,
        companyName: company.companyName,
        companyEmail: company.companyEmail,
        token: token
      })
  } catch (error) {
    return status(500).json({ err: 'problem creating account' + error })
  }
}

async function login(req, res) {
  try {
    const company = await companyModel.findOne({ companyEmail: req.body.companyEmail })
    if (!company) return res.status(400).json('Wrong email')

    bcrypt.compare(
      req.body.companyPwd,
      company.companyPwd,
      (err, result) => {
        if (!result) return res.status(400).json('Wrong password')

        const token = jwt.sign(
          {
            companyName: company.companyName,
            companyEmail: company.companyEmail,
            id: company._id
          },
          process.env.SECRET,
        )

        res.json({
          token: token,
          company: {
            companyName: company.companyName,
            companyEmail: company.companyEmail,
            id: company._id,
          }
        })
      })
  } catch (error) {
    return status(400).json({ err: 'problem creating account' + error })

  }


}

module.exports = {
  signUp,
  login
}
