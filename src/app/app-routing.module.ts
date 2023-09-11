import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDexComponent } from './pages/pokedex/pokedex.component';
import { CotizacionesComponent } from './pages/cotizaciones/cotizaciones.component';
// import { FavoritesService } from './services/favorites/favorites.service';

const routes: Routes = [
  { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
  { path: 'pokedex', component: PokeDexComponent, },
  { path: 'cotizaciones', component: CotizacionesComponent, },
  // { path: 'favoritos', component: FavoritesService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
