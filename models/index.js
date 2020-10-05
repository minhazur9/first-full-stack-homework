// Configuration
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/cars';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Connections
mongoose.connection.on('connected',() => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error',() => {
    console.log('Connection Failed');
});