import { Injectable } from '@angular/core';
import { dependentFactory } from './dependent.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
  useFactory: dependentFactory,
  deps: [LoginService]
})
export class NewdependentService {

  constructor() { }

  getUserInfo() {}
}
