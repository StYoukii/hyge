import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  result: any;

  constructor(private _http: HttpClient) { }

  // Create a new user
  createUser(user) {
    console.log('Entrée dans méthode createUser du service');
    console.log('\tUser à ajouter :' + JSON.stringify(user));
    this._http.post('http://localhost:8000/api/users', user).subscribe();
  }
}
