import { Component } from '@angular/core';
import { JoinComponent } from '../join/join.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(JoinComponent);
  }
}
