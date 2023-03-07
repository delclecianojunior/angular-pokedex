import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'PokemonList'},
  {path: 'PokemonList', loadChildren: () => import('./pokemon-list/pokemon-list.module').then((m) => m.PokemonListModule)},
  {path: 'PokemonDetalhes', loadChildren: () => import('./detalhe-pokemon-component/detalhe-pokemon.module').then((m) => m.DetalhePokemonModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
