import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  public insertQuery: string = '';
  public updateQuery: string = '';
  public result: string = '';

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  runInsert() {
    this.api.runInsertQuery(this.insertQuery)
    .subscribe(response => {
      console.log('runInsertQuery');
      console.log(response);
      this.result = JSON.stringify(response);
    });
  }

  runUpdate() {
    this.api.runUpdateQuery(this.updateQuery)
    .subscribe(response => {
      console.log('runUpdateQuery');
      console.log(response);
      this.result = JSON.stringify(response);
    });
  }
  
  resetDB() {
    return this.api.resetDB()
    .subscribe(response => {
      console.log('resetDB');
      console.log(response);
      this.result = 'Body: ' + response.body + ' Status: ' + response.status;
    });
  }
}
