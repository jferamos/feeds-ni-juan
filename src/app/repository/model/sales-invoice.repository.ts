import { Injectable } from '@angular/core';
import { GraphService } from '../graph/graph-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SalesInvoiceRepository extends GraphService<any> {

    constructor(private httpClient:HttpClient) {
        super(httpClient, 'sales_invoice');
    }

    private fields: string = `
        {
            id,
            customer{
                id,
                first_name,
                middle_name,
                last_name
            },
            amount,
            amount_paid,
            notes,
            status,
            created_date
        }
    `;

    async saveSalesInvoice(salesInvoice: any) {
        return await this.insert(salesInvoice, this.fields);
    }

    async getAllSalesInvoices() {
       return await this.all(this.fields);
    }

    async getAllActiveSalesInvoices(){
        return await this.execute(`
        {
            sales_invoice(where:
                {status:{
                    _lt: 3
                    }
                }
            )
            ${this.fields}
        }
    `)
    }

    async getFilteredSalesInvoices(filter:any){
        return await this.execute(`
        {
            sales_invoice(where:
                ${filter}
            )
            ${this.fields}
          }
        `)
    }
}