import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { NotificationService} from "../../services/notification.service";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private notifyService: NotificationService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }
  username = "";
  password = "";
  user: User;

  login(loginForm: NgForm) {
    console.log(loginForm);
    console.log(loginForm.value);
    if(loginForm.status == "VALID") {
      this.userService.login(loginForm.value).subscribe(
        (user: User) => {
          this.user = user;
          console.log("You have logged in!");
          this.router.navigateByUrl("/profile/" + this.user.username)
        }
      )
    }
  }
}
