import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DepartmentModel } from "./department.model";

import { DepartmentService } from "./department.service";

@Component({
    selector: 'departmentdetails',
    templateUrl: './departmentdetails.component.html'
})
export class DepartmentDetailsComponent implements OnInit {
    departmentdetails: DepartmentModel;
    constructor(private route: ActivatedRoute, private deptservice: DepartmentService) {

    }
    ngOnInit(): void {
        this.route.paramMap.subscribe(param => {
            let id = param.get('id');
            this.deptservice.getById((id || '').toString()).subscribe((output: any) => {
                console.log(output);
                this.departmentdetails = output;
            })
        })
    }


}