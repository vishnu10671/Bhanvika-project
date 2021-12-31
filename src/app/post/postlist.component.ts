import { Component, OnInit } from "@angular/core";
import { postModel } from "./post.model";
import { PostService } from "./post.service";

@Component({
    selector: 'postlist',
    templateUrl: './postlist.component.html'
})

export class PostListComponent implements OnInit {
    defaultPage: number = 1;
    posts: postModel[];
    post = new postModel();
    constructor(private PostService: PostService) {

    }
    ngOnInit(): void {
        this.PostService.getPosts()
            .subscribe(
                (outputData) => {
                    this.posts = outputData;
                },
                (error: Response) => {
                    if (error.status === 404) {
                        console.log(error);
                        alert('there is no posts exists.....!');
                    }
                    else {
                        console.log(error);
                        alert('Un Handled Erroe occured.....!');
                    }
                }
            )
    }
    deletePost(id: number, index: number) {
        this.PostService.deletePost(index)
            .subscribe(
                responce => {
                    this.posts.splice(index, 1);
                },
                (error: Response) => {
                    if (error.status === 404) {
                        console.log(error);
                        alert('This post already deleted......!');
                    }
                    else {
                        console.log(error);
                        alert('Un Handled Erroe occured.....!');
                    }
                }
            )
    }
    addPost() {

        this.PostService.createPost(this.post).
            subscribe(
                responce => {
                    this.posts.splice(0, 0, this.post);
                },
                (error: Response) => {
                    if (error.status === 400) {
                        console.log(error);
                        alert('Invalid inputs.....!');
                    }
                    else {
                        console.log(error);
                        alert('Un Handled Erroe occured.....!');
                    }
                }
            )
    }
}