import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userCredentials } from '../security.model';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css'],
})
export class AuthenticationFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Output()
  onSubmit = new EventEmitter<userCredentials>();

  @Input()
  action: string = 'Register';

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      password: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });
  }

  getEmailErrorMessage() {
    let field = this.form.get('email');

    if (field.hasError('required')) {
      return 'The email field is required';
    }

    if (field.hasError('email')) {
      return 'The email format is invalid';
    }

    return '';
  }
}
