import { Component, Input, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-authorize-view',
  templateUrl: './authorize-view.component.html',
  styleUrls: ['./authorize-view.component.css'],
})
export class AuthorizeViewComponent implements OnInit {
  constructor(private _securityService: SecurityService) {}

  ngOnInit(): void {}

  @Input()
  role: string;

  isAuthorize() {
    if (this.role) {
      return this._securityService.getRole() === this.role;
    } else {
      return this._securityService.isAuthenticated();
    }
  }
}
