import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodService } from '../../food.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  foodItems: any[] = [];
  totalNutrition: any = { calories: 0, fats: 0, carbs: 0, protein: 0, sugars: 0 };
  private subscription: Subscription = new Subscription();

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.subscription.add(this.foodService.getSelectedItems().subscribe(items => {
      this.foodItems = items;
      this.calculateTotals();
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  calculateTotals(): void {
    this.totalNutrition = this.foodItems.reduce((totals, item) => {
      totals.calories += parseFloat(item.calories); 
      totals.fats += parseFloat(item.fats); 
      totals.carbs += parseFloat(item.carbs); 
      totals.protein += parseFloat(item.protein); 
      totals.sugars += parseFloat(item.sugars); 
      return totals;
    }, { calories: 0, fats: 0, carbs: 0, protein: 0, sugars: 0 });

    this.totalNutrition.calories = Math.round(this.totalNutrition.calories); 
    this.totalNutrition.fats = parseFloat(this.totalNutrition.fats.toFixed(1));
    this.totalNutrition.carbs = parseFloat(this.totalNutrition.carbs.toFixed(1));
    this.totalNutrition.protein = parseFloat(this.totalNutrition.protein.toFixed(1));
    this.totalNutrition.sugars = parseFloat(this.totalNutrition.sugars.toFixed(1));
  }
}