import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PostService } from '../../post.service';
import { Post } from "../../post.model";
import { Subscription } from "rxjs";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
//implements OnInit
export class UserComponent implements OnInit, OnDestroy {
  // posts: any[] = [];

  // constructor(private postService: PostService) { }

  // ngOnInit() {
  //   this.retrievePosts();
  // }

  // retrievePosts() {
  //   this.postService.getPosts().subscribe((postData) => {
  //     this.posts = postData.posts;
  //   });
  // }
@Input() posts: Post[] = [];
private postsSub: Subscription;

constructor(public postsService: PostService){
  //this.postsService = postsService;
}
ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostsUpdateListener().subscribe((posts: Post[])=>{
      this.posts = posts;
    });
}
ngOnDestroy() {
  this.postsSub.unsubscribe();
}
}
