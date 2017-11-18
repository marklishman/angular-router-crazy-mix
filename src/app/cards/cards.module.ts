import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardComponent } from './card.component';
import { ClubComponent } from './club.component';
import { DiamondComponent } from './diamond.component';
import { HeartComponent } from './heart.component';
import { SpadeComponent } from './spade.component';

@NgModule({
  imports: [
    CommonModule,
    CardsRoutingModule
  ],
  declarations: [
    CardComponent,
    ClubComponent,
    DiamondComponent,
    HeartComponent,
    SpadeComponent
  ]
})
export class CardsModule { }
