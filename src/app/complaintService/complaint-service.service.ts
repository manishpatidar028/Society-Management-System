import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

interface User {
  
  complaintTitle: string;
  complaintDetails: string;
  images: string;
}
@Injectable({
  providedIn: "root"
})
export class ComplaintServiceService {
  constructor(private http: HttpClient, private router: Router) {}
}
