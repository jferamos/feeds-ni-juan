import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ItemInventoryRoutingModule } from './item-inventory-routing.modules';
import { ItemInventoryComponent } from './item-inventory.component';
import { RepositoryModule } from '@app/repository/repository.module';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, RepositoryModule, SharedModule, ItemInventoryRoutingModule, FormsModule],
  declarations: [ItemInventoryComponent]
})
export class ItemInventoryModule {}
