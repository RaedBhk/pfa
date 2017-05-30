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
import { EventsService } from "../events.service";
import { MemberService } from "../member.service";
export var HomeComponent = (function () {
    function HomeComponent(eventService, memberService) {
        this.eventService = eventService;
        this.memberService = memberService;
        this.imgPath = './uploads/';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.getEventByDate().subscribe(function (events) {
            _this.events = events.data;
        });
        this.eventService.getArticlesByDate().subscribe(function (articles) {
            _this.articles = articles.data;
        });
        this.memberService.getMembers().subscribe(function (members) {
            _this.members = members.data;
        });
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }), 
        __metadata('design:paramtypes', [EventsService, MemberService])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/lighto/Desktop/pfa/pfa/src/app/home/home.component.js.map