import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { CommonService } from "../service/common.service";


@Injectable()
export class AlbumService extends CommonService {

    constructor(httpClient: HttpClient) {
        super("https://jsonplaceholder.typicode.com/albums", httpClient)
    }

}