import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UserService {
  result: any;

  constructor(private _http: Http) { }

  // Create a new user
  createUser(userLogin) {

  }
}
