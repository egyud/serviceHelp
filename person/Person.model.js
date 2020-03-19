const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  venmo: {
    type: String,
    required: true,
    unique: true
  },
  workplace: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Person', PersonSchema)