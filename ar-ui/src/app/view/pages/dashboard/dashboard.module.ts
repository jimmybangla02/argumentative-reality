import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {FormsModule} from "@angular/forms";
import {WebcamModule} from "ngx-webcam";



@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    WebcamModule
  ]
})
export class DashboardModule { }
