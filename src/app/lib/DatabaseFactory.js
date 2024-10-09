
// lib/DatabaseFactory.js

// Importamos la clase DatabaseConnection, que contiene la lógica Singleton.
import DatabaseConnection from './DatabaseConnection';

// Esta clase implementa el patrón Factory Method, que crea conexiones
// a diferentes tipos de bases de datos según lo solicitado.
class DatabaseFactory {
  createConnection(type) {
    // Utilizamos un switch para seleccionar el tipo de base de datos.
    switch (type) {
      case 'MySQL':
        // Creamos una nueva conexión para MySQL.
        return new DatabaseConnection('MySQL://localhost:3306');
      case 'PostgreSQL':
        // Creamos una nueva conexión para PostgreSQL.
        return new DatabaseConnection('PostgreSQL://localhost:5432');
      case 'MongoDB':
        // Creamos una nueva conexión para MongoDB.
        return new DatabaseConnection('MongoDB://localhost:27017');
      default:
        // En caso de no soportar el tipo de base de datos, arrojamos un error.
        throw new Error('Unsupported database type');
    }
  }
}

// Exportamos la clase para que pueda ser usada en la aplicación.
export default DatabaseFactory;
