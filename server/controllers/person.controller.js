const Person = require('../models/person.model');

module.exports.index = (req, res) => {
  res.json({
    message: `Hello world!`
  })
}

module.exports.findAllPeople = (req, res) => {
  Person.find()
    .then(findAllPeople=>res.json(findAllPeople))
    .catch(err=>res.json({message: 'Something went wrong', error: err}))
}

module.exports.createNewPerson = (req, res) => {
  Person.create(req.body)
    .then(person=>res.json(person))
    .catch(err=>res.json({message: 'Something went wrong', error: err}))
}
