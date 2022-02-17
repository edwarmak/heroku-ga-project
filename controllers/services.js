const express = require('express')
const router = express.Router()
const Service = require('../models/services.js')
const category = require('../models/option.js')
// const Vehicle = require('../models/vehicles/')

// render page to add new service
router.get('/new', (req, res)=>{
	res.render('services/new.ejs', {
		categories: category
	})
})

router.put('/:id', (req, res)=>{
	Service.findByIdAndUpdate(req.params.id, req.body, ()=>{
		res.redirect('/services')
  })
})

// delete route for services we have added
router.delete('/:id', (req, res)=>{
	Service.findByIdAndRemove(req.params.id, ()=>{
		res.redirect('/services')
	})
})

router.get('/:id/edit', (req, res)=>{
	Service.findById(req.params.id, (err, foundService)=>{
		res.render('services/edit.ejs', {
			service: foundService
		})
	})
})

// show page
router.get('/:id', (req, res) => {
  Service.findById(req.params.id, (error, foundService) => {
		// console.log(foundService)
    res.render('services/show.ejs', {
      service: foundService
    })
  })
})

// show services that we have created
router.get('/', (req, res)=>{
	Service.find({}, (err, foundServices)=>{
		res.render('services/index.ejs', {
			services: foundServices
		})
	})
})

// create route for new service
router.post('/', (req, res) => {
  Service.create(req.body, (error, createdService) => {
    res.redirect('/services')
  })
})

module.exports = router
