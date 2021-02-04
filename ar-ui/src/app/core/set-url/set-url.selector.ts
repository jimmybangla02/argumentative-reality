import { createSelector } from '@ngrx/store';
import { AppState } from '../store/app.store';

export const getSetUrlState = createSelector((state: AppState) => state, (state: AppState) => state.ISetUrl);

export const getSetUrlResult = () => createSelector(
  getSetUrlState,
  (d) => d && d.result ? d.result : null
);

export const getObjectPredictionPath = () => createSelector(
  getSetUrlResult(),
  (d: any) => d && d.path ? d.path : ''
);
