import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodService } from '../../food.service';
import {Food} from '../../food.model';

@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.css']
})
export class MacrosComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  foods: Food[] = []; 

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.subscription = this.foodService.getFoods().subscribe({
      next: (data) => {
        this.foods = data.posts;  
        console.log('Foods loaded:', this.foods);
      },
      error: (error) => console.error('Error loading foods:', error)
    });
  }

  selectItem(item: any) {
    this.foodService.setSelectedItems(item).subscribe({
      next: () => console.log('Item selected:', item),
      error: (error) => console.error('Error selecting item:', error)
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}