import bcrypt from 'bcrypt'

const encriptacionContraseña = async (password)=>{
const salt = await bcrypt.genSalt( 10)
const passEncry = await bcrypt.hash(password, salt)
return passEncry
}
const comparaciónContraseña = async(contraseñaEntrante, Password)=>{
   return await bcrypt.compare(contraseñaEntrante, Password);
}
export {
   encriptacionContraseña, 
   comparaciónContraseña
}