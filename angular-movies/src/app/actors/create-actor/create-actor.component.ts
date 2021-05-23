import { Component, OnInit } from '@angular/core';
import { actorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css'],
})
export class CreateActorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  saveChanges(actorCreationDTO: actorCreationDTO) {
    console.log(
      '🚀 ~ file: create-actor.component.ts ~ line 18 ~ CreateActorComponent ~ saveChanges ~ actorCreationDTO',
      actorCreationDTO
    );
  }
}
