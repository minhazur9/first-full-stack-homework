// Router
const express = require('express');
const router = express.Router();

// Database
const db = require('../models')


router.get('/',(req,res) => {
    res.render('cars/indexCar');
})

module.exports = router;