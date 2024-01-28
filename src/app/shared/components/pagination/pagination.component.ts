import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input() currentPage: number = 1;
  @Output() pageChanged = new EventEmitter<number>();

  nextPage(): void {
    this.pageChanged.emit(this.currentPage + 1);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.pageChanged.emit(this.currentPage - 1);
    }
  }
}
