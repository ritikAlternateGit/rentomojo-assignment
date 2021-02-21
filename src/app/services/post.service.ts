import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { 
  }

  getPostById(postId:Number):Observable<Post>{
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  getPostsOfAUser(userId:number):Observable<Post[]>{
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  getCommentsOfAPost(postId:Number):Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }

  deletePostById(postId:Number):Observable<any>{
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`,{observe: 'response'});
  }
}
