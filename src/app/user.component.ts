import { Component } from "@angular/core";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";



@Component({
    selector: 'user',
    templateUrl: './user.component.html'
})

export class UserComponent {
    listuser: UserModel[];
    constructor(private userService: UserService) {
        this.listuser = userService.getUsers();
    }
}