import { Component } from "@angular/core";

@Component({
    selector: 'notfound',
    template: `<img  class="card style" style ="width:1200px;magin:auto;height:400px"[src]="imgurl"/>`
})

export class notFoundComponent {
    imgurl: string = "../assets/not.png"
}