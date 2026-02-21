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
    title: 'Tasty Hub | Meals',
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
    path: '**',
    loadComponent: () =>
      import('../app/pages/not-found/not-found.component').then((c) => c.NotFoundComponent),
    title: '404',
  },
];
