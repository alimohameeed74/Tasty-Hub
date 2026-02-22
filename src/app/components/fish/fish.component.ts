import { Component, OnInit } from '@angular/core';
import { IrecipeRes } from '../../models/Irecipe-res.js';
import { Irecipe } from '../../models/Irecipe.js';
import { RecipeService } from '../../services/recipe.service.js';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css'],
})
export class FishComponent implements OnInit {
  cardsRes: IrecipeRes | null;
  cards: Irecipe[];
  constructor(private recipeService: RecipeService) {
    this.cardsRes = null;
    this.cards = [];
  }

  ngOnInit() {
    this.loadData();
    this.cards = JSON.parse(sessionStorage.getItem('fishData')!);
  }

  loadData() {
    this.recipeService.getAll('fish').subscribe({
      next: (res: any) => {
        this.cardsRes = res;
        const data = res.data.recipes;
        sessionStorage.setItem('fishData', JSON.stringify(data));
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
