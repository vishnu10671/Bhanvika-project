import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { JobModel } from "./job.model";
import { JobService } from "./job.service";

@Component({
    selector: "jobdetails",
    templateUrl: "./jobdetails.component.html"
})
export class JobDetailsComponent implements OnInit {
    jobdetails: JobModel;
    constructor(private route: ActivatedRoute, private jobservice: JobService) {

    }
    ngOnInit(): void {
        this.route.paramMap.subscribe(param => {
            let id = param.get('id');
            this.jobdetails = this.jobservice.getElementById(id ? parseInt(id) : 0);
        })
    }
}