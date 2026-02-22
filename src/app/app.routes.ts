import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('../app/pages/login/login.component').then((c) => c.LoginComponent),
    title: 'Tasty Hub | Login',
  },
  {
    path: 'home',
    loadComponent: () => import('../app/pages/home/home.component').then((c) => c.HomeComponent),
    title: 'Tasty Hub | Home',
  },
  {
    path: 'about',
    loadComponent: () => import('../app/pages/about/about.component').then((c) => c.AboutComponent),
    title: 'Tasty Hub | About',
  },
  {
    path: 'meals',
    loadComponent: () => import('../app/pages/meals/meals.component').then((c) => c.MealsComponent),
    children: [
      { path: '', redirectTo: 'seafood', pathMatch: 'full' },
      {
        path: 'seafood',
        loadComponent: () =>
          import('../app/components/seafood/seafood.component').then((c) => c.SeafoodComponent),
        title: 'Tasty Hub | Meals | Seafood',
      },
      {
        path: 'pasta',
        loadComponent: () =>
          import('../app/components/pasta/pasta.component').then((c) => c.PastaComponent),
        title: 'Tasty Hub | Meals | Pasta',
      },
      {
        path: 'fish',
        loadComponent: () =>
          import('../app/components/fish/fish.component').then((c) => c.FishComponent),
        title: 'Tasty Hub | Meals | Fish',
      },
    ],
  },
  {
    path: 'team',
    loadComponent: () => import('../app/pages/team/team.component').then((c) => c.TeamComponent),
    title: 'Tasty Hub | Team',
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('../app/pages/contacts/contacts.component').then((c) => c.ContactsComponent),
    title: 'Tasty Hub | Contacts',
  },
  {
    path: '404',
    loadComponent: () =>
      import('../app/pages/not-found/not-found.component').then((c) => c.NotFoundComponent),
    title: '404',
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
