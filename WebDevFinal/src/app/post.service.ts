// src/app/post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';

import { Post } from './post.model';

 @Injectable({ providedIn: 'root' })
// export class PostService {
//   private baseUrl = 'http://localhost:3000/api';

//   constructor(private http: HttpClient) {}

//   getPosts(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/posts`);
//   }

//   addPost(postData: { title: string; content: string }): Observable<any> {
//     return this.http.post(`${this.baseUrl}/posts`, postData);
//   }
// }

export class PostService{
  private posts: Post[] = [];
  private postUpDate = new Subject<Post[]>()

  constructor(private http: HttpClient){}

  getPosts(){
    //return [...this.posts]
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts').
    subscribe((postData)=>{
      this.posts = postData.posts;
      this.postUpDate.next([...this.posts]);
    });
  }
  // getPosts(): Observable<Post[]> { //getPosts fetchs posts from the backend at port 3000
  //   return this.http.get<{ message: string, posts: Post[] }>('http://localhost:3000/api/posts').pipe(
  //     map(responseData => responseData.posts)
  //   );
  // }
  getPostsUpdateListener(): Observable<Post[]> {
    return this.postUpDate.asObservable();
  }
  addPost(title: string, content: string){
    const post: Post ={ id:null, title: title, content: content};
    this.posts.push(post);
    this.postUpDate.next([...this.posts]);
  }
}
