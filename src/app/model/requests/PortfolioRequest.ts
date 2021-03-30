export class PortfolioRequest{
  name: string;
  clientId: number;

  constructor(name: string, clientId: number) {
    this.clientId = clientId;
    this.name = name;
  }
}
