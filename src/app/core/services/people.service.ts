
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people.model';
import { PEOPLES } from './mock-peoples';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private peopleUrl = 'api/peoples';

  constructor( private http: HttpClient,
    private messageService: MessageService
    ) {}

  getPeoples(): Observable<People[]> {
    return this.http.get<People[]>(this.peopleUrl)



   /*  const peoples = of(PEOPLES);
    this.log('fetched peoples');
    return peoples; */
  }

  getPeople(id: number): Observable<People> {
    const people = PEOPLES.find(people => people.id === id)!;
    this.log(`fetched people id=${id}`);
    return of(people);
  }
  private log(message: string): void {
    this.messageService.add(`PeopleService: ${message}`)
  }
}
