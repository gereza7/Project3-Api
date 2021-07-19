const companyModel = require ('../Models/company.model')

function createCompany (req, res){
  companyModel.create (req.body)
  .then((company ) => {
    res.json(company)
  })
  .catch((err) => {
    res.json(err)
  })
}

function updateCompany(req,res){
  companyModel.findByIdAndUpdate(res.locals.id, req.body, { new: true })
  .then ((company) => {
      res.json(company)
  })
  .catch((err) => {
      res.json(err)
  })
}


function deleteCompany(req,res){
  companyModel.findByIdAndDelete (req.params.companyId)
  .then ((company) => {
      res.json("Company deleted successfully")
  })
  .catch((err) => {
      res.json(err)
  })
}

function getOneCompany (req, res){
  companyModel.findById(res.locals.id)
  .then ((company) => {
     res.json(company)
  })
  .catch((err) => {
      res.json(err)
  })
}


function getAllCompany (req, res){
  companyModel.find()
  .then ((company) => {
     res.json(company)
  })
  .catch((err) => {
      res.json(err)
  })
}



module.exports = {createCompany, updateCompany, deleteCompany, getOneCompany, getAllCompany}