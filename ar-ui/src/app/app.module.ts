import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './core/store/app.store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HeaderModule} from './layout/header/header.module';
import {FooterModule} from './layout/footer/footer.module';
import {UnauthorizedModule} from './view/pages/unauthorized/unauthorized.module';
import {LogoutModule} from './view/pages/logout/logout.module';
import {LoginModule} from './view/pages/login/login.module';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import {VideoDetectionModule} from './view/pages/video-detection/video-detection.module';
import {DashboardModule} from './view/pages/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer, {  }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HeaderModule,
    FooterModule,
    UnauthorizedModule,
    LogoutModule,
    LoginModule,
    VideoDetectionModule,
    DashboardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
