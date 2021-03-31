import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ItemService } from './item.service';
import { ConfigsModel } from './model/configs.model';
import { ItemModel } from './model/item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @ViewChild('input') input!: ElementRef;
  // @Input() key: string = '';
  @Input() config!: ConfigsModel;

  isNewItem: boolean = false;
  item: ItemModel = new ItemModel();
  items: Array<ItemModel> = new Array<ItemModel>();

  constructor(private service: ItemService) { }

  ngOnInit(): void {
    this.items = this.service.getItems(this.config.key!);
  }

  addItem() {
    if (this.item.description !== '' && this.item.description !== null && this.item.description !== undefined) {
      this.items.push(this.item);
      this.saveItems();
      this.clear();
    }
  }

  saveItems() {
    this.service.saveItems(this.config.key!, this.items);
  }

  activeAddItem() {
    this.isNewItem = true;

    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 0);
  }

  deleteItem(itemSelected: ItemModel) {
    this.items = this.items.filter(item => item.id !== itemSelected.id);
    this.saveItems();
  }

  clear() {
    this.item = new ItemModel();
    this.isNewItem = false
  }
}