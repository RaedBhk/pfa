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
export var EventsService = (function () {
    function EventsService(http) {
        this.http = http;
    }
    EventsService.prototype.getEvents = function () {
        return this.http.get('http://localhost:3000/api/events').map(function (res) { return res.json(); });
    };
    EventsService.prototype.getEventsById = function (id) {
        return this.http.get('http://localhost:3000/api/events/' + id).map(function (res) { return res.json(); });
    };
    EventsService.prototype.getEventByDate = function () {
        return this.http.get('http://localhost:3000/api/events/date').map(function (res) { return res.json(); });
    };
    EventsService.prototype.getArticlesByDate = function () {
        return this.http.get('http://localhost:3000/api/article/date').map(function (res) { return res.json(); });
    };
    EventsService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], EventsService);
    return EventsService;
}());
//# sourceMappingURL=/home/lighto/Desktop/pfa/pfa/src/app/events.service.js.map