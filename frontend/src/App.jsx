import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import BuscarAbogado from "./pages/BuscarAbogado";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import SoyAbogado from "./pages/SoyAbogado";
import ResultadosBusqueda from "./pages/ResultadosBusqueda";
import PerfilProfesional from "./pages/PerfilProfesional";
import SolicitarConsulta from "./pages/SolicitarConsulta";
import TurnoConfirmado from "./pages/TurnoConfirmado";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<BuscarAbogado />} />
          <Route path="/resultados" element={<ResultadosBusqueda />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/soy-abogado" element={<SoyAbogado />} />
          <Route path="/perfil" element={<PerfilProfesional />} />
          <Route path="/solicitar-consulta" element={<SolicitarConsulta />} />
          <Route path="/turno-confirmado" element={<TurnoConfirmado />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;