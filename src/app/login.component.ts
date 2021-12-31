import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginModel } from "./login.model";


@Component({
    selector: 'userelogin',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})

export class UserLoginComponent {
    name: string = "login here";
    title: string = "LoginForm";
    loginmodel = new LoginModel();
    col: number = 2;
    loginform: any = new FormGroup({
        employee: new FormControl('', Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")),
        password: new FormControl('', Validators.required)

    })
    get Employee() {
        return this.loginform.get('employee');
    }
    get Password() {
        return this.loginform.get('password');
    }

    login() {
        let employee = "vishnu@gmail.com";
        let password = "1234";
        if (this.loginmodel.username == employee && this.loginmodel.password == password) {
            localStorage.setItem("isAuthorize", "true");
            alert('employee login successfuly');
            this.loginmodel = new LoginModel();
        }
        else {
            alert(' invalid Credintials');
        }
        this.loginform.reset()

    }


}