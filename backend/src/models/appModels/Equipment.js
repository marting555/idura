const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  rentalProvider: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

equipmentSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Equipment', equipmentSchema);
