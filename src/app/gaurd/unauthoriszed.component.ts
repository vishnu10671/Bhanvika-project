import { Component } from "@angular/core";

@Component({
    selector: 'unAuthorized',
    template: `<div class=" card style">
    <img style="width: 500px;height: 200px;margin:auto" [src]="imgurl" />
              </div>`
})
export class UnAuthorisedComponent {
    imgurl: string = '../assets/unauth.jpg';
}