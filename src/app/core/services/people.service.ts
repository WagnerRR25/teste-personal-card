
import { Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private peoplesUrl = 'api/peoples';
  getUrl: any;

  constructor( private http: HttpClient,
    private messageService: MessageService
    ) {}

      // GET /peoples
  getPeoples(): Observable<People[]> {
    return this.http.get<People[]>(this.peoplesUrl).pipe(
      tap((peoples) => this.log(`fetched ${peoples.length} people(es)`)));

  }
      // GET /peoples/id
  getPeople(id: number): Observable<People> {
    return this.http.get<People>(`${this.peoplesUrl}/${id}`)
    .pipe(
      tap((people) => this.log(`fetched people id=${id} and name=${people.name}`)));
  }

    // GET /people?name=term
    search(term: string): Observable<People[]> {
      if (!term.trim()) {
        return of([]);
      }

      return this.http
        .get<People[]>(`${this.peoplesUrl}?name=${term}`)
        .pipe(
          tap((people) =>
            people.length
              ? this.log(`found ${people.length} people(es) matching "${term}"`)
              : this.log(`no people matching "${term}"`)
          )
        );
    }

    // POST /people
    create(people: People): Observable<People> {
      return this.http
        .post<People>(this.peoplesUrl, people)
        .pipe(tap((people) => this.log(`created ${this.descAttributes(people)}`)));
    }

    // PUT /people/id
    update(people: People): Observable<People> {
      return this.http
        .put<People>(this.getUrl(people.id), people)
        .pipe(tap((people) => this.log(`updated ${this.descAttributes(people)}`)));
    }

    // DELETE /people/id
    delete(people: People): Observable<any> {
      return this.http
        .delete<any>(this.getUrl(people.id))
        .pipe(tap(() => this.log(`deleted ${this.descAttributes(people)}`)));
    }

    private descAttributes(people: People): string {
      return `People ID=${people.id} and Name=${people.name}`;
    }

  private log(message: string): void {
    this.messageService.add(`PeopleService: ${message}`)
  }
}
