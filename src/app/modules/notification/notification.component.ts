import { Component, OnInit } from '@angular/core';
import { Notification} from "../../models/notification";
import { NotificationService} from "../../services/notification.service";
import { Observable} from "rxjs";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(private notifyService: NotificationService) { }

  ngOnInit() {
    this.notifyService.getNotifications().subscribe((notifications) => (this.notifications = notifications));
  }

  deleteNotification(notificationID: number) {
    this.notifyService.deleteNotification(notificationID);
  }

}
