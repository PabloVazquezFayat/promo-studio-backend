const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    marketingMessage: {type: String, unique: true},
    productID: {type: String, unique: true},
    shipCode: {type: String, unique: true},
    sailingDate: {type: String, unique: true},
    stamp: {type: String, unique: true}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;