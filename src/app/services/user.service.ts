import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { users } from "../models/users";
import { Config } from "../Config/config";
import { CookieService } from "ngx-cookie-service";
import { map } from "rxjs/operators";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = Config.apiUrl;
  private currentUser: users;
  private currentUserSubject: Subject<users> = new Subject;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  signUp(user: users) {
    return this.register(user);
  }

  register(user: users){
    return this.http.post<users>(`${this.apiUrl}/users/signup`, user).pipe(
      map((user) => {
        console.log(user + " From line 26 in the front end user service");
        this.currentUser = user;
        this.currentUserSubject.next(user);
        this.cookieService.set("token", user.token);
        return user;
      })
    );
  }

  login(user: users) {
    return this.http
      .post(`${this.apiUrl}/users/login`, user)
      .pipe(
        map((users) => {
          console.log(user);
          this.currentUser = user;
          this.currentUserSubject.next(user);
          this.cookieService.set("token", user.token);
          return user;
        }))
  };

  isLoggedIn(): boolean {
    return this.currentUserSubject != null;
  }

  logout() {
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): Observable<users> {
    return this.currentUserSubject;
  }

  refreshUser(): void {
    console.log(this.currentUser);
    this.currentUserSubject.next(this.currentUser);
  }


}
