import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { JobModel } from "./job.model";
import { JobService } from "./job.service";

@Component({
    selector: 'joblist',
    templateUrl: './joblist.component.html'
})
export class JobListComponent implements OnInit {
    joblist: JobModel[];
    jobmodel = new JobModel();
    title: string;
    editIndex: number;
    alertmessage: string;
    jobform: any = new FormGroup({
        employee: new FormControl('', Validators.required),
        disgnation: new FormControl('', Validators.required),
        salary: new FormControl('', Validators.required)
    })
    get Employee() {
        return this.jobform.get('employee');
    }
    get Disgnation() {
        return this.jobform.get('disgnation');
    }
    get Salary() {
        return this.jobform.get('salary');
    }
    constructor(private jobservice: JobService, private tstService: ToastrService) {

    }
    ngOnInit(): void {
        this.loadData();
    }
    loadData() {
        this.joblist = this.jobservice.getJobs();
    }
    delete(index: number) {
        this.jobservice.deleteJob(index);
        this.loadData();
    }
    saveJobdeatils() {
        if (this.jobmodel.Id == null) {
            this.jobservice.createJob(this.jobmodel);
            // this.alertmessage = "Add Job Successfully";
            this.tstService.success("Add Successfully")
        }
        else {
            this.jobservice.updatedJob(this.editIndex, this.jobmodel);
            // this.alertmessage = "Update Job Successfully";
            this.tstService.success("Updated Successfully")
        }
        this.jobmodel = new JobModel();
        this.loadData();
        this.jobform.reset();

    }
    adddeatails() {
        this.alertmessage = "";
        this.title = "ADD Employee";
    }
    editDetails(index: number, jobmodel: JobModel) {
        this.jobmodel = jobmodel;
        this.alertmessage = "";
        this.editIndex = index;
        this.title = "EDIT Employee";
    }



}