import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailComponent } from '../people-detail/people-detail.component';
import { PeoplesComponent } from './peoples.component';


const routes: Routes = [
  { path: '/id', component: PeopleDetailComponent},
  { path: '', component: PeoplesComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeoplesRoutingModule { }
