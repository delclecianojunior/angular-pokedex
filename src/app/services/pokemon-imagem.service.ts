
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PokemonImagemService {

  pegarImagemPokemon(numero: number){
    const numeroFormatado = this.leadingZero(numero);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  leadingZero(str: string | number, size = 3): string{
    let s = String(str);

    while(s.length < (size || 2)){
      s = '0' + s;
    }
    return s;
  }

}
