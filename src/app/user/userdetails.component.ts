import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppError } from "../validators/app.error";
import { BadInputError } from "../validators/bad-input.error";
import { NotFoundError } from "../validators/not-found.error";
import { ApiUserModel } from "./user.model";
import { ApiUserService } from "./user.service";

@Component({
    selector: 'userdetails',
    templateUrl: './userdetails.component.html'
})
export class ApiUserDetailsComponent implements OnInit {
    usermodel: ApiUserModel;
    constructor(private ApiuserService: ApiUserService, private route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.route.paramMap.subscribe(param => {
            let id = param.get('id');
            this.ApiuserService.getById(id ? parseInt(id) : 0)
                .subscribe(output => {
                    this.usermodel = output as ApiUserModel;
                },
                    (error: AppError) => {
                        if (error instanceof BadInputError) {
                            alert('Invalid inputs.....!');
                        }
                        else if (error instanceof NotFoundError) {
                            alert('there no such user exists.....!');
                        }
                        else {
                            alert('Un handled error occured ......!');
                        }
                    }
                )

        })
    }
}