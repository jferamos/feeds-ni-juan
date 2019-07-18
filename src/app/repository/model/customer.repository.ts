import { Injectable } from '@angular/core';
import { GraphService } from '../graph/graph-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CustomerRepository extends GraphService<any> {

    constructor(private httpClient:HttpClient) {
        super(httpClient, 'customer');
    }

    private fields = `
        {
            id,
            first_name,
            middle_name,
            last_name,
            address,
            contact_number,
            status,
            created_date,
            sales_invoices{
                id,
                amount,
                amount_paid,
                created_date
            },
        }
    `;

    async saveCustomer(customer: any) {
        return await this.insert(customer, this.fields);
    }

    async getAllCustomer() {
       return await this.all(this.fields);
    }

    async getAllCustomerWithActiveInvoice() {
        return await this.execute(`
        {
            customer (where: {
              sales_invoices: {
                status: {
                  _lt: 3
                }
              }
            }){
              sales_invoices(where: {
                status: {
                    _lt: 3
                }
              }) {
                id,
                amount,
                amount_paid,
                created_date
              },
              id,
              first_name,
                middle_name,
                last_name,
                address,
                contact_number,
                status,
                created_date
            }
          }
        `)
    }
}