import { Injectable } from '@angular/core';
import { PEOPLES } from './mock-peoples'
import { People } from './people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  getPeoples(): People[] {
    return PEOPLES;
  }
}
