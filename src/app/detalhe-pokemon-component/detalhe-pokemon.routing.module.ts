import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhePokemonComponent } from './detalhe-pokemon.component';

const routes: Routes = [
  {
    path: '', 
    component: DetalhePokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalhePokemonRoutingModule { }
