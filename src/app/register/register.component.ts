import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  loading = false;

  submitted = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      houseNumber: new FormControl(null, Validators.required),
      gender: new FormControl("", Validators.required)
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.registrationForm.valid) {
      return;
    } else {
      const name = this.registrationForm.value["name"];
      const email = this.registrationForm.value["email"];
      const password = this.registrationForm.value["password"];
      const houseNumber = this.registrationForm.value["houseNumber"];
      const gender = this.registrationForm.value["gender"];

      this.userService
        .Signup({ name, email, password, gender, houseNumber })
        .subscribe(
          res => {
            localStorage.setItem("token", res.token);
            this.router.navigate([""]);
          },
          err => {
            alert(err);
          }
        );
      this.registrationForm.reset();
    }
  }
}
