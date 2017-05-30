import {Component, OnInit} from "@angular/core";
import {MemberService} from "./member.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/styles.css','../assets/css/demo5.css','../assets/css/vendors/vendors.css','../assets/css/vendors/vendors-overwrites.css','../assets/css/main.css']
})
export class AppComponent implements OnInit{
  title = 'Site Labo';

  constructor(private memberService:MemberService) {

  }

  ngOnInit() {
  }
}
