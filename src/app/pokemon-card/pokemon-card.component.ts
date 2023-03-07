import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tipos } from '../enum/tipos';
import { PokemonImagemService } from '../services/pokemon-imagem.service';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})

export class PokemonCardComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private router: Router, private PokemonImagemService: PokemonImagemService){}

  @Input() pokemon!: string;
  @Input() url!: string;
  @Input() numero!: number;
  
  tiposEnum = Tipos;
  
  imagem = '';
  
  locais = [];

  TipoPokemon: any[] = [];

  mostrarDetalhesPokemon(){
    this.router.navigate(['PokemonDetalhes'], { queryParams: {nome: this.pokemon, url: this.url, numero: this.numero, tipoPokemon: JSON.stringify(this.TipoPokemon)}})
  }

  async ngOnInit() {
    
    this.imagem = this.PokemonImagemService.pegarImagemPokemon(this.numero);

    const requisicao = await this.pokemonService.informacoesAdicionais(this.url);

    this.TipoPokemon = requisicao.types.map((item:any) => {
      return item.type.name;
    });
  }

}
