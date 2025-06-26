const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  equipment: {
    type: mongoose.Schema.ObjectId,
    ref: 'Equipment',
    required: true,
    autopopulate: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  provider: String,
  status: {
    type: String,
    default: 'rented',
    enum: ['rented', 'external', 'returned'],
  },
  rentalDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: Date,
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'Admin' },
  created: {
    type: Date,
    default: Date.now,
  },
});

rentalSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('EquipmentRental', rentalSchema);
