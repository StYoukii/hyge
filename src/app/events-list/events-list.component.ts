import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Array<any>;

  constructor(private _dataService: DataService) {
    this._dataService.getEvents()
      .subscribe(res => this.events = res);
  }

  ngOnInit() {
  }

}
