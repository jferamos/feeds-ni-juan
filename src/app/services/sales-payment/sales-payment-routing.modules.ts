import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { SalesPaymentComponent } from './sales-payment.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'sales-payment', component: SalesPaymentComponent, data: { title: extract('SalesPayment') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SalesPaymentRoutingModule {}
