import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  foodItems: any[] = [];
  totalNutrition: any = { calories: 0, fats: 0, carbs: 0, protein: 0, sugars: 0 };
  private subscription: Subscription = new Subscription();

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.subscription.add(this.postService.getSelectedItems().subscribe(items => {
      this.foodItems = items;
      this.calculateTotals();
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  calculateTotals(): void {
    this.totalNutrition = this.foodItems.reduce((totals, item) => {
      totals.calories += item.calories;
      totals.fats += item.fats;
      totals.carbs += item.carbs;
      totals.protein += item.protein;
      totals.sugars += item.sugars;
      return totals;
    }, { calories: 0, fats: 0, carbs: 0, protein: 0, sugars: 0 });
  
    // Apply rounding after all sums are calculated
    this.totalNutrition.fats = parseFloat(this.totalNutrition.fats.toFixed(1));
    this.totalNutrition.carbs = parseFloat(this.totalNutrition.carbs.toFixed(1));
    this.totalNutrition.protein = parseFloat(this.totalNutrition.protein.toFixed(1));
    this.totalNutrition.sugars = parseFloat(this.totalNutrition.sugars.toFixed(1));
  }
}