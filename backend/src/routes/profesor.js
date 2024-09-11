import express from 'express'
import { register, login } from '../controller/profesor.js'
const route = express.Router()
route.post('/loginProfesor', register)
route.post('/registerProfesor', login)
export default route