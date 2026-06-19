import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import BuscarAbogado from "./pages/BuscarAbogado";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import SoyAbogado from "./pages/SoyAbogado";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<BuscarAbogado />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/soy-abogado" element={<SoyAbogado />} />
        </Routes>

        <div className="buttons">
          <Link to="/buscar"><button>BUSCAR ABOGADO</button></Link>
          <Link to="/soy-abogado"><button>SOY ABOGADO/A</button></Link>
          <Link to="/login"><button>INICIAR SESIÓN</button></Link>
          <Link to="/registro"><button>REGISTRARME</button></Link>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;