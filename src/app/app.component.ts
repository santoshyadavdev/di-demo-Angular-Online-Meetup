import { Component, OnInit, Inject } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { inject } from '@angular/core/testing';
import { CONFIG_TOKEN } from './token/config.token';
import { Config } from './token/config';
import { NewdependentService } from './newdependent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'didemo';

  // loginService= new LoginService();

  user$: Observable<any>;

  constructor(private loginService: LoginService,
    @Inject(CONFIG_TOKEN) private tokenService: Config,
    private depndentService: NewdependentService ) {

  }

  ngOnInit() {
    console.log(this.depndentService.getUserInfo());
    console.log(this.tokenService.apiEndpoint);
    this.user$ = this.loginService.getUser();
  }


}
