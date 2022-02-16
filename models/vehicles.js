const mongoose = require('mongoose')

// defining schema for vehicles entered
const vehicleSchema = mongoose.Schema({
  make: { type: String, required:true },
  model: { type: String, required:true },
  year: { type: String, required: true },
  color: { type: String },
  mileage: { type: String, required:true}
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

module.exports = Vehicle
