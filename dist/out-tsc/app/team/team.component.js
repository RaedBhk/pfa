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
import { MemberService } from "../member.service";
export var TeamComponent = (function () {
    function TeamComponent(memberService) {
        this.memberService = memberService;
        this.imgPath = './uploads/';
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getMembers().subscribe(function (members) {
            _this.members = members.data;
        });
    };
    TeamComponent = __decorate([
        Component({
            selector: 'app-team',
            templateUrl: './team.component.html',
            styleUrls: ['./team.component.css']
        }), 
        __metadata('design:paramtypes', [MemberService])
    ], TeamComponent);
    return TeamComponent;
}());
//# sourceMappingURL=/home/lighto/Desktop/pfa/pfa/src/app/team/team.component.js.map