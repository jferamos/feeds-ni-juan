import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ItemTypeComponent } from './item-type.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'item-type', component: ItemTypeComponent, data: { title: extract('ItemType') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ItemTypeRoutingModule {}
