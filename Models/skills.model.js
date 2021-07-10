const mongoose = requiere('mongoose')
const skillSchema = new mongoose.Schema ({
  type: {
    type: String,
    enum: [
      'Database',
      'FrontEnd',
      'BackEnd',
      'Programing Lenguage'
    ]
  },
  name:{
    type: String,
    required :[true, 'name is registered']
  },
  levelInfo:{
    type: Array,
    default: [
      'level 1: Means you are starting using this skill',
      'level 2: Means you are starting using this skill',
      'level 3: Means you are starting using this skill',
      'level 4: Means you are starting using this skill',
    ]
  },

})