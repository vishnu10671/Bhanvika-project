
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { TodoModel } from "./todo.model";
import { TodoService } from "./todo.service";
@Component({
    selector: 'todolist',
    templateUrl: './todolist.component.html'
})
export class TodeListComponent implements OnInit {
    defaultPage: number = 1;
    alertmessage: string;
    editIndex: number;
    titleName: string;
    todelist: TodoModel[];
    tode = new TodoModel();
    todoForm: any = new FormGroup({
        title: new FormControl('', Validators.required),
        completed: new FormControl('', Validators.required),
        userId: new FormControl('')
    })
    get title() {
        return this.todoForm.get('title');
    }
    get complete() {
        return this.todoForm.get('completed');
    }
    constructor(private todoservise: TodoService, private tstService: ToastrService) {

    }
    ngOnInit(): void {
        this.todoservise.getAll()
            .subscribe(
                (outputData) => {
                    this.todelist = outputData;
                },
                (error: Response) => {
                    if (error.status === 404) {
                        alert('there no todos Exists.....!');
                    }
                    else {
                        console.log(error);
                        alert('Un handled Error occured.....!');
                    }
                }
            )
    }

    saveDetails() {
        if (this.tode.id == null) {
            this.todoservise.createTode(this.tode)
                .subscribe(responce => {
                    this.todelist.splice(0, 0, responce);
                    // this.alertmessage = "Todo is Add successfull"
                    this.tstService.success('Add Successfully')
                },
                    (error: Response) => {
                        if (error.status === 400) {
                            alert('there Tods Nologer exists.....!');
                        }
                        else {
                            console.log(error);
                            alert('Un handled error occured .....!')
                        }
                    }
                )

        }
        else {
            this.todoservise.updatedTode(this.tode.id, this.tode)
                .subscribe(
                    (responce) => {
                        let editIndex = this.todelist.indexOf(this.tode);
                        this.todelist[editIndex] = responce;
                        // this.alertmessage = "Todo is Updated successfull"
                        this.tstService.success('Updated  Successfully')
                    },
                    (error: Response) => {
                        if (error.status === 404) {
                            alert('theres no tods exist...!');
                        }
                        else {
                            console.log(error);
                            alert('Un handling error occured .....!')
                        }
                    }
                )

        }

        this.tode = new TodoModel();
        this.todoForm.reset();

    }
    addTodoDetails() {
        this.alertmessage = ""
        this.tode = new TodoModel();
        this.titleName = " TODO ADD"

    }
    editDetails(index: number, Todo: TodoModel) {
        this.alertmessage = ''
        this.titleName = 'TODO EDIT'
        this.tode = Todo;
        this.editIndex = index;
    }

    delete(id: number, index: number) {
        this.todoservise.deletedTode(id)
            .subscribe(
                (responce) => {
                    this.todelist.splice(index, 1);
                },
                (error: Response) => {
                    if (error.status === 404) {
                        alert('this todo alerady deleted.....!');
                    }
                    else {
                        console.log(error);
                        alert('Un handled Error occured .....!');
                    }
                }
            )
    }

}
