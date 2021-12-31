import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";


@Component({
    selector: 'loginform',
    templateUrl: './loginForm.component.html'
})

export class loginFormComponent {
    signinform: any = new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
        dateofbirth: new FormControl('', Validators.required),
        mobile: new FormControl('', [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]),
        textarea: new FormControl('', Validators.minLength(10)),
        gender: new FormControl('', Validators.required),
        checkbox: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, this.donotentryspace])
    })
    get username() {
        return this.signinform.get('username');
    }
    get email() {
        return this.signinform.get('email');
    }
    get dateofbirth() {
        return this.signinform.get('dateofbirth');
    }
    get mobile() {
        return this.signinform.get('mobile');
    }
    get textarea() {
        return this.signinform.get('textarea');
    }
    get gender() {
        return this.signinform.get('gender');
    }
    get checkbox() {
        return this.signinform.get('checkbox');
    }
    get password() {
        return this.signinform.get('password');
    }
    donotentryspace(control: AbstractControl): ValidationErrors | null {
        let password = control.value as string;
        if (password.indexOf(' ') >= 0) {
            return { ContaninSpace: true };
        }
        return null;
    }



}