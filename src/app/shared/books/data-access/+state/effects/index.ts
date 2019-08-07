import { BooksFeatureShellEffects } from './books-feature-shell.effects';
import { BooksFeatureDetailEffects } from './books-feature-detail.effects';
import { BooksEffects } from './books.effects';

export const effects: any[] = [BooksFeatureShellEffects, BooksFeatureDetailEffects, BooksEffects];

export * from './books-feature-shell.effects';
export * from './books-feature-detail.effects';
export * from './books.effects';
