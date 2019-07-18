import { Component, OnInit } from '@angular/core';
import { ItemTypeRepository } from '@app/repository/model/item-type.repository';

@Component({
  selector: 'app-item-type',
  templateUrl: './item-type.component.html',
  styleUrls: ['./item-type.component.scss']
})
export class ItemTypeComponent implements OnInit {

  dependenciesLoaded:boolean;
  itemType:any = {};
  itemTypes:any[] = [];
  constructor(private itemTypeRepo: ItemTypeRepository) {}

  async fetchItemTypes(){
    this.itemType = {};
    const data:any = await this.itemTypeRepo.getAllItemType();
    this.itemTypes = data.data.item_type;
  }
  async ngOnInit() {
    await this.fetchItemTypes();
    this.dependenciesLoaded =true;
  }

  async saveItemType(){
    await this.itemTypeRepo.saveItemType(this.itemType);
    await this.fetchItemTypes();
  }
}
