import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TodoModel } from "./todo.model";

@Injectable()

export class TodoService {

    private readonly APIUrl = "https://jsonplaceholder.typicode.com/todos";
    constructor(private httpClient: HttpClient) {

    }
    getAll(): Observable<TodoModel[]> {
        return this.httpClient.get<TodoModel[]>(this.APIUrl);
    }
    getTodeById(id: number): Observable<TodoModel> {
        let url = this.APIUrl + '/' + id;
        return this.httpClient.get<TodoModel>(url);
    }
    createTode(tode: TodoModel): Observable<TodoModel> {
        return this.httpClient.post<TodoModel>(this.APIUrl, tode)
    }
    updatedTode(id: number, tode: TodoModel): Observable<TodoModel> {
        let url = this.APIUrl + '/' + id;
        return this.httpClient.put<TodoModel>(url, tode);
    }
    deletedTode(id: number) {
        let url = this.APIUrl + '/' + id;
        return this.httpClient.delete(url);
    }
}