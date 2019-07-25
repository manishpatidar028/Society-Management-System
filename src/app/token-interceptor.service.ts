import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { UserService } from "./user.service";
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req, next) {
    let authService = this.injector.get(UserService);
    let tokenizedReq = req.clone({
      headers: req.headers.set(
        "Authorization",
        "bearer " + authService.getToken()
      )
    });
    return next.handle(tokenizedReq);
  }
}
