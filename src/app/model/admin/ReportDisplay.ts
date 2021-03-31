export class ReportDisplay{

  type: string;
  id: number;
  message: string;
  object: string;

  constructor( id: number, message: string, object: string, type: string) {

    this.id = id;
    this.message = message;
    this.object = object;
    this.type = type;
  }
}
