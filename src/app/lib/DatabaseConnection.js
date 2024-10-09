// lib/DatabaseConnection.js

// Esta clase implementa el patrón Singleton para asegurar que solo exista
// una instancia de DatabaseConnection por cada tipo de conexión.
class DatabaseConnection {
  constructor(connectionString) {
    // Verificamos si ya existe una instancia, si es así, la retornamos para
    // evitar crear una nueva.
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    
    // Si no existe, guardamos la nueva conexión y la asignamos a la variable estática.
    this.connectionString = connectionString;
    this.status = `Connected to ${connectionString}`;
    
    // Almacenamos la instancia para futuras solicitudes.
    DatabaseConnection.instance = this;
  }

  // Método para obtener el estado de la conexión.
  getStatus() {
    return this.status;
  }
}

// Exportamos la clase para que pueda ser utilizada en otros archivos.
export default DatabaseConnection;
