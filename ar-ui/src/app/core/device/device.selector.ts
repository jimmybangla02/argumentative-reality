import { createSelector } from '@ngrx/store';
import { AppState } from '../store/app.store';

export const getDeviceState = createSelector((state: AppState) => state, (state: AppState) => state.IDevice);

export const getObjectDetectionResult = () => createSelector(
  getDeviceState,
  (d) => d && d.result ? d.result : null
);

export const getObjectPredictionPath = () => createSelector(
  getObjectDetectionResult(),
  (d: any) => d && d.path ? d.path : ''
);
