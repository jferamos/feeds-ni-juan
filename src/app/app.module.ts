import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { CustomerModule } from './services/customer/customer.module';
import { ItemModule } from './services/item/item.module';
import { ItemTypeModule } from './services/item-type/item-type.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RepositoryModule } from './repository/repository.module';
import { ItemInventoryModule } from './services/item-inventory/item-inventory.module';
import { SalesInvoiceModule } from './services/sales-invoice/sales-invoice.module';
import { SalesPaymentModule } from './services/sales-payment/sales-payment.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    RepositoryModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    LoginModule,
    CustomerModule,
    ItemModule,
    ItemTypeModule,
    ItemInventoryModule,
    SalesInvoiceModule,
    SalesPaymentModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
