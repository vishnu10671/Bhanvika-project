import { Component } from "@angular/core";

@Component({
    selector: 'loans',
    templateUrl: './hdfcloans.component.html'
})

export class hdfcLoansComponent {
    colspan: number = 3;
    personal: string = "Personal loans:";
    home: string = "Home Loans:";
    car: string = "Car loans ";
    iscolor: boolean = true
}