import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-complaint-raise",
  templateUrl: "./complaint-raise.component.html",
  styleUrls: ["./complaint-raise.component.css"]
})
export class ComplaintRaiseComponent implements OnInit {
  complaintForm: FormGroup;

  constructor() {}

  ngOnInit() {}
}
