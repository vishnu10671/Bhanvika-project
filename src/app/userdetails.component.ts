import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";


@Component({
    selector: 'userdeatils',
    templateUrl: './userdetails.component.html'
})
export class UserDetailsComponent {
    userDeatils: UserModel;
    constructor(private route: ActivatedRoute, private userService: UserService) {
        route.paramMap.subscribe((param) => {
            let id = param.get('id');
            this.userDeatils = userService.getElementById(id ? parseInt(id) : 0);
        })
        route.queryParamMap.subscribe((param) => {
            let Location = param.get('location')
        })
    }
}