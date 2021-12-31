import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommentsModel } from "./comments.model";

@Injectable()

export class CommentsService {
    private readonly APIUrl = "https://jsonplaceholder.typicode.com/comments";
    constructor(private httpclient: HttpClient) {
    }
    getComments(): Observable<CommentsModel[]> {
        return this.httpclient.get<CommentsModel[]>(this.APIUrl);
    }
    getCommentById(id: number): Observable<CommentsModel> {
        let url = this.APIUrl + '/' + id;
        return this.httpclient.get<CommentsModel>(url);
    }
    updateCommets(id: number, comment: CommentsModel): Observable<CommentsModel> {
        let url = this.APIUrl + '/' + id;
        return this.httpclient.put<CommentsModel>(url, comment);
    }
    createComment(comment: CommentsModel): Observable<CommentsModel> {
        return this.httpclient.post<CommentsModel>(this.APIUrl, comment);
    }
    deleteComments(id: number) {
        let url = this.APIUrl + '/' + id;
        return this.httpclient.delete(url);
    }
}
