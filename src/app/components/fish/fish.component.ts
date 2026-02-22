import { Component, OnInit, signal } from '@angular/core';
import { IrecipeRes } from '../../models/Irecipe-res.js';
import { Irecipe } from '../../models/Irecipe.js';
import { RecipeService } from '../../services/recipe.service.js';
import { LoaderComponent } from '../loader/loader.component';
import { EmptyContentComponent } from '../empty-content/empty-content.component';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css'],
  imports: [LoaderComponent, EmptyContentComponent],
})
export class FishComponent implements OnInit {
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
    this.recipeService.getAll('fish').subscribe({
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
