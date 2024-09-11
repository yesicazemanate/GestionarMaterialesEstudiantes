import React, { useEffect } from 'react'
import axios from 'axios'
import {
   Card,
   CardHeader,
   CardBody,
   CardFooter,
   Typography,
   Button,
 } from "@material-tailwind/react";
import { useState } from 'react';
export const VerArchivo = () => {
   const [data, setData]= useState([])
useEffect(()=>{
   const obtenerArchivos = async()=>{
      const response =await axios.get('http://localhost:3000/materiales')
      setData(response.data)
console.log(response.data);
   }
   obtenerArchivos()
},[])

  return (
   <>
{data && data.map((doc)=>(
   <>
      <Card className="mt-6 w-96 flex justify-center items-center">
      <CardHeader color="blue-gray" className="relative h-56">
    
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        {doc.titulo}
        </Typography>
        <Typography>
        {doc.descripcion}
        </Typography>
      </CardBody>
      <a href={`http://localhost:3000/material/${doc.url}`} target="_blank" rel="noopener noreferrer">
           <Button>Descargar</Button>
         </a>
    </Card>
    </>
   ))
}
</>
   
  )
}
