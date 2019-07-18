import { Component, OnInit } from '@angular/core';
import { CustomerRepository } from '@app/repository/model/customer.repository';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  dependenciesLoaded:boolean;
  customer:any = {};
  customers:any[] = [];
  constructor(private customerRepo: CustomerRepository) {}

  async fetchCustomers(){
    this.customer = {};
    const data:any = await this.customerRepo.getAllCustomer();
    this.customers = data.data.customer;
  }
  async ngOnInit() {
    await this.fetchCustomers();
    this.dependenciesLoaded =true;
  }

  async saveCustomer(){
    this.customer = await this.customerRepo.saveCustomer(this.customer);
    await this.fetchCustomers();
  }
}
