import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Notification } from "../models/notification";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { NotificationComponent } from "../modules/notification/notification.component";

function newNotification(input: String): Notification {
  return { body: input };
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications$: Notification[] = [];
  notifications: Subject<Notification[]> = new Subject();

  getNotifications(): Observable<Notification[]> {
    return this.notifications.asObservable();
  }

  newNotification(incomingNotification: Notification) {
    console.log("Notifications are being added");
    this.notifications$.push(incomingNotification);
    this.notifications.next(this.notifications$);
  }

  deleteNotification(id: number) {
    var temp = [];
    for (var i = 0; i < this.notifications$.length; i++)
      if (i != id) temp.push(this.notifications$[i]);
    this.notifications$ = temp;
    this.notifications.next(this.notifications$);
  }
  constructor() { }
}
