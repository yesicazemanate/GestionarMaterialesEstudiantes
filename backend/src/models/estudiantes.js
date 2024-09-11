import mongoose, { Types } from "mongoose";

const estudianteShema = mongoose.Schema({
   nombre:{
      type: String,
      require: false
   }, numeroDocumento:{
      type: String,
      require: false
   },
   telefono:{
      type: String,
      require: false
   },
   grado:{
      type: String,
      require: false
   },
   acudiente:{
      type: String,
      require: false
   },correo:{
      type: String,
      require: true
   } ,
   password:{
      type: String,
      require: true
   }
},{
   timesTamps: true
})
const Estudiante = mongoose.model('estudiante', estudianteShema)
export default Estudiante