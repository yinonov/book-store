import { createAction, props } from '@ngrx/store';

export const updateUser = createAction(
  '[User] Update User',
  props<{ data: User }>()
);
