import { Injectable } from '@angular/core';
// @ts-ignore
import {BehaviorSubject} from 'rxjs';
import {Client} from '../model/data/Client';
import {Message} from '../model/response/Message';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public client: Client;
  public message: Message;

  private messageSource = new BehaviorSubject<Message>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  // tslint:disable-next-line:typedef
  public setClient(client: Client){
    // @ts-ignore
    localStorage.setItem('client', JSON.stringify(client));
    // this.clientSource.next(client);
  }

  public getClient(): Client{
    this.client = JSON.parse(localStorage.getItem('client'));
    return this.client;
  }

  // tslint:disable-next-line:typedef
  public setMessage(message: Message): void{
    this.messageSource.next(message);
  }

  public getMessage(): Message{
    this.currentMessage.subscribe(message => this.message = message);
    return this.message;
  }
}
