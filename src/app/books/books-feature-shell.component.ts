import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { BooksFacade } from '@app/shared/books/books.facade';
import { WishListFacade } from '@app/shared/wish-list/wish-list.facade';
import { SearchPortalService } from '@app/core/components/header/search-portal.service';
import { ComponentPortal } from '@angular/cdk/portal';
import { SearchBooksComponent } from './components/search-books/search-books.component';

@Component({
  template: `
    <app-books-list
    [books]="booksFacade.list$ | async"
    [wishListDictionary]="wishListFacade.dictionary$ | async"
    (add)="onAdd($event)"
    (remove)="onRemove($event)"></app-books-list>
    <router-outlet></router-outlet>
  `
})
export class BooksFeatureShellComponent implements AfterViewInit, OnDestroy {

  constructor(
    public booksFacade: BooksFacade,
    public wishListFacade: WishListFacade,
    private searchPortalService: SearchPortalService
  ) { }

  ngAfterViewInit() {
    this.searchPortalService.componentPortal = new ComponentPortal(SearchBooksComponent);
  }

  ngOnDestroy() {
    this.searchPortalService.componentPortal = undefined;
  }

  onAdd(book: Book) {
    this.wishListFacade.add({
      ...book,
      dateAdded: Date.now()
    });
  }

  onRemove(book: Book) {
    this.wishListFacade.remove({
      ...book,
      dateAdded: Date.now()
    });
  }

}
