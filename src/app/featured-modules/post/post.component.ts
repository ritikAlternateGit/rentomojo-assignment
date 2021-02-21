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
  postLimitPerPage:number = 4; //we can change it to any number
  constructor(private __postService: PostService, 
              private route: ActivatedRoute,
              private __loader: LoaderService) { }

  ngOnInit(): void {
    this.__loader.show(); 
    this.route.params.subscribe(params=>{
      this.userId = Number(params.userId);
      this.__postService.getPostsOfAUser(this.userId).subscribe(posts=>{
        this.__loader.hide();
        this.posts = posts;

        //deep cloning posts into filteredPosts
        const tmp:Post[]= []; 
        this.posts.forEach(post=>tmp.push(post));
        this.filteredPosts = tmp;
        this.filteredPosts = this.posts.slice(0,this.postLimitPerPage); //initial limit
      });
    })   
  }

  filterPostsByTitle(e):void{
    var str = e.target.value.toLowerCase();
    this.filteredPosts=this.posts.filter((post,i)=>{
      if(i>=this.postLimitPerPage){return false;}
      if(post.title.toLowerCase().includes(str)){
        return true;
      }
    });
  }

  pagination(e){
    const startIndex = e.pageIndex;
    const endIndex = startIndex + e.pageSize;
    this.filteredPosts = this.posts.slice(startIndex,endIndex);
  }
  
}
