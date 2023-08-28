import { Component, OnInit } from '@angular/core';
import { People } from '../../../core/models/people.model'
import { PeopleService } from '../../../core/services/people.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {
  displayedCollumns: string[] = ['id', 'name', 'email']
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
