import { Injectable } from '@angular/core';
import { APIService } from '../api/api.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.store';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { BaseService } from '../base-service/base-services.service';
import { environment } from '../../../environments/environment';
import { ResetAuthentication } from '../auth/auth.action';
import { ResetUserDetails } from '../user/user.action';

@Injectable({
  providedIn: 'root'
})
export class LogoutService extends BaseService {

  isError = new Subject();
  isLoading = new Subject();

  constructor(private api: APIService,
              private http: HttpClient,
              private store: Store<AppState>,
              private router: Router) {
    super();
  }

  logout(): void {
    this.isLoading.next({ status: true });
    this.http.get('/api/logout', {}).subscribe((s) => {
      this.clearSession();
      this.isLoading.next({ status: false });

    }, error => {
      this.clearSession();
      this.isError.next({ error: true, message: error.error.errorMessage });
      this.isLoading.next({ status: false });
    });
  }

  clearSession() {
    const cookies = document.cookie.split(';');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + 'Path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
    localStorage.removeItem('user');
    this.store.dispatch(new ResetUserDetails());
    this.store.dispatch(new ResetAuthentication());
    // window.open(environment.logoutUrl + window.location.origin, '_self');
  }


}
