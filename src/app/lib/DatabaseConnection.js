// lib/DatabaseConnection.js
class DatabaseConnection {
  constructor(connectionString) {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    this.connectionString = connectionString;
    this.status = `Connected to ${connectionString}`;
    DatabaseConnection.instance = this;
  }

  getStatus() {
    return this.status;
  }
}

export default DatabaseConnection;
