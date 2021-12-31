import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { BillingService } from "./billing.service";
import { billingdetailsComponent } from "./billingdetails.component";
import { BillinglistComponet } from "./billinglist.component";
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
    {
        path: ':id',
        component: billingdetailsComponent
    },
    {
        path: '',
        component: BillinglistComponet
    }
]

@NgModule({
    declarations: [
        billingdetailsComponent,
        BillinglistComponet
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [BillingService],
    bootstrap: []

})

export class BillingModule {

}