import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {
  @Input() books: Book[];
  @Output() add = new EventEmitter();

  constructor() { }

  onAdd(book: Book) {
    this.add.emit(book);
  }

}
