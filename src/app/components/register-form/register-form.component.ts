import { Component, OnInit } from '@angular/core';
import {RegisterRequest} from '../../model/RegisterRequest';
import {RegisterService} from '../../services/register.service';
import {Client} from '../../model/Client';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css', './../body/body.component.css']
})
export class RegisterFormComponent implements OnInit {

  public client: Client;
  public registerRequest: RegisterRequest;

  constructor(
    private registerService: RegisterService,
    private route: Router,
    ) { }

  ngOnInit(): void {
  }

  public registerClient(registerForm: NgForm): void{

    this.registerService.registerClient(registerForm.value).subscribe(
      (response: any) => {
        // this.client = response;
        // console.log(response);
        registerForm.resetForm();
        this.route.navigate(['/login']).then(r => console.log(r));
        // ro
      },
      (error => {
        console.log(error);
        // alert(error.message);
      })
    );
  }

}
