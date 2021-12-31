import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { CommonService2 } from "../service/common2.service";



@Injectable()
export class ApiUserService extends CommonService2 {
    constructor(httpClient: HttpClient) {
        super("https://jsonplaceholder.typicode.com/users", httpClient)
    }
}