import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService,
              private router:Router) { }

  ngOnInit() {
  }
  onLogOutClick(){

    this.authService.logout();
   /* this.flashmsg.show('You are logged out',{
      cssClass:'alert-success',
      timeout:2000
    });*/
    this.router.navigate(['/']);
    return false;
  }

}
