import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Values } from '../app.models';

@Component({
  selector: 'app-rolling',
  templateUrl: './rolling.component.html',
  styleUrls: ['./rolling.component.css']
})
export class RollingComponent implements OnInit, OnDestroy {
  @Input() values: Values;
  dice: number[];
  originalRolls: number[];
  interval: any;
  rolling: boolean;
  result: number;
  constructor() { }

  ngOnInit(): void {
    this.dice = Array(this.values.nDice);
    this.updateDice(this.dice);
    this.interval = setInterval(() => {
      for (let index = 0; index < this.dice.length; index++) {
        this.dice[index] = this.getRand();
      }
    }, 50);
    this.rolling = true;
  }

  updateDice(dice: number[]): void {
    for (let index = 0; index < dice.length; index++) {
      dice[index] = this.getRand();
    }
  }

  stopRoll(): void {
    clearInterval(this.interval);
    this.rolling = false;
    this.originalRolls = [...this.dice];
    this.result = this.getResult();
  }

  getRand(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  substractRank(index: number): void {
    if (this.values.rank > 0 && this.dice[index] > 1) {
      this.dice[index] -= 1;
      this.values.rank -= 1;
    }
    this.result = this.getResult();
  }

  getResult() {
    const total = this.dice.reduce((acc, value) => acc + value, 0);
    if (total > this.values.al) {
      return 0
    } else {
      return 1 + this.dice.filter(die => die === 1).length;
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

}
