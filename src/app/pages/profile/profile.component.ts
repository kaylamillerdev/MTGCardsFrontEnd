import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(
   private userService: UserService,
  ) {}

  user:User;

  ngOnInit() {
    this.displayProfile();

    }

    displayProfile() {
      console.log("DisplayProfile was called!");
      this.userService.getCurrentUser().subscribe(user => {
        this.user = user;
    })
  }
}
