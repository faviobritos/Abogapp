import { Link } from "react-router-dom";

export default function SolicitarConsulta() {
  return (
    <div className="page">
      <h1>Solicitar consulta</h1>

      <p><strong>Profesional:</strong> Dra. María Gómez</p>
      <p><strong>Modalidad:</strong> Videollamada</p>
      <p><strong>Valor:</strong> 1 IUS judicial aprox. $49.750</p>

      <div className="form-box">
        <label>Día disponible</label>
        <select>
          <option>Seleccionar día</option>
          <option>Lunes 24/06</option>
          <option>Martes 25/06</option>
          <option>Miércoles 26/06</option>
        </select>

        <label>Horario disponible</label>
        <select>
          <option>Seleccionar horario</option>
          <option>10:00 hs</option>
          <option>12:00 hs</option>
          <option>16:00 hs</option>
        </select>

        <label>Breve descripción de la consulta</label>
        <textarea placeholder="Contá brevemente el motivo de tu consulta"></textarea>

        <Link to="/turno-confirmado">
          <button>PAGAR CON MERCADO PAGO</button>
        </Link>
      </div>
    </div>
  );
}