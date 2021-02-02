import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from '../base-service/base-services.service';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.store';
import { UserDetails } from './user.model';
import { GetUserDetails } from './user.action';
import { GetAuthentication } from '../auth/auth.action';
import { userServiceErrorTitle } from '../base-service/message';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {

  private url = environment.restUrl + '/user-service';
  private dataServiceUrl = environment.restUrl + '/data-service';

  constructor(private http: HttpClient,
              private store: Store<AppState>) {
    super();
  }

  getUserDetails(): void {
    this.http.get(this.url + '/mydetails').subscribe((userDetails: UserDetails) => {
      this.store.dispatch(new GetAuthentication({ authenticated: true }));
      this.store.dispatch(new GetUserDetails(userDetails));
      localStorage.setItem('ibcuser', userDetails.user.username);
    }, (error) => {
      this.updateErrorDetails(error, userServiceErrorTitle);
      window.location.href = environment.restUrl + '/';
    });
  }

  getrefreshToken(): void {
    this.http.get(this.dataServiceUrl + '/health').subscribe((refreshDetails: any) => {
      // console.log(refreshDetails)
    }, (error) => {
      this.updateErrorDetails(error, userServiceErrorTitle);
      console.log(error);
    });
  }

  logon() {
    const route = window.location.href;
    if (window.location.href.endsWith('/site') || window.location.href.endsWith('/site/')) {
      window.location.href = environment.restUrl + '/';
    } else {
      window.location.href = environment.restUrl + '/';
    }
  }

  logout() {
    this.http.get(this.url + '/logout').subscribe((data: any) => {
    }, (error) => {
      this.updateErrorDetails(error, userServiceErrorTitle);
      window.location.href = environment.restUrl + '/';
    });
  }
}
