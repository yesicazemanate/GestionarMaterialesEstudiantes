import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from '../backend/src/config/db.js'
import route from '../backend/src/routes/index.js'
import path, { dirname } from 'path'
import url, { fileURLToPath } from 'url'
dotenv.config()
const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const corsOPtion={
   origin:['localhost:5173'],
   methods:['GET', 'POST','DELETE', 'PATCH','PUT'],
   credentiald:true
}
app.use(express.json())
app.use(cors(corsOPtion))
db()
app.use('/material',express.static(path.join(__dirname, '/material')))
app.use('/', route)
const PORT= process.env.PORT || 3000
app.listen(PORT, ()=>{
   console.log('server working port ' + PORT);
})