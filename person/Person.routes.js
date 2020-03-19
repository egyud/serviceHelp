const express = require('express')
const router = express.Router()

const PersonControllers = require('./Person.controllers')

router.post('/', PersonControllers.postPerson)

router.get('/', PersonControllers.getPerson)

module.exports = router