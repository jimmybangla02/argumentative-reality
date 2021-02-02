import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import {DeviceService} from './core/device/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  deviceInfo = null;
  title = 'ar-ui';

  constructor(
    private deviceDetectionService: DeviceDetectorService,
    private deviceService: DeviceService
  ) {
    this.epicFunction();
  }

  epicFunction() {
    const obj: any = {};
    obj.deviceInfo = this.deviceDetectionService.getDeviceInfo();
    obj.isMobile = this.deviceDetectionService.isMobile();
    obj.isTable = this.deviceDetectionService.isTablet();
    obj.isDesktop = this.deviceDetectionService.isDesktop();
    this.deviceService.getDeviceDetails('device', obj);
  }
}
