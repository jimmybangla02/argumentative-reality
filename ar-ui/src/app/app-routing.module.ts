import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnauthorizedComponent} from './view/pages/unauthorized/unauthorized.component';
import {LogoutComponent} from './view/pages/logout/logout.component';
import {LoginComponent} from './view/pages/login/login.component';
import {DashboardComponent} from './view/pages/dashboard/dashboard.component';
import {AuthGuard} from './auth.guard';


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
    path: 'dashboard/:dashboardId',
    component: DashboardComponent
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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
