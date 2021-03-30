import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Client} from '../../model/data/Client';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public client: Client;

  constructor(
    private data: DataService,
  ) { }

  ngOnInit(): void {

    this.client = this.data.getClient();
  }

}
