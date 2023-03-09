import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipos } from '../enum/tipos';
import { PokemonImagemService } from '../services/pokemon-imagem.service';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-detalhe-pokemon-component',
  templateUrl: './detalhe-pokemon.component.html',
  styleUrls: ['./detalhe-pokemon.component.scss']
})
export class DetalhePokemonComponent implements OnInit{

  pokemon = "";
  url = "";
  imagem = '';

  locais = [];

  TipoPokemon: any[] = [];
  localizacaoVazia = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private PokemonImagemService: PokemonImagemService, 
    private pokemonService: PokemonService,
    private router: Router){}
 
  async ngOnInit() {

    this.localizacaoVazia = true;
    
    const numero = this.activatedRoute.snapshot.queryParamMap.get('numero');
    const parametro = numero?? '';
    this.imagem = this.PokemonImagemService.pegarImagemPokemon(parseInt(parametro));

    const nome = this.activatedRoute.snapshot.queryParamMap.get('nome');
    this.pokemon = nome?? '';

    const url = this.activatedRoute.snapshot.queryParamMap.get('url');
    this.url = url?? '';

    const tipoPokemon = this.activatedRoute.snapshot.queryParamMap.get('tipoPokemon');
    this.TipoPokemon = JSON.parse(tipoPokemon?? '');
    //console.log(this.TipoPokemon);

    //Mostra localizacões dos pokemons
    const requisicaoLocal = await this.pokemonService.localizacaoPokemon(parseInt(parametro));
    
    this.locais = requisicaoLocal.map((item:any) => {
      if(item === ''){
        return 0;
      }
      else{
        this.localizacaoVazia = false;
        return item.location_area.name;
      }
    });
  }

  voltarPraHome(){
    this.router.navigate(['PokemonList']);
  }

}
