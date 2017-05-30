var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { MemberService } from "./member.service";
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { Routing } from './app.routes';
import { LogComponent } from './log/log.component';
import { EventsService } from "./events.service";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./guard/auth.guard";
import { ProfileComponent } from './profile/profile.component';
import { FileSelectDirective } from 'ng2-file-upload';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
            providers: [MemberService, EventsService, AuthService, AuthGuard],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/lighto/Desktop/pfa/pfa/src/app/app.module.js.map