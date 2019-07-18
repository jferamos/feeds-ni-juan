import { Injectable } from '@angular/core';
import { GraphService } from '../graph/graph-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SalesPaymentRepository extends GraphService<any> {

    constructor(private httpClient:HttpClient) {
        super(httpClient, 'sales_payment');
    }

    private fields: string = `
        {
            id,
            sales_invoice{
                id,
                amount,
                customer{
                    id,
                    first_name,
                    middle_name,
                    last_name
                },
                created_date
            },
            amount,
            notes,
            created_date
        }
    `;

    async saveSalesPayment(salesPayment: any) {
        return await this.insert(salesPayment, this.fields);
    }

    async getAllSalesPayment() {
       return await this.all(this.fields);
    }
}