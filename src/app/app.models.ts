export interface Values {
  nDice: number, al: number, rank: number
}

export enum State {
  LOADED,
  ROLLING,
  ROLLED
}

export interface StoredRoll {
  name: string,
  nDice: number,
  al: number,
  rank: number
}
