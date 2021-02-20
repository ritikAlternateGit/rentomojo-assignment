import {RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from '../../shared/angular-material.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  providers:[UserService],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
