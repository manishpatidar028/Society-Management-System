import { Component, OnInit } from "@angular/core";

import { ComplaintServiceService } from "src/app/complaint-raise/complaintService/complaint-service.service";
import { Params, ActivatedRoute } from "@angular/router";
import { ComplaintDetails } from "../view-complaint/complaint";
import { Observable } from "rxjs";

@Component({
  selector: "app-edit-complaint",
  templateUrl: "./edit-complaint.component.html",
  styleUrls: ["./edit-complaint.component.css"]
})
export class EditComplaintComponent implements OnInit {
  complaintDetailsById;
  id: string;
  constructor(
    private complaintService: ComplaintServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.complaintDetailsById = this.complaintService.getComplaintById(
        params.id
      );
    });
    this.complaintDetailsById.subscribe(data => {
      console.log(data);
    });
  }
}
