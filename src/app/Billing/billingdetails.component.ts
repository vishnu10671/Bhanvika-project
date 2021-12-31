import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BillingModel } from "./billing.model";
import { BillingService } from "./billing.service";


@Component({
    selector: 'billdetails',
    templateUrl: '../Billing/billingdetails.component.html'

})

export class billingdetailsComponent {
    billDeatils: BillingModel;
    constructor(private route: ActivatedRoute, private billService: BillingService) {
        route.paramMap.subscribe((param) => {
            let id = param.get('id');
            this.billDeatils = billService.getElementById(id ? parseInt(id) : 0);
        })

    }
}