import { Component, OnInit } from '@angular/core';
import { People } from '../people.model'

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit{
  people: People = {
    id: 1,
    name: 'WagnerRR25',
    email: 'rr25wagner@gmail.com'
  };



  constructor () {}

  ngOnInit(): void {
  }
}
