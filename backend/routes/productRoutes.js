const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Criar um novo produto
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
});

// Obter todos os produtos
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

// Alterar um produto existente
router.put('/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(product);
});

// Excluir um produto
router.delete('/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;