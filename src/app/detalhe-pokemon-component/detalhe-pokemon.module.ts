import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DetalhePokemonComponent } from './detalhe-pokemon.component';
import { DetalhePokemonRoutingModule } from './detalhe-pokemon.routing.module';
import { PokemonImagemService } from '../services/pokemon-imagem.service';

@NgModule({
  declarations: [DetalhePokemonComponent],
  imports: [
    CommonModule,
    MatCardModule,
    DetalhePokemonRoutingModule
  ],
  exports: [
    DetalhePokemonComponent
  ],
  providers: [PokemonImagemService]
})
export class DetalhePokemonModule { }
