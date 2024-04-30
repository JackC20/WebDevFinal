import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']

})
export class UserComponent implements OnInit {

  totalNutrition: any = {
    calories: 0,
    fats: 0,
    carbs: 0,
    protein: 0,
    sugars: 0
  };
  
  foodItems = [
    { name: 'Apple', calories: 95, fats: 0.3, carbs: 25, protein: 0.5, sugars: 19 },
    { name: 'Chicken Breast', calories: 165, fats: 3.6, carbs: 0, protein: 31, sugars: 0 },
    { name: 'Brown Rice', calories: 216, fats: 1.8, carbs: 44.8, protein: 5, sugars: 0.7 }
  ];

  ngOnInit() {
    this.calculateTotals();
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
  }
}