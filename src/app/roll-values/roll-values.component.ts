import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Values } from "../app.models";

@Component({
  selector: 'app-roll-values',
  templateUrl: './roll-values.component.html',
  styleUrls: ['./roll-values.component.css']
})
export class RollValuesComponent {
  @Input() values: Values;
  @Output() valuesUpdate = new EventEmitter<Values>();

  submit() {
    this.valuesUpdate.emit(this.values)
  }
}
