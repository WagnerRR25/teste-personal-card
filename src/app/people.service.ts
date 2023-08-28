import { Injectable } from '@angular/core';
import { PEOPLES } from './mock-peoples'
import { People } from './people.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private messageService: MessageService) {}

  getPeoples(): Observable<People[]> {
    const peoples = of(PEOPLES);
    this.messageService.add('PeopleService: fetched peoples');
    return peoples;
  }

  getPeople(id: number): Observable<People> {
    const people = PEOPLES.find(people => people.id === id)!;
    this.messageService.add(`PeopleService: fetched people id=${id}`);
    return of(people);
  }
}
