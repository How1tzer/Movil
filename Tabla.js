import React from 'react';

function Tabla({ usuarios, handleBorrar }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido paterno</th>
          <th>Apellido materno</th>
          <th>Teléfono</th>
          <th>Opción</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellidoPaterno}</td>
            <td>{usuario.apellidoMaterno}</td>
            <td>{usuario.telefono}</td>
            <td>
              {/* Lógica para borrar el elemento */}
              {/* Puedes utilizar una función handleBorrar pasada como prop */}
              {/* Ejemplo: */}
              {/* <button onClick={() => handleBorrar(usuario.id)}>Borrar</button> */}
              Borrar
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
