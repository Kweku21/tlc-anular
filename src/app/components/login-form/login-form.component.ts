import { Component, OnInit} from '@angular/core';
import {Client} from '../../model/data/Client';
import {LoginService} from '../../services/login.service';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {Message} from '../../model/response/Message';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css', './../body/body.component.css']
})
export class LoginFormComponent implements OnInit {
  responseMessage: Message;
  public client: Client;

  constructor(
    private loginService: LoginService,
    private route: Router,
    private data: DataService,
    ) { }

  ngOnInit(): void {
    // this.getClients();
    this.responseMessage = this.data.getMessage();
    this.data.setClient(null);
    this.data.setMessage(null);
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

        console.log(response);

        // Set the global client value
        this.data.setClient(response);

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
