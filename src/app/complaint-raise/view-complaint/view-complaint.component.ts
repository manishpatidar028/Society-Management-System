import { Component, OnInit } from "@angular/core";
import { ComplaintServiceService } from "src/app/complaint-raise/complaintService/complaint-service.service";

@Component({
  selector: "app-view-complaint",
  templateUrl: "./view-complaint.component.html",
  styleUrls: ["./view-complaint.component.css"]
})
export class ViewComplaintComponent implements OnInit {
  isData = false;
  data;
  constructor(private complaintService: ComplaintServiceService,) {}

  ngOnInit() {}
  onfetch() {
    this.data = this.complaintService.getComplaint();
    this.isData = true;
  }
}
