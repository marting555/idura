const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');
const create = require('./create');

const methods = createCRUDController('EquipmentRental');
methods.create = create;

module.exports = methods;
