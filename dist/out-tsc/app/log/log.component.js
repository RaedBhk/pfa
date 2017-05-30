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
export var LogComponent = (function () {
    function LogComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogComponent.prototype.ngOnInit = function () {
    };
    LogComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var member = {
            login: this.login,
            pass: this.pass
        };
        this.authService.authenticateMember(member).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeMemberData(data.token, data.member);
                /* this.flashMsg.show('you are logged in',{
                   cssClass: 'alert-danger',
                   timeout: 4000
                 });*/
                _this.router.navigate(['']);
            }
            else {
                /* this.flashMsg.show(data.msg,{
                   cssClass: 'alert-danger',
                   timeout: 4000
                 });*/
                console.log(data);
                _this.router.navigate(['login']);
            }
        });
    };
    LogComponent = __decorate([
        Component({
            selector: 'app-log',
            templateUrl: './log.component.html',
            styleUrls: ['./log.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, Router])
    ], LogComponent);
    return LogComponent;
}());
//# sourceMappingURL=/home/lighto/Desktop/pfa/pfa/src/app/log/log.component.js.map