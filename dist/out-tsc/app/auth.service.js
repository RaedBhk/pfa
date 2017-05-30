var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs';
import { tokenNotExpired } from 'angular2-jwt';
export var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
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
    AuthService.prototype.authenticateMember = function (member) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(member);
        return this.http.post('http://localhost:3000/api/authenticate', member, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        //console.log(this.authToken);
    };
    AuthService.prototype.getSprofile = function () {
        this.loadToken();
        var headers = new Headers();
        console.log(this.authToken);
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/api/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.member = null;
        localStorage.clear();
    };
    AuthService.prototype.storeMemberData = function (token, member) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(member));
        this.authToken = token;
        this.member = member;
    };
    AuthService.prototype.loggedIn = function () {
        //console.log(tokenNotExpired('id_token'));
        return tokenNotExpired('id_token');
    };
    AuthService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=/home/lighto/Desktop/pfa/pfa/src/app/auth.service.js.map