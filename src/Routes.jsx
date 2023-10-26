// src/Routes.jsx

import Home from "./pages/Home";
import Sobre from "./pages/A Moppe/Sobre";
import EstruturaEscolar from "./pages/A Moppe/Estrutura Escolar";
import Metodologias from "./pages/A Moppe/Metodologias";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/estruturaescolar" element={<EstruturaEscolar/>}/>
                <Route path="/metodologias" element={<Metodologias/>}/>
            </Routes>
        </BrowserRouter>
    )
}