import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card.component';


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    CardComponent
  ],
})
export class CardModule { }
