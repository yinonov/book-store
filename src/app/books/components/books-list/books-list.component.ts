import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {
  @Input() books: Book[];
  @Input() wishListDictionary: Dictionary<Wish>;
  @Output() add: EventEmitter<Book> = new EventEmitter();
  @Output() remove: EventEmitter<Book> = new EventEmitter();

  isWished({ id }: Book) {
    return this.wishListDictionary[id];
  }

  onWishListClick(book: Book) {
    this.isWished(book)
      ? this.remove.emit(book)
      : this.add.emit(book);
  }

}
