import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Message} from 'src/app/model/response/Message';
import {LoginService} from 'src/app/services/admin/login.service';
import {User} from 'src/app/model/admin/User';
import {Client} from 'src/app/model/data/Client';
import {DataService} from 'src/app/services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css', '../../../components/body/body.component.css']
})
export class AdminLoginComponent implements OnInit {

  public responseMessage: Message;
  public admin: User;

  constructor(
    private loginService: LoginService,
    private data: DataService,
    private route: Router,
    ) { }

  ngOnInit(): void {
    this.responseMessage = this.data.getMessage();
    this.data.setMessage(null);
    this.data.setAdmin(null);
  }

  loginAdmin(loginForm: NgForm): void{
    // console.log(loginForm.value);

    this.loginService.loginAdmin(loginForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.data.setAdmin(response);
        this.route.navigate(['/admin']).then(r => console.log(r));
      },
      (error => {
        alert(error.message);
      })
    );
  }

}