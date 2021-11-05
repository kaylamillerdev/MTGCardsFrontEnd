import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { users } from '../../models/users';
import { cardsOwned } from 'src/app/models/cardsOwned';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(
   private userService: UserService,
  ) {}

  user:users;

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