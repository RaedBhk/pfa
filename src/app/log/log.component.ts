import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service"
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  login:string;
  pass:string;


  constructor(private authService:AuthService,
              private router: Router
              ) { }

  ngOnInit() {
  }
  onLoginSubmit(){
    const member = {
      login: this.login,
      pass: this.pass
    }
    this.authService.authenticateMember(member).subscribe(
        data => {

          if(data.success){
            this.authService.storeMemberData(data.token,data.member );
           /* this.flashMsg.show('you are logged in',{
              cssClass: 'alert-danger',
              timeout: 4000
            });*/
            this.router.navigate(['']);
          }
          else{
           /* this.flashMsg.show(data.msg,{
              cssClass: 'alert-danger',
              timeout: 4000
            });*/
            console.log(data);
            this.router.navigate(['login']);
          }
        }
    );
  }

}
