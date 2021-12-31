import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { CricketModel } from "./cricket.model";
import { CricketService } from "./cricket.service";

@Component({
    selector: "cricketerslist",
    templateUrl: "./cricketerslist.component.html"
})
export class CricketersListComponent implements OnInit {
    cricketersList: CricketModel[];
    cricketersdata = new CricketModel();
    title: string;
    alertmessage: string;
    editIndex: number;
    cricketForm: any = new FormGroup({
        name: new FormControl('', Validators.required),
        born: new FormControl('', Validators.required),
        runs: new FormControl('', Validators.required)
    })
    get Name() {
        return this.cricketForm.get('name');
    }
    get Born() {
        return this.cricketForm.get('born');
    }
    get Runs() {
        return this.cricketForm.get('runs');
    }
    constructor(private cricketersservice: CricketService, private tstService: ToastrService) {

    }
    ngOnInit(): void {
        this.loadData();
    }
    loadData() {
        this.cricketersList = this.cricketersservice.getAll();
    }
    delete(index: number) {
        this.cricketersservice.deleteCricketer(index);
        this.loadData();
    }
    saveCricketersDetails() {
        if (this.cricketersdata.Id == null) {
            this.cricketersservice.createCricketer(this.cricketersdata);
            // this.alertmessage = "Cricketer Add Successfully";
            this.tstService.success('Add Successfully')
        }
        else {
            this.cricketersservice.updateCricketer(this.editIndex, this.cricketersdata);
            // this.alertmessage = "Cricketer Updated Successfully";
            this.tstService.success('Updated Successfully')
        }
        this.cricketersdata = new CricketModel();
        this.loadData();
        this.cricketForm.reset();

    }
    editCricketers(index: number, cricketermodel: CricketModel) {
        this.cricketersdata = cricketermodel;
        this.title = "EDIT Cricketer";
        this.alertmessage = "";
        this.editIndex = index;

    }
    addCricketer() {
        this.alertmessage = "";
        this.title = "ADD Cricketer";
    }



}