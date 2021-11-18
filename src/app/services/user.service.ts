import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user';
import { Config} from "../Config/config";
import { CookieService} from "ngx-cookie-service";
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

@Injectable()
export class UserService {

  url: string = Config.apiUrl;
  private currentUser: User;
  private currentUserSubject: Subject<User> = new Subject();

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  createAccount(user: User){
    return this.register(user);
  }

  register(user: User){
    return this.http.post<User>(`${this.url}/users/signup`, user).pipe(
      map((user: User) => {
        console.log(user);
        this.currentUserSubject.next(user);
        this.currentUser = user;
        this.cookieService.set("token", user.token);
        return user;
      })
    );
  }

  login(user: User){
    return this.http.post<User>(`${this.url}/users/login`, user).pipe(
      map((user: User) => {
        console.log(user);
        this.currentUser = user;
        this.currentUserSubject.next(user);
        this.cookieService.set("token", user.token);
        return user;
      })
    );
  }

  isLoggedIn(): boolean {
    return this.currentUserSubject != null;
  }

  logout() {
    this.currentUserSubject.next(null);
  }

  getUserFromLocal() {
    //TODO: eat the cookie
  }

  getCurrentUser(): Observable<User> {
    return this.currentUserSubject; //is of() is the same as new Observable()
  }

  //sometimes subscribe is being called after next so just refresh after looking at it
  refreshUser(): void {
    console.log(this.currentUser);
    this.currentUserSubject.next(this.currentUser);
  }
}
