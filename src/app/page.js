

"use client";
// pages/index.js

// Importamos el hook useState de React y la clase DatabaseFactory.
import { useState } from 'react';
import DatabaseFactory from '../lib/DatabaseFactory';

export default function Home() {
  // Estado para almacenar la conexión y el tipo de base de datos seleccionado.
  const [connection, setConnection] = useState(null);
  const [type, setType] = useState('MySQL'); // Valor predeterminado es MySQL.

  // Función que maneja el clic del botón "Conectar".
  const handleConnect = () => {
    const factory = new DatabaseFactory(); // Creamos una instancia de DatabaseFactory.
    const newConnection = factory.createConnection(type); // Creamos una nueva conexión usando el tipo seleccionado.
    setConnection(newConnection); // Guardamos la conexión en el estado.
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestión de Conexiones a Bases de Datos</h1>

      {/* Dropdown para seleccionar el tipo de base de datos */}
      <label htmlFor="dbType">Selecciona tipo de base de datos:</label>
      <select
        id="dbType"
        value={type} // El valor actual del dropdown es el estado 'type'.
        onChange={(e) => setType(e.target.value)} // Actualizamos el tipo cuando cambia el dropdown.
      >
        <option value="MySQL">MySQL</option>
        <option value="PostgreSQL">PostgreSQL</option>
        <option value="MongoDB">MongoDB</option>
      </select>

      {/* Botón para conectar a la base de datos */}
      <button onClick={handleConnect} style={{ marginLeft: '10px' }}>
        Conectar
      </button>

      {/* Si hay una conexión, mostramos su estado */}
      {connection && (
        <div style={{ marginTop: '20px' }}>
          <h2>Estado de la conexión:</h2>
          <p>{connection.getStatus()}</p> {/* Mostramos el estado de la conexión */}
        </div>
      )}
    </div>
  );
}

