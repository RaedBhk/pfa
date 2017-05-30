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
import { Router, ActivatedRoute } from "@angular/router";
export var EventsComponent = (function () {
    function EventsComponent(eventsService, router, route) {
        this.eventsService = eventsService;
        this.router = router;
        this.route = route;
    }
    EventsComponent.prototype.ngOnInit = function () {
        /*  this._sub = this.route.params.subscribe(
              (params: any) => {
                this.id = params['id'];
                console.log(this.id);
                this.events = this.eventsService.getEventsById(this.id).subscribe(
                    events => {
                      this.events = events.data ;
                      console.log(events);
                    }
                );
      
              }
          );*/
        var _this = this;
        this.eventsService.getEvents().subscribe(function (events) {
            _this.events = events.data;
            console.log(_this.events);
        });
        this.eventsService.getEventByDate().subscribe(function (events) {
            return _this.lastevents = events.data;
        });
    };
    EventsComponent = __decorate([
        Component({
            selector: 'app-events',
            templateUrl: './events.component.html',
            styleUrls: ['./events.component.css']
        }), 
        __metadata('design:paramtypes', [EventsService, Router, ActivatedRoute])
    ], EventsComponent);
    return EventsComponent;
}());
//# sourceMappingURL=/home/lighto/Desktop/pfa/pfa/src/app/events/events.component.js.map