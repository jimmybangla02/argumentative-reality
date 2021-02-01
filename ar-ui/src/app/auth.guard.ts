import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from './core/auth/auth.service';
import {select, Store} from '@ngrx/store';
import { isAuthenticated} from './core/auth/auth.selector';
import {isExternalUser} from './core/user/user.selector';
import {AppState} from './core/store/app.store';
import {LogoutService} from './core/logout/logout.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isAuthenticated: false;
  redirectUrl = '';
  isExternalUser = false;

  constructor(private auth: AuthService, private store: Store<AppState>, public router: Router,
              private logoutService: LogoutService ) {
    this.store.pipe(select(isAuthenticated())).subscribe((isAuth) => {
      this.isAuthenticated = isAuth;
      if (isAuth) {
        this.router.navigateByUrl(this.redirectUrl);
      }
    });
    this.store.pipe(select(isExternalUser())).subscribe((isExternal) => {
        if (isExternal) {
          this.isExternalUser = isExternal;
          if (this.isExternalUser) {
            this.router.navigateByUrl('unauthorized');
          }
        }
    });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.redirectUrl !== state.url) {
    }
    this.redirectUrl =  state.url;
    if (!this.isAuthenticated) {
        if (document.cookie.indexOf('urwsession') !== -1) {
         this.logoutService.clearSession();
        }
        this.auth.getAuthDetails();

        return false;
    } else {
      if (this.isExternalUser) {
        return this.redirectUrl === '/unauthorized';
      }
      return true;
    }
  }
}

