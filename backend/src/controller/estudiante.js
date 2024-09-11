
import Estudiante from "../models/estudiantes.js";
import { encriptacionContraseña } from "../utils/bcryp.js";
import { comparaciónContraseña } from "../utils/bcryp.js";
import { generateToken } from "../utils/jwtHandle.js";
export const register =async(req, res)=>{
   const {nombre,numeroDocumento, telefono,grado, acudiente, correo, password}= req.body
   console.log(password);
   const passwordHash= await encriptacionContraseña(password)
      const estudiante= new Estudiante({
    nombre, 
    numeroDocumento,
    telefono,
    grado,
    acudiente,
    correo,
    password:passwordHash
      
   })
   try{
      const estudianteCreate = await Estudiante.create(estudiante)
      res.send(estudianteCreate)
   }catch(error){
      console.log('error ', error);
   }
}
export const login = async(req, res)=>{
const {correo, password}= req.body
try{
const checkIs = await Estudiante.findOne({correo})
if(!checkIs){
   return res.status(401).json({ message: 'Usuario y/o contraseña incorrectos' });
}

const passHas = checkIs.password
const isCorrect= await comparaciónContraseña(password, passHas)
if(!isCorrect){
    return res.status(401).json({ message: 'Usuario y/o contraseña incorrectos' });
}
const token = generateToken(checkIs._id)
return res.json({token: token, data:checkIs})
}catch(error){
   console.log('error ', error);
   res.status(500).json({ message: 'Error del servidor', error: error.message });
}
}
