import { v4 as uuidv4 } from 'uuid';

export class ItemModel {

  public id?: string;

  constructor(public description?: string) {
    this.id = uuidv4();
  }

}