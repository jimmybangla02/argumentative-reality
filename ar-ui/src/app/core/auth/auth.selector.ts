import { createSelector } from '@ngrx/store';
import { AppState } from '../store/app.store';

export const getAuthDetailsState = createSelector((state: AppState) => state, (state: AppState) => state.IAuthDetails);

export const getAuthDetails = () => createSelector(
  getAuthDetailsState,
  (d) => d.authDetails && d.authDetails !== null ? d.authDetails : null
);

export const isAuthenticated = () => createSelector(
  getAuthDetails(),
  (d: any) => d  ? d.authenticated : false
);

