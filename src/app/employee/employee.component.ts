import { Component, OnInit, Host, Optional, Self } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [LoginService]
})
export class EmployeeComponent implements OnInit {

  constructor(@Self() private loginService: LoginService) { }

  ngOnInit(): void {
    if(this.loginService) {
      this.loginService.getUser();
    }
  }

}
