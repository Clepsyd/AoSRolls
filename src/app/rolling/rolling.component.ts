import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Values } from '../app.models';
import { interval } from 'rxjs';

enum Modes {
  ROLL,
  REROLL
}

@Component({
  selector: 'app-rolling',
  templateUrl: './rolling.component.html',
  styleUrls: ['./rolling.component.css']
})
export class RollingComponent implements OnInit, OnDestroy {
  modes = Modes;
  mode: Modes = Modes.ROLL;
  @Input() values: Values;
  rankPool: number;
  dice: number[];
  originalRolls: number[];
  intervals = [];
  rolling: boolean;
  result: number;
  constructor() { }

  ngOnInit(): void {
    this.rankPool = this.values.rank;
    this.dice = Array(this.values.nDice);
    for (let index = 0; index < this.dice.length; index++) {
      this.intervals.push(this.rollDie(index));
    }
    this.rolling = true;
  }

  stopRoll(): void {
    this.clearIntervals();
    this.mode = Modes.ROLL;
    this.intervals = [];
    this.rolling = false;
    this.originalRolls = [...this.dice];
    this.result = this.getResult();
  }

  enableReroll() {
    this.dice = [...this.originalRolls];
    this.rankPool = this.values.rank;
    this.mode = Modes.REROLL;
    this.rolling = true;
  }

  getRand(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  rollDie(index: number) {
    return setInterval(() => {
      this.dice[index] = this.getRand();
    }, 50);
  }

  onDiceClick(index: number): void {
    switch (this.mode) {
      case Modes.ROLL:
        this.substractRank(index);
        break;

      case Modes.REROLL:
        this.intervals.push(this.rollDie(index));
        break;
    }
  }

  substractRank(index: number): void {
    if (this.rankPool > 0 && this.dice[index] > 1) {
      this.dice[index] -= 1;
      this.rankPool -= 1;
    }
    this.result = this.getResult();
  }

  getResult() {
    const total = this.dice.reduce((acc, value) => acc + value, 0);
    if (total > this.values.sl) {
      return 0
    } else {
      return 1 + this.dice.filter(die => die === 1).length;
    }
  }

  clearIntervals() {
    this.intervals.forEach(interval => {
      clearInterval(interval);
    });
  }

  ngOnDestroy(): void {
    this.clearIntervals();
  }

}
