const Exercise = require('../models/exercise-model')

createExercise = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an exercise',
        })
    }

    const exercise = new Exercise(body)

    if (!exercise) {
        return res.status(400).json({ success: false, error: err })
    }

    exercise
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: exercise._id,
                message: 'Exercise created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Exercise not created!',
            })
        })
}

getExercises = async (req, res) => {
    await Exercise.find({}, (err, exercises) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!exercises.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Exercise not found' })
        }
        return res.status(200).json({ success: true, data: exercises })
    }).catch(err => console.log(err))
}

module.exports = {
    createExercise,
    getExercises,
}
