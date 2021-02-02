import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { storageSyncMetaReducer } from 'ngrx-store-persist';
import {ObjectDetectionState} from '../object-detection/object-detection.store';
import {objectDetectionReducer} from '../object-detection/object-detection.reducer';
import {AuthDetailsState} from '../auth/auth.store';
import {UserDetailsState} from '../user/user.store';
import {authDetailsReducer} from '../auth/auth.reducer';
import {userDetailsReducer} from '../user/user.reducer';
import {DeviceState} from '../device/device.store';
import {deviceReducer} from '../device/device.reducer';

export interface AppState {
  IImageDetection?: ObjectDetectionState;
  IUserDetails: UserDetailsState;
  IAuthDetails?: AuthDetailsState;
  IDevice?: DeviceState;
}

export const appReducer: ActionReducerMap<any> = {
  IAuthDetails: authDetailsReducer,
  IUserDetails: userDetailsReducer,
  IImageDetection: objectDetectionReducer,
  IDevice: deviceReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: ['IAuthDetails'], rehydrate: true
    })(reducer);
}



export const metaReducers: MetaReducer<AppState>[] = [storageSyncMetaReducer];
