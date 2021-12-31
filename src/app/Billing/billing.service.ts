import { BillingModel } from "./billing.model";

export class BillingService {
    billinglist: BillingModel[] = [
        {
            Id: 1, Item: "Soaps", NumberofItems: 2, Amount: 30, Total: 60
        },
        {
            Id: 2, Item: "Shirts", NumberofItems: 4, Amount: 500, Total: 2000
        },
        {
            Id: 3, Item: "Rice", NumberofItems: 1, Amount: 1500, Total: 1500
        },
        {
            Id: 4, Item: "Fans", NumberofItems: 1, Amount: 1450, Total: 1450

        },
    ]
    getbills(): BillingModel[] {
        return this.billinglist;
    }
    CreateBill(billDetails: BillingModel) {
        billDetails.Id = this.billinglist.length + 1;
        this.billinglist.push(billDetails);
    }
    updatedBill(index: number, billDetails: BillingModel) {
        this.billinglist[index] = billDetails;
    }
    deletedBill(index: number) {
        this.billinglist.splice(index, 1);
    }
    getElementById(id: number): BillingModel {
        let billdetails = this.billinglist.filter(x => x.Id == id)[0]
        return billdetails;
    }
}