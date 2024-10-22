const mongoose = require('mongoose');

const ShoppingListSchema = new mongoose.Schema({
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
    }],
    purchaseDate: { type: Date, default: Date.now } // Adicionando o campo de data da compra
});

module.exports = mongoose.model('ShoppingList', ShoppingListSchema);