import { NgModule } from "@angular/core";
import { hdfchomeComponent } from "./hdfchome.component";
import { hdfcaboutComponent } from "./hdfcabout.component";
import { hdfccontactComponent } from "./hdfccontact.component";
import { hdfcLoansComponent } from "./hdfcloans.component";
import { RouterModule, Routes } from '@angular/router';
import { notFoundComponent } from "./notfound.component";
import { UserComponent } from "./user.component";
import { UserDetailsComponent } from "./userdetails.component";
import { ContactFormComponent } from "./contactform.component";

const routes: Routes = [
    {
        path: '',
        component: hdfchomeComponent
    },
    {
        path: 'home',
        component: hdfchomeComponent
    },
    {
        path: 'about',
        component: hdfcaboutComponent
    },
    {
        path: 'loans',
        component: hdfcLoansComponent
    },
    {
        path: 'contact',
        component: hdfccontactComponent
    },
    {
        path: 'user/:id',
        component: UserDetailsComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'contactform',
        component: ContactFormComponent
    },
    {
        path: '**',
        component: notFoundComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routeComponents = [hdfchomeComponent, hdfcaboutComponent, hdfccontactComponent, hdfcLoansComponent, notFoundComponent, UserComponent, UserDetailsComponent]