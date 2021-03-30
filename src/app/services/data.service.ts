import { Injectable } from '@angular/core';
// @ts-ignore
import {BehaviorSubject} from 'rxjs';
import {Client} from '../model/data/Client';
import { Portfolio } from '../model/data/Portfolio';
import {Message} from '../model/response/Message';
import {User} from '../model/admin/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public client: Client;
  public message: Message;
  public admin: User;
  public portfolios: Portfolio[];

  private messageSource = new BehaviorSubject<Message>(null);
  currentMessage = this.messageSource.asObservable();

  private portfolioSource = new BehaviorSubject<Portfolio[]>(null);
  currentPortfolio = this.portfolioSource.asObservable();

  private adminSource = new BehaviorSubject<Message>(null);
  currentAdmin = this.adminSource.asObservable();

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

  public setAdmin(admin: User): void{
    // @ts-ignore
    localStorage.setItem('admin', JSON.stringify(admin));
    // this.clientSource.next(client);
  }

  public getAdmin(): User{
    this.admin = JSON.parse(localStorage.getItem('admin'));
    return this.admin;
  }

  // tslint:disable-next-line:typedef
  public setMessage(message: Message): void{
    this.messageSource.next(message);
  }

  public getMessage(): Message{
    this.currentMessage.subscribe(message => this.message = message);
    return this.message;
  }

  public addPortfolio(portfolio: Portfolio): void {
    const portfolios = this.getPortfolio();
    portfolios.push(portfolio);
    this.setPortfolio(portfolios);
  }

  public setPortfolio(portfolios: Portfolio[]): void{
    localStorage.setItem('portfolios', JSON.stringify(portfolios));
  }

  public getPortfolio(): Portfolio[] {
    this.portfolios = JSON.parse(localStorage.getItem('portfolios'));
    return this.portfolios;
  }
}
