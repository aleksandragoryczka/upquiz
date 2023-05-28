import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent {
  @Output() deleteQuizConfirmationEmitter = new EventEmitter<boolean>();
  constructor(
    public activeModal: NgbActiveModal) {}

  noConfirmDelete():void{
    this.activeModal.dismiss('Cross click');
    this.deleteQuizConfirmationEmitter.emit(false);
  }

  confirmDelete():void{
    this.activeModal.dismiss('Cross click');
    this.deleteQuizConfirmationEmitter.emit(true);
  }
}
