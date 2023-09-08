import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private POKE_URL = `${environment.API_URL}/pokemon`;

  constructor(private http: HttpClient) { }

  async getAllPokemons(pokeIndex:number){
    return await lastValueFrom(this.http.get(`${this.POKE_URL}/${pokeIndex}?limit=20&offset=0`));
  }

}
