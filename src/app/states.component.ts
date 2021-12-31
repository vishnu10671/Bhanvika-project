import { Component } from "@angular/core";

@Component({
    selector: 'stateDetails',
    templateUrl: './states.component.html',

})
export class StateComponent {
    States: string[] = ["telangana", "andrapradesh", "karnata", "tamilnadu"];
    imgurl: string = '../assets/hyd.jpg';
    imgurl2: string = '../assets/ap.jpg';
    imgurl3: string = '../assets/kn.jpg';
    imgurl4: string = '../assets/tamil.jpg';
    imgurl5: string = '../assets/india.jpg';
    imgurl6: string = '../assets/aus.jpg';
    imgurl7: string = '../assets/sa.jpg';
    imgurl8: string = '../assets/en.jpg';

}