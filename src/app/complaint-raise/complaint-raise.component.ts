import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ComplaintServiceService } from "./complaintService/complaint-service.service";

@Component({
  selector: "app-complaint-raise",
  templateUrl: "./complaint-raise.component.html",
  styleUrls: ["./complaint-raise.component.css"]
})
export class ComplaintRaiseComponent implements OnInit {
  selectedFile: File;
  complaintForm: FormGroup;
  submitted = false;

  constructor(
    private complaintService: ComplaintServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.complaintForm = new FormGroup({
      complaintTitle: new FormControl(null, Validators.required),
      complaintInDetails: new FormControl(null, [Validators.required]),
      complaintImages: new FormControl(null, Validators.required)
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedFile = file;
    }
  }
  onSubmitComplaint() {
    this.submitted = true;
    const formData = new FormData();
    formData.append("complaintTitle", this.complaintForm.value.complaintTitle);
    formData.append("complaintImages", this.selectedFile);
    formData.append(
      "complaintInDetails",
      this.complaintForm.value.complaintInDetails
    );

    this.complaintService.ComplaintRaise(FormData).subscribe(res => {
      console.log(res);
      this.router.navigate(["/viewComplaint"]);
    });
  }
}
