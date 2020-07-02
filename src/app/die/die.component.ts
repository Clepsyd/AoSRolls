import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-die',
  templateUrl: './die.component.html',
  styleUrls: ['./die.component.css']
})
export class DieComponent{
  @Input() value: number;
  @Input() index: number;
}
