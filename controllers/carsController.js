// Router
const express = require('express');
const router = express.Router();

// Database
const db = require('../models');

// Index Route
router.get('/', (req, res) => {
    db.Car.find({}, (err, allCars) => {
        if (err) return console.log(err);
        res.render('cars/indexCar', {
            cars: allCars,
        })
    })
});

// New Route
router.get('/new', (req, res) => {
    res.render('cars/newCar')
});

module.exports = router;