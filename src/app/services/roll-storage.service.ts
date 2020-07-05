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

  createOrUpdate(roll: StoredRoll): {created: boolean, roll: StoredRoll} {
    let created: boolean;
    let rolls = this.getRolls() || [];
    let existingRollIndex = this.findRoll(roll.name);
    if (existingRollIndex !== -1) {
      rolls[existingRollIndex] = roll;
      created = false;
    } else {
      rolls.push(roll);
      created = true;
    }
    console.log(rolls)
    this.storage.set(
      ROLLS_STORAGE_KEY,
      rolls.slice(Math.max(rolls.length - MAX_STORED_ROLLS, 0))
    );
    return {
      created: created,
      roll: roll
    }
  }

  getRolls(): StoredRoll[] {
    return this.storage.get(ROLLS_STORAGE_KEY) || [];
  }

  findRoll(rollName: string, rolls?: StoredRoll[]|undefined): number {
    rolls = rolls || [];
    rolls = rolls.length > 0 ? rolls : this.getRolls();
    return this.getRolls().findIndex(storedRoll => {
      return storedRoll.name === rollName;
    });
  }

  clearRolls() {
    this.storage.remove(ROLLS_STORAGE_KEY);
  }
}
