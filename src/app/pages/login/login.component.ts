import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { users } from "src/app/models/users";
import { UserService} from "../../services/user.service";
import { Router } from "@angular/router";
import { HttpErrorResponse} from "@angular/common/http";
import { NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private notifyService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  Username = "";
  Password = "";
  user: users;

  login(loginForm: NgForm) {
    console.log("Found the login form");
    if (loginForm.status == "VALID") {
      console.log(loginForm.value);
      this.userService.login(loginForm.value).subscribe(
        (user: users) => {
          this.user = user;
          console.log("You have logged in");
          this.router.navigateByUrl("/profile");
          this.notifyService.newNotification({
            body: "You have logged in!",
          })
        })
    }
    (error: HttpErrorResponse) => {
      console.log("problem logging in");
      console.log(error);
      this.notifyService.newNotification({
        body: "incorrect username or password",
      });
    }
  };
}
