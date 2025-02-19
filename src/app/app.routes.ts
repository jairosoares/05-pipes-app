import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '',
    loadChildren: () => import('./products/products-routes').then(m => m.PRODUCTS_ROUTES)
  }
];
