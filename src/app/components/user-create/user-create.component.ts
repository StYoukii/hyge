import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  providers: [UserService]
})
export class UserCreateComponent implements OnInit {

  model: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.model = new User;
  }

  // TODO ajouter les fonctions de vérification des champs
  onSubmit() {
    console.log('Demande ajout nouvel utilisateur');
    this.userService.createUser(this.model);
  }
}
