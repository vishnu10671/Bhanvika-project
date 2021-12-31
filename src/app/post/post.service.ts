import { Injectable } from "@angular/core";
import { postModel } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class PostService {
    private readonly APIUrl = "https://jsonplaceholder.typicode.com/posts"
    constructor(private HttpClient: HttpClient) {

    }

    getPosts(): Observable<postModel[]> {
        return this.HttpClient.get<postModel[]>(this.APIUrl);
    }
    getPostById(id: number): Observable<postModel> {
        let url = this.APIUrl + '/' + id;
        return this.HttpClient.get<postModel>(url);

    }
    createPost(post: postModel): Observable<postModel> {

        return this.HttpClient.post<postModel>(this.APIUrl, post);
    }
    updatePost(id: number, post: postModel): Observable<postModel> {
        let url = this.APIUrl + '/' + id;
        return this.HttpClient.put<postModel>(url, post);
    }
    deletePost(id: number) {
        let url = this.APIUrl + '/' + id;
        return this.HttpClient.delete(url);
    }

}