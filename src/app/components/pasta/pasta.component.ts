import { Component, OnInit, signal } from '@angular/core';
import { IrecipeRes } from '../../models/Irecipe-res.js';
import { Irecipe } from '../../models/Irecipe.js';
import { RecipeService } from '../../services/recipe.service.js';
import { ActivatedRoute } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { EmptyContentComponent } from '../empty-content/empty-content.component';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css'],
  imports: [LoaderComponent, EmptyContentComponent],
})
export class PastaComponent implements OnInit {
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
    this.recipeService.getAll('pasta').subscribe({
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
