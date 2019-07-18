import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ItemInventoryComponent } from './item-inventory.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'item-inventory', component: ItemInventoryComponent, data: { title: extract('ItemInventory') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ItemInventoryRoutingModule {}
