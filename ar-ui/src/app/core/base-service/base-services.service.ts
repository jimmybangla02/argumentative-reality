import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { technicalErrorMessage, forbiddenMessage } from './message';
import { MyToasterService } from '../../common/toastr-service/toastr.service'


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(public toastrService:MyToasterService) {
   }

  errorInfo = new Subject();
  errors = [];

  updateErrorDetails(errorInfo, title) {
    const errorDetails: any = {
      id: title,
      type: 'error',
      position: 'top-center',
      noTimeout: true
    };

    let errorMessage = '';

    if (errorInfo.status !== 412) {
      errorMessage += `${title} : ${technicalErrorMessage}`;
      errorDetails.msg = errorMessage;
      // write here a error message ui
    } else {
      errorMessage = forbiddenMessage;
      errorDetails.msg = errorMessage;
      // write here a error message ui
    }
  }

  displayServerError(message?, title?) {
    const errorDetails: any = {
      id: title,
      type: 'error',
      position: 'top-center',
      noTimeout: true
    };

    let errorMessage = '';
    errorMessage += `${title} : ${message}`;
    errorDetails.msg = errorMessage;
    if(this.toastrService) {
        this.toastrService.showErrorToast();
    }
  }

  displayServerWarning(message?, title?) {
    const errorDetails: any = {
      id: title,
      type: 'warning',
      position: 'top-center',
      noTimeout: true
    };

    let errorMessage = '';
    errorMessage += `${title} : ${message}`;
    errorDetails.msg = errorMessage;
    if(this.toastrService) {
        this.toastrService.showWarningToast();
    }
  }

  showMessages(errorMessage, title) {
    // write a custom message ui
    if (this.toastrService) {
      this.toastrService.showErrorMsg(errorMessage, title);
    }
  }
  
}
