const rebooterModel = require ('../Models/rebooter.model')

function createRebooter (req, res){
  rebooterModel.create (req.body)
  .then((rebooter ) => {
    res.json(rebooter)
  })
  .catch((err) => {
    res.json(err)
  })
}

function updateRebooter(req,res){
  rebooterModel.findByIdAndUpdate(res.locals.id, req.body, { new: true })
  .then ((rebooter) => {
      res.json(rebooter)
  })
  .catch((err) => {
      res.json(err)
  })
}


function deleteRebooter(req,res){
  rebooterModel.findByIdAndDelete (req.params.rebooterId)
  .then ((rebooter) => {
      res.json("rebooter deleted successfully")
  })
  .catch((err) => {
      res.json(err)
  })
}

function getOneRebooter (req, res){
  rebooterModel.findById(res.locals.id)
  .populate('skills.skills')
  .then ((rebooter) => {
     res.json(rebooter)
  })
  .catch((err) => {
      res.json(err)
  })
}

function getRebooterById (req, res){
  rebooterModel.findById(req.params.id)
  .populate('skills.skills')
  .then ((rebooter) => {
     res.json(rebooter)
  })
  .catch((err) => {
      res.json(err)
  })
}

function getAllRebooter (req, res){
  rebooterModel.find()
  .populate('skills.skills')
  .then ((rebooter) => {
     res.json(rebooter)
  })
  .catch((err) => {
      res.json(err)
  })
}

function getSoftSkills (req, res){
  console.log(req.headers)
  rebooterModel.findById(res.locals.id)
  .then ((rebooter) => {
    rebooter.softSkills = []
    req.body.forEach(element => {
    rebooter.softSkills.push(element)
  });
  rebooter.save(function (err) {
    if (err) return handleError(err)
    console.log('Success!');
  });
  res.json(rebooter)
})
.catch((err) => {
  res.json(err)
})
}

function getAcademy (req, res){
  rebooterModel.findById(res.locals.id)
  .then ((rebooter) => {
    rebooter.academy = []
    req.body.forEach(element => {
    rebooter.academy.push(element)
  });
  rebooter.save(function (err) {
    if (err) return handleError(err)
    console.log('Success!');
  });
  res.json(rebooter)
})
.catch((err) => {
  res.json(err)
})
}

function getExperience (req, res){
  rebooterModel.findById(res.locals.id)
  .then ((rebooter) => {
    rebooter.experience = []
    req.body.forEach(element => {
    rebooter.experience.push(element)
  });
  rebooter.save(function (err) {
    if (err) return handleError(err)
    console.log('Success!');
  });
  res.json(rebooter)
})
.catch((err) => {
  res.json(err)
})
}

function getSkills (req, res){
  rebooterModel.findById(res.locals.id)

  .then ((rebooter) => {
    rebooter.skills = []
    req.body.forEach(element => {
    rebooter.skills.push(element)
  });
  rebooter.save(function (err) {
    if (err) return handleError(err)
    console.log('Success!');
  });
  res.json(rebooter)
})
.catch((err) => {
  res.json(err)
})
}

function getProjects (req, res){
  rebooterModel.findById(res.locals.id)

  .then ((rebooter) => {
    rebooter.projects = []
    req.body.forEach(element => {
    rebooter.projects.push(element)
  });
  rebooter.save(function (err) {
    if (err) return handleError(err)
    console.log('Success!');
  });
  res.json(rebooter)
})
.catch((err) => {
  res.json(err)
})
}

function getLanguages (req, res){
  rebooterModel.findById(res.locals.id)

  .then ((rebooter) => {
    rebooter.languages.push(req.body)

  rebooter.save(function (err) {
    if (err) return handleError(err)
    console.log('Success!');
  });
  res.json(rebooter)
})
.catch((err) => {
  res.json(err)
})
}
function deleteLanguage(req,res){
  rebooterModel.findByIdAndDelete (req.body)
  .then ((rebooter) => {
      res.json("rebooter deleted successfully")
  })
  .catch((err) => {
      res.json(err)
  })
}

module.exports = {createRebooter, updateRebooter, deleteRebooter, getOneRebooter, getRebooterById, getAllRebooter, getSoftSkills, getAcademy, getExperience, getSkills,getProjects,getLanguages, deleteLanguage}