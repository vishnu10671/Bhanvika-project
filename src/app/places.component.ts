import { Component } from "@angular/core";


@Component({
    selector: 'places',
    templateUrl: './places.component.html'
})

export class placesComponent {
    golcondaurl: string = '../assets/gol.jpg';
    bogathaurl: string = '../assets/bogatha.jpg';
    ramappaurl: string = '../assets/rama.jpg';
    name: string = "GOLCONDA";
    istrue: boolean = true;
    colspan = 3;
    bogatha = "BOGATHA WATERFALLS";
    ramapa = "RAMAPPA TEMPLE"
}