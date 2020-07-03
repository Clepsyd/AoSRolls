import { Component, OnInit } from '@angular/core';
import { RollStorageService } from "./services/roll-storage.service";
import { State, Values, StoredRoll } from "./app.models";

const DEFAULT_VALUES = {nDice: 1, al: 10, rank: 1}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private storage: RollStorageService) {}

  rollName: string;
  savedRolls: StoredRoll[];
  states = State;
  state: State;
  values: Values;

  ngOnInit() {
    this.init();
  }

  onValuesUpdate(values: Values) {
    this.values = values;
    this.state = State.ROLLING;
  }

  goHome () {
    this.init()
  }

  init() {
    this.rollName = '';
    this.values = {...DEFAULT_VALUES}
    this.state = State.LOADED;
    this.savedRolls = this.storage.getRolls();
  }

  setSavedRoll(savedRoll: StoredRoll) {
    this.rollName = savedRoll.name
    this.values = {
      nDice: savedRoll.nDice,
      al: savedRoll.al,
      rank: savedRoll.rank,
    }
  }
}
