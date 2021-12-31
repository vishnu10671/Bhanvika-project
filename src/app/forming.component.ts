import { Component } from "@angular/core";

@Component({
  selector: 'organicform',
  templateUrl: './forming.component.html',
  styleUrls: ['./forming.component.css']
})


export class FormingComponent {
  isbaground: boolean = true;
  isstyle: boolean = true;
  name: string = "types of agriculture";
  sub: string = "Subsistence Farming:";
  imgurl: string = "./assets/agri.jpg";
  iscondition: boolean = true;
  shift: string = "Shifting Agriculture:";
  imgurl2: string = "./assets/shift.jpg";
  plant: string = "Plantation Agriculture:";
  imgurl3: string = "./assets/plant.jpg";
  imgurl4: string = "./assets/cycle.jpg";
  organic: boolean = false;

  agritypes() {
    this.organic = !this.organic;
  }

}
