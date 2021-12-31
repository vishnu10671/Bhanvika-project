import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { BillingModel } from "./billing.model";
import { BillingService } from "./billing.service";
@Component({
    selector: 'billinglist',
    templateUrl: '../Billing/billinglist.component.html'
})

export class BillinglistComponet implements OnInit {
    defaultPage: number = 1;
    editIndex: number;
    alertmessage: string;
    title: string;
    billlist: BillingModel[];
    formdata = new BillingModel();
    bilingform: any = new FormGroup({
        billitem: new FormControl('', Validators.required),
        billamount: new FormControl('', Validators.required)
    })

    get item() {
        return this.bilingform.get('billitem');
    }
    get amount() {
        return this.bilingform.get('billamount');
    }


    constructor(private billingService: BillingService, private tstService: ToastrService) {

    }
    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        this.billlist = this.billingService.getbills();
    }
    editBilllDetails(index: number, createDetails: BillingModel) {

        this.alertmessage = "";
        this.title = "Bill Edit";
        this.formdata = createDetails;
        this.editIndex = index;

    }
    addDetails() {
        this.alertmessage = "";
        this.title = "Bill ADD ";
    }
    saveDetails() {
        if (this.formdata.Id == null) {
            this.billingService.CreateBill(this.formdata);
            // this.alertmessage = "Bill Add Successfully"
            this.tstService.success('Add Successfully')
        }
        else {
            this.billingService.updatedBill(this.editIndex, this.formdata);
            // this.alertmessage = "Bill UpdatedSuccessfully"
            this.tstService.success('Updated Successfully')
        }

        this.formdata = new BillingModel();
        this.loadData();
        this.bilingform.reset();
    }
    deleteBill(index: number) {
        this.billingService.deletedBill(index);
        this.loadData();
    }
}

