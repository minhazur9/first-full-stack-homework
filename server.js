// Configuration
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const port = 4000;

// View Engine
app.set('view engine', 'ejs');

// Controllers
const carsCtrl = require('./controllers/carsController');

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/cars',carsCtrl);


// Listen
app.listen(port,(req,res) => {
    console.log(`Listening to port ${port}`);
})

