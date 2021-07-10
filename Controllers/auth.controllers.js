const rebooterModel = require ('../Models/rebooter.model')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')

function signUp (req, res){
  const hashed_pwd = bcrypt.hashSync(req.body.userPwd, 10)
  const hashed_body = {
    userEmail: req.body.userEmail,
    userPwd: req.body.userPwd,
  }
  rebooterModel.create(hashed_body)
      .then((user) => {

        const insideToken = {
          userName: user.userName,
          id: user._id,
          userEmail: user.userEmail
        }

        const token = jwt.sign(
          insideToken,
          process.env.SECRET
        )

        const resUser = {
          id: user._id,
          userName: user.userName,
          userEmail: user.userEmail,
          token: token
        }

        res.json(resUser)
      })
      .catch((err) => {
        res.json(err)
      })
}

function login(req, res) {
  /*
    req.body = {
      email,
      pwd
    }
  */

  rebooterModel.findOne({ userEmail: req.body.userEmail })
    .then((user) => {
      if (!user) res.json('Wrong email')

      bcrypt.compare(
        req.body.userPwd, 
        user.userPwd, 
        (err, result) => {
          if (err) res.json('Wrong password')
          
          const insideToken = {
            userName: user.userName,
            userEmail: user.userEmail,
            id: user._id
          }
          const token = jwt.sign(
            insideToken,
            process.env.SECRET,
          )

          resUser = {
            userName: user.userName,
            userEmail: user.userEmail,
            id: user._id,
            token: token
          }
          
          res.json(resUser)
        })

    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  signUp,
  login
}
