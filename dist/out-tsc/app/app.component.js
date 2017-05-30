var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { MemberService } from "./member.service";
export var AppComponent = (function () {
    function AppComponent(memberService) {
        this.memberService = memberService;
        this.title = 'Site Labo';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['../assets/css/styles.css', '../assets/css/demo5.css', '../assets/css/vendors/vendors.css', '../assets/css/vendors/vendors-overwrites.css', '../assets/css/main.css']
        }), 
        __metadata('design:paramtypes', [MemberService])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/lighto/Desktop/pfa/pfa/src/app/app.component.js.map