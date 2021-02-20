import { LoaderService } from './../../../services/loader.service';
import { DeletedSuccessSnackbarComponent } from './../../../common/deleted-success-snackbar/deleted-success-snackbar.component';
import { PostService } from './../../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Post} from '../../../models/post.model';
import {Comment} from '../../../models/comment.model';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postId:number;
  comments:Comment[] = [];
  post:Post;
  highlightedText:string;
  constructor(private activatedRoute: ActivatedRoute, 
              private router:Router, 
              private __postService: PostService,
              private _snackBar: MatSnackBar,
              private __loader: LoaderService) { }

  ngOnInit(): void {
    this.__loader.show();
    this.activatedRoute.params.subscribe(params=>{
      this.postId = Number(params.postId);
      this.__postService.getPostById(this.postId).subscribe(post=>{
        this.__loader.hide();
        this.post = post;
      });
    })
  }
  loadComments(){
    this.__loader.show();
    this.__postService.getCommentsOfAPost(this.postId).subscribe(comments=>{
      this.__loader.hide();
      this.comments = comments;
    })
  }

  deletePost(){
    this.__loader.show();
    this.__postService.deletePostById(this.postId).subscribe(response=>{
      this.__loader.hide();
      if(response.status===200){
        this.router.navigate([`/posts/${this.post.userId}`]);
        this.openSnackBar();
      }
    })
  }

  openSnackBar() {
    this._snackBar.openFromComponent(DeletedSuccessSnackbarComponent, {
      duration: 2000,
    });
  }

  highlightText(e){
    this.highlightedText = e.target.value;
  }
}

