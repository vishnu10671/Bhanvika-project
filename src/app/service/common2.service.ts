import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AppError } from "../validators/app.error";
import { BadInputError } from "../validators/bad-input.error";
import { NotFoundError } from "../validators/not-found.error";


@Injectable()
export class CommonService2 {
    constructor(@Inject(String) private APIUrl: string, private httpClient: HttpClient) {

    }
    getAll() {
        return this.httpClient.get(this.APIUrl)
            .pipe(catchError(this.handleError));
    }
    getById(id: number) {
        let url = this.APIUrl + '/' + id;
        return this.httpClient.get(url)
            .pipe(catchError(this.handleError));
    }
    create(resourse: any) {
        return this.httpClient.post(this.APIUrl, resourse)
            .pipe(catchError(this.handleError));
    }
    update(id: number, resourse: any) {
        let url = this.APIUrl + '/' + id;
        return this.httpClient.put(url, resourse)
            .pipe(catchError(this.handleError));
    }
    delete(id: number) {
        let url = this.APIUrl + '/' + id;
        return this.httpClient.delete(url)
            .pipe(catchError(this.handleError))
    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return throwError(new BadInputError(error));
        }
        else if (error.status === 404) {
            return throwError(new NotFoundError(error));
        }
        else {
            return throwError(new AppError(AppError));
        }




    }
}