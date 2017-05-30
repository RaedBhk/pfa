var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { MemberService } from "../member.service";
import { FileUploader } from "ng2-file-upload";
var URL = 'http://localhost:3000/api/uploadcv';
export var ProfileComponent = (function () {
    function ProfileComponent(memberService, authService, router) {
        this.memberService = memberService;
        this.authService = authService;
        this.router = router;
        this.imgPath = './uploads/';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getSprofile().subscribe(function (data) {
            _this.user = data.user;
            _this.id = data.user._id;
        }, function (err) {
            console.log(err);
            return false;
        });
        console.log(this.id);
        this.uploader = new FileUploader({ url: URL + '?id=' + this.id, itemAlias: 'photo' });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        //overide the onCompleteItem property of the uploader so we are
        //able to deal with the server response.
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            //console.log("ImageUpload:uploaded:", item, status, response);
            console.log(item);
        };
    };
    ProfileComponent.prototype.onEditSumbit = function () {
        var _this = this;
        this.memberService.setMember(this.id, this.user).subscribe(function (member) {
            _this.router.navigate(['profile']);
        });
        console.log(this.id);
    };
    ProfileComponent = __decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }), 
        __metadata('design:paramtypes', [MemberService, AuthService, Router])
    ], ProfileComponent);
    return ProfileComponent;
}());
//# sourceMappingURL=/home/lighto/Desktop/pfa/pfa/src/app/profile/profile.component.js.map