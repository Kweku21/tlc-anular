import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/Client';
import {LoginService} from '../../services/login.service';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css', './../body/body.component.css']
})
export class LoginFormComponent implements OnInit {

  public client: Client;


  constructor(
    private loginService: LoginService,
    private route: Router,
    ) { }

  ngOnInit(): void {
    // this.getClients();
  }

  public getClients(): void{
    this.loginService.getClients().subscribe(
      (response: Client[]) => {
        console.log(response);
      },
      (error => {
        alert(error.message);
      })
    );
  }

  public loginClient(loginForm: NgForm): void{

    // console.log(loginForm.value);
    this.loginService.loginClient(loginForm.value).subscribe(
      (response: Client) => {
        this.client = response;
        this.route.navigate(['/home']).then(r => console.log(r));
        // console.log(this.client);
      },
      (error => {
        alert('Invalid credentials');
        // alert(error.message);
      })
    );
  }

}
