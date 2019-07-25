import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

interface User {
  name: string;
  email: string;
  password: string;
  gender: string;
  houseNumber: number;
}

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  Signup(user: User) {
    console.log(user);
    return this.http.post<any>("http://localhost:3000/register", user);
  }
  logIn(email: string, password: string) {
    return this.http.post<any>("http://localhost:3000/login", {
      email: email,
      password: password
    });
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
  getUserDetails() {}
  getToken() {
    return localStorage.getItem("token");
  }
}
