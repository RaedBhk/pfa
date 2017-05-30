import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {TeamComponent} from "./team/team.component";
import {EventsComponent} from "./events/events.component";
import {ContactComponent} from "./contact/contact.component";
import {MemberComponent} from "./member/member.component";

import {LogComponent} from "./log/log.component";
import {AuthGuard} from "./guard/auth.guard";
import {ProfileComponent} from "./profile/profile.component";

const APP_ROUTES:Routes=[
    { path:'',component:HomeComponent},
    { path:'member/:id',component:MemberComponent},
    { path:'team', component:TeamComponent},
    { path:'events', component:EventsComponent},
    { path:'contact', component:ContactComponent},
    { path:'login', component:LogComponent},
    { path:'profile', component:ProfileComponent,canActivate:[AuthGuard]}

];
export const Routing = RouterModule.forRoot(APP_ROUTES);