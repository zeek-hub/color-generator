import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () =>
      import('./features/colors-generator/generator.routes').then(m => m.GENERATOR_ROUTES) }
];
