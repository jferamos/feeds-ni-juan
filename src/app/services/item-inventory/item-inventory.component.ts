import { Component, OnInit } from '@angular/core';
import { ItemInventoryRepository } from '@app/repository/model/item-inventory.repository';
import { ItemRepository } from '@app/repository/model/item.repository';

@Component({
  selector: 'app-item-inventory',
  templateUrl: './item-inventory.component.html',
  styleUrls: ['./item-inventory.component.scss']
})
export class ItemInventoryComponent implements OnInit {

  dependenciesLoaded:boolean;
  itemInventory:any = {};
  itemInventories:any[] = [];
  items:any[] = [];

  constructor(
    private itemInventoryRepo: ItemInventoryRepository,
    private itemRepo: ItemRepository) {}

  async fetchItems(){
    const data:any = await this.itemRepo.getAllItems();
    this.items = data.data.item;
  }

  async fetchItemInventories(){
    this.itemInventory = {};
    const data:any = await this.itemInventoryRepo.getAllItemInventory();
    this.itemInventories = data.data.item_inventory;
  }

  async ngOnInit() {
    await this.fetchItemInventories();
    await this.fetchItems();
    this.dependenciesLoaded =true;
  }

  async saveItemInventory(){
    this.itemInventory = await this.itemInventoryRepo.saveItemInventory(this.itemInventory);
    await this.fetchItemInventories();
  }
}
