import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) {

  }

  // Get the list of all events
  getEvents() {
    return this._http.get('/events')
      .map(result => this.result = result.json().data);
  }

  // Get the list of all users
  getUsers() {
    return this._http.get('/users')
      .map(result => this.result = result.json().data);
  }

}
