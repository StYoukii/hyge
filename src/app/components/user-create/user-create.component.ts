import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  model: User;

  constructor() { }

  ngOnInit() {
    this.model = new User;
  }

  // TODO
  onSubmit() {
    console.log('Nouvel utilisateur créé');
  }
}
