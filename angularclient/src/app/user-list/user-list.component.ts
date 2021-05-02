import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  delete(user: User): void {
    this.userService.delete(user).subscribe(_ => {
      this.users.splice(this.users.indexOf(user));
    });
  }

  edit(user: User): void {
    this.router.navigate(['/edituser', user.id]);
  }
}
