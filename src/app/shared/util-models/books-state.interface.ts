
import { EntityState } from '@ngrx/entity';
import { CallState } from './call-state.interface';

export interface BooksState extends EntityState<Book>, CallState { }