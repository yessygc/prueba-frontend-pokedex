import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites: any[] = [];

  addToFavorites(pokemon: any): void {
    // Agregar el Pokémon a la lista de favoritos
    this.favorites.push(pokemon);
  }

  removeFromFavorites(pokemon: any): void {
    // Eliminar el Pokémon de la lista de favoritos
    const index = this.favorites.indexOf(pokemon);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }
}
