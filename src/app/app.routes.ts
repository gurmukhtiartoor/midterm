import { Routes } from '@angular/router';
import { InputPage } from './pages/input-page/input-page';
import { OutputPage } from './pages/output-page/output-page';

export const routes: Routes = [
  { path: '', redirectTo: 'input', pathMatch: 'full' },
  { path: 'input', component: InputPage, title: 'Employee Input' },
  { path: 'output', component: OutputPage, title: 'Employee Output' },
  { path: '**', redirectTo: 'input' },
];
