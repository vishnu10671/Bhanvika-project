import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AppError } from "../validators/app.error";
import { BadInputError } from "../validators/bad-input.error";
import { NotFoundError } from "../validators/not-found.error";
import { AlbumModel } from "./album.model";
import { AlbumService } from "./album.service";
@Component({
    selector: 'albumList',
    templateUrl: './albumlist.component.html'
})
export class AlbumListComponent implements OnInit {
    defaultPage: number = 1;
    alubumList: AlbumModel[];
    alubum = new AlbumModel();
    alertmesage: string;
    title: string;
    alubumForm: any = new FormGroup({
        userid: new FormControl('', Validators.required),
        title: new FormControl('', Validators.required)
    })
    get Userid() {
        return this.alubumForm.get('userid');
    }
    get Title() {
        return this.alubumForm.get('title');
    }
    constructor(private albumservice: AlbumService, private tstService: ToastrService) {
    }
    ngOnInit(): void {
        this.albumservice.getAll()
            .subscribe(responce => {
                this.alubumList = responce as AlbumModel[];
            },
                (error: AppError) => {
                    if (error instanceof NotFoundError) {
                        alert('there no alubum exists....!');
                    }
                    else {
                        alert('Un handled error occured ....!')
                    }
                }
            )
    }
    deleteAlubum(id: number, index: number) {
        this.albumservice.delete(id)
            .subscribe(outputdata => {
                this.alubumList.splice(index, 1);
            },
                (error: AppError) => {
                    if (error instanceof NotFoundError) {
                        alert('there no alubum exists....!');
                    }
                    else if (error instanceof BadInputError) {
                        alert('there no loger alubum exists....!');
                    }
                    else {
                        alert('Un handled error occured ....!')
                    }
                }
            )
    }
    saveAlbumDetails() {
        if (this.alubum.id == null) {
            this.albumservice.create(this.alubum)
                .subscribe(responce => {
                    this.alubumList.splice(0, 0, responce as AlbumModel);
                    // this.alertmesage = "Album Add successfully";
                    this.tstService.success(' Add Successfully')
                },
                    (error: AppError) => {
                        if (error instanceof BadInputError) {
                            alert('invalid inputs....!');
                        }
                        else {
                            alert('Un handled error occured ....!')
                        }
                    }

                )
        }
        else {
            this.albumservice.update(this.alubum.id, this.alubum)
                .subscribe(output => {
                    let editIndex = this.alubumList.indexOf(this.alubum);
                    this.alubumList[editIndex] = output as AlbumModel;
                    // this.alertmesage = "Album Updated successfully";
                    this.tstService.success('Updated Successfully');
                },
                    (error: AppError) => {
                        if (error instanceof BadInputError) {
                            alert('invalid inputs....!');
                        }
                        else if (error instanceof NotFoundError) {
                            alert('theres no alubum exists....!');
                        }
                        else {
                            alert('Un handled error occured ....!')
                        }
                    }
                )
        }
        this.alubum = new AlbumModel();
        this.alubumForm.reset();
    }
    editAlbum(alubum: AlbumModel) {
        this.alubum = alubum;
        this.title = "EDIT ALBUM";
    }
    addAlubum() {
        this.title = "ADD ALBUM";
        this.alertmesage = "";
    }
}