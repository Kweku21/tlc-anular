import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../services/register.service';
import {Client} from '../../model/data/Client';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css', './../body/body.component.css']
})
export class RegisterFormComponent implements OnInit {

  public client: Client;

  constructor(
    private registerService: RegisterService,
    private route: Router,
    private data: DataService,
    ) { }

  ngOnInit(): void {
  }

  public registerClient(registerForm: NgForm): void{

    this.registerService.registerClient(registerForm.value).subscribe(
      (response: Client) => {
        registerForm.resetForm();
        const responseMessage = {
          message: 'Login to continue',
          status: 'success'
        };
        this.data.setMessage(responseMessage);
        this.route.navigate(['/login']).then(r => console.log(r));
      },
      (error => {
        console.log(error);
        alert('Unable to register');

      })
    );
  }

}
