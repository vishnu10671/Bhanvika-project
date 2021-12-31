import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BillingModule } from './Billing/billing.module';
import { notFoundComponent } from './notfound.component';
import { RouterModule, Routes } from '@angular/router';
import { ReportModule } from './Reports/reports.module';
import { loginFormComponent } from './loginForm.component';
import { PostService } from './post/post.service';
import { PostListComponent } from './post/postlist.component';
import { HttpClientModule } from '@angular/common/http';
import { postDetailsComponent } from './post/postdetails.component';
import { TodoService } from './Todo/todo.service';
import { TodeListComponent } from './Todo/todolist.component';
import { TodoDetailsComponent } from './Todo/tododetails.component';
import { CommonModule } from '@angular/common';
import { ApiUserService } from './user/user.service';
import { ApiUserListComponent } from './user/userlist.component';
import { ApiUserDetailsComponent } from './user/userdetails.component';
import { UserLoginComponent } from './login.component';
import { UnAuthorisedComponent } from './gaurd/unauthoriszed.component';
import { AuthorizedGaurd } from './gaurd/auth.gaurd';
import { SummeryPipe } from './pipe/summery.pipe';
import { AlbumService } from './albums/album.service';
import { AlbumListComponent } from './albums/albumlist.component';
import { AlubumDetailsComponent } from './albums/albumdetails.component';
import { CommonService } from './service/common.service';
import { CommonService2 } from './service/common2.service';
import { DepartmentModule } from './department/department.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommentsModule } from './comments/comments.module';
import { InputComponent } from './input/input.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: '',
    component: UserLoginComponent
  },

  {
    path: 'bill-list',
    loadChildren: () => BillingModule,
    canActivate: [AuthorizedGaurd]

  },
  {
    path: 'department-list',
    loadChildren: () => DepartmentModule,
    canActivate: [AuthorizedGaurd]

  },
  {
    path: 'report',
    loadChildren: () => ReportModule,
    canActivate: [AuthorizedGaurd]
  },
  {
    path: 'signinform',
    component: loginFormComponent
  },
  {
    path: 'postlist/:id',
    component: postDetailsComponent,
    canActivate: [AuthorizedGaurd]
  },
  {
    path: 'postlist',
    component: PostListComponent,
    canActivate: [AuthorizedGaurd]
  },
  {
    path: 'todolist/:id',
    component: TodoDetailsComponent,
    canActivate: [AuthorizedGaurd]
  },
  {
    path: 'todolist',
    component: TodeListComponent,
    canActivate: [AuthorizedGaurd]
  },
  {
    path: 'userlist/:id',
    component: ApiUserDetailsComponent,
    canActivate: [AuthorizedGaurd]
  },
  {
    path: 'userlist',
    component: ApiUserListComponent,
    canActivate: [AuthorizedGaurd]
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'alubumlist/:id',
    component: AlubumDetailsComponent,
    canActivate: [AuthorizedGaurd]
  },
  {
    path: 'alubumlist',
    component: AlbumListComponent,
    canActivate: [AuthorizedGaurd]
  },
  {
    path: 'commentlist',
    loadChildren: () => CommentsModule
  },
  {
    path: 'unauthrized',
    component: UnAuthorisedComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: '**',
    component: notFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    loginFormComponent,
    PostListComponent,
    postDetailsComponent,
    TodeListComponent,
    TodoDetailsComponent,
    ApiUserListComponent,
    ApiUserDetailsComponent,
    UserLoginComponent,
    UnAuthorisedComponent,
    SummeryPipe,
    AlbumListComponent,
    AlubumDetailsComponent,
    notFoundComponent,
    InputComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostService, TodoService, ApiUserService, AuthorizedGaurd, AlbumService, CommonService, CommonService2, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
