const rebooterModel = require('../Models/rebooter.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function signUp(req, res) {
  try {
    const hashed_pwd = await bcrypt.hash(req.body.userPwd, 10)
    const user = await rebooterModel.create({
      userEmail: req.body.userEmail,
      userPwd: hashed_pwd
    })


    const token = jwt.sign(
      {
        userName: user.userName,
        id: user._id,
        userEmail: user.userEmail
      },
      process.env.SECRET
    )

    const resUser =

      res.json({
        id: user._id,
        userName: user.userName,
        userEmail: user.userEmail,
        token: token
      })
  } catch (error) {
    return status(500).json({ err: 'problem creating account' + error })
  }
}

async function login(req, res) {
  try {
    const user = await rebooterModel.findOne({ userEmail: req.body.userEmail })
    if (!user) return res.json('Wrong email')

    bcrypt.compare(
      req.body.userPwd,
      user.userPwd,
      (err, result) => {
        if (!result) return res.json('Wrong password')

        const token = jwt.sign(
          {
            userName: user.userName,
            userEmail: user.userEmail,
            id: user._id
          },
          process.env.SECRET,
        )

        res.json({
          userName: user.userName,
          userEmail: user.userEmail,
          id: user._id,
          token: token
        })
      })
  } catch (error) {
    return status(500).json({ err: 'problem creating account' + error })

  }


}

module.exports = {
  signUp,
  login
}
