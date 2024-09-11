import multer from 'multer'

const storage = multer.diskStorage({
   destination: 'material',
   filename:(req, file , cb)=>{
      cb(null, file.originalname)
   }
})
const uploadMaterial =multer({storage})

export default uploadMaterial