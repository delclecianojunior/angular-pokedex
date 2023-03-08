import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from '../services/pokemon.service';
import { PokemonImagemService } from '../services/pokemon-imagem.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PokemonListComponent, PokemonCardComponent],
  imports: [
    CommonModule,
    PokemonListRoutingModule,
    FormsModule
  ],
  exports: [
    PokemonListComponent,
    PokemonCardComponent,
    HttpClientModule
  ],
  providers: [PokemonService, PokemonImagemService]
})
export class PokemonListModule { }
