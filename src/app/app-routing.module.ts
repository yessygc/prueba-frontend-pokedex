import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDexComponent } from './pages/pokedex/pokedex.component';
// import { CalculationsComponent } from './pages/calculations/calculations.component';

const routes: Routes = [
  { path: '', redirectTo: 'poke-dex', pathMatch: 'full' },
  { path: 'pokedex', component: PokeDexComponent, },
  //{ path: 'calculations', component: CalculationsComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
