import { Component, OnInit } from '@angular/core';
import { People } from '../people.model'
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {
  peoples: People[] = [];

  constructor(
    private peopleService: PeopleService    ) {}

    ngOnInit(): void {
      this.getPeoples();
    }

    getPeoples(): void{
    this.peopleService.getPeoples().subscribe(
      (peoples) => (this.peoples = peoples));
    }
}
