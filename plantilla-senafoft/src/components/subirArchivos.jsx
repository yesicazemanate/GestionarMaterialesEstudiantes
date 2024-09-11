import React, { useState } from 'react'
import axios from 'axios'
import { Input , Button} from '@material-tailwind/react'

export const SubirArchivos = () => {
   const [titulo, setTitulo]=useState()
   const [descripcion, setDescripcion]=useState()
   const [file, setUrl]=useState()

const handleSubmit=async(e)=>{
   e.preventDefault()
   const formData = new FormData()
   formData.append('titulo', titulo); 
formData.append('descripcion', descripcion); 
formData.append('material', file)
try{
const response = await axios.post('http://localhost:3000/materiales',formData,{
   headers: {
      'Content-Type': 'multipart/form-data', 
    },
})
console.log(response);
}catch(error){
   console.log('error ', error);
}
}

  return (
  <div className='w -full h-screen flex justify-center items-center'>
   <form className=' flex flex-col ' onSubmit={(e)=>handleSubmit(e)}>
    <div className="w-72 m-4">
      <Input label="Titulo" type='text' value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
    </div>
    <div className="w-72 m-4">
      <Input label="Decripción" type='text'  value={descripcion} onChange={(e)=>setDescripcion(e.target.value)}/>
    </div>
    <div className="w-72 m-4">
      <Input label="Material" type='file'   onChange={(e)=>setUrl(e.target.files[0])}/>
    </div>
<Button type='submit'>Subir</Button>
    </form>
  </div>
  )
}
