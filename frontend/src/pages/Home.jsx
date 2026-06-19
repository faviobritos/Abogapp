import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Abogapp</h1>
      <h2>Encontrá al profesional adecuado</h2>

      <div className="buttons">
        <Link to="/buscar">
          <button>BUSCAR PROFESIONAL</button>
        </Link>

        <Link to="/soy-abogado">
          <button>SOY PROFESIONAL</button>
        </Link>

        <Link to="/login">
          <button>INICIAR SESIÓN</button>
        </Link>

        <Link to="/registro">
          <button>REGISTRARME</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;