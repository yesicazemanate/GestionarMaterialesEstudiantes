import jwt from 'jsonwebtoken'
const SECRET= 'clavesecreta'
const generateToken = async(user)=>{
   const payload={
      id: user._id,
        correo: user.email
   }
  return  jwt.sign(payload, SECRET, { expiresIn: '1d' });
}

const verifyToken = async(token )=>{
   try{
      const verify =  jwt.verify(token, SECRET)
      return verify
   }catch(error){
      console.log('token verification failed', error);
      return null
   }
}
export {
   verifyToken,
   generateToken
}