import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextDiffComponent } from './text-diff/text-diff.component';
import { ImageDiffComponent } from './image-diff/image-diff.component';

const routes: Routes = [

  {
    path: '',
    component: TextDiffComponent
  },
  {
    path: 'text',
    redirectTo: ''
  },
  {
    path: 'image',
    component: ImageDiffComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
