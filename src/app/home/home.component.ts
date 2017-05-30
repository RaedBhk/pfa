import { Component, OnInit } from '@angular/core';
import {EventsService} from "../events.service";
import {MemberService} from "../member.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private eventService:EventsService, private memberService:MemberService) { }
  events: Object;
  articles:Object;
  members: Object;
  imgPath='./uploads/';

  ngOnInit() {
    this.eventService.getEventByDate().subscribe(events => {
      this.events = events.data;

    });
    this.eventService.getArticlesByDate().subscribe(articles => {
      this.articles = articles.data;


    });
    this.memberService.getMembers().subscribe(members => {
      this.members = members.data;
    })
  }


}
