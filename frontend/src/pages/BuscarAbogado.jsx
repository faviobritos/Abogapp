import { Link } from "react-router-dom";

function BuscarAbogado() {
  return (
    <div className="page">
      <h1>Buscar profesional</h1>

      <select>
        <option>Seleccionar materia</option>
        <option>Alimentos</option>
        <option>Divorcio</option>
        <option>Derecho de comunicación</option>
        <option>Cuidado personal</option>
        <option>Violencia familiar</option>
        <option>Sucesión</option>
        <option>Accidente de tránsito</option>
        <option>Despido laboral</option>
        <option>Contrato</option>
        <option>Otro</option>
      </select>

      <select>
        <option>Seleccionar ubicación</option>
        <option>Lomas de Zamora</option>
        <option>Lanús</option>
        <option>Avellaneda</option>
        <option>Quilmes</option>
      </select>

      <select>
        <option>Modalidad</option>
        <option>Virtual</option>
      </select>

      <Link to="/resultados">
  <button>BUSCAR PROFESIONAL</button>
</Link>
    </div>
  );
}

export default BuscarAbogado;