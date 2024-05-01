import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FoodService {
  private baseUrl = 'http://localhost:3000/api';
  private selectedItems = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {}

  getFoods(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/foods`);
  }

  addFood(foodData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/foods`, foodData);
  }

  setSelectedItems(item: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/selectedFoods`, item).pipe(tap(() => {
      this.selectedItems.next([...this.selectedItems.value, item]);
    }));
  }

  getSelectedItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/selectedFoods`);
  }
}