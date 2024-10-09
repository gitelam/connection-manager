// lib/DatabaseFactory.js
import DatabaseConnection from "./DatabaseConnection";

class DatabaseFactory {
  createConnection(type) {
    switch (type) {
      case "MySQL":
        return new DatabaseConnection("MySQL://localhost:3306");
      case "PostgreSQL":
        return new DatabaseConnection("PostgreSQL://localhost:5432");
      case "MongoDB":
        return new DatabaseConnection("MongoDB://localhost:27017");
      default:
        throw new Error("Unsupported database type");
    }
  }
}

export default DatabaseFactory;
