import { AppState } from '@app/shared/util-models';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { booksQuery } from './data-access/selectors/books.selectors';

@Injectable({
    providedIn: 'root'
})
export class BooksFacade {
    isSingleLoading$ = this.store.pipe(select(booksQuery.isSingleLoading));
    isBatchLoading$ = this.store.pipe(select(booksQuery.isBatchLoading));
    singleError$ = this.store.pipe(select(booksQuery.getSingleError));
    batchError$ = this.store.pipe(select(booksQuery.getBatchError));
    dictionary$ = this.store.pipe(select(booksQuery.getBooksDictionary));
    list$ = this.store.pipe(select(booksQuery.getBooksList));
    bookByRoute$ = this.store.pipe(select(booksQuery.getBookByRoute));
    allLoaded$ = this.store.pipe(select(booksQuery.isBooksLoaded));

    constructor(private store: Store<AppState>) { }
}