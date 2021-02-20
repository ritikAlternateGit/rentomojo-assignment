import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './../../shared/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { HighlightTextPipe } from '../../pipes/highlight-text.pipe';


@NgModule({
  declarations: [PostComponent, PostDetailsComponent, HighlightTextPipe],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class PostModule { }
