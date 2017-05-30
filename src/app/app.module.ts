import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';

import {MemberService} from "./member.service";
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { Routing } from './app.routes';
import { LogComponent } from './log/log.component';
import {EventsService} from "./events.service";
import {AuthService} from "./auth.service";
import {AuthGuard} from "./guard/auth.guard";
import { ProfileComponent } from './profile/profile.component';
import { FileSelectDirective } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    TeamComponent,
    ContactComponent,
    NavbarComponent,
    EventsComponent,
    HomeComponent,
    LogComponent,
    ProfileComponent,
    FileSelectDirective


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ReactiveFormsModule
  ],
  providers: [MemberService, EventsService, AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
