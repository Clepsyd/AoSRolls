export interface Values {
  nDice: number, sl: number, rank: number
}

export enum State {
  LOADED,
  ROLLING,
  ROLLED
}

export interface StoredRoll {
  name: string,
  nDice: number,
  sl: number,
  rank: number
}
