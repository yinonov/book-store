import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedBooksDataAccessService {

  constructor() { }

  getAllBooks() {
    return of([
      {
        id: 'j8349',
        title: 'The Guest'
      }
    ]);
  }

  getBook(id: any) {
    console.log(id)
    return of({
      id: 'j8349',
      title: 'The Guest'
    });
  }

}
