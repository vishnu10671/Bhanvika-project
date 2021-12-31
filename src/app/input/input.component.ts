import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() inputvar: string;
  @Output() outpuvar: EventEmitter<string> = new EventEmitter();
  outputMsg: string = "this is child message and event emitter";
  constructor() { }

  ngOnInit(): void {
  }
  sendMsg() {
    this.outpuvar.emit(this.outputMsg);
  }

}
