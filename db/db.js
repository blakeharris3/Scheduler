const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/scheduler', {useNewUrlParser: true})
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/schedule', {useNewUrlParser: true})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
    console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconncted', () => {
    console.log('Mongoose is disconnected')
});