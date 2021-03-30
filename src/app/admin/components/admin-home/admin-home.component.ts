import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service';
import {User} from '../../../model/admin/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  public admin: User;

  constructor(
    private data: DataService,
    private route: Router,
  ) { }

  ngOnInit(): void {

    this.checkAuthClient();
  }

  public checkAuthClient(): void{
    this.admin = this.data.getAdmin();
    if (this.admin == null){

      const responseMessage = {
        message: 'Login to continue as an admin',
        status: 'danger'
      };
      this.data.setMessage(responseMessage);

      this.route.navigate(['/admin/login']).then(r => console.log(r));
    }else{
      console.log('hello admin');
    }
  }

}
