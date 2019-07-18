import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { SalesInvoiceRoutingModule } from './sales-invoice-routing.modules';
import { SalesInvoiceComponent } from './sales-invoice.component';
import { RepositoryModule } from '@app/repository/repository.module';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, RepositoryModule, SharedModule, SalesInvoiceRoutingModule, FormsModule],
  declarations: [SalesInvoiceComponent]
})
export class SalesInvoiceModule {}
