import { Component, OnInit } from '@angular/core';
import { People } from '../people.model'
import { PeopleService } from '../people.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {
  peoples: People[] = [];
  selectedPeople?: People;

  constructor(
    private peopleService: PeopleService,
    private messageService: MessageService
    ) {}

    ngOnInit(): void {
      this.getPeoples();
    }

    getPeoples(): void{
    this.peopleService.getPeoples().subscribe(
      (peoples) => (this.peoples = peoples));
    }

  onSelect(people: People): void{
    this.selectedPeople = people;
    this.messageService.add(`PeopleComponent: Selected people id=${people.id}`);
  }
}
