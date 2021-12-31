import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
@Injectable()

export class AuthorizedGaurd implements CanActivate {
    constructor(private route: Router) {

    }
    canActivate() {
        let authInfo = localStorage.getItem('isAuthorize');
        if (authInfo)
            return true;

        else {
            this.route.navigate(['/unauthrized'])
            return false;
        }
    }

}