export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Connecting: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Returning with singleton.');
      return Database.database;
    }
    console.log('Creating new instance.');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}
