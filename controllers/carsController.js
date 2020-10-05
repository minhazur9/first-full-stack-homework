// Router
const express = require('express');
const router = express.Router();

// Database
const db = require('../models');


router.get('/',(req,res) => {
    db.Car.find({},(err,allCars) => {
        if(err) return console.log(err);
        res.render('cars/indexCar', {
            cars: allCars,
        })
    })
})

module.exports = router;