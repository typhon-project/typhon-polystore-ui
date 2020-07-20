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
  public batchQuery: string = '';
  public result: string = '';

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  runInsert() {
    this.api.runInsertQuery(this.insertQuery)
      .subscribe(response => this.result = response.response);
  }

  runUpdate() {
    this.api.runUpdateQuery(this.updateQuery)
      .subscribe(response => this.result = response.response);
  }

  runBatch() {
    this.api.runBatchQuery(this.batchQuery)
      .subscribe(response => this.result = response.response);
  }
}
