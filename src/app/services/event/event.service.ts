import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
  result: any;

  constructor(private _http: Http) { }

  // Get event by id
  getEventById(id) {

  }

  // Get event by city
  getEventByCity(city) {

  }

  // Get the list of all events
  getAllEvents() {
    return this._http.get('/events')
      .map(result => this.result = result.json().data);
  }
}
