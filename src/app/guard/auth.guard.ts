import {Injectable, InjectableDecorator} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {Observable} from "rxjs";
import {AuthService} from "../auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService,
                private router:Router
    ){

    }

    canActivate() {
        if(this.authService.loggedIn()){
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }

    }

}
