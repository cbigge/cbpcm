const Nutrition = require('../models/nutrition-model')

createNutrition = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an nutrition',
        })
    }

    const nutrition = new Nutrition(body)

    if (!nutrition) {
        return res.status(400).json({ success: false, error: err })
    }

    nutrition
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: nutrition._id,
                message: 'Nutrition created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Nutrition not created!',
            })
        })
}

getNutritions = async (req, res) => {
    await Nutrition.find({}, (err, nutritions) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!nutritions.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Nutrition not found' })
        }
        return res.status(200).json({ success: true, data: nutritions })
    }).catch(err => console.log(err))
}

module.exports = {
    createNutrition,
    getNutritions,
}
