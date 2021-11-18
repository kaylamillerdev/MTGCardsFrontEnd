import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router) { }

  user: User;
  ngOnInit() {
    this.userService.getCurrentUser().subscribe((u) => (this.user = u));
    this.userService.refreshUser();
  }
  logout(){
    this.userService.logout();
    this.router.navigate(['/home']);
  }

}
