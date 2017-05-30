import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  onLogOutClick(){

    this.authService.logout();

    //this.router.navigate(['login']);
    return false;
  }

}
