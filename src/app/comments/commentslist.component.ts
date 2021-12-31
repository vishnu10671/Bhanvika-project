import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { CommentsModel } from "./comments.model";
import { CommentsService } from "./comments.service";
@Component({
    selector: 'commentslist',
    templateUrl: './commentslist.component.html'
})
export class CommentsComponentList implements OnInit {
    defaultpage: number = 1;
    title: string;
    CommentsList: CommentsModel[];
    commentadata = new CommentsModel();
    commentForm: any = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required)
    })
    get Email() {
        return this.commentForm.get('email');
    }
    get Name() {
        return this.commentForm.get('name');
    }
    constructor(private commentservice: CommentsService, private tstservice: ToastrService) { }
    ngOnInit(): void {
        this.commentservice.getComments().subscribe((responce) => {
            this.CommentsList = responce;
        }),
            (error: Response) => {
                if (error.status === 404) {
                    alert('this comments alerdey deleted ');
                }
                else {
                    alert('unhandled error occured ');
                }
            }
    }

    delete(index: number, id: number) {
        this.commentservice.deleteComments(id).subscribe(responce => {
            this.CommentsList.splice(index, 1);
            this.tstservice.success("comment delete successfully");
        })
    }
    saveCommentsDetails() {
        if (this.commentadata.id == null) {
            this.commentservice.createComment(this.commentadata).subscribe(responce => {
                this.CommentsList.splice(0, 0, responce);
                this.tstservice.success("comment add successfully");
            }),
                (error: Response) => {
                    if (error.status === 404) {
                        alert('enter inputs doesnot exists');
                    }
                    else {
                        alert('unhandled error occured');
                    }
                }
        }
        else {
            this.commentservice.updateCommets(this.commentadata.id, this.commentadata).subscribe((output) => {
                let editindex = this.CommentsList.indexOf(this.commentadata);
                this.CommentsList[editindex] = output;
                this.tstservice.success("comment updated successfully");
            }),
                (error: Response) => {
                    if (error.status === 404) {
                        alert('the given inputs aleredy exists');
                    }
                    else {
                        alert('unhandled error occured');
                    }
                }
        }
        this.commentadata = new CommentsModel();
        this.commentForm.reset();
    }
    Addcomment() {
        this.commentadata = new CommentsModel();
        this.title = "Add";
    }
    editComment(comment: CommentsModel) {
        this.commentadata = comment;
        this.title = "Update";
    }
}