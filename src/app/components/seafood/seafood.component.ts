import { Component, OnInit } from '@angular/core';
import { IrecipeRes } from '../../models/Irecipe-res.js';
import { RecipeService } from '../../services/recipe.service.js';
import { Irecipe } from '../../models/Irecipe.js';

@Component({
  selector: 'app-seafood',
  templateUrl: './seafood.component.html',
  styleUrls: ['./seafood.component.css'],
})
export class SeafoodComponent implements OnInit {
  cardsRes: IrecipeRes | null;
  cards: Irecipe[];
  constructor(private recipeService: RecipeService) {
    this.cardsRes = null;
    this.cards = [];
  }

  ngOnInit() {
    this.loadData();
    this.cards = JSON.parse(sessionStorage.getItem('seafoodData')!);
  }

  loadData() {
    this.recipeService.getAll('seafood').subscribe({
      next: (res: any) => {
        this.cardsRes = res;
        const data = res.data.recipes;
        sessionStorage.setItem('seafoodData', JSON.stringify(data));
      },
      error: (err) => {
        this.cardsRes = null;
        this.cards = [];
      },
    });
  }

  deleteRecipe() {}
  editRecipe() {}
}
