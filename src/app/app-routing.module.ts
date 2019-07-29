import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { WelcomeScreenComponent } from "./welcome-screen/welcome-screen.component";
import { RegisterComponent } from "./register/register.component";
import { ComplaintRaiseComponent } from "./complaint-raise/complaint-raise.component";
import { AuthGuard } from "./shared/auth.guard";
import { ViewComplaintComponent } from "./complaint-raise/view-complaint/view-complaint.component";
import { EditComplaintComponent } from "./complaint-raise/edit-complaint/edit-complaint.component";

const routes: Routes = [
  { path: "", component: WelcomeScreenComponent },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "registration", component: RegisterComponent },
  {
    path: "viewComplaint",
    component: ViewComplaintComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "complaintDetails/:id",
    component: EditComplaintComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "newComplaint",
    component: ComplaintRaiseComponent,
    canActivate: [AuthGuard]
  },

  { path: "**", redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
