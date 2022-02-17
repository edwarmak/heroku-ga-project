const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema ({
  description: { type: String },
  mileage: { type: Number, required: true },
  date: { type: Date, required: true },
  location: { type: String }
})

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service
