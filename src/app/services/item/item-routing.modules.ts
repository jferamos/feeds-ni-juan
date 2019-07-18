import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ItemComponent } from './item.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'item', component: ItemComponent, data: { title: extract('Item') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ItemRoutingModule {}
