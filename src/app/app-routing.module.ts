import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDexComponent } from './pages/pokedex/pokedex.component';
import { CotizacionesComponent } from './pages/cotizaciones/cotizaciones.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
  { path: 'pokedex', component: PokeDexComponent, },
  { path: 'cotizaciones', component: CotizacionesComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
