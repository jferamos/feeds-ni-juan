import { Injectable } from '@angular/core';
import { GraphService } from '../graph/graph-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ItemTypeRepository extends GraphService<any> {

    constructor(private httpClient:HttpClient) {
        super(httpClient, 'item_type');
    }

    private fields: string = `
        {
            id,
            name
        }
    `;

    async saveItemType(itemType: any) {
        return await this.insert(itemType, this.fields);
    }

    async getAllItemType() {
       return await this.all(this.fields);
      
    }

}