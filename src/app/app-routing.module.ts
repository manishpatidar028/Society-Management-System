import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { WelcomeScreenComponent } from "./welcome-screen/welcome-screen.component";
import { RegisterComponent } from "./register/register.component";
import { ComplaintRaiseComponent } from "./complaint-raise/complaint-raise.component";
import { ParkingComponent } from "./parking/parking.component";
import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
  { path: "", component: WelcomeScreenComponent },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "registration", component: RegisterComponent },
  {
    path: "complaint",
    component: ComplaintRaiseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "parking-registration",
    component: ParkingComponent,
    canActivate: [AuthGuard]
  },
  { path: "**", redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
