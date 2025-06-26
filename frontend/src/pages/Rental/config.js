export const fields = {
  equipment: {
    type: 'select',
    entity: 'equipment',
    displayLabels: ['name'],
    searchFields: 'name',
    outputValue: '_id',
  },
  quantity: { type: 'number', required: true },
  provider: { type: 'string' },
  status: { type: 'string', disableForUpdate: false },
  returnDate: { type: 'date' },
};
