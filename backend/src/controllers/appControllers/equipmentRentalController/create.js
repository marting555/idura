const mongoose = require('mongoose');

const Equipment = mongoose.model('Equipment');
const EquipmentRental = mongoose.model('EquipmentRental');

const create = async (req, res) => {
  const { equipment, quantity = 0 } = req.body;

  const item = await Equipment.findById(equipment);
  if (!item) {
    return res.status(404).json({ success: false, message: 'Equipment not found', result: null });
  }

  let status = 'rented';
  if (item.quantity < quantity) {
    status = 'external';
  } else {
    item.quantity -= quantity;
    await item.save();
  }

  const result = await EquipmentRental.create({
    ...req.body,
    status,
    createdBy: req.admin._id,
  });

  return res.status(200).json({ success: true, result, message: 'Rental created' });
};

module.exports = create;
