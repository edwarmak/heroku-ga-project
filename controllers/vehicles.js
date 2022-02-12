const express = require('express')
const router = express.Router()
// require Vehicle in controllers
const Vehicle = require('../models/vehicles.js')

// render (shows) our vehicle index.ejs or our vehicles page
router.get('/', (req, res) => {
  res.render('vehicles/index.ejs')
})
// render our add vehicle Page
router.get('/new', (req, res) => {
  res.render('vehicles/new.ejs')
})

// show vehicles made on index Page
router.get('/', (req, res) => {
  Vehicle.find({}, (error, foundVehicles) => {
    res.render('vehicles/index.ejs', {
      vehicles: foundVehicles
    })
  })
})

router.get('/:id', (req, res) => {
  Vehicle.findById(req.params.id, (error, foundVehicle) => {
    res.render('vehicles/show.ejs', {
      vehicle: foundVehicle
    })
  })
})

router.post('/', (req, res) => {
  Vehicle.create(req.body, (error, createdVehicle) => {
    res.redirect('/vehicles')//send user back to vehicles page once vehicle is created
  })
})

module.exports = router
