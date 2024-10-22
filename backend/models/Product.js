const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    imageUrl: { type: String, required: true },
    unitPrice: { type: Number, required: true },
});

module.exports = mongoose.model('Product', ProductSchema);