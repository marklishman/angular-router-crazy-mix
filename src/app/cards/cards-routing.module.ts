import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardComponent } from './card.component';
import { DiamondComponent } from './diamond.component';
import { HeartComponent } from './heart.component';
import { ClubComponent } from './club.component';
import { SpadeComponent } from './spade.component';

const routes: Routes = [
  {
    path: 'card',
    component: CardComponent,
    children: [
      {path: '', redirectTo: 'diamond', pathMatch: 'full'},
      {path: 'diamond', component: DiamondComponent},
      {path: 'heart', component: HeartComponent},
      {path: 'club', component: ClubComponent},
      {path: 'spade', component: SpadeComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
