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
  //dummy data for food items able to be selected
  foodItems = [
    { name: 'Apple', calories: 95, fats: 0.3, carbs: 25, protein: 0.5, sugars: 19 },
    { name: 'Chicken Breast', calories: 165, fats: 3.6, carbs: 0, protein: 31, sugars: 0 },
    { name: 'Brown Rice', calories: 216, fats: 1.8, carbs: 44.8, protein: 5, sugars: 0.7 }
  ];
}


