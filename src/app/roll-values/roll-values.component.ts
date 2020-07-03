import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { RollStorageService } from "../services/roll-storage.service";
import { Values } from "../app.models";

@Component({
  selector: 'app-roll-values',
  templateUrl: './roll-values.component.html',
  styleUrls: ['./roll-values.component.css']
})
export class RollValuesComponent {
  constructor(
    private rollStorageService: RollStorageService
  ) {}

  @Input() values: Values;
  @Output() valuesUpdate = new EventEmitter<Values>();
  @Input() rollName: string;

  submit() {
    this.valuesUpdate.emit(this.values);
    if (!!this.rollName) {
      this.rollStorageService.addRoll({
        name: this.rollName,
        ...this.values
      });
    }
    alert("Your roll was saved.")
  }
}
