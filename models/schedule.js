const mongoose = require('mongoose')

const ScheduleSchema = new mongoose.Schema ({
    date: String,
    photo: String,
    info: String
})

module.exports = mongoose.model('Schedule', ScheduleSchema)