import { Component, OnInit } from '@angular/core';
import { ItemRepository } from '@app/repository/model/item.repository';
import { ItemTypeRepository } from '@app/repository/model/item-type.repository';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  dependenciesLoaded:boolean;
  item:any = {};
  items:any[] = [];
  itemTypes:any[] = [];

  constructor(
    private itemRepo: ItemRepository,
    private itemTypeRepo: ItemTypeRepository) {}

  async fetchAllItemTypes(){
    const data:any = await this.itemTypeRepo.getAllItemType();
    this.itemTypes = data.data.item_type;
  }

  async fetchAllItems(){
    this.item = {};
    const data:any = await this.itemRepo.getAllItems();
    this.items = data.data.item;
  }

  async ngOnInit() {
    await this.fetchAllItems();
    await this.fetchAllItemTypes();
    this.dependenciesLoaded =true;
  }

  async saveItem(){
    this.item = await this.itemRepo.saveItem(this.item);
    await this.fetchAllItems();
  }
}
