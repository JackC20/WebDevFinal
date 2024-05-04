import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.css'] // Include if you have associated CSS
})
export class MacrosComponent {
  counter= 1;
  binding = '';
  enteredContent = '';
  enteredTitle = '';
  //srgh3b
  //formatcount: String = "Post "+this.counter;

  //@Output() postCreated = new EventEmitter();
  constructor(public postsService: PostService){}
  onAddPost(form:NgForm){
    if(form.invalid){
      return;
    }
     this.postsService.addPost(form.value.foodItem, form.value.calories ,form.value.protein, form.value.carbs, form.value.sugars, form.value.fats);
     //foodItem: foodItem, proteins: proteins, carbs: carbs, fats: fats, sugars: sugars
     form.resetForm();
  }



  // postTitle: string = '';
  // postContent: string = '';

  // constructor(private postService: PostService) { }

  // onAddPost() {
  //   if (!this.postTitle || !this.postContent) {
  //     // Handle error, such as empty fields
  //     return;
  //   }
  //   // this.postService.addPost({ title: this.postTitle, content: this.postContent }).subscribe(response => {
    //   console.log('Post added!', response);
    //   this.postTitle = '';
    //   this.postContent = '';
      // Optionally, emit an event or call a method to update the user component
    // });
  }

