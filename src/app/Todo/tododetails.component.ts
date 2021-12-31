import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TodoModel } from "./todo.model";
import { TodoService } from "./todo.service";

@Component({
    selector: 'tododetails',
    templateUrl: './tododetails.component.html'
})

export class TodoDetailsComponent implements OnInit {
    todomodel = new TodoModel();
    constructor(private todoservice: TodoService, private route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.route.paramMap.subscribe(param => {

            let id = param.get('id');
            this.todoservice.getTodeById(id ? parseInt(id) : 0)
                .subscribe(
                    (responce) => {
                        this.todomodel = responce;
                    },
                    (error: Response) => {
                        if (error.status === 404) {
                            alert('there No longer tods exist....!');
                        }
                        else {
                            alert('Un handling error occured....!');
                        }
                    }
                )
        })

    }
}