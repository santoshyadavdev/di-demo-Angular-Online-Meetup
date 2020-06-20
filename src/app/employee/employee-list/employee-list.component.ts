import { Component, OnInit, SkipSelf } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(@SkipSelf() private loginService: LoginService) { }

  ngOnInit(): void {
  }

}
