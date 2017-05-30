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
import { Http } from "@angular/http";
import 'rxjs/Rx';
export var MemberService = (function () {
    function MemberService(http) {
        this.http = http;
    }
    MemberService.prototype.getMembers = function () {
        return this.http.get('http://localhost:3000/api/member').map(function (res) { return res.json(); });
    };
    MemberService.prototype.getMemberById = function (id) {
        return this.http.get('http://localhost:3000/api/member/' + id).map(function (res) { return res.json(); });
    };
    MemberService.prototype.setMember = function (id, member) {
        return this.http.post('http://localhost:3000/api/member/' + id, member).map(function (res) { return res.json(); });
    };
    MemberService.prototype.addArticle = function (article) {
        return this.http.post('http://localhost:3000/api/article', article).map(function (res) { return res.json(); });
    };
    MemberService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], MemberService);
    return MemberService;
}());
//# sourceMappingURL=/home/lighto/Desktop/pfa/pfa/src/app/member.service.js.map