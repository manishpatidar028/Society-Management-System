import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { ComplaintServiceService } from "../complaint-raise/complaintService/complaint-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  data;
  constructor(
    private userService: UserService,
    private complaintService: ComplaintServiceService
  ) {}

  ngOnInit() {}
  // onlogout() {
  //   this.userService.logout();
  // }
  onfetch() {
    this.data = this.complaintService.getComplaint().subscribe();
  }
}
