import { UserState } from '@app/shared/util-models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_FEATURE_KEY } from '../reducers/user.reducer';

const getUser = createFeatureSelector<UserState>(USER_FEATURE_KEY);


const getUserName = createSelector(
    getUser,
    user => user.name,
);

export const userQuery = {
    getUserName,
};
