const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
carsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    color: String,
    year: Number,
    price: {
        type:Number,
        default: 0,
        min: 0,   
    },
    img: {
        type: String
    }
})

const Car = mongoose.model('Car',carsSchema);

module.exports = Car;


