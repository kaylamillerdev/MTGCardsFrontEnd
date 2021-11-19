import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { HttpErrorResponse} from "@angular/common/http";
import { AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import { NotificationService } from "src/app/services/notification.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = '';
  password = '';
  user: User;
  passwordsMatch: boolean = true;

  constructor(
    private userService: UserService,
    private AuthService: AuthenticationService,
    private NotifyService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(registerForm: NgForm){
    console.log(registerForm);
    console.log(registerForm.value);

    this.passwordsMatch = registerForm.value.passwordConfirm == registerForm.value.password;
    if(this.passwordsMatch){
      if(registerForm.status == "VALID"){
        this.userService.signUp(registerForm.value).subscribe(
          (user: User) => {
            this.user = user;
            this.router.navigateByUrl("/");
            console.log("Successfully created an account");
          }
        );
      } else {
        console.log("This form is invalid");
      }
    } else {
      console.log("passwords don't match");
    }
  }
}
