import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { CustomerRoutingModule } from './customer-routing.modules';
import { CustomerComponent } from './customer.component';
import { RepositoryModule } from '@app/repository/repository.module';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, RepositoryModule, SharedModule, CustomerRoutingModule, FormsModule],
  declarations: [CustomerComponent]
})
export class CustomerModule {}
