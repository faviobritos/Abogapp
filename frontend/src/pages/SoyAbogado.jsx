function SoyAbogado() {
  return (
    <div>
      <h1>Soy Profesional</h1>

      <p>
        Unite a Abogapp y comenzá a recibir consultas de potenciales clientes.
      </p>

      <form>
        <div>
          <label>Nombre y Apellido</label>
          <br />
          <input type="text" />
        </div>

        <br />

        <div>
          <label>Correo Electrónico</label>
          <br />
          <input type="email" />
        </div>

        <br />

        <div>
          <label>Contraseña</label>
          <br />
          <input type="password" />
        </div>

        <br />

        <div>
          <label>Matrícula Profesional</label>
          <br />
          <input type="text" />
        </div>

        <br />

        <div>
          <label>Provincia</label>
          <br />
          <select>
            <option>Seleccionar provincia</option>
            <option>Buenos Aires</option>
            <option>CABA</option>
            <option>Córdoba</option>
            <option>Santa Fe</option>
            <option>Mendoza</option>
          </select>
        </div>

        <br />

        <div>
          <label>Materia principal</label>
          <br />
          <select>
            <option>Seleccionar materia</option>
            <option>Derecho de Familia</option>
            <option>Derecho Laboral</option>
            <option>Sucesiones</option>
            <option>Accidentes de Tránsito</option>
            <option>Derecho Civil</option>
            <option>Derecho Penal</option>
            <option>Derecho Comercial</option>
            <option>Derecho Previsional</option>
            <option>Derecho del Consumidor</option>
          </select>
        </div>

        <br />

        <button>CREAR PERFIL</button>
      </form>
    </div>
  );
}

export default SoyAbogado;