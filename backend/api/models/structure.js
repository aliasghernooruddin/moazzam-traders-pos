var mongoose = require('mongoose');


var structureSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  type: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  creation_date: {
    type: Date,
    default: Date.now
  },
},
  { strict: true }
);


mongoose.model('Structure', structureSchema, 'structures');
