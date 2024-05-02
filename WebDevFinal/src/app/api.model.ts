import {Food} from "./food.model";
export interface ApiResponse {
    message: string;
    posts: Food[];  // Assuming 'Food' is properly defined in your 'food.model'
  }