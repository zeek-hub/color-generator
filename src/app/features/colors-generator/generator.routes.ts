import {Routes} from '@angular/router';
import {GeneratorPage} from './pages/generator-page/generator-page';

export const GENERATOR_ROUTES: Routes = [
  { path: 'generator', component: GeneratorPage },
  { path: '', redirectTo: '/generator', pathMatch: 'full' },
];
