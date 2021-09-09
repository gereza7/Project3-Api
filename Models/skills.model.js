const mongoose = require('mongoose')
const skillSchema = new mongoose.Schema ({
  skillType: {
    type: String,
    enum: [
      'Database',
      'FrontEnd',
      'BackEnd',
      'Programing Lenguage',
      'Design',
      'Other',
    ]
  },
  name:{
    type: String,
    required :[true, 'name is registered']
  },

})
const skillsModel = mongoose.model("skills",skillSchema)
module.exports = skillsModel