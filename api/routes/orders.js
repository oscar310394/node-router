const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched.'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Order was created.',
        order: order
    });
});

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Order details.'
    });
});

router.put('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Updated order'
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted order'
    });
});

module.exports = router;