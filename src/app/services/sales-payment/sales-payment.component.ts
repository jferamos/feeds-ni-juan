import { Component, OnInit } from '@angular/core';
import { CustomerRepository } from '@app/repository/model/customer.repository';
import { SalesPaymentRepository } from '@app/repository/model/sales-payment.repository';

@Component({
  selector: 'app-sales-payment',
  templateUrl: './sales-payment.component.html',
  styleUrls: ['./sales-payment.component.scss']
})
export class SalesPaymentComponent implements OnInit {

  dependenciesLoaded:boolean;
  salesPayment:any = {};
  salesPayments:any[] = [];

  customers:any[] = [];

  constructor(
    private customerRepo: CustomerRepository,
    private salesPaymentRepo: SalesPaymentRepository) {}

  async fetchCustomers(){
    const data:any = await this.customerRepo.getAllCustomerWithActiveInvoice();
    this.customers = data.data.customer;
  }

  async fetchSalesPayments(){
    this.salesPayment = {};
    const data:any = await this.salesPaymentRepo.getAllSalesPayment();
    this.salesPayments = data.data.sales_payment;
  }
  async ngOnInit() {
    await this.fetchSalesPayments();
    await this.fetchCustomers();
    this.dependenciesLoaded =true;
  }

  async saveSalesPayment(){
    const salesPayment = {
      notes:this.salesPayment.notes,
      amount:this.salesPayment.amount,
      sales_invoice_id: this.salesPayment.sales_invoice_id
    }

    console.log(salesPayment);
    this.salesPayment = await this.salesPaymentRepo.saveSalesPayment(salesPayment);
    await this.fetchSalesPayments();
    await this.fetchCustomers();
  }

  setCustomer(){
    console.log(this.salesPayment.customer);
    this.salesPayment.customer = this.customers.find(x=>{
      return x.id == this.salesPayment.customer_id;
    })
    console.log(this.salesPayment.customer);
  }
}
