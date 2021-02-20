import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ShowErrorSnackbarComponent } from '../common/show-error-snackbar/show-error-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService {

  constructor(private _snackBar: MatSnackBar) { }

  handleError(error){
    //we can also use any logging service to store the errors somewhere,
    //i have not implemented it but we can
    if(error instanceof HttpErrorResponse){
      //backend error
      this.openErrorSnackBar();
    }else{
      //frontend error
      this.openErrorSnackBar();
      console.log(`frontend ${error.message}`);
    }
  }

  openErrorSnackBar() {
    this._snackBar.openFromComponent(ShowErrorSnackbarComponent, {
      duration: 3000,
    });
  }
}
