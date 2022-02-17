const mongoose = require('mongoose')
const Service = require('./services.js')
// defining schema for vehicles entered
const vehicleSchema = mongoose.Schema({
  make: { type: String, required:true },
  model: { type: String, required:true },
  year: { type: Number, required: true },
  color: { type: String },
  mileage: { type: Number, required:true},
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

module.exports = Vehicle
