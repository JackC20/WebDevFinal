import { Component } from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.css'] // Include if you have associated CSS
})
export class MacrosComponent {
  postTitle: string = '';
  postContent: string = '';

  constructor(private postService: PostService) { }

  onAddPost() {
    if (!this.postTitle || !this.postContent) {
      // Handle error, such as empty fields
      return;
    }
    this.postService.addPost({ title: this.postTitle, content: this.postContent }).subscribe(response => {
      console.log('Post added!', response);
      this.postTitle = '';
      this.postContent = '';
      // Optionally, emit an event or call a method to update the user component
    });
  }
}
