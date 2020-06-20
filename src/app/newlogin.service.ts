import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewloginService {

  constructor() { }

  getUser() {
    return of({userid: 2 , name: 'test1'});
  }

  logout() {
    return true;
  }
}
