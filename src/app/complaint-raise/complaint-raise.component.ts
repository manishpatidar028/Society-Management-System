import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ComplaintServiceService } from "../complaintService/complaint-service.service";

@Component({
  selector: "app-complaint-raise",
  templateUrl: "./complaint-raise.component.html",
  styleUrls: ["./complaint-raise.component.css"]
})
export class ComplaintRaiseComponent implements OnInit {
  complaintForm: FormGroup;
  submitted = false;

  constructor(
    private complaintService: ComplaintServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.complaintForm = new FormGroup({
      complaintTitle: new FormControl(null, Validators.required),
      complaintInDetails: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      complaintImages: new FormControl(null, Validators.required)
    });
  }
  onSubmitComplaint() {
    this.submitted = true;

    const complaintTitle = this.complaintForm.value["complaintTitle"];
    const complaintInDetails = this.complaintForm.value["complaintInDetails"];
    const complaintImages = this.complaintForm.value["complaintImages"];
    this.complaintService
      .ComplaintRaise({ complaintTitle, complaintInDetails, complaintImages })
      .subscribe(res => {
        console.log(res);
        this.router.navigate(["/parking-registration"]);
      });
  }
}
