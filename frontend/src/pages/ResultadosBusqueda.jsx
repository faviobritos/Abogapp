import { Link } from "react-router-dom";

function ResultadosBusqueda() {
  return (
    <div className="page">
      <h1>Profesionales disponibles</h1>

      <div className="result-card">
        <h2>Dra. María Gómez</h2>
        <p>★★★★★ 4.9 · 127 opiniones</p>
        <p><strong>Derecho de Familia</strong></p>
        <p>Matrícula verificada · T° 120 F° 345</p>
        <p>Alimentos, divorcios y cuidado personal</p>
        <p>Responde dentro de las 24 hs.</p>

        <Link to="/perfil">
          <button>VER PERFIL</button>
        </Link>
      </div>

      <div className="result-card">
        <h2>Dr. Juan Pérez</h2>
        <p>★★★★☆ 4.6 · 89 opiniones</p>
        <p><strong>Derecho Laboral</strong></p>
        <p>Matrícula verificada · T° 98 F° 210</p>
        <p>Despidos, indemnizaciones y conflictos laborales</p>
        <p>Responde dentro de las 24 hs.</p>

        <Link to="/perfil">
          <button>VER PERFIL</button>
        </Link>
      </div>

      <div className="result-card">
        <h2>Dra. Lucía Fernández</h2>
        <p>★★★★★ 5.0 · 64 opiniones</p>
        <p><strong>Sucesiones</strong></p>
        <p>Matrícula verificada · T° 75 F° 188</p>
        <p>Declaratorias de herederos y planificación sucesoria</p>
        <p>Responde dentro de las 24 hs.</p>

        <Link to="/perfil">
          <button>VER PERFIL</button>
        </Link>
      </div>
    </div>
  );
}

export default ResultadosBusqueda;