import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleDetailComponent } from '../people-detail/people-detail.component';
import { PeoplesComponent } from './peoples.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { PeoplesRoutingModule } from './peoples-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

PeoplesComponent

@NgModule({
  declarations: [PeoplesComponent, PeopleDetailComponent],
  imports: [
    CommonModule, MaterialModule, FormsModule, PeoplesRoutingModule, FlexLayoutModule ]
})
export class PeoplesModule { }
