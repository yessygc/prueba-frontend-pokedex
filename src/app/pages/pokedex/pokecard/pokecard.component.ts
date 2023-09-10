import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-poke-card',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokeCardComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public pokeData: any,
  ) { }

  ngOnInit(): void {
  }

}
