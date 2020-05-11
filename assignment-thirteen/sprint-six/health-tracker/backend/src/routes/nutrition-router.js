const express = require('express')

const NutritionCtrl = require('../controllers/nutrition-ctrl')

const router = express.Router()

router.post('/nutrition', NutritionCtrl.createNutrition)
router.get('/nutritions', NutritionCtrl.getNutritions)

module.exports = router
