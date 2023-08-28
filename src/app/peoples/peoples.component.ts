import { Component, OnInit } from '@angular/core';
import { People } from '../people.model'
import { PEOPLES } from '../mock-peoples'

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent {
  people: People = {
    id: 1,
    name: 'WagnerRR25',
    email: 'rr25wagner@gmail.com'
  };

  peoples = PEOPLES;
  selectedPeople?: People;

  onSelect(people: People): void{
    this.selectedPeople = people;
  }
}
