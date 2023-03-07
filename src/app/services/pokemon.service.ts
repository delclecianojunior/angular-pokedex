
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ILocation from '../interface/ILocation';
import IPokemon from '../interface/IPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons : IPokemon[] = [];
  local : ILocation[] = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }
  
  async carregarPokemons() {
    const requisicao = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').toPromise();
    this.pokemons = requisicao.results;
    //console.log(this.pokemons);
  }

  async informacoesAdicionais(url: string){
    const requisicao = await this.httpClient.get<any>(url).toPromise();
    return requisicao;
  }

  async localizacaoPokemon(numero: number){
    const requisicao = await this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/${numero}/encounters`).toPromise();
    return requisicao;
  }



}
