import { Action } from '@ngrx/store';
import { DeviceModel } from './device.model';

export type DeviceActions = GetDeviceResult;

export enum DeviceActionTypes {
  GET_DEVICE_RESULT = '[DeviceDetection] GetDeviceResult'
}

export class GetDeviceResult implements Action {
  readonly type = DeviceActionTypes.GET_DEVICE_RESULT;
  constructor(public payload: DeviceModel) {
  }
}
