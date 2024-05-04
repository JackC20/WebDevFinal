import {Food} from "./food.model";
export interface ApiResponse {
    message: string;
    posts: Food[];  
  }