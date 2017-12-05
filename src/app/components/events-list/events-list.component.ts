import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Array<any>;

  constructor(private _eventService: EventService) {
    this._eventService.getAllEvents()
      .subscribe(res => this.events = res);
  }

  ngOnInit() {
  }

}