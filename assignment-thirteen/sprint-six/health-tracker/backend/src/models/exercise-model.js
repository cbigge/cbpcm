const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Exercise = new Schema(
    {
        name: { type: String, required: true },
        time: { type: String, required: true },
        intensity: { type: Number, required: true },
        username: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('exercises', Exercise)
