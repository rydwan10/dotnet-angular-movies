import { Component, OnInit } from '@angular/core';
import { actorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css'],
})
export class IndexActorsComponent implements OnInit {
  constructor(private _actorService: ActorsService) {}

  actors: actorDTO[];

  ngOnInit(): void {
    this._actorService.get().subscribe((actors: actorDTO[]) => {
      this.actors = actors;
    });
  }

  saveChanges() {}

  delete() {}
}
