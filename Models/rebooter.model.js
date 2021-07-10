const mongoose = require('mongoose')
const skillsModel = require('./skills.model')

UserSkillsSchema = new mongoose.Schema({
  level: {
    type: Number,
  },
  yearsOfExperience: {
    type: String,
    enum:[
      'Menos de 1 año',
      '1 año',
      '2 años',
      '3 años',
      '4 años',
      'Más de 5 años'
    ] 
  },
  latestUse:{
    type: String,
    enum:[
      'Actualmente',
      'menos de 1 año',
      '2 años',
      '3 años',
      '4 años',
      'Más de 5 años'
    ] 
  },
  certifications: {
    type: Array
  },
  skills: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "skills"
  }
 
})

const rebooterSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/.test(value);
      }
    },
    unique: [true, 'Email is registered']
  },
  userPwd: {
    type: String,
    required: [true, 'Password is required']
  },
  userPhoto: {
    type: String,
    default: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/10/jackie-chan-2113345.jpg'
  },
  userName: {
    type: String,
  },
  userSurname: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  country: {
    type: String,
  },
  province: {
    type: String,
  },
  adress: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  aboutMe: {
    type: String,
  },
  skills: [UserSkillsSchema]
  
})

const rebooterModel = mongoose.model("rebooter",rebooterSchema)
module.exports = rebooterModel