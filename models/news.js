const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema ({
    topic: String,
    body: String,
    photo: String
})

module.exports = mongoose.model('News', NewsSchema)