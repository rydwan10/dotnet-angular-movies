import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css'],
})
export class FormActorComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  @Output()
  onSaveChanges = new EventEmitter<actorCreationDTO>();

  @Input()
  model: actorCreationDTO;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      dateOfBirth: '',
      picture: '',
      biography: '',
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(image) {
    this.form.get('picture').setValue(image);
  }

  changeMarkdown(content) {
    this.form.get('biography').setValue(content);
  }
}
