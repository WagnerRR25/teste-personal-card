import { Component, Input } from '@angular/core';
import { People } from '../people.model';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent {
  @Input() people?: People;

}
