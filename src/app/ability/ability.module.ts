import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbilityPageRoutingModule } from './ability-routing.module';

import { AbilityPage } from './ability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbilityPageRoutingModule
  ],
  declarations: [AbilityPage]
})
export class AbilityPageModule {}
