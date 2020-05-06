import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from './userservice.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  flag:boolean = true;
  user1:User = new User();
  constructor(private router:Router, public userserv:UserserviceService) { }


  ngOnInit(): void {
    if(!this.userserv.isUserLoggedIn())
    {
    this.router.navigateByUrl('/register');
    }
    else
    {
      this.router.navigate([''])
    }
  }
  
  changeFlag()
  {
    if(this.flag)
      this.flag=false;
  }
  changeFlagAgain()
  {
    if(this.flag==false)
      this.flag=true;
  }

  logout()
  {
    this.userserv.logOut();
    this.router.navigate(['register']);
  }
  
  
 
  title = 'FlightManagementSystem';
}
