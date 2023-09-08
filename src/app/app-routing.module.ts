import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDexComponent } from './pages/pokedex/pokedex.component';
// import { CalculationsComponent } from './pages/calculations/calculations.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
  { path: 'poke-dex', canActivate: [], component: PokeDexComponent, },
  // { path: 'calculations', canActivate: [AuthGuard], component: CalculationsComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
