import { Component, OnInit } from '@angular/core';
import { IrecipeRes } from '../../models/Irecipe-res.js';
import { Irecipe } from '../../models/Irecipe.js';
import { RecipeService } from '../../services/recipe.service.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css'],
  imports: [],
})
export class PastaComponent implements OnInit {
  cardsRes: IrecipeRes | null;
  cards: Irecipe[];
  constructor(private recipeService: RecipeService) {
    this.cardsRes = null;
    this.cards = [];
  }

  ngOnInit() {
    this.loadData();
    this.cards = JSON.parse(sessionStorage.getItem('pastaData')!);
  }

  loadData() {
    this.recipeService.getAll('pasta').subscribe({
      next: (res: any) => {
        this.cardsRes = res;
        const data = res.data.recipes;
        sessionStorage.setItem('pastaData', JSON.stringify(data));
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
