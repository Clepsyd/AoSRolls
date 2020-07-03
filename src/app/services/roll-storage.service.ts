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
    let existingRoll = this.findRoll(roll.name);
    if (!!existingRoll) {
      Object.keys(roll).forEach(key => existingRoll[key] = roll[key]);
      created = false;
    } else {
      rolls.push(roll);
      created = true;
    }
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

  findRoll(rollName: string): StoredRoll | undefined {
    return this.getRolls().filter(storedRoll => {
      return storedRoll.name === rollName;
    })[0];
  }
}
