import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './reducers/books.reducer';
import * as fromEffects from './effects';
import { DataPersistence } from '@nrwl/nx';

@NgModule({
    imports: [
        StoreModule.forFeature(fromReducer.BOOKS_FEATURE_KEY, fromReducer.booksReducer),
        EffectsModule.forFeature(fromEffects.effects),
    ],
    providers: [DataPersistence]
})
export class SharedBooksDataAccessModule { }
