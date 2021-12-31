import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DepartmentModel } from "./department.model";
import { DepartmentService } from "./department.service";
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'departmentlist',
    templateUrl: './departmentlist.component.html'
})

export class DepartmentListComponet implements OnInit {
    defaultPage: number = 1;
    alertmessage: string;
    title: string;
    departmentlist: DepartmentModel[];
    departmentmodel = new DepartmentModel();
    departmentform: any = new FormGroup({
        Name: new FormControl('', Validators.required),
        Description: new FormControl('', Validators.required)
    })
    get name() {
        return this.departmentform.get('Name');
    }
    get description() {
        return this.departmentform.get('Description');
    }
    constructor(private departmentservice: DepartmentService, private tstService: ToastrService) {

    }

    ngOnInit(): void {
        this.loadData();
    }
    loadData() {
        this.departmentservice.getAll().subscribe((responce) => {
            console.log(responce);
            this.departmentlist = responce.map((data: any) => {
                return {
                    id: data.payload.doc.id,
                    ...data.payload.doc.data()
                } as DepartmentModel;

            });
            console.log(this.departmentlist);
        })
    }
    saveDepartmentDetails() {
        if (this.departmentmodel.id) {
            this.departmentservice.update(this.departmentmodel);
            // this.alertmessage = "Department update successfull";
            this.tstService.success('Updated Successfully');

        }
        else {
            this.departmentservice.create(this.departmentmodel);
            // this.alertmessage = "Department add successfull";
            this.tstService.success('Add Successfully')
        }
        this.departmentmodel = new DepartmentModel();
        this.departmentform.reset()
        this.loadData();
    }
    addDetails() {
        this.title = "Add Department";
        this.alertmessage = ""
        this.departmentmodel = new DepartmentModel();
        this.departmentform.reset();
    }
    editDetails(department: DepartmentModel) {
        this.alertmessage = "";
        this.title = "Edit Department";
        this.departmentmodel = department;
    }
    delete(id: string) {
        this.departmentservice.delete(id);
        this.loadData();
        this.tstService.success('Delete Sucessfully');
    }
}




