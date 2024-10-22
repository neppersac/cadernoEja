const express = require('express');
const ShoppingList = require('../models/ShoppingList');

const router = express.Router();

// Criar uma nova lista de compras
router.post('/', async (req, res) => {
    const shoppingList = new ShoppingList(req.body);
    await shoppingList.save();
    res.status(201).send(shoppingList);
});

// Obter todas as listas de compras
router.get('/', async (req, res) => {
    const lists = await ShoppingList.find().populate('items.productId');
    res.send(lists);
});

// Alterar uma lista de compras existente
router.put('/:id', async (req, res) => {
    const shoppingList = await ShoppingList.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(shoppingList);
});

// Excluir uma lista de compras
router.delete('/:id', async (req, res) => {
    try {
        const shoppingList = await ShoppingList.findByIdAndDelete(req.params.id);
        
        if (!shoppingList) {
            return res.status(404).send({ error: 'Lista de compras não encontrada' });
        }

        res.status(200).send({ message: 'Lista de compras excluída com sucesso' });
    } catch (error) {
        res.status(500).send({ error: 'Erro ao excluir a lista de compras' });
    }
});

module.exports = router;
