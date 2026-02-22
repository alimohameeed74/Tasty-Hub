import { Irecipe } from './Irecipe.js';

export interface IrecipeRes {
  status: string;
  results?: number;
  recipes: Irecipe[];
}
