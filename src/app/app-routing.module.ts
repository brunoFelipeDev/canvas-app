import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './telas/canvas/canvas.component';

const routes: Routes = [
  {path: 'canvas', component: CanvasComponent  },
  {path: '', redirectTo: 'canvas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
