const mongoose = require('mongoose')



const companySchema = new mongoose.Schema({
  companyEmail: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/.test(value);
      }
    },
    unique: [true, 'Email is registered']
  },
  companyPwd: {
    type: String,
    required: [true, 'Password is required']
  },
  companyLogo: {
    type: String,
    default: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/10/jackie-chan-2113345.jpg'
  },
  companyName: {
    type: String,
  },
  companyCountry: {
    type: String,
  },
  companyProvince: {
    type: String,
  },
  companyAdress: {
    type: String,
  },
  companySelectCountryCode: {
type: String
  },
 
  companyPhoneNumber: {
    type: Number,
  },
  companyAboutMe: {
    type: String,
  }
})



const companyModel = mongoose.model("company", companySchema)
module.exports = companyModel