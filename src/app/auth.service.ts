import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs';
import {tokenNotExpired} from 'angular2-jwt';
@Injectable()
export class AuthService {


  constructor(private http:Http) { }

  authToken:any;
  member:any;

  /*registerMember(member){
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/member', member, {headers:headers})
        .map(res => res.json());

  }*/

/*  getSprofile(){
    this.loadToken();

    let headers= new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers:headers})
        .map(res => res.json());

  }*/
  authenticateMember(member){
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    console.log(member);
    return this.http.post('http://localhost:3000/api/authenticate', member, {headers:headers})
        .map(res => res.json());
  }

  loadToken(){
    const token= localStorage.getItem('id_token');
    this.authToken=token;
    //console.log(this.authToken);
  }

  getSprofile(){
    this.loadToken();


    let headers= new Headers();
    console.log(this.authToken);
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/api/profile', {headers:headers})
        .map(res => res.json());

  }
  logout(){
    this.authToken=null;
    this.member= null;
    localStorage.clear();
  }
  storeMemberData(token, member){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(member));
    this.authToken= token;
    this.member= member;
  }
  loggedIn(){
  //console.log(tokenNotExpired('id_token'));
    return tokenNotExpired('id_token');

  }

}
