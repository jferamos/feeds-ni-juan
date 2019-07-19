import { Component, OnInit } from '@angular/core';
import { SalesInvoiceRepository } from '@app/repository/model/sales-invoice.repository';
import { CustomerRepository } from '@app/repository/model/customer.repository';
import { ItemRepository } from '@app/repository/model/item.repository';

@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.scss']
})
export class SalesInvoiceComponent implements OnInit {

  dependenciesLoaded:boolean;
  salesInvoice:any = {};
  salesInvoices:any[] = [];

  salesInvoiceItem:any = {};
  salesInvoiceItems:any[] = [];

  customers:any[] = [];
  items:any[] = [];

  filterArr:any = {};

  constructor(
    private salesInvoiceRepo: SalesInvoiceRepository,
    private customerRepo: CustomerRepository,
    private itemRepo: ItemRepository) {}

  async fetchCustomers(){
    const data:any = await this.customerRepo.getAllCustomer();
    this.customers = data.data.customer;
  }

  async fetchAllActiveItems(){
    const data:any = await this.itemRepo.getAllItemsByStatus(1);
    this.items = data.data.item;
  }

  async fetchSalesInvoices(){
    this.salesInvoice = {};
    this.salesInvoiceItems = [];
    const data:any = await this.salesInvoiceRepo.getAllSalesInvoices();
    this.salesInvoices = data.data.sales_invoice;
  }

  async ngOnInit() {
    await this.fetchSalesInvoices();
    await this.fetchCustomers();
    await this.fetchAllActiveItems();
    this.dependenciesLoaded =true;
  }

  async saveSalesInvoice(){
    const salesInvoice = {
      customer_id: this.salesInvoice.customer_id,
      notes:this.salesInvoice.notes,
      amount:this.salesInvoiceItems.reduce((o, c) => o + (c.item.sell_price * c.qty), 0),
      sales_invoice_items: {data: this.salesInvoiceItems.map(x=>({
        price: x.item.sell_price,
        item_id: x.item_id,
        qty: x.qty,
        total: x.item.sell_price* x.qty
      }))}
    }

    this.salesInvoice = await this.salesInvoiceRepo.saveSalesInvoice(salesInvoice);
    await this.fetchSalesInvoices();
  }

  async setSelectedItem(){
    this.salesInvoiceItem.item = this.items.find(x=>{
      return x.id == this.salesInvoiceItem.item_id;
    })
  }

  async addSalesInvoiceItems(){
    this.salesInvoiceItems.push(this.salesInvoiceItem);
    this.salesInvoiceItem = {};
  }

  getStatus(salesInvoice:any){
    switch(salesInvoice.status){
      case 1:
        return "UNPAID";
      case 2:
        return "PARTIALLY PAID"
      case 3:
        return "FULLY PAID";
      default:
        return "N/A"
    }
  }

  async setFilter(){
    let filterArr = {
      customer_id: { _eq: this.filterArr.customer_id}
    }

    let stringified = JSON.stringify(filterArr);
    stringified = stringified.replace('"customer_id"',"customer_id")
    stringified = stringified.replace('"_eq"',"_eq")

    const data:any = await this.salesInvoiceRepo.getFilteredSalesInvoices(stringified);
    this.salesInvoices = data.data.sales_invoice;
  }

  clearSearch(){
    this.filterArr = {};
    this.setFilter();    
  }
}
