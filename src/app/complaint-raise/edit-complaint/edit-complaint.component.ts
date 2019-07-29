import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { ComplaintServiceService } from "src/app/complaint-raise/complaintService/complaint-service.service";
import { Router } from "@angular/router";
import { UserService } from "src/app/user.service";

@Component({
  selector: "app-edit-complaint",
  templateUrl: "./edit-complaint.component.html",
  styleUrls: ["./edit-complaint.component.css"]
})
export class EditComplaintComponent implements OnInit {
  complaintDetailsById;
  form: FormGroup;

  editeditComplaintForm: FormGroup;
  submitted = false;

  constructor(
    private complaintService: ComplaintServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

}
