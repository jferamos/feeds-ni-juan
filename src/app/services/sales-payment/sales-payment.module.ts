import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { SalesPaymentRoutingModule } from './sales-payment-routing.modules';
import { SalesPaymentComponent } from './sales-payment.component';
import { RepositoryModule } from '@app/repository/repository.module';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, RepositoryModule, SharedModule, SalesPaymentRoutingModule, FormsModule],
  declarations: [SalesPaymentComponent]
})
export class SalesPaymentModule {}
