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
  vehicleAyyay: [] = [];
  submitted = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      flatNumber: new FormControl(null, Validators.required),
      block: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      gender: new FormControl("", Validators.required),
      vehicleNumber: new FormControl(null, Validators.required),
      vehicleNumber2: new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.registrationForm.valid) {
      return;
    } else {
      const flatNumber = this.registrationForm.value["flatNumber"];
      const block = this.registrationForm.value["block"];
      const name = this.registrationForm.value["name"];
      const phoneNumber = this.registrationForm.value["phoneNumber"];
      const email = this.registrationForm.value["email"];
      const password = this.registrationForm.value["password"];
      const gender = this.registrationForm.value["gender"];
      const vehicleNumber = this.registrationForm.value["vehicleNumber"];
      const vehicleNumber2 = this.registrationForm.value["vehicleNumber2"];

      this.userService
        .Signup({
          flatNumber,
          block,
          name,
          phoneNumber,
          email,
          password,
          gender,
          vehicleNumber,
          vehicleNumber2
        })
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
