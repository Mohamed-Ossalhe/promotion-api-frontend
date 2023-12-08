import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent {
  @Input() heading!: string;
  @Input() isVisible!: boolean;
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeModal() {
    this.closePopup.emit();
  }
}
