import { createAction, props } from '@ngrx/store';

export const UPDATE = '[User] Update User';

export const updateUser = createAction(
  UPDATE,
  props<{ data: User }>()
);
