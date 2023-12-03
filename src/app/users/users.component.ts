import { Component } from '@angular/core';
import { User } from '../core/models/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  listUsers: User[] = [
    {
      id: 1,
      username: 'nader',
      email: 'nader@gmail.com',
      password: 'test',
    },
    {
      id: 2,
      username: 'flen',
      email: 'flen@gmail.com',
      password: 'flen',
    },
  ];

  deleteUser(user: User) {
    let index = this.listUsers.indexOf(user);
    if (index !== -1) {
      this.listUsers.splice(index, 1);
    }
  }
}
