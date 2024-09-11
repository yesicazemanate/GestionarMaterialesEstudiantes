import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
const FormRegister = () => {

  const [nombre , setNombre]=useState()
  const [numeroDocumento, setNumeroDocumento]= useState()
  const [telefono , setTelefono]=useState()
  const [grado , setGrado]=useState()
  const [acudiente , setAcudiente]=useState()
  const [correo, setCorreo]= useState()
  const[password, setPassword]= useState('')

  const handleSubmit=async()=>{
    const formData = {
      nombre,
      numeroDocumento,
      telefono,
      correo,
      password
  }
  const response = await axios.post('http://localhost:3000/estudiante/registerEstudiante',formData)
  console.log(response);
  }
  return (
    <Card color="white" shadow={false} className="p-10 min-w-0">
      <Typography variant="h4" color="blue-gray">
        ¡Registro!
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        ¡Encantado de conocerlo! Ingresa tus datos para registrarte.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={(e)=>{
e.preventDefault()
        handleSubmit()
      }

        }>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tu nombre
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
          />
           <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tu Número de documento
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            value={numeroDocumento}
            onChange={(e)=>setNumeroDocumento(e.target.value)}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tu Número de telefono
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            value={telefono}
            onChange={(e)=>setTelefono(e.target.value)}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           
           
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tu correo
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={correo}
            onChange={(e)=>setCorreo(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Contraseña
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Acepto los
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;terminos y condiciones
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth type="submit">
          Registrarse
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          ¿Ya tienes una cuenta?{" "}
          <a href="#" className="font-medium text-gray-900">
            <Link to={"/login"}>Iniciar sesión</Link>
          </a>
        </Typography>
      </form>
    </Card>
  );
};

export default FormRegister;
