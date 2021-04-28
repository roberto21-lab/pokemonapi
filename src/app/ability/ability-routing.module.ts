import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbilityPage } from './ability.page';

const routes: Routes = [
  {
    path: '',
    component: AbilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbilityPageRoutingModule {}
