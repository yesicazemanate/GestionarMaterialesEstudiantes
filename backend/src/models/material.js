import mongoose, { Types } from "mongoose";

const materialShema = mongoose.Schema({
   titulo:{
      type: String,
      require: true
   }, descripcion:{
      type: String,
      require: true
   },
   url:{
      type: String,
      require: true
   } ,
   profesor:{
      type: String,
      require: true  
   }  
},{
   timesTamps: true
})
const Material = mongoose.model('material', materialShema)
export default Material