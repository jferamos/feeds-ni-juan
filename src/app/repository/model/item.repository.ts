import { Injectable } from '@angular/core';
import { GraphService } from '../graph/graph-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ItemRepository extends GraphService<any> {

    constructor(private httpClient:HttpClient) {
        super(httpClient, 'item');
    }

    private fields: string = `
        {
            id,
            name,
            brand,
            item_type{
                id,
                name
            },
            qty,
            order_qty,
            purchase_price,
            sell_price,
            status
        }
    `;

    async saveItem(item: any) {
        return await this.insert(item, this.fields);
    }

    async getAllItems() {
       return await this.all(this.fields);
      
    }

    async getAllItemsByStatus(status:number) {
        return await this.execute(`
        {
            item(where:{status:{
              _eq: ${status}
            }})
              ${this.fields}
          }
        `)
     }
}