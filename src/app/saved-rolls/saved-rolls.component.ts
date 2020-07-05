import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { StoredRoll } from '../app.models';
import { RollStorageService } from "../services/roll-storage.service";

@Component({
  selector: 'app-saved-rolls',
  templateUrl: './saved-rolls.component.html',
  styleUrls: ['./saved-rolls.component.css']
})
export class SavedRollsComponent {
  @Input() savedRolls: StoredRoll[];
  @Output() select = new EventEmitter<StoredRoll>();
  open: boolean;
  deleting = false;

  constructor(private rollStorageService: RollStorageService) {}

  onSelect(savedRoll: StoredRoll) {
    this.select.emit(savedRoll);
  }

  deleteSavedRolls(shouldDelete: boolean) {
    if (shouldDelete) {
      this.rollStorageService.clearRolls();
      this.savedRolls = [];
    }
    this.deleting = false
  }
}
