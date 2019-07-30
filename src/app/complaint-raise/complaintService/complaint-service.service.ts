import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { ComplaintDetails } from "../view-complaint/complaint";
import { typeWithParameters } from "@angular/compiler/src/render3/util";

interface Complaint {
  complaintTitle: string;
  complaintInDetails: string;
  complaintImages: File;
  complaintStatus: string;
}
@Injectable({
  providedIn: "root"
})
export class ComplaintServiceService {
  selectedFile = null;
  cmpid: string;
  details = new Subject<ComplaintDetails[]>();
  compliantID = new Subject<string>();
  messagesource = this.compliantID.asObservable();
  sendalldetail = this.details.asObservable();
  constructor(private http: HttpClient, private router: Router) {}

  ComplaintRaise(Complaint: Complaint) {
    console.log(Complaint);
    return this.http.post<any>(
      "http://192.168.2.96:3000/postComplaint",
      Complaint
    );
  }
  getComplaint(): Observable<ComplaintDetails[]> {
    return this.http.get<ComplaintDetails[]>(
      "http://192.168.2.96:3000/getComplaint"
    );
  }
  getComplaintById(id) {
    return this.http.get<ComplaintDetails[]>(
      "http://192.168.2.96:3000/getComplaintById/" + id
    );
  }
}
