import { TypeCanvas } from "./type.enum";

export class ConfigsModel {

  public key?: string;
  public title?: string;
  public srcImg?: string;
  public type?: TypeCanvas;

  getTheme() {
    let color = 'black';
    if (this.type != undefined && this.type !== null) {
      switch (this.type) {
        case TypeCanvas.EXPLORACAO:
          color = '#921FBB';
          break;
        case TypeCanvas.SOLUCAO:
          color = '#00B9A9';
          break
        case TypeCanvas.EXPERIMENTO:
          color = '#029FCA';
          break;
        default:
          break;
      }
    }

    return color;
  }
}