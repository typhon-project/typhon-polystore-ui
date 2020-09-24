export class Database {
    name: string;
    dbType: DatabaseType;
}

export enum DatabaseType {
	MongoDb = "MongoDb",
    MariaDb = "MariaDb",
    MysqlDb = "MysqlDb",
    neo4j = "neo4j"
}