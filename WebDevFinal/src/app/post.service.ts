// src/app/post.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  addPost(postData: { title: string; content: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts`, postData);
  }
}
