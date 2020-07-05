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
    private rollStorage: RollStorageService
  ) {}

  @Input() values: Values;
  @Output() valuesUpdate = new EventEmitter<Values>();
  @Input() rollName: string;
  message = '';


  submit() {
    this.valuesUpdate.emit(this.values);
    if (!!this.rollName) {
      let response = this.rollStorage.createOrUpdate({
        name: this.rollName,
        ...this.values
      });
      console.log(response);
      console.log(this.rollStorage.getRolls());
    }
  }
}
