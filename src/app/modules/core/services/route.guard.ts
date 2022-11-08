import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtserviceService } from './jwtservice.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  
  constructor(private jwtService:JwtserviceService,private route:Router){}

  canActivate():boolean{
    if (this.jwtService.loggedIn()){
      return true
    }
    else{
      this.route.navigate(['/auth/login'])
      return false
    }
  }
}
