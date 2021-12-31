import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommentsModel } from "./comments.model";
import { CommentsService } from "./comments.service";

@Component({
    selector: 'commentsdetails',
    templateUrl: './commentsdetails.component.html'
})

export class CommentsDetailsComponent implements OnInit {
    commentdetails = new CommentsModel();
    constructor(private route: ActivatedRoute, private service: CommentsService) { }
    ngOnInit(): void {
        this.route.paramMap.subscribe((param) => {
            let id = param.get('id');
            this.service.getCommentById(id ? parseInt(id) : 0).subscribe(responce => {
                this.commentdetails = responce;
                console.log(responce);
            }),
                (error: Response) => {
                    if (error.status === 400) {
                        alert('bad input error');
                    }
                    else if (error.status === 404) {
                        alert('does not exist such comments ');
                    }
                    else {
                        alert('Unhandled error Occured');
                    }
                }
        })

    }
}
