import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService{ 
  private baseUrl = 'http://localhost:3000/api';
  private selectedItems = new BehaviorSubject<any[]>([]); // For tracking selected food items

  constructor(private http: HttpClient) {}

  // Fetches food items from the server
  getFoods(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/foods`);
  }

  // Adds a new food item to the server
  addFood(foodData: { name: string; calories: number; fats: number; carbs: number; protein: number; sugars: number }): Observable<any> {
    return this.http.post(`${this.baseUrl}/foods`, foodData);
  }

  // Setter for selected food items
  setSelectedItems(item: any) {
    this.selectedItems.next([...this.selectedItems.value, item]);
  }

  // Getter for selected food items as an observable
  getSelectedItems(): Observable<any[]> {
    return this.selectedItems.asObservable();
  }
}
