import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/Client';
import {LoginService} from '../../services/login.service';
import {LoginRequest} from '../../model/LoginRequest';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public client: Client;
  public loginRequest: LoginRequest;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public loginClient(): void{
    this.loginService.loginClient(this.loginRequest).subscribe(
      (response: Client) => {
        this.client = response;
      },
      (error => {
        alert(error.message);
      })
    );
  }

}
