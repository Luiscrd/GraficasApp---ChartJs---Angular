import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficasModule } from './graficas/graficas.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./graficas/graficas.module').then( m => m.GraficasModule )
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
