import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-value-input',
  templateUrl: './value-input.component.html',
  styleUrls: ['./value-input.component.css']
})
export class ValueInputComponent implements OnInit {
  @Input() maxValue: number;
  @Input() value: number;
  @Input() label: string;
  @Output() valueSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.value = this.value || 1;
    this.maxValue = this.maxValue || 99;
  }

  valueUpdate(value: number) {
    let newValue = this.value + value;
    if (1 <= newValue && newValue <= this.maxValue) {
      this.value = newValue;
      this.valueSelected.emit(this.value);
    }
  }
}
