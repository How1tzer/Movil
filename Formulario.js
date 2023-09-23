import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleGuardar = () => {
    // Lógica para guardar los registros en la tabla
    // Puedes utilizar un estado adicional para almacenar los registros
  };

  const handleCancelar = () => {
    // Lógica para limpiar los datos del formulario
    setNombre('');
    setApellidoPaterno('');
    setApellidoMaterno('');
    setTelefono('');
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            pattern="[A-Za-z]+"
            required
          />
        </label>
        <br />
        <label>
          Apellido paterno:
          <input
            type="text"
            value={apellidoPaterno}
            onChange={(e) => setApellidoPaterno(e.target.value)}
            pattern="[A-Za-z]+"
            required
          />
        </label>
        <br />
        <label>
          Apellido materno:
          <input
            type="text"
            value={apellidoMaterno}
            onChange={(e) => setApellidoMaterno(e.target.value)}
            pattern="[A-Za-z]+"
            required
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            pattern="[0-9]+"
            required
          />
        </label>
        <br />
        <button type="button" onClick={handleGuardar}>
          Guardar
        </button>
        <button type="button" onClick={handleCancelar}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default Formulario;

