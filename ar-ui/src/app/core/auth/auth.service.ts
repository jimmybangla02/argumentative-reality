import { Injectable } from '@angular/core';
import { APIService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { ResetAuthentication} from './auth.action';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.store';
import { BaseService } from '../base-service/base-services.service';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(
    private api: APIService,
    private http: HttpClient,
    private userService: UserService,
    private store: Store<AppState>) {
    super(null);
  }

  getAuthDetails()  {
    this.userService.getUserDetails();
  }

  resetAuthentication() {
    this.store.dispatch(new ResetAuthentication());
  }

}
