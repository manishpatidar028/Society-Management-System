import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private userService: UserService, private router: Router) {
    if (userService.loggedIn()) {
      this.router.navigate(["/complaint"]);
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    if (!this.loginForm.valid) {
      return alert("form not valid");
    } else {
      const email = this.loginForm.value["email"];
      const password = this.loginForm.value["password"];
      this.userService.logIn(email, password).subscribe(res => {
        localStorage.setItem("token", res.token);
        this.router.navigate(["/complaint"]);
      });
      this.loginForm.reset();
    }
  }
}
