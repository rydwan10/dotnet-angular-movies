import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
})
export class EditActorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: actorDTO = {
    name: 'Tom Holland',
    dateOfBirth: new Date(),
    picture:
      'https://akcdn.detik.net.id/visual/2020/06/04/jason-statham.jpeg?w=650',
    biography: 'lorem ipsum dolor sit amet',
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.id);
    });
  }

  saveChanges(actorCreationDTO: actorCreationDTO) {
    console.log(
      '🚀 ~ file: edit-actor.component.ts ~ line 22 ~ EditActorComponent ~ saveChanges ~ actorCreationDTO',
      actorCreationDTO
    );
  }
}
