import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parent: string = 'this is parent message '
  child: string;
  constructor() { }

  ngOnInit(): void {
  }
  receivemessage() {
    console.log()
  }
}
