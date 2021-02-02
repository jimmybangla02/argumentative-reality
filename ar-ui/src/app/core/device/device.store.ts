import {DeviceModel} from './device.model';

export interface DeviceState extends DeviceModel {
  id: string | null;
}

export const initialDeviceState: DeviceState = {
  id: null,
  result: null
};
