import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ComplaintDetails } from "../view-complaint/complaint";

interface Complaint {
  complaintTitle: string;
  complaintInDetails: string;
  complaintImages: string;
  complaintStatus: string;
}
@Injectable({
  providedIn: "root"
})
export class ComplaintServiceService {
  compalintObj = {};

  constructor(private http: HttpClient, private router: Router) {}
  ComplaintRaise(Complaint: Complaint) {
    console.log(Complaint);
    return this.http.post<any>(
      "http://localhost:3000/postComplaint",
      Complaint
    );
  }
  getComplaint(): Observable<ComplaintDetails[]> {
    return this.http.get<ComplaintDetails[]>(
      "http://localhost:3000/getComplaint"
    );
  }
  returnOneValue(ComplaintObj: object) {
    console.log(
      "=================> Find One",
      ComplaintObj,
      typeof ComplaintObj
    );
    this.router.navigate(["/details"]);
    return (this.compalintObj = ComplaintObj);
  }
  getValues() {
    console.log(this.compalintObj, "<=================");
    return this.compalintObj;
  }
}
