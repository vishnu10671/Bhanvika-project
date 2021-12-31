import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { postService } from "./post.service";
import { postDetailsComponent } from "./postdetails.component";
import { PostListComponent } from "./postlist.component";

const routes: Routes = [
    {
        path: ':id',
        component: postDetailsComponent
    },
    {
        path: '',
        component: PostListComponent

    }

]
@NgModule({
    declarations:
        [
            PostListComponent,
            postDetailsComponent
        ],
    imports:
        [
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            HttpClientModule,
            RouterModule.forChild(routes)
        ],
    providers:
        [postService],
    bootstrap: []


})


export class PostModule {

}