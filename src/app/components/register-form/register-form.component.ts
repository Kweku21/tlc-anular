import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../services/register.service';
import {Client} from '../../model/data/Client';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';

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
    ) { }

  ngOnInit(): void {
  }

  public registerClient(registerForm: NgForm): void{

    this.registerService.registerClient(registerForm.value).subscribe(
      (response: Client) => {
        registerForm.resetForm();
        this.route.navigate(['/login']).then(r => console.log(r));
      },
      (error => {
        console.log(error);
        alert('Unable to register');

      })
    );
  }

}
