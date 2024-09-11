import mongoose from 'mongoose'

const connectDB = async ()=>{
   try{
const url ='mongodb+srv://yemaze123yz:ezukqzAXf56Dly1G@cluster0.8lc2v.mongodb.net/materialEstudiante'
await mongoose.connect(url)
console.log('conección exitosa a la base datos');
   }catch(error){
      console.log('error al conectarse a la base de datos ', error);
      process.exit(1)
   }
}
export default connectDB