import { Injectable, Inject } from '@angular/core';
import { StoredRoll } from "../app.models";
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const ROLLS_STORAGE_KEY = 'AoSRolls'
const MAX_STORED_ROLLS = 5;

@Injectable({
  providedIn: 'root'
})
export class RollStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  addRoll(roll: StoredRoll) {
    let rolls = this.getRolls() || [];
    let existingRoll = rolls.filter(storedRoll => storedRoll.name === roll.name)[0]
    if (!!existingRoll) {
      Object.keys(roll).forEach(key => existingRoll[key] = roll[key]);
    } else {
      rolls.push(roll);
    }
    this.storage.set(
      ROLLS_STORAGE_KEY,
      rolls.slice(Math.max(rolls.length - MAX_STORED_ROLLS, 0))
    );
  }

  getRolls(): StoredRoll[] {
    return this.storage.get(ROLLS_STORAGE_KEY) || [];
  }
}
