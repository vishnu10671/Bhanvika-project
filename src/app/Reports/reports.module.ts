import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { reportService } from "./reports.service";
import { ReportdetailsComponent } from "./reportsdetails.component";
import { reportListComponent } from "./reportslist.component";

const routes: Routes = [
    {
        path: ':id',
        component: ReportdetailsComponent
    },
    {
        path: '',
        component: reportListComponent
    },
]
@NgModule({
    declarations: [
        reportListComponent,
        ReportdetailsComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [reportService],
    bootstrap: []
})


export class ReportModule {

}