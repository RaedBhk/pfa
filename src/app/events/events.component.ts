import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {EventsService} from "../events.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  events: Object;
  lastevents:Object;
  //id: string;
  private _sub: Subscription;
  constructor(private eventsService: EventsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
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


      this.eventsService.getEvents().subscribe(events => {
          this.events = events.data;
          console.log(this.events);

      });
      this.eventsService.getEventByDate().subscribe(events =>
      this.lastevents = events.data);



}}