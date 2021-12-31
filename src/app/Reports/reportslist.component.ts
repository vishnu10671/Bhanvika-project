import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { reportModel } from "./reports.model";
import { reportService } from "./reports.service";
@Component({
    selector: 'reportlist',
    templateUrl: './reportslist.component.html'
})

export class reportListComponent implements OnInit {
    editIndex: number;
    title: string;
    alertmesage: string;
    reportlist: reportModel[];
    reportdata = new reportModel();
    reportForm: any = new FormGroup({

        productName: new FormControl('', Validators.required),
        distributorName: new FormControl('', Validators.required)
    })

    get product() {
        return this.reportForm.get('productName');
    }
    get distributor() {
        return this.reportForm.get('distributorName');
    }
    constructor(private reportService: reportService, private tstService: ToastrService) {

    }
    ngOnInit(): void {
        this.loadData();

    }
    loadData() {
        this.reportlist = this.reportService.getReports();
    }
    editrepotDetails(index: number, reportDetails: reportModel) {
        this.alertmesage = '';
        this.title = 'Edit Report';
        this.reportdata = reportDetails;
        this.editIndex = index;
    }
    addreportDetails() {
        this.alertmesage = '';
        this.title = 'Add Report';
        this.reportdata = new reportModel();
    }
    savereportDetails() {
        if (this.reportdata.Id == null) {
            this.reportService.createReport(this.reportdata);
            // 
            this.tstService.success("Add Successfully")
        }
        else {
            this.reportService.updateReport(this.editIndex, this.reportdata);
            // this.alertmesage = 'Report Updated succesfully';
            this.tstService.success("Updated Successfully")
        }
        this.loadData();
        this.reportdata = new reportModel();
        this.reportForm.reset();
    }
    deletereport(index: number) {
        this.reportService.deleteReport(index);
        this.loadData();
    }
}