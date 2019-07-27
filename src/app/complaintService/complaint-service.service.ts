import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

interface Complaint {
  complaintTitle: string;
  complaintInDetails: string;
  complaintImages: string;
}
@Injectable({
  providedIn: "root"
})
export class ComplaintServiceService {
  constructor(private http: HttpClient, private router: Router) {}
  ComplaintRaise(Complaint: Complaint) {
    console.log(Complaint);
    return this.http.post<any>(
      "http://localhost:3000/postComplaint",
      Complaint
    );
  }
}
