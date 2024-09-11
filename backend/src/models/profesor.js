import mongoose, { Types } from "mongoose";

const profesorShema = mongoose.Schema({
   nombre:{
      type: String,
      require: true
   }, numeroDocumento:{
      type: String,
      require: true
   },
   telefono:{
      type: String,
      require: true
   },
   materia:{
      type: String,
      require: true
   } ,
   correo:{
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
const Profesor = mongoose.model('profesor', profesorShema)
export default Profesor