import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable ,Injector} from '@angular/core';
import { Observable } from 'rxjs';
import { JwtserviceService } from './jwtservice.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let jwtservice=this.injector.get(JwtserviceService)

    if(jwtservice.loggedIn())
    {
      let tokenReq=req.clone({
        setHeaders:{
          Authorization:`Bearer ${jwtservice.getToken()}`
        }
      })
      return next.handle(tokenReq)
    }
    else{
      return next.handle(req)
    }
    
  }





}
