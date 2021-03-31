import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './telas/canvas/canvas.component';
import { HomeComponent } from './telas/home/home.component';

const routes: Routes = [
  {path: 'canvas', component: CanvasComponent  },
  {path: '', component:HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
