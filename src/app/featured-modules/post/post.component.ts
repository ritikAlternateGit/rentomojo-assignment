import { LoaderService } from './../../services/loader.service';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Post} from '../../models/post.model';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts:Post[] = [];
  filteredPosts:Post[] = [];
  userId:number;
  constructor(private __postService: PostService, 
              private route: ActivatedRoute,
              private __loader: LoaderService) { }

  ngOnInit(): void {
    this.__loader.show();
    this.route.params.subscribe(params=>{
      this.userId = Number(params.userId);
      this.__postService.getPostsOfAUser(this.userId,0,10).subscribe(posts=>{
        this.__loader.hide();
        this.posts = posts;
        const tmp:Post[]= []; //temporary array to assign to filtered array, so that angular can detect change 
        this.posts.forEach(post=>tmp.push(post));
        this.filteredPosts = tmp;
      });
    })   
  }

  filter(e):void{
    var str = e.target.value.toLowerCase();
    this.filteredPosts=this.posts.filter((post)=>{
      if(post.title.toLowerCase().includes(str)){
        return true;
      }
    });
  }

  
}
