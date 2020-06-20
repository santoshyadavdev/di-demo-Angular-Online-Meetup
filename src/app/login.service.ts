import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { NewloginService } from './newlogin.service';

@Injectable({
  providedIn: 'root',
  useExisting: NewloginService
})
export class LoginService {

  constructor() {
    console.log('login service instance');
  }

  getUser() {
    return of({ userid: 1, name: 'test' });
  }

  logout() {
    return true;
  }
}
