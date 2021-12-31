import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { reportModel } from "./reports.model";
import { reportService } from "./reports.service";


@Component({
    selector: 'reportdetail',
    templateUrl: './repotsdetails.component.html'
})

export class ReportdetailsComponent {
    report: reportModel;
    constructor(private route: ActivatedRoute, private reportService: reportService) {
        route.paramMap.subscribe((param) => {
            let id = param.get('id');
            this.report = reportService.getElementById(id ? parseInt(id) : 0);
        })
    }
}