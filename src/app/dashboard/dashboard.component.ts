import { Component } from '@angular/core';
import { PeopleService } from '../people.service';
import { People } from '../people.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  peoples: People[] = [];

  constructor(private peopleService: PeopleService ) { }

  ngOnInit(): void {
    this.getPeoples();
  }

  getPeoples(): void {
    this.peopleService.getPeoples().subscribe(peoples => this.peoples = peoples.slice(1, 5));
  }

}
