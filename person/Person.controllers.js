const Person = require('./Person.model')
const mongoose = require('mongoose')

exports.postPerson = async (req, res) => {
  const { name, venmo, workplace } = req.body
  try {
    console.log('in postPerson try block')
    let person = await Person.create({ name, venmo, workplace })
    return res.redirect('/success')
  } catch(error) {
    console.error(error)
    return res.send({ message: 'There was an error submitting your data' })
  }
}

exports.getPerson = async (req, res) => {
  try {
    console.log('in getPerson try block')
    let person = await Person.aggregate([{ $sample: { size: 1 } }])
    return res.send({ person })
  } catch (error) {
    console.error(error)
    return res.send({ message: 'There was an error retrieving the data' })
  }
}