import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
})
export class MealsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
