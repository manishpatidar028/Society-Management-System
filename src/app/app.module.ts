import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ComplaintRaiseComponent } from "./complaint-raise/complaint-raise.component";
import { HeaderComponent } from "./header/header.component";
import { ReactiveFormsModule } from "@angular/forms";
import { WelcomeScreenComponent } from "./welcome-screen/welcome-screen.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { NgxSpinnerModule } from "ngx-spinner";
import { AuthGuard } from "./shared/auth.guard";
import { TokenInterceptorService } from "./token-interceptor.service";
import { ViewComplaintComponent } from "./complaint-raise/view-complaint/view-complaint.component";
import { EditComplaintComponent } from "./complaint-raise/edit-complaint/edit-complaint.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ComplaintRaiseComponent,
    HeaderComponent,
    WelcomeScreenComponent,
    ViewComplaintComponent,
    EditComplaintComponent
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
