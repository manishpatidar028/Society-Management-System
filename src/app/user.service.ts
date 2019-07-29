import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

interface User {
  flatNumber: string;
  block: string;
  name: string;
  phoneNumber: number;
  email: string;
  password: string;
  gender: string;
  vehicleNumber: string;
  vehicleNumber2: string;
}

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  Signup(user: User) {
    console.log(user);
    return this.http.post<any>("http://192.168.2.96:3000/register", user);
  }
  logIn(email: string, password: string) {
    return this.http.post<any>("http://192.168.2.96:3000/login", {
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
  getToken() {
    return localStorage.getItem("token");
  }
}
