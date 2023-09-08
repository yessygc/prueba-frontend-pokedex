import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { PokemonService } from 'src/app/services/poke-service/pokemon.service';
import { PokeCardComponent } from './pokecard/pokecard.component';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-poke-dex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokeDexComponent implements OnInit {

  public isLoading:boolean = false;
  public pokemonsList:any = [];
  public p: number = 1;
  public searchText = '';
  public tempPokeList = [...this.pokemonsList];

  constructor(
    private pokeService: PokemonService,
    private alertService: AlertsService,
    private dialog: MatDialog,
    ) { }

  async ngOnInit(): Promise<void> {
    await this.getAllPokemons();
  }

  async getAllPokemons(){
    this.isLoading = true;
    try{
      for(let pokeIndex = 1; pokeIndex <= 200; pokeIndex++){
        let pokemon:any = await this.pokeService.getAllPokemons(pokeIndex);
        
        this.pokemonsList.push(pokemon); 
      }
      this.tempPokeList =  this.pokemonsList;
    
      this.isLoading = false;
    }catch(e){
      this.isLoading = false;
      this.alertService.shootSimpleAlert('error','Ocurrio un error al traer la información')
    }
    
  }

  async openCard(pokemon:any){
    const dialogRef = this.dialog.open(PokeCardComponent, {
      width: '90vw',
      height: 'auto',
      maxHeight: '500px',
      maxWidth: '450px',
      data: pokemon
    });

    let dialogResult = await lastValueFrom(dialogRef.afterClosed());

    if (dialogResult || dialogResult == undefined) {
      //await this.getTags();
    }
  }

  updateFilteredItems() {
    this.pokemonsList = this.tempPokeList.filter((item:any) =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
