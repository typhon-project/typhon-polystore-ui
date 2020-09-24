import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Database, DatabaseType } from '../database';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css']
})
export class DatabasesComponent implements OnInit {

  databases: Database[] = [];
  
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadDatabases();
  }

  loadDatabases() {
    this.api.getDatabases().subscribe(dbs => this.databases = dbs);
  }

  getImage(db: Database): String {
    switch (db.dbType) {
      case DatabaseType.MariaDb:
        return "../../assets/images/mariadb.png";
      case DatabaseType.MongoDb:
          return "../../assets/images/mongodb.jpg";
      case DatabaseType.neo4j:
          return "../../assets/images/neo4j.png";
      case DatabaseType.MysqlDb:
          return "../../assets/images/mysqldb.jpg";
    }
  }

  backup(db: Database) {
    this.api.backupDatabase(db, db.name + "_bak");
  }
}
