import { Link } from "react-router-dom";

function PerfilProfesional() {
  return (
    <div className="page">
      <h1>Dra. María Gómez</h1>

      <p>★★★★★ 4.9 · 127 opiniones</p>

      <p><strong>Derecho de Familia</strong></p>

      <p>Matrícula T° 120 F° 345</p>

      <p>
        Abogada especializada en alimentos, divorcios, cuidado personal y
        régimen de comunicación.
      </p>

      <p><strong>Atención:</strong> 100% virtual</p>

      <p><strong>Tiempo de respuesta:</strong> dentro de las 24 hs.</p>

      <h2>Opiniones</h2>

      <p>★★★★★ “Muy clara y rápida en responder.”</p>

      <p>★★★★★ “Me orientó muy bien en mi consulta.”</p>

      <Link to="/solicitar-consulta">
        <button>SOLICITAR CONSULTA</button>
      </Link>
    </div>
  );
}

export default PerfilProfesional;