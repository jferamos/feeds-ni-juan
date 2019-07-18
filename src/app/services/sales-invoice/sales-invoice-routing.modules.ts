import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { SalesInvoiceComponent } from './sales-invoice.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'sales-invoice', component: SalesInvoiceComponent, data: { title: extract('SalesInvoice') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SalesInvoiceRoutingModule {}
