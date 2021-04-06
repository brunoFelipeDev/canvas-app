import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './telas/canvas/canvas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './telas/home/home.component';
import { PoemsComponent } from './telas/poems/poems.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    CardComponent,
    HomeComponent,
    PoemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
