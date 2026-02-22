import { Component, OnInit, signal } from '@angular/core';
import { IrecipeRes } from '../../models/Irecipe-res.js';
import { RecipeService } from '../../services/recipe.service.js';
import { Irecipe } from '../../models/Irecipe.js';
import { LoaderComponent } from '../loader/loader.component';
import { EmptyContentComponent } from '../empty-content/empty-content.component';

@Component({
  selector: 'app-seafood',
  templateUrl: './seafood.component.html',
  styleUrls: ['./seafood.component.css'],
  imports: [LoaderComponent, EmptyContentComponent],
})
export class SeafoodComponent implements OnInit {
  cardsRes: IrecipeRes | null;
  isloading: boolean;
  cards = signal<Irecipe[]>([]);
  constructor(private recipeService: RecipeService) {
    this.cardsRes = null;
    this.isloading = true;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.isloading = true;
    this.recipeService.getAll('seafood').subscribe({
      next: (res: any) => {
        this.isloading = false;
        this.cards.set(res.data.recipes);
      },
      error: () => {
        this.isloading = false;
        this.cards.set([]);
      },
    });
  }

  deleteRecipe() {}
  editRecipe() {}
}
