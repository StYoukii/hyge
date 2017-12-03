import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: Array<any>;

  constructor(private _dataService: DataService) {
    this._dataService.getEvents()
      .subscribe(res => this.events = res);
  }

  title = 'Hyge';
}
