import { Component, OnInit } from '@angular/core';
import { users } from "src/app/models/users";
import { NgForm } from "@angular/forms";
import {UserService } from "src/app/services/user.service";
import {Router} from "@angular/router";
import { NotificationService } from "src/app/services/notification.service";
import { HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Password = '';
  user: users;
  passwordsMatch: boolean = true;

  signUp(signUpForm: NgForm) {
    console.log(signUpForm);
    console.log(signUpForm.value);

    this.passwordsMatch = signUpForm.value.PasswordConfirm == signUpForm.value.Password;
    console.log(signUpForm.value);
    if(this.passwordsMatch){
      if (signUpForm.status == "VALID") {
        console.log("after valid check: " + signUpForm.value)
        this.userService.signUp(signUpForm.value).subscribe(
          (user: users) => {
            this.user = user;
            this.router.navigateByUrl("/login");
            console.log("successfully signed up!");
            this.notifyService.newNotification({
              body: "You have successfully Signed Up!",
            });
          },
        (error: HttpErrorResponse) => {
          console.log("Problem signing up.");
          console.log(error);
          this.notifyService.newNotification({
            body: "An account with this email already exists",
          });
        }
        );
      } else {
        console.log("form is invalid");
        this.notifyService.newNotification({
          body: "Form is invalid. Complete all fields as required.",
        });
      }
    } else {
      console.log("passwords dont match");
      this.notifyService.newNotification({
        body: "Passwords do not match",
      });
    }
  }

  constructor(
    private userService: UserService,
    private notifyService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
