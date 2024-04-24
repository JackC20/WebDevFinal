import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.retrievePosts();
  }

  retrievePosts() {
    this.postService.getPosts().subscribe((postData) => {
      this.posts = postData.posts;
    });
  }
}