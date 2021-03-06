const mongoose = require('mongoose')
const Vehicle = require('./vehicles.js')

const serviceSchema = mongoose.Schema ({
  vehicleId: { type: String },
  category: { type: String, required: true },
  description: { type: String },
  mileage: { type: Number, required: true },
  date: { type: Date, required: true },
  location: { type: String }
})

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service
