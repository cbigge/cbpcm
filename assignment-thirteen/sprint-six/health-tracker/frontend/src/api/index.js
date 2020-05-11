import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8081/api',
})

export const insertExercise = payload => api.post('/exercise/exercise', payload)
export const getAllExercises = () => api.get('/exercise/exercise')
export const insertNutrition = payload => api.post('/nutrition/nutrition', payload)
export const getAllNutrition = () => api.get('/nutrition/nutrition')

const apis = {
    insertExercise,
    getAllExercises,
    insertNutrition,
    getAllNutrition,
}

export default apis
