import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiURL } from '../../environments/environment.js';
import { Observable } from 'rxjs';
import { IrecipeRes } from '../models/Irecipe-res.js';
import { IrecDetails } from '../models/Irec-details.js';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private httpclient: HttpClient) {}
  getAll(searchType: string): Observable<IrecipeRes> {
    return this.httpclient.get<IrecipeRes>(`${apiURL}?search=${searchType}`);
  }
  getRecipe(id: string): Observable<IrecDetails> {
    return this.httpclient.get<IrecDetails>(`${apiURL}/${id}`);
  }
  deleteRecipe(id: string) {}
  editRecipe(id: string) {}
}
