import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { StoredRoll } from '../app.models';

@Component({
  selector: 'app-saved-rolls',
  templateUrl: './saved-rolls.component.html',
  styleUrls: ['./saved-rolls.component.css']
})
export class SavedRollsComponent {
  @Input() savedRolls: StoredRoll[];
  @Output() select = new EventEmitter<StoredRoll>();
  open: boolean;

  onSelect(savedRoll: StoredRoll) {
    this.select.emit(savedRoll);
  }
}
