const express = require('express')
const router = express.Router()
// require Vehicle in controllers
const Author = require('../models/vehicles.js')

// render (shows) our vehicle index.ejs or our vehicles page
router.get('/', (req, res) => {
  res.render('vehicles/veh_index.ejs')
})
// render our add vehicle Page
router.get('/new', (req, res) => {
  res.render('authors/new.ejs')
})

module.exports = router
