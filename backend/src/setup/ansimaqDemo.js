require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');

const password = process.env.DB_PASSWORD || '<db_password>';
const uri = `mongodb+srv://jmartinezv:${password}@cluster0.egnqitp.mongodb.net/ansimaq_erp`;

const productSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
});
const Product = mongoose.model('Product', productSchema);

async function init() {
  try {
    await mongoose.connect(uri);
    await Product.create([
      { name: 'Producto 1', quantity: 10, price: 100 },
      { name: 'Producto 2', quantity: 20, price: 200 },
      { name: 'Producto 3', quantity: 5, price: 50 },
    ]);
    console.log('Datos de prueba insertados');
  } catch (err) {
    console.error('Error al insertar datos:', err.message);
  } finally {
    await mongoose.disconnect();
  }
}

init();
