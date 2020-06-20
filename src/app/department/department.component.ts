import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NewloginService } from '../newlogin.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private loginService: NewloginService) { }

  ngOnInit(): void {
  }

}
