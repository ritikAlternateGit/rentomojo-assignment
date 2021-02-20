import { PostDetailsComponent } from './featured-modules/post/post-details/post-details.component';
import { PostComponent } from './featured-modules/post/post.component';
import { HomeComponent } from './featured-modules/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'posts/:userId',
    component: PostComponent
  },
  {
    path: 'post/:postId',
    component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
