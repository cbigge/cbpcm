const express = require('express')

const ExerciseCtrl = require('../controllers/exercise-ctrl')

const router = express.Router()

router.post('/exercise', ExerciseCtrl.createExercise)
router.get('/exercises', ExerciseCtrl.getExercises)

module.exports = router
