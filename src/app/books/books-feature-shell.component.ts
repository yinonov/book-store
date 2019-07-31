import { Component, OnInit } from '@angular/core';
import { BooksFacade } from '@app/shared/books/books.facade';

@Component({
  template: `
    <app-books-list [books]="booksFacade.list$ | async"></app-books-list>
    <router-outlet></router-outlet>
  `
})
export class BooksFeatureShellComponent implements OnInit {

  constructor(public booksFacade: BooksFacade) { }

  ngOnInit() {
  }

}
