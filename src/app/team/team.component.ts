import { Component, OnInit } from '@angular/core';

import {MemberService} from "../member.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  members : Object;
  imgPath='./uploads/';
  constructor(private memberService : MemberService) { }

  ngOnInit() {
    this.memberService.getMembers().subscribe(members => {
      this.members = members.data;


    });
  }

}