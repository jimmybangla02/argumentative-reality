import { Injectable } from '@angular/core';
import {APIService} from '../api/api.service';
import {HttpClient} from '@angular/common/http';
import {AppState} from '../store/app.store';
import {Store} from '@ngrx/store';
import {GetDeviceResult} from './device.action';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(
    private api: APIService,
    private http: HttpClient,
    private store: Store<AppState>) { }

  getDeviceDetails(id, device) {
    const input: any = {id, result: device};
    this.store.dispatch(new GetDeviceResult(input));
  }
}
