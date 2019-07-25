import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ComplaintRaiseComponent } from "./complaint-raise/complaint-raise.component";
import { ParkingComponent } from "./parking/parking.component";
import { HeaderComponent } from "./header/header.component";
import { ReactiveFormsModule } from "@angular/forms";
import { WelcomeScreenComponent } from "./welcome-screen/welcome-screen.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { NgxSpinnerModule } from "ngx-spinner";
import { AuthGuard } from "./shared/auth.guard";
import { TokenInterceptorService } from "./token-interceptor.service";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ComplaintRaiseComponent,
    ParkingComponent,
    HeaderComponent,
    WelcomeScreenComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
