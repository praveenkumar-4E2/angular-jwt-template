import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtserviceService } from '../../services/jwtservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private token: any;
  constructor(private jwtService:JwtserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  submit(login: any)
  {
    let res = this.jwtService.dologin(login.value);
    res.subscribe(data =>{
      this.token=data;
      localStorage.setItem('token',this.token);
      console.log('from local storage '+localStorage.getItem('token'))
      this.router.navigate(['/admin']);
      
    })
  // console.log(login.value)
  

  }

  



}
function getCircularReplacer(): ((this: any, key: string, value: any) => any) | undefined {
  throw new Error('Function not implemented.');
}

