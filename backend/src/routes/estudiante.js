import express from 'express'
import { register, login } from '../controller/estudiante.js'
const route = express.Router()
route.post('/loginEstudiante', login)
route.post('/registerEstudiante', register)
export default route