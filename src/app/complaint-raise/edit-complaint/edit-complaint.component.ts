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
import { ComplaintDetails } from "../view-complaint/complaint";

// interface structure{
//     complaintImages:string,
//     complaintInDetails:string,
//     complaintStatus:string,
//     complaintTitle:string,
//     isCompleted:boolean,
//     userID:string
// }




@Component({
  selector: "app-edit-complaint",
  templateUrl: "./edit-complaint.component.html",
  styleUrls: ["./edit-complaint.component.css"]
})
export class EditComplaintComponent implements OnInit {
  complaintDetailsById: ComplaintDetails[];
  id: string;
  constructor(
    private complaintService: ComplaintServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.complaintService.messagesource.subscribe(res => {
      this.id = res;
      console.log(this.id);

      
    });

    this.complaintService.sendalldetail.subscribe(res => {
      console.log(res);
      this.complaintDetailsById = res;
      console.log(this.complaintDetailsById);
    });
  }
  //   this.complaintDetailsById = this.complaintService.getComplaintById(this.id);
  // getById(id) {
  // }
}
