import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { storageSyncMetaReducer } from 'ngrx-store-persist';
import {AuthDetailsState} from '../auth/auth.store';
import {UserDetailsState} from '../user/user.store';
import {authDetailsReducer} from '../auth/auth.reducer';
import {userDetailsReducer} from '../user/user.reducer';
import {DeviceState} from '../device/device.store';
import {deviceReducer} from '../device/device.reducer';
import {SetUrlState} from '../set-url/set-url.store';
import {setUrlReducer} from '../set-url/set-url.reducer';

export interface AppState {
  IUserDetails: UserDetailsState;
  IAuthDetails?: AuthDetailsState;
  IDevice?: DeviceState;
  ISetUrl?: SetUrlState;
}

export const appReducer: ActionReducerMap<any> = {
  IAuthDetails: authDetailsReducer,
  IUserDetails: userDetailsReducer,
  IDevice: deviceReducer,
  ISetUrl: setUrlReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: ['IAuthDetails'], rehydrate: true
    })(reducer);
}



export const metaReducers: MetaReducer<AppState>[] = [storageSyncMetaReducer];
