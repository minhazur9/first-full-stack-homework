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

// Create Cars
router.post('/', (req, res) => {
    db.Car.create(req.body, (err, createdCar) => {
        if (err) return console.log(err);
        res.redirect(`/cars/${createdCar._id}`);
    })
})

//Show Cars
router.get('/:carId', (req, res) => {
    db.Car.findById(req.params.carId, (err, foundCar) => {
        if (err) return console.log(err);
        res.render('cars/showCar', {
            car: foundCar
        })
    });
});

// Delete Cars
router.delete('/:carId', (req, res) => {
    db.Car.findByIdAndDelete(req.params.carId, (err, deletedCar) => {
        if (err) return console.log(err);
        res.redirect('/cars');
    })
})

// Edit Route
router.get('/:carId/edit', (req, res) => {
    db.Car.findById(req.params.carId, (err, foundCar) => {
        res.render('cars/editCar', {
            car: foundCar,
        });
    })
});

// Update Cars
router.put('/:carId', (req, res) => {
    db.Car.findByIdAndUpdate(
        req.params.carId,
        req.body,
        { new: true },
        (err, foundCar) => {
            if (err) return console.log(err);
            res.redirect(`/cars/${foundCar._id}`)
        })
})

module.exports = router;