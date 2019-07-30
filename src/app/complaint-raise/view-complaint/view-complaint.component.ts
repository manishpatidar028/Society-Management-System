import { Component, OnInit } from "@angular/core";
import { ComplaintServiceService } from "src/app/complaint-raise/complaintService/complaint-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-view-complaint",
  templateUrl: "./view-complaint.component.html",
  styleUrls: ["./view-complaint.component.css"]
})
export class ViewComplaintComponent implements OnInit {
  complaintDetailsById;
  isData = false;
  data;
  complaintid;
  constructor(
    private complaintService: ComplaintServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.data = this.complaintService.getComplaint();
    this.isData = true;
  }

  getById(_id) {
    this.complaintDetailsById = this.complaintService.getComplaintById(_id);
    this.router.navigate(["/complaintDetails/" + _id]);
  }
  setData(data) {
    this.complaintDetailsById.next(data);
  }
}
