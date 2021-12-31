import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentService } from "./department.service";
import { DepartmentDetailsComponent } from "./departmentdetails.component";
import { DepartmentListComponet } from "./departmentlist.component";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule, ToastrService } from 'ngx-toastr';
const routes: Routes = [
    {
        path: ':id',
        component: DepartmentDetailsComponent
    },
    {
        path: '',
        component: DepartmentListComponet
    }
]
@NgModule({
    declarations: [
        DepartmentDetailsComponent,
        DepartmentListComponet
    ],
    imports: [
        FormsModule,
        CommonModule,
        NgxPaginationModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
    providers: [DepartmentService, ToastrService],
    bootstrap: []
})

export class DepartmentModule {

}