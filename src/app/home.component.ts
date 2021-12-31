import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',

})
export class HomeComponent {
    imgurl2: string = '../assets/home.jpg';

    imgurl4: string = '../assets/ramoji.jpg';
    imgurl5: string = '../assets/hyd.jpg';
    title = "Best Places to Visit"
}