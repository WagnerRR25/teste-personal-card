import { Component, Input, OnInit } from '@angular/core';
import { People } from '../people.model';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {
  people!: People

  constructor(private peopleService: PeopleService,
    private lacation: Location,
    private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.getPeople();
    }

    getPeople(): void{
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.peopleService.getPeople(id).subscribe((people) => (this.people =people))
    }

    /* goBack(): void {
      this.lacation.back();
    } */
}
