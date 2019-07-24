import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { WelcomeScreenComponent } from "./welcome-screen/welcome-screen.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: "", component: WelcomeScreenComponent },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "registration", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
