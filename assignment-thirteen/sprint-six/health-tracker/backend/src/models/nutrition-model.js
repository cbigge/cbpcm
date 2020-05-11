const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Nutrition = new Schema(
    {
        day: { type: String, required: true },
        calories: { type: Number, required: true },
        carbs: { type: Number, required: true },
        protein: { type: Number, required: true },
        fat: { type: Number, required: true },
        username: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('nutritions', Nutrition)
