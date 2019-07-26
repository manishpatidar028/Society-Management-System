import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-complaint-raise",
  templateUrl: "./complaint-raise.component.html",
  styleUrls: ["./complaint-raise.component.css"]
})
export class ComplaintRaiseComponent implements OnInit {
  complaintForm: FormGroup;
  submitted = false;

  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.complaintForm = new FormGroup({
      complaintTitle: new FormControl(null, Validators.required),
      complaintInDetails: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      images: new FormControl(null, Validators.required)
    });
  }
  onsubmit() {
    this.submitted = true;

    const complaintTitle = this.complaintForm.value["complaintTitle"];
    const complaintInDetails = this.complaintForm.value["complaintInDetails"];
    const images = this.complaintForm.value["images"];
  }
}
