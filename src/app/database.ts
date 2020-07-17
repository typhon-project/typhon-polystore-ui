export class Database {
    name: string;
    dbType: DatabaseType;
}

export enum DatabaseType {
	MongoDb = "MongoDb",
	MariaDb = "MariaDb"
}