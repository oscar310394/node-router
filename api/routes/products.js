const express = require('express');
const router = express.Router();
const db = require('./database');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET request to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }

    let sql = 'INSERT INTO products SET ?';
    let query = db.query(sql, product, (err, result) => {
        if (err) throw err;
        console.log(result);
    })

    res.status(201).json({
        message: 'Success'
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special Id',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed and Id'
        });
    }
});

router.put('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product'
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product'
    });
});

module.exports = router;