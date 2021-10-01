import { HttpHeaders } from "@angular/common/http";

export class Utilities {

  static headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    auth: ""
  });

  static createHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      "Content-Type": "application/json",
      auth: token,
    });
  }
}
