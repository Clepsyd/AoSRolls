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
  interval: any;
  rolling: boolean;
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

  roll() {
    clearInterval(this.interval);
  }

  getRand(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

}
