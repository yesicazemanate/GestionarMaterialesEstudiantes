import { verifyToken } from "../utils/jwtHandle,js";
export const checkJwt =(req, res, next)=>{
try{
   const jwtUser = req.headers.authorization || null
   if(!jwtUser){
      return res.status(401).json({message: 'no token provides'})
   }
   const jwt = jwtUser.split(' ')[1]
   console.log(jwt);
   const verify= verifyToken(jwt)
   if(!verify){
      return res.status(401).json({message:'no tienes inicio de sesión valido'})
   }else{
      console.log('token valid ', verify);
      next()
   }
}catch(error){
   console.error('Error in JWT middleware:', error); 
   res.status(500).json({ error: 'Server error', message: error.message });
}
}
