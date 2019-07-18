import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ItemTypeRoutingModule } from './item-type-routing.modules';
import { ItemTypeComponent } from './item-type.component';
import { RepositoryModule } from '@app/repository/repository.module';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, RepositoryModule, SharedModule, ItemTypeRoutingModule, FormsModule],
  declarations: [ItemTypeComponent]
})
export class ItemTypeModule {}
