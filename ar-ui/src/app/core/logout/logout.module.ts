import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutService } from './logout.service';

@NgModule({
  providers: [LogoutService],
  imports: [
    CommonModule
  ]
})
export class LogoutCoreModule { }
