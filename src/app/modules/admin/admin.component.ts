import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtserviceService } from '../core/services/jwtservice.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private jwtservice:JwtserviceService,private router:Router)
   { }
result:any;
  ngOnInit(): void {
    this.onSubmit();
  }
  onSubmit(){

    let res=this.jwtservice.forAdmin();
    res.subscribe(data =>this.result=data)
  }


  disableLogoutButton:boolean = this.jwtservice.loggedIn();

 public logoutButton(){
  console.log(this.result)
    this.jwtservice.logout();
  }

}
