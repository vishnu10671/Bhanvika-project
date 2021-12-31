import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CricketModel } from "./cricket.model";
import { CricketService } from "./cricket.service";

@Component({
    selector: "cricketerdetails",
    templateUrl: "./cricketerdetails.component.html"
})
export class CricketerDetailsComponent implements OnInit {
    cricketrerdetail: CricketModel;
    constructor(private route: ActivatedRoute, private cricketservice: CricketService) {

    }
    ngOnInit(): void {
        this.route.paramMap.subscribe(param => {
            let id = param.get('id');
            this.cricketrerdetail = this.cricketservice.getElementById(id ? parseInt(id) : 0);
        })
    }


}