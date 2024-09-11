import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Charts from "../pages/Charts";
import Home from "../pages/Home";
import Users from "../pages/Users";
import { Profesor } from "../pages/profesor";
import { Estudiante } from "../pages/estudiante";
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/usuarios" element={<Users/>} />
            <Route path="/estadisticas" element={<Charts/>} />
            <Route path="/profesor" element={<Profesor/>}/>
            <Route path="/estudiante" element={<Estudiante/>}/>
        </Routes>
    );
}

export default AllRoutes;
