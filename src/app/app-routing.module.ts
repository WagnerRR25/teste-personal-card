import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { PeoplesComponent } from './peoples/peoples.component';

const routes: Routes = [
  {path: 'people', component: PeoplesComponent}
]

@NgModule({
  declarations: [],
  imports: [

  ]
})
export class AppRoutingModule { }
