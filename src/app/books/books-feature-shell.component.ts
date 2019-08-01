import { Component, OnInit } from '@angular/core';
import { BooksFacade } from '@app/shared/books/books.facade';
import { WishListFacade } from '@app/shared/wish-list/wish-list.facade';

@Component({
  template: `
    <app-books-list
    [books]="booksFacade.list$ | async"
    [wishListDictionary]="wishListFacade.dictionary$ | async"
    (add)="onAdd($event)"></app-books-list>
    <router-outlet></router-outlet>
  `
})
export class BooksFeatureShellComponent {

  constructor(
    public booksFacade: BooksFacade,
    public wishListFacade: WishListFacade
  ) { }

  onAdd(book: Book) {
    this.wishListFacade.add({
      ...book,
      dateAdded: Date.now()
    });
  }

}
