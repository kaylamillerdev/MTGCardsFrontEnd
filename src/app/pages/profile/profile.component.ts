import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormControl, NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from 'src/app/services/notification.service';
import {UserService} from "../../services/user.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  user: User;

  ngOnInit() {
    this.route.params.subscribe((param) => {
      console.log(param);
      this.userService.getCurrentUser().subscribe((u) => {
        this.user = u;
      });
      this.userService.refreshUser();
    });
  }
}
