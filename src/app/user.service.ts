import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

interface User {
  name: String;
  email: String;
  password: String;
  gender: String;
}

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  Signup(user: User) {
    console.log(user);
    this.http.post("http://localhost:3000/register", user).subscribe(
      response => {
        if (response) {
          this.router.navigate([""]);
        }
      },
      err => {
        console.log(err);
        alert(err.error);
      }
    );
  }
  logIn(email: string, password: string) {
    this.http
      .post("http://localhost:3000/login", { email, password })
      .subscribe(
        response => {
          console.log(response);
          if (response) {
            this.router.navigate(["/"]);
          }
        },
        err => {
          console.log(err);
          alert(err.error);
        }
      );
  }
}
