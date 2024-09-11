import express from 'express'
import routeMaterial from './material.route.js'
import routeProfesor from './profesor.js'
import routeestudiante from './estudiante.js'
import path from 'path'
const route = express.Router()

route.use(express.urlencoded({extended:false}))
const __dirname = path.dirname(new URL(import.meta.url).pathname);
route.use('/materiales', express.static(path.join(__dirname, 'material')), routeMaterial)
route.use('/estudiante', routeestudiante)
route.use('/profsor', routeProfesor)
export default route