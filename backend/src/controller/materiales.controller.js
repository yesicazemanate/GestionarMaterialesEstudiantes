import Material from "../models/material.js";

export const createMaterial = async(req, res)=>{
   const {titulo, descripcion, profesor}=req.body
   if (!req.file){
      return res.status(400).json({error:'no se ha subido ningun archivo'})
   }
   const material= new Material({
      titulo,
      descripcion,
      url:req.file.filename,
      profesor,
      
   })
   try{
      const materialCreate = await Material.create(material)
      res.send(materialCreate)
   }catch(error){
      console.log('error ', error);
   }
}
export const obtenerMaterila = async(req, res)=>{
   try{
      const material = await Material.find({})
      console.log(material);
      res.send(material)

   }catch(error){
console.log('error al obtener los materiales ', error);
   }
}