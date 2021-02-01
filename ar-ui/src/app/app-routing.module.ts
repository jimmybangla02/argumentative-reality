import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnauthorizedComponent} from './view/pages/unauthorized/unauthorized.component';
import {LogoutComponent} from './view/pages/logout/logout.component';
import {LoginComponent} from './view/pages/login/login.component';
import {VideoDetectionComponent} from './view/pages/video-detection/video-detection.component';
import {DashboardComponent} from './view/pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'video-detection',
    component: VideoDetectionComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
