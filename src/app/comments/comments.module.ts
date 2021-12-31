import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { CommentsService } from "./comments.service";
import { CommentsDetailsComponent } from "./commentsdetails.component";
import { CommentsComponentList } from "./commentslist.component";
const routes: Routes = [
    { path: ":id", component: CommentsDetailsComponent },
    { path: "", component: CommentsComponentList }
]

@NgModule({
    declarations: [
        CommentsComponentList,
        CommentsDetailsComponent
    ],
    imports: [
        CommonModule,
        ToastrModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        NgxPaginationModule
    ],
    providers: [CommentsService, ToastrService],
    bootstrap: []
})
export class CommentsModule {

}