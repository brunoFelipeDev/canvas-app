import { Component, OnInit } from '@angular/core';
import { ConfigsModel } from 'src/app/components/card/model/configs.model';
import { TypeCanvas } from 'src/app/components/card/model/type.enum';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.scss']
})
export class PoemsComponent implements OnInit {

  register = new ConfigsModel();

  constructor() { }

  ngOnInit(): void {
    this.createRegister();
  }

  createRegister() {
    this.register.key = 'register';
    this.register.srcImg = 'assets/post-it.svg';
    this.register.title = 'Registros';
    this.register.type = TypeCanvas.EXPERIMENTO;
  }

}
