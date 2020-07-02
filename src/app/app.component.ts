import { Component, OnInit } from '@angular/core';
import { State, Values } from "./app.models";

const DEFAULT_VALUES = {nDice: 1, al: 10, rank: 1}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  states = State;
  state: State;
  values: Values;

  ngOnInit() {
    this.values = {...DEFAULT_VALUES}
    this.state = State.LOADED;
  }

  onValuesUpdate(values: Values) {
    this.values = values; console.log(this.values)
    this.state = this.states.ROLLING;
  }
}
