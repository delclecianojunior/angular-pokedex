import { Component, OnInit, ViewChild } from '@angular/core';
import IPokemon from '../interface/IPokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit{
  
  pokemons : IPokemon[] = [];
  pesquisa = '';
  carregandoCard = false;

  constructor(public pokemonService: PokemonService){}
  
  ngOnInit(): void {
    this.carregandoCard = true;
    this.mostraCardsPokemons();
  }
  
  mostraCardsPokemons() {
    this.pokemonService.carregarPokemons().subscribe((item: any) => {
      this.pokemons = item.results;
      this.carregandoCard = false;
    });
  }

  filtrarPokemon(){
    this.carregandoCard = true;
    if(this.pesquisa === ''){
      this.mostraCardsPokemons();
    }
    else{ 
      this.pokemonService.filtraPokemon(this.pesquisa).subscribe((item: IPokemon) => {
        this.pokemons = [];
        item.url =`https://pokeapi.co/api/v2/pokemon/${this.pesquisa}`;
        this.pokemons.push(item);
        this.carregandoCard = false;
      }); 
    }
  }

}

