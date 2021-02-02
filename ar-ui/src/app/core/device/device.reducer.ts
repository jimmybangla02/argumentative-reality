import {DeviceState, initialDeviceState} from './device.store';
import {DeviceActions, DeviceActionTypes} from './device.action';

export function deviceReducer(
  state: DeviceState = initialDeviceState,
  action: DeviceActions,
): DeviceState {
  switch (action.type) {
    case DeviceActionTypes.GET_DEVICE_RESULT:
      return state = action.payload;
    default:
      return state;
  }
}
