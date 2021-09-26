import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { userCredentials } from '../security.model';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private _securityService: SecurityService,
    private router: Router
  ) {}

  errors: string[] = [];

  ngOnInit(): void {}

  register(userCredentials: userCredentials) {
    this._securityService.register(userCredentials).subscribe(
      (authentiecationResponse) => {
        this._securityService.saveToken(authentiecationResponse);
        this.router.navigate(['/']);
      },
      (error) => (this.errors = parseWebAPIErrors(error))
    );
  }
}
