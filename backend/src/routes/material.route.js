import express from 'express'
import { createMaterial , obtenerMaterila} from '../controller/materiales.controller.js'
import uploadMaterial from '../libs/materialArchivo.js'
const app = express.Router()

app.post('/',uploadMaterial.single('material'),createMaterial )
app.get('/', obtenerMaterila)

export default app