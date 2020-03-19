const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = require('./config/config').mongoURI
const app = express()
const { fetchPerson } = require('./utils/fetchPerson')

const personRoutes = require('./person/Person.routes')

app.set('view engine', 'ejs')

app.set('views', __dirname + '/views')

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', async (req, res) => {
  let person = await fetchPerson()
  const { name, venmo, workplace } = person
  let link = `https://venmo.com/${venmo}`
  if (name, venmo, workplace) {
    res.render('main', {
      name,
      link,
      workplace
    })
  }
})

app.get('/form', (req, res) => {
  res.render('form', {
    path: '/form'
  })
})

app.get('/success', (req, res) => {
  res.render('success')
})

app.use('/api/person', personRoutes)

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err))

app.listen(3000, () => console.log('App listening to port 3000'))