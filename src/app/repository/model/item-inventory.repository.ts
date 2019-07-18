import { Injectable } from '@angular/core';
import { GraphService } from '../graph/graph-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ItemInventoryRepository extends GraphService<any> {

    constructor(private httpClient:HttpClient) {
        super(httpClient, 'item_inventory');
    }

    private fields: string = `
        {
            id,
            item {
                id,
                name
            },
            qty,
            delivered_by,
            received_by,
            notes,
            created_date
        }
    `;

    async saveItemInventory(itemInventory: any) {
        return await this.insert(itemInventory, this.fields);
    }

    async getAllItemInventory() {
       return await this.all(this.fields);
      
    }

}