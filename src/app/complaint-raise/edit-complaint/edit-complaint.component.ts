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
  form: FormGroup;
  example = { first: "", last: "" };

  editeditComplaintForm: FormGroup;
  submitted = false;
  title = "";
  constructor(
    builder: FormBuilder,
    private complaintService: ComplaintServiceService,
    private userService: UserService,
    private router: Router
  ) {
    this.form = builder.group({
      first: "",
      last: ""
    });
  }

  ngOnInit() {
    this.editeditComplaintForm = new FormGroup({
      complaintTitle: new FormControl(null, Validators.required),
      complaintInDetails: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      complaintImages: new FormControl(null, Validators.required),
      complaintStatus: new FormControl(null, Validators.required)
    });

    let data = this.complaintService.getValues();
    console.log(data, "compaint datas");
    this.title = data.complaintTitle;
    this.details = data.complaintInDetails;
    this.title = data.complaintTitle;
    this.title = data.complaintTitle;
  }
  onSubmitComplaint() {
    this.submitted = true;

    const complaintTitle = this.editeditComplaintForm.value["complaintTitle"];
    const complaintInDetails = this.editeditComplaintForm.value[
      "complaintInDetails"
    ];
    const complaintImages = this.editeditComplaintForm.value["complaintImages"];
    const complaintStatus = this.editeditComplaintForm.value["complaintStatus"];
    this.complaintService
      .ComplaintRaise({
        complaintTitle,
        complaintInDetails,
        complaintImages,
        complaintStatus
      })
      .subscribe(res => {
        console.log(res);
        this.router.navigate(["/parking-registration"]);
      });
  }
}
