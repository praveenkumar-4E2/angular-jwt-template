import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtserviceService {
  url = 'http://localhost:8080/auth/login';
  url1 = 'http://localhost:8080/foradmin';

  constructor(private http: HttpClient,private router:Router ) {}
  

    
  public dologin(login:object){
    return this.http.post(this.url,login,{responseType:'text' as 'json'});
  }
  public forAdmin(){
    return this.http.get(this.url1,{responseType:'text' as 'json'});
  }

loggedIn(){
  return !!localStorage.getItem('token');
}

getToken(){
  return localStorage.getItem('token');
}

removeToken(){
  localStorage.removeItem('token');
}
logout(){
  this.removeToken();
  this.router.navigate(['/admin']).then(()=>window.location.reload());

}

}
