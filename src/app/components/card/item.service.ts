import { Injectable } from '@angular/core';
import { ItemModel } from './model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  saveItems(key: string, items: Array<ItemModel>) {
    localStorage.removeItem(key);

    setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(items))
    }, 100);
  }
}
