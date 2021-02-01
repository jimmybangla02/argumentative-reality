import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from './base-services.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [BaseService]
})
export class BaseServicesModule { }
