import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { LoaderService } from './services/loader.service';
import { AngularMaterialModule } from './shared/angular-material.module';
import { PostModule } from './featured-modules/post/post.module';
import { HomeModule } from './featured-modules/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeletedSuccessSnackbarComponent } from './common/deleted-success-snackbar/deleted-success-snackbar.component';
import { LoaderComponent } from './common/loader/loader.component';
import { ShowErrorSnackbarComponent } from './common/show-error-snackbar/show-error-snackbar.component';
@NgModule({
  declarations: [
    AppComponent,
    DeletedSuccessSnackbarComponent,
    LoaderComponent,
    ShowErrorSnackbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    PostModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [LoaderService,{provide: ErrorHandler, useClass: GlobalErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
