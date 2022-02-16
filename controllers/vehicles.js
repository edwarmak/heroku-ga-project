const express = require('express')
const router = express.Router()
// require Vehicle in controllers
const Vehicle = require('../models/vehicles.js')

router.put('/:id', (req, res) => {
  Vehicle.findByIdAndUpdate(req.params.id, req.body, (error, updatedModel) => {
    res.redirect('/vehicles')
  })
})
// delete vehicle
router.delete('/:id', (req, res) => {
  Vehicle.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect('/vehicles')
  })
})

router.get('/:id/edit', (req, res) => {
  Vehicle.findById(req.params.id, (error, foundVehicle) => {
    res.render('vehicles/edit.ejs', {
      vehicle: foundVehicle
    })
  })
})

// render our add vehicle Page
router.get('/new', (req, res) => {
  res.render('vehicles/new.ejs')
})

router.get('/:id', (req, res) => {
  Vehicle.findById(req.params.id, (error, foundVehicle) => {
    res.render('vehicles/show.ejs', {
      vehicle: foundVehicle
    })
  })
})

// show vehicles made on index Page
router.get('/', (req, res) => {
  Vehicle.find({}, (error, foundVehicles) => {
    res.render('vehicles/index.ejs', {
      vehicles: foundVehicles
    })
  })
})

router.post('/', (req, res) => {
  Vehicle.create(req.body, (error, createdVehicle) => {
    res.redirect('/vehicles')//send user back to vehicles page once vehicle is created
  })
})

module.exports = router
