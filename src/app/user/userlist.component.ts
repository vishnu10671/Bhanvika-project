import { Component, OnInit } from "@angular/core";
import { FormControl, FormControlName, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { AppError } from "../validators/app.error";
import { BadInputError } from "../validators/bad-input.error";
import { NotFoundError } from "../validators/not-found.error";
import { ApiUserModel } from "./user.model";
import { ApiUserService } from "./user.service";

@Component({
    selector: "userlist",
    templateUrl: "./userlist.component.html"

})
export class ApiUserListComponent implements OnInit {
    defaultPage: number = 1;
    ApiUserlist: ApiUserModel[];
    alertmessage: string;
    title: string;
    Apiuser = new ApiUserModel();
    userForm: any = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required)
    })
    get Name() {
        return this.userForm.get('name');
    }
    get Email() {
        return this.userForm.get('email');
    }
    get Phone() {
        return this.userForm.get('phone');
    }

    constructor(private ApiuserService: ApiUserService, private tstService: ToastrService) {

    }
    ngOnInit(): void {
        this.loadData();
    }
    loadData() {
        this.ApiuserService.getAll()
            .subscribe(Output => {
                this.ApiUserlist = Output as ApiUserModel[];
            },
                (error: AppError) => {
                    if (error instanceof NotFoundError) {
                        alert("No  such user Exist......!");
                    }
                    else {
                        alert('Un handle error Occured....!');
                    }
                }
            )
    }
    Deleteuser(id: number, index: number) {
        this.ApiuserService.delete(id)
            .subscribe(responce => {
                this.ApiUserlist.splice(index, 1);
            },
                (error: AppError) => {
                    if (error instanceof BadInputError) {
                        alert('Invalid inputs.....!');
                    }
                    else if (error instanceof NotFoundError) {
                        alert('Theres no user exists....!');
                    }
                    else {
                        alert('Un handled error occured .....!');
                    }
                }

            )
    }

    saveUserDetails() {
        console.log(this.Apiuser);
        if (this.Apiuser.id == null) {
            this.ApiuserService.create(this.Apiuser)
                .subscribe(responce => {
                    this.ApiUserlist.splice(0, 0, responce as ApiUserModel);
                    this.tstService.success('Add Successfully');
                    // this.alertmessage = "User Added sucessfully"
                    // console.log(responce);
                },
                    (error: AppError) => {
                        if (error instanceof NotFoundError) {
                            alert('there no user exists......!');
                        }
                        else {
                            alert('Un handled error occured....!');
                        }
                    }
                )
        }
        else {
            this.ApiuserService.update(this.Apiuser.id, this.Apiuser)
                .subscribe(output => {
                    let itemIndex = this.ApiUserlist.indexOf(this.Apiuser);
                    this.ApiUserlist[itemIndex] = output as ApiUserModel;
                    this.tstService.success('Updated Successfully');
                    // console.log(output);
                    // this.alertmessage = "User Updated sucessfully"
                },
                    (error: AppError) => {
                        if (error instanceof BadInputError) {
                            alert('Invalid  inputs.....!');
                        }
                        else if (error instanceof NotFoundError) {
                            alert('theres no such user exists....');
                        }
                        else {
                            alert('Un handled error occured ....!')
                        }
                    }
                )
        }


        this.Apiuser = new ApiUserModel();
        this.userForm.reset();
    }
    addDetails() {
        this.alertmessage = "";
        this.Apiuser = new ApiUserModel();
        this.title = "Add User";
    }
    editDetails(user: ApiUserModel) {
        this.Apiuser = user;
        this.title = "Edit User";
    }
}