import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlbumModel } from "./album.model";
import { AlbumService } from "./album.service";

@Component({
    selector: 'alubumdeatils',
    templateUrl: './albumdetails.component.html'
})
export class AlubumDetailsComponent {
    alubumdetails: AlbumModel;
    constructor(private alubumservice: AlbumService, route: ActivatedRoute) {
        route.paramMap.subscribe(param => {
            let id = param.get('id');
            this.alubumservice.getById(id ? parseInt(id) : 0).subscribe(outputdata => {
                this.alubumdetails = outputdata as AlbumModel;
            })
        })

    }

}