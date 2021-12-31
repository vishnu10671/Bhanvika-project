import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { postModel } from "./post.model";
import { PostService } from "./post.service";

@Component({
    selector: 'postdetails',
    templateUrl: './postdetails.component.html'
})

export class postDetailsComponent implements OnInit {
    post = new postModel();
    constructor(private postService: PostService, private route: ActivatedRoute) {

    }
    ngOnInit(): void {
        this.route.paramMap.subscribe(param => {
            let id = param.get('id');
            this.postService.getPostById(id ? parseInt(id) : 0)
                .subscribe(
                    responce => {
                        this.post = responce;
                    },
                    (error: Response) => {
                        if (error.status === 404) {
                            alert('the post no Longer Exists')
                        }
                        else {
                            console.log(error);
                            alert('Un handled error Occired ....!')
                        }
                    }
                )

        })
    }

}