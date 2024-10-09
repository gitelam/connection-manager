"use client";
import { useState } from "react";
import DatabaseFactory from "./lib/DatabaseFactory";

export default function Home() {
  const [connection, setConnection] = useState(null);
  const [type, setType] = useState("MySQL");

  const handleConnect = () => {
    const factory = new DatabaseFactory();
    const newConnection = factory.createConnection(type);
    setConnection(newConnection);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gestión de Conexiones a Bases de Datos</h1>

      <label htmlFor="dbType">Selecciona tipo de base de datos:</label>
      <select
        id="dbType"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="MySQL">MySQL</option>
        <option value="PostgreSQL">PostgreSQL</option>
        <option value="MongoDB">MongoDB</option>
      </select>

      <button
        onClick={() => {
          handleConnect();
        }}
        style={{ marginLeft: "10px" }}
      >
        Conectar
      </button>

      {connection && (
        <div style={{ marginTop: "20px" }}>
          <h2>Estado de la conexión:</h2>
          <p>
            {connection.getStatus().split("SQL")[0]} {type}
          </p>
        </div>
      )}
    </div>
  );
}
