import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

export class DependentService {
  // constructor(private loginsService: LoginService) {
  //   loginsService.getUser().subscribe((data)=> data.userid)
  //  }

  constructor(private userId: number) {}

  getUserInfo() {
    return this.userId > 0 ? true : false;
  }
}


export function dependentFactory(loginSevice: LoginService) {
  let userId=0;
  loginSevice.getUser().subscribe((data)=> {
    userId= data.userid;
  });
  return new DependentService(userId);

}
